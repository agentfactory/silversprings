// Mock data file - Edit this file to customize your content
// Instructions for each section are provided above the data

// Gallery Images
// To add a new image:
// 1. Add your image to the public/images folder
// 2. Copy an existing image object and update the src, alt, and caption
export const galleryImages = [
  {
    src: '/images/gallery/studio-space.jpg',
    alt: 'Bright and welcoming art studio space',
    caption: 'Our peaceful and inspiring creative space'
  },
  {
    src: '/images/gallery/art-class.jpg',
    alt: 'Artists working on paintings',
    caption: 'Our artists expressing their creativity'
  },
  {
    src: '/images/gallery/artwork-display.jpg',
    alt: 'Gallery wall showing participant artwork',
    caption: 'Beautiful artwork created by our talented artists'
  },
  {
    src: '/images/gallery/group-activity.jpg',
    alt: 'Group of people enjoying an art activity',
    caption: 'Building friendships through creative expression'
  },
  {
    src: '/images/gallery/outdoor-painting.jpg',
    alt: 'Outdoor painting session',
    caption: 'Enjoying art in nature during our summer programs'
  }
];

// Team Members
// To add/edit team members:
// 1. Add team member photos to public/images/team
// 2. Copy an existing team member object and update the details
export const teamMembers = {
  team: [
    {
      id: '1',
      name: 'Jane Smith',
      role: 'Program Director',
      bio: 'Jane brings 15 years of experience in creative arts therapy and program management. She is passionate about making art accessible to everyone.',
      image: '/images/team/director.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Art Instructor',
      bio: 'Michael specializes in painting and drawing. He has been teaching art for 8 years and loves helping others discover their artistic potential.',
      image: '/images/team/instructor1.jpg'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      role: 'Support Coordinator',
      bio: 'Sarah helps coordinate program activities and ensures all participants have the support they need to fully engage in our programs.',
      image: '/images/team/coordinator.jpg'
    }
  ]
};

// Upcoming Events
// To add/edit events:
// 1. Copy an existing event object
// 2. Update the details
// 3. Make sure to use proper date format: new Date(YYYY, MM-1, DD)
// Note: Months are 0-based (0 = January, 11 = December)
export const upcomingEvents = [
  {
    id: '1',
    title: 'Introduction to Painting',
    date: new Date(2025, 1, 15), // February 15, 2025
    description: 'A beginner-friendly painting workshop exploring different techniques and materials.',
    registrationUrl: 'https://mycommunityhub.ca/event/intro-painting'
  },
  {
    id: '2',
    title: 'Pottery Workshop',
    date: new Date(2025, 1, 20), // February 20, 2025
    description: 'Learn hand-building techniques and create your own ceramic pieces.',
    registrationUrl: 'https://mycommunityhub.ca/event/pottery-workshop'
  },
  {
    id: '3',
    title: 'Art Exhibition',
    date: new Date(2025, 2, 1), // March 1, 2025
    description: 'Showcase of artwork created by our program participants. Friends and family welcome!',
    registrationUrl: 'https://mycommunityhub.ca/event/spring-exhibition'
  },
  {
    id: '4',
    title: 'Mixed Media Art',
    date: new Date(2025, 2, 10), // March 10, 2025
    description: 'Explore creativity using various materials including paper, fabric, and found objects.',
    registrationUrl: 'https://mycommunityhub.ca/event/mixed-media'
  }
];

// Program Schedule
// Edit these times to match your actual operating hours
export const programSchedule = {
  regularHours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Closed'
  },
  specialNotes: 'We are closed on statutory holidays. Please check our calendar for special events and holiday schedules.'
};

// Contact Information
// Update this with your actual contact details
export const contactInfo = {
  address: {
    street: '123 Silver Springs Blvd',
    city: 'Springfield',
    province: 'Ontario',
    postalCode: 'K1A 0B1'
  },
  phone: '(555) 123-4567',
  email: 'info@silversprings.com',
  socialMedia: {
    facebook: 'https://facebook.com/silverspringsstudio',
    instagram: 'https://instagram.com/silverspringsstudio'
  }
};
