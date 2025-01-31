'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PassportInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Passport Funding Information</h1>
      
      <Card className="p-8 mb-8 bg-teal-50">
        <h2 className="text-2xl font-semibold mb-4">What is Passport Funding?</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Passport funding is a program that helps adults with developmental disabilities participate in their communities. 
          This funding can be used to pay for our creative arts programs at Silver Spring Studio.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">How to Use Passport Funding</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Contact your Passport Coordinator</li>
            <li>✓ Mention Silver Spring Studio as your chosen service provider</li>
            <li>✓ We'll help you with the necessary documentation</li>
            <li>✓ Start enjoying our creative programs</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">What's Covered</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Program registration fees</li>
            <li>✓ Art supplies and materials</li>
            <li>✓ Community participation activities</li>
            <li>✓ Skill development workshops</li>
          </ul>
        </Card>
      </div>

      <Card className="p-8 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">
          We're here to help you navigate the Passport funding process and welcome you to our creative community.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <a href="https://www.ontario.ca/page/passport-program-developmental-services" target="_blank" rel="noopener noreferrer">
              Learn More About Passport
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
