'use client';

import Image from 'next/image';
import { teamMembers } from '@/data/mockData';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Team() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our dedicated team of professionals is committed to fostering creativity and growth.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.team.map((member: TeamMember) => (
            <div
              key={member.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-teal-600">{member.role}</p>
                <p className="mt-3 text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
