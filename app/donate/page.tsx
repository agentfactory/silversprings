'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const DonationAmounts = [50, 100, 250, 500];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    email: '',
    confirmEmail: '',
    phone: '',
    inHonourMemory: '',
    comments: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment processing integration
    console.log('Form submitted:', { ...formData, amount: selectedAmount || customAmount });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Make a Donation</h1>
      
      <div className="bg-teal-50 p-6 rounded-lg mb-8 text-gray-700 leading-relaxed">
        <p>
          Making a gift online is a quick and secure way to ensure that your gift is put to use right away. 
          Online gifts can be made by credit or debit card. This method is preferred by Beyond 21 since we 
          are able to issue automatic electronic tax receipts for gifts over $25, which helps reduce 
          administrative and financial costs on the organization.
        </p>
      </div>

      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-purple-800">Make a Gift to Silver Springs</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Amount Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gift Information</h2>
            <div className="flex flex-wrap gap-3">
              {DonationAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                >
                  ${amount}
                </Button>
              ))}
              <div className="flex items-center gap-2">
                <span>$</span>
                <Input
                  type="number"
                  placeholder="Other"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-32"
                />
              </div>
            </div>

            <div>
              <Label>Donation Frequency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="One Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onetime">One Time</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Title</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr.</SelectItem>
                    <SelectItem value="mrs">Mrs.</SelectItem>
                    <SelectItem value="ms">Ms.</SelectItem>
                    <SelectItem value="dr">Dr.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>First Name*</Label>
                <Input required />
              </div>
              <div>
                <Label>Last Name*</Label>
                <Input required />
              </div>
              <div>
                <Label>Country*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label>Address Line*</Label>
                <Textarea required />
              </div>
              <div>
                <Label>City*</Label>
                <Input required />
              </div>
              <div>
                <Label>State/Province*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state/province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ab">Alberta</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    {/* Add more provinces/states */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Postal Code*</Label>
                <Input required />
              </div>
              <div>
                <Label>Email*</Label>
                <Input type="email" required />
              </div>
              <div>
                <Label>Confirm Email*</Label>
                <Input type="email" required />
              </div>
              <div>
                <Label>Phone*</Label>
                <Input type="tel" required />
              </div>
            </div>
          </div>

          {/* Gift in Honour/Memory */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gift in Honour/Memory</h2>
            <div>
              <Label>In Honour/Memory</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honour">In Honour</SelectItem>
                  <SelectItem value="memory">In Memory</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Additional Comments</Label>
              <Textarea 
                placeholder="If you are making a gift in honour or in memory, please type the honouree's name in the comments section..."
                className="h-32"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Donation</Button>
        </form>
      </Card>
    </div>
  );
}
