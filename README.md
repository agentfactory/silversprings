# Silver Springs Creative Arts Program Website

This guide will help you customize and maintain your website content.

## 📝 Customizing Content

All website content can be edited in one file: `data/mockData.ts`

### 1. Gallery Images
Location: `data/mockData.ts` under `galleryImages`

```typescript
{
    src: '/images/gallery/studio-space.jpg',  // Image path
    alt: 'Bright art studio',                 // Description for accessibility
    caption: 'Our creative space'             // Caption shown below image
}
```

To add new images:
1. Add your image to `public/images/gallery/`
2. Copy an existing image entry in `mockData.ts`
3. Update the src, alt, and caption

### 2. Team Members
Location: `data/mockData.ts` under `teamMembers`

```typescript
{
    id: '1',
    name: 'Jane Smith',
    role: 'Program Director',
    bio: 'Jane brings 15 years of experience...',
    image: '/images/team/director.jpg'
}
```

To update team members:
1. Add staff photos to `public/images/team/`
2. Edit the team members section in `mockData.ts`
3. Make sure each team member has a unique ID

### 3. Events Calendar
Location: `data/mockData.ts` under `upcomingEvents`

```typescript
{
    id: '1',
    title: 'Introduction to Painting',
    date: new Date(2025, 1, 15),  // Month is 0-based (0 = January)
    description: 'A beginner-friendly painting workshop...',
    registrationUrl: 'https://mycommunityhub.ca/event/intro-painting'
}
```

To add events:
1. Copy an existing event
2. Update all fields
3. Make sure to use the correct date format
4. Update the registration URL

### 4. Program Schedule
Location: `data/mockData.ts` under `programSchedule`

Update the hours for each day and add any special notes about holidays or closures.

### 5. Contact Information
Location: `data/mockData.ts` under `contactInfo`

Update:
- Address
- Phone number
- Email
- Social media links

## 🖼️ Image Organization

Place your images in these folders:
```
public/
  images/
    gallery/      <- Gallery images
    team/         <- Staff photos
```

## 📱 Using Components

### Gallery Component
Add to any page:

```tsx
import { ImageGallery } from '@/components/ImageGallery';

// In your page component:
<ImageGallery />
```

### Events Calendar
Add to any page:

```tsx
import { EventsCalendar } from '@/components/EventsCalendar';

// In your page component:
<EventsCalendar />
```

### Team Section
Add to any page:

```tsx
import { Team } from '@/components/Team';

// In your page component:
<Team />
```

## 🔄 Common Tasks

### How to Add a New Team Member
1. Add their photo to `public/images/team/`
2. Open `data/mockData.ts`
3. Find the `teamMembers` section
4. Copy an existing team member entry
5. Update with the new member's information
6. Make sure to give them a unique ID

### How to Add a New Event
1. Open `data/mockData.ts`
2. Find the `upcomingEvents` section
3. Copy an existing event
4. Update:
   - Title
   - Date (remember months are 0-based)
   - Description
   - Registration URL

### How to Update Hours
1. Open `data/mockData.ts`
2. Find the `programSchedule` section
3. Update the hours for each day
4. Add any special notes about holidays

### How to Add Gallery Images
1. Add your image to `public/images/gallery/`
2. Open `data/mockData.ts`
3. Find the `galleryImages` section
4. Add a new entry with:
   - src: path to your image
   - alt: description for accessibility
   - caption: text to show below image

## 💡 Tips
- Keep image files under 500KB for better performance
- Use descriptive alt text for images to help with accessibility
- Regular updates to the events calendar will keep your site looking active
- Test all links after updating them
- Back up the `mockData.ts` file before making major changes

## 🆘 Need Help?
If you need assistance:
1. Check this README first
2. Look at the comments in `data/mockData.ts`
3. Contact your web developer for technical support
