"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export function StudentsRating() {
  return (
    <div className="flex items-center gap-4 pt-2">
      <div className="flex -space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full border-2 border-black bg-gray-300 overflow-hidden"
          >
            <Image
              src={`/user-${i}.jpg`}
              alt={`Estudiante ${i}`}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#f9d423] text-[#f9d423]"
            />
          ))}
        </div>
        <p className="text-sm text-gray-400">
          Más de 1,000 estudiantes satisfechos
        </p>
      </div>
    </div>
  );
}
