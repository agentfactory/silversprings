'use client';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { upcomingEvents } from '@/data/mockData';

interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  registrationUrl: string;
}

export default function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Convert string dates from mock data to Date objects
  const events: Event[] = upcomingEvents.map(event => ({
    ...event,
    date: new Date(event.date)
  }));

  const selectedDateEvents = events.filter(
    (event) => date && event.date.toDateString() === date.toDateString()
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.date.toLocaleDateString()}
                    </p>
                    <p className="mt-2">{event.description}</p>
                    <Button
                      asChild
                      className="mt-3"
                    >
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register on My Community Hub
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                {date
                  ? 'No events scheduled for this date'
                  : 'Select a date to view events'}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
