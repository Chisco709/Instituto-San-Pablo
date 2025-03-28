// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock Next.js environment variables
jest.mock('next/headers', () => ({
  headers: jest.fn().mockReturnValue({
    get: jest.fn((key) => {
      if (key === 'svix-id') return 'test-svix-id';
      if (key === 'svix-timestamp') return 'test-svix-timestamp';
      if (key === 'svix-signature') return 'test-svix-signature';
      return null;
    }),
  }),
}));

// Mock environment variables
process.env = {
  ...process.env,
  CLERK_WEBHOOK_SECRET: 'test-webhook-secret',
};

// Silence console.error during tests
global.console.error = jest.fn();

// Mock the DB
jest.mock('@/drizzle/db', () => ({
  db: {
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    values: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    returning: jest.fn().mockImplementation(() => Promise.resolve([{ id: 'test-id' }])),
    query: {
      UserTable: {
        findFirst: jest.fn().mockResolvedValue({ id: 'test-id' }),
      },
    },
  },
}));

// Mock Clerk client
jest.mock('@clerk/nextjs/server', () => ({
  auth: jest.fn().mockResolvedValue({ userId: 'test-user-id' }),
  clerkClient: jest.fn().mockResolvedValue({
    users: {
      updateUserMetadata: jest.fn().mockResolvedValue({}),
    },
  }),
}));

// Mock svix webhook
jest.mock('svix', () => ({
  Webhook: jest.fn().mockImplementation(() => ({
    verify: jest.fn().mockImplementation((body, headers) => {
      return JSON.parse(body);
    }),
  })),
})); 