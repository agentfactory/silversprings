import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Palette, Heart, Users } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Studio Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "With over 15 years of experience in art therapy and community development, Sarah leads our studio with compassion and creativity."
  },
  {
    name: "Michael Chen",
    role: "Art Instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Michael specializes in adaptive art techniques and has been teaching inclusive art classes for over a decade."
  },
  {
    name: "Emma Rodriguez",
    role: "Program Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Emma ensures our programs run smoothly while fostering a welcoming environment for all participants."
  }
];

const values = [
  {
    icon: Palette,
    title: "Creative Expression",
    description: "We believe in the power of art to transform lives and build confidence."
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description: "Our space welcomes everyone, regardless of ability or experience level."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We foster meaningful connections through shared creative experiences."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-gray-700 mb-12">
              In a peaceful, welcoming environment, the Silver Spring Studio is dedicated to cultivating 
              a vibrant and inclusive community of artists, where creativity knows no bounds.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700">
              Our mission is to provide a tranquil and empowering space for individuals of all backgrounds, 
              abilities, and perspectives to creatively express themselves while valuing fun and fostering relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OCAPDD Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Part of OCAPDD</h2>
            <p className="text-lg text-gray-700 mb-8">
              Silver Spring Studio is a proud initiative of the Ottawa-Carleton Association 
              for Persons with Developmental Disabilities (OCAPDD). Together, we work to create 
              meaningful opportunities and foster inclusive communities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}