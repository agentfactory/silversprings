// Content source-of-truth for Silver Springs Studio.
// Copy adapted as PLACEHOLDERS from silverspringstudio.com.
// TODO(denis): replace TODO markers with finalized copy, real participant quotes, and
// participant-consented photography before public launch.

export const site = {
  name: "Silver Springs Studio",
  shortName: "Silver Springs",
  tagline: "Creativity doesn't have an age limit. Or a diagnosis.",
  location: "Ottawa-Carleton, Ontario",
  parentOrg: "OCAPDD (Ottawa-Carleton Association for Persons with Developmental Disabilities)",
  charityRegNumber: "TODO-CHARITY-REG", // TODO(denis): provide CRA registration #
  donorboxCampaign: "TODO-DONORBOX-SLUG", // TODO(denis): e.g. "silver-springs-studio"
  email: "hello@silverspringstudio.com", // TODO(denis): confirm inbox
  phone: "", // TODO(denis)
  address: "Silver Springs Farm, Ottawa, ON",
  socials: {
    instagram: "https://www.instagram.com/silverspringsstudio/", // TODO(denis): validate
    facebook: "https://www.facebook.com/silverspringsstudio/", // TODO(denis): validate
  },
};

export const impactStats = [
  { value: "120+", label: "artists in our community", note: "and growing every season" },
  { value: "15", label: "years cultivating belonging", note: "at Silver Springs Farm" },
  { value: "4", label: "creative programs", note: "arts, gardening, cooking, shop" },
  { value: "100%", label: "of artwork sales support the artists", note: "who made it" },
];

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  image: string;
  color: "sage" | "terracotta" | "cream";
};

export const programs: Program[] = [
  {
    slug: "visual-arts",
    title: "Visual Arts & Crafting",
    tagline: "Painting, mixed media, printmaking, textiles.",
    summary:
      "Weekly studio classes led by practicing artists. Every participant works at their own pace, with the materials and support they need to make something they're proud of.",
    highlights: [
      "Small-group sessions, experienced instructors",
      "All skill levels — from first brushstroke to exhibition",
      "Finished works can be sold in the Silver Springs shop",
    ],
    image: "/images/placeholders/arts.jpg",
    color: "terracotta",
  },
  {
    slug: "gardening",
    title: "Gardening at the Farm",
    tagline: "Hands in the soil, sun on your face.",
    summary:
      "Our working gardens at Silver Springs Farm grow vegetables, herbs, and cut flowers. Participants plant, tend, and harvest — connecting with the land and each other.",
    highlights: [
      "Seasonal planting, harvesting, composting",
      "Produce feeds directly into the cooking program",
      "Accessible raised beds and pathways",
    ],
    image: "/images/placeholders/gardening.jpg",
    color: "sage",
  },
  {
    slug: "cooking",
    title: "Cooking & Baking",
    tagline: "From our gardens to the table.",
    summary:
      "Seasonal cooking classes using produce grown on-site. Participants learn kitchen skills, food safety, and the quiet joy of feeding people you care about.",
    highlights: [
      "Farm-to-table recipes, adapted for every ability",
      "Nutrition and food-safety skills",
      "Shared meals are at the heart of our week",
    ],
    image: "/images/placeholders/cooking.jpg",
    color: "sage",
  },
  {
    slug: "shop",
    title: "The Artists' Shop",
    tagline: "Original works by our community.",
    summary:
      "Every piece in the shop is made by a Silver Springs artist. When you buy, you support the artist directly and help sustain the studio that made it possible.",
    highlights: [
      "Paintings, prints, cards, and handmade goods",
      "Proceeds split with the artist",
      "New seasonal collections throughout the year",
    ],
    image: "/images/placeholders/shop.jpg",
    color: "terracotta",
  },
];

export type Story = {
  slug: string;
  name: string;
  role: string;
  quote: string;
  body: string;
  image: string;
};

// [DRAFT] placeholder stories — replace with real participant stories + consent.
export const stories: Story[] = [
  {
    slug: "maya",
    name: "Maya",
    role: "Artist, community member since 2019",
    quote:
      "Before Silver Springs, I didn't think of myself as an artist. Now I sign my paintings.",
    body:
      "[DRAFT] Maya joined our visual arts program quietly — a few minutes of watching before she picked up a brush. Five years later, her mixed-media landscapes hang in homes across Ottawa, and she mentors newer artists in the studio.",
    image: "/images/placeholders/story-1.jpg",
  },
  {
    slug: "daniel",
    name: "Daniel",
    role: "Gardener & baker",
    quote: "The carrots I grew became the soup we shared. That's the best day of the week.",
    body:
      "[DRAFT] Daniel splits his time between the gardens and the kitchen. What started as a way to stay active has become the rhythm of his week — plant, tend, harvest, cook, share.",
    image: "/images/placeholders/story-2.jpg",
  },
  {
    slug: "ellis",
    name: "Ellis",
    role: "Craft artist",
    quote: "I made something someone else wanted to have. That had never happened to me before.",
    body:
      "[DRAFT] Ellis's handmade cards sold out at our spring market. The feeling of a stranger choosing your work is something he'd never experienced before Silver Springs — and it's changed how he sees himself.",
    image: "/images/placeholders/story-3.jpg",
  },
];

export type Product = {
  slug: string;
  title: string;
  artist: string;
  price: string;
  medium: string;
  image: string;
  description: string;
};

// TODO(denis): replace with real shop inventory + links to purchase (Stripe/Shopify).
export const products: Product[] = [
  {
    slug: "autumn-field-study",
    title: "Autumn Field Study",
    artist: "Maya",
    price: "$85",
    medium: "Acrylic on canvas, 12×16",
    image: "/images/placeholders/artwork-1.jpg",
    description: "A warm, textured landscape of the farm's back field in October.",
  },
  {
    slug: "seed-packets-set-of-four",
    title: "Seed Packets (Set of 4)",
    artist: "Daniel",
    price: "$24",
    medium: "Hand-printed paper, sealed with saved seeds",
    image: "/images/placeholders/artwork-2.jpg",
    description: "Printed and packed by hand with heirloom seeds from our gardens.",
  },
  {
    slug: "greeting-cards-spring-series",
    title: "Greeting Cards — Spring Series",
    artist: "Ellis",
    price: "$18",
    medium: "5-card set, blank inside",
    image: "/images/placeholders/artwork-3.jpg",
    description: "Five original designs printed on recycled card stock.",
  },
  {
    slug: "kitchen-linen-hand-dyed",
    title: "Kitchen Linen, Hand-Dyed",
    artist: "Studio collaboration",
    price: "$32",
    medium: "Natural cotton, plant-dyed at the farm",
    image: "/images/placeholders/artwork-4.jpg",
    description: "Dyed with marigolds and onion skins grown on-site.",
  },
];

export const givingTiers = [
  {
    amount: 25,
    title: "Supply a studio day",
    impact: "Covers brushes, canvas, and paper for one artist for a week.",
  },
  {
    amount: 75,
    title: "Fund a program session",
    impact: "Underwrites one full class for one participant — including materials and snacks.",
  },
  {
    amount: 250,
    title: "Sponsor a season",
    impact: "Keeps a participant in the program for an entire quarter, regardless of family means.",
  },
  {
    amount: 1000,
    title: "Build the studio",
    impact: "Directly funds equipment, accessibility upgrades, and instructor time for the year ahead.",
  },
];
