import { POST } from '@/app/api/webhooks/clerk/route';
import { insertUser, updateUser, deleteUser } from '@/features/users/db/users';
import { syncClerkUserMetadata } from '@/services/clerk';

// Mock the user functions
jest.mock('@/features/users/db/users', () => ({
  insertUser: jest.fn().mockResolvedValue({ id: 'test-id', clerkUserId: 'test-clerk-id', role: 'user' }),
  updateUser: jest.fn().mockResolvedValue({ id: 'test-id' }),
  deleteUser: jest.fn().mockResolvedValue({ id: 'test-id' }),
}));

// Mock the sync function
jest.mock('@/services/clerk', () => ({
  syncClerkUserMetadata: jest.fn().mockResolvedValue({}),
}));

// Helper to create mock request
const createMockRequest = (body: any) => {
  return new Request('https://example.com/api/webhooks/clerk', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'svix-id': 'test-svix-id',
      'svix-timestamp': 'test-svix-timestamp',
      'svix-signature': 'test-svix-signature',
    },
  });
};

describe('Clerk Webhook Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle user.created event correctly', async () => {
    const mockUserData = {
      type: 'user.created',
      data: {
        id: 'test-clerk-id',
        first_name: 'Test',
        last_name: 'User',
        email_addresses: [
          {
            id: 'email-id-1',
            email_address: 'test@example.com',
          },
        ],
        primary_email_address_id: 'email-id-1',
        image_url: 'https://example.com/image.jpg',
      },
    };

    const mockRequest = createMockRequest(mockUserData);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(200);
    expect(insertUser).toHaveBeenCalledWith({
      clerkUserId: 'test-clerk-id',
      email: 'test@example.com',
      name: 'Test User',
      imageUrl: 'https://example.com/image.jpg',
      role: 'user',
    });
    expect(syncClerkUserMetadata).toHaveBeenCalled();
  });

  it('should handle user.updated event correctly', async () => {
    const mockUserData = {
      type: 'user.updated',
      data: {
        id: 'test-clerk-id',
        first_name: 'Updated',
        last_name: 'User',
        email_addresses: [
          {
            id: 'email-id-1',
            email_address: 'updated@example.com',
          },
        ],
        primary_email_address_id: 'email-id-1',
        image_url: 'https://example.com/updated.jpg',
        public_metadata: {
          role: 'admin',
        },
      },
    };

    const mockRequest = createMockRequest(mockUserData);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(200);
    expect(updateUser).toHaveBeenCalledWith(
      { clerkUserId: 'test-clerk-id' },
      {
        email: 'updated@example.com',
        name: 'Updated User',
        imageUrl: 'https://example.com/updated.jpg',
        role: 'admin',
      }
    );
  });

  it('should handle user.deleted event correctly', async () => {
    const mockUserData = {
      type: 'user.deleted',
      data: {
        id: 'test-clerk-id',
      },
    };

    const mockRequest = createMockRequest(mockUserData);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(200);
    expect(deleteUser).toHaveBeenCalledWith({ clerkUserId: 'test-clerk-id' });
  });

  it('should return 400 when missing svix headers', async () => {
    const mockRequest = new Request('https://example.com/api/webhooks/clerk', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    
    const response = await POST(mockRequest);
    expect(response.status).toBe(400);
  });

  it('should return 400 when empty body', async () => {
    const mockRequest = createMockRequest(null);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(400);
  });
  
  it('should return 400 when webhook verification fails', async () => {
    // Mock the svix verification to fail
    jest.mock('svix', () => ({
      Webhook: jest.fn().mockImplementation(() => ({
        verify: jest.fn().mockImplementation(() => {
          throw new Error('Verification failed');
        }),
      })),
    }));
    
    const mockRequest = createMockRequest({ type: 'user.created' });
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(400);
  });
  
  it('should return 400 when email is missing in user created/updated event', async () => {
    const mockUserData = {
      type: 'user.created',
      data: {
        id: 'test-clerk-id',
        first_name: 'Test',
        last_name: 'User',
        email_addresses: [],
        primary_email_address_id: 'non-existent',
        image_url: 'https://example.com/image.jpg',
      },
    };

    const mockRequest = createMockRequest(mockUserData);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(400);
  });
  
  it('should return 400 when name is missing in user created/updated event', async () => {
    const mockUserData = {
      type: 'user.created',
      data: {
        id: 'test-clerk-id',
        first_name: '',
        last_name: '',
        email_addresses: [
          {
            id: 'email-id-1',
            email_address: 'test@example.com',
          },
        ],
        primary_email_address_id: 'email-id-1',
        image_url: 'https://example.com/image.jpg',
      },
    };

    const mockRequest = createMockRequest(mockUserData);
    const response = await POST(mockRequest);
    
    expect(response.status).toBe(400);
  });
}); 