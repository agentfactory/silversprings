"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function IntakePage() {
  const [formData, setFormData] = useState({
    contactName: '',
    participantName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    currentServices: 'no',
    currentServicesDetails: '',
    preferredServices: {
      educational: false,
      recreational: false,
      community: false,
      studio: false
    },
    introduction: '',
    likesDislikes: '',
    dreamsGoals: '',
    specialConsiderations: '',
    additionalInfo: '',
    supportNeeds: {
      medical: false,
      dietary: false,
      diagnosis: false,
      senior: false,
      behavior: false,
      medications: false,
      na: false
    },
    supportDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean, group: 'preferredServices' | 'supportNeeds') => {
    setFormData(prev => ({
      ...prev,
      [group]: {
        ...prev[group],
        [name]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Silver Spring Studio (OCAPDD)</h1>
            <h2 className="text-2xl font-semibold text-center mb-6">Intake Form</h2>
            <p className="text-center text-gray-600 mb-8">
              Please fill out and submit the form. We will get back to you within two working days.
            </p>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  
                  <div>
                    <Label htmlFor="contactName">Contact Name (Parent/Advocate/Self)</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="participantName">Participant's Name</Label>
                    <Input
                      id="participantName"
                      name="participantName"
                      value={formData.participantName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Participant's Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Contact Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="province">Province</Label>
                      <Input
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Current Services */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Current Services</h3>
                  
                  <div className="space-y-2">
                    <Label>Is the participant taking any day services currently?</Label>
                    <RadioGroup
                      value={formData.currentServices}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, currentServices: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="services-yes" />
                        <Label htmlFor="services-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="services-no" />
                        <Label htmlFor="services-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.currentServices === 'yes' && (
                    <div>
                      <Label htmlFor="currentServicesDetails">What kind of services?</Label>
                      <Textarea
                        id="currentServicesDetails"
                        name="currentServicesDetails"
                        value={formData.currentServicesDetails}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                {/* Preferred Services */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Preferred Services</h3>
                  <Label>Type of day services preferred? (Can select multiple)</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries({
                      educational: 'Educational',
                      recreational: 'Recreational',
                      community: 'Community',
                      studio: 'Studio'
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={formData.preferredServices[key as keyof typeof formData.preferredServices]}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(key, checked as boolean, 'preferredServices')
                          }
                        />
                        <Label htmlFor={key}>{label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Participant Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Participant Information</h3>
                  
                  <div>
                    <Label htmlFor="introduction">Tell us more about the participant (Short Introduction)</Label>
                    <Textarea
                      id="introduction"
                      name="introduction"
                      value={formData.introduction}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="likesDislikes">Likes/Dislikes</Label>
                    <Textarea
                      id="likesDislikes"
                      name="likesDislikes"
                      value={formData.likesDislikes}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dreamsGoals">Dreams/Goals</Label>
                    <Textarea
                      id="dreamsGoals"
                      name="dreamsGoals"
                      value={formData.dreamsGoals}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialConsiderations">Special Considerations for Support</Label>
                    <Textarea
                      id="specialConsiderations"
                      name="specialConsiderations"
                      value={formData.specialConsiderations}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Any further information you would like to share with us?</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Support Needs */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Support Needs</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries({
                      medical: 'Medical Considerations',
                      dietary: 'Dietary Restrictions',
                      diagnosis: 'Diagnosis',
                      senior: 'Senior Citizen',
                      behavior: 'Behavior Support',
                      medications: 'Medications',
                      na: 'N/A'
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <Checkbox
                          id={key}
                          checked={formData.supportNeeds[key as keyof typeof formData.supportNeeds]}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange(key, checked as boolean, 'supportNeeds')
                          }
                        />
                        <Label htmlFor={key}>{label}</Label>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Label htmlFor="supportDetails">Write details here</Label>
                    <Textarea
                      id="supportDetails"
                      name="supportDetails"
                      value={formData.supportDetails}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Intake Form
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}