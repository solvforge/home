export type IndustryCard = { icon: string; title: string; body: string };

export type Industry = {
  slug: string;
  name: string; // "Bakeries", "HVAC Companies"
  title: string; // full page H1
  short: string; // footer / index label
  heroBlurb: string;
  helpHeading: string;
  help: IndustryCard[];
  serveHeading: string;
  serve: IndustryCard[];
  photos?: string[];
};

// Reusable generic "how we help" for field-service businesses.
const genericHelp = (workers: string, searchTerm: string): IndustryCard[] => [
  { icon: "search", title: "Get Found When It Matters", body: `Local SEO and Google Business Profile work so customers searching for ${searchTerm} nearby find you first.` },
  { icon: "code", title: "A Website That Books Jobs", body: "Fast, mobile-friendly, and built to turn visitors into calls and form submissions." },
  { icon: "phone", title: "Capture Every Enquiry", body: "Call handling, click-to-call, and forms so leads don't slip through during busy periods." },
  { icon: "chat", title: "Reviews That Do the Selling", body: "Ask for reviews at the right moment and respond to them — your rating decides who calls." },
  { icon: "gauge", title: "Less Admin, More Field Time", body: `Automate scheduling, reminders, and follow-ups so ${workers.toLowerCase()} spend less time at a desk.` },
  { icon: "refresh", title: "Repeat & Referral Work", body: "Service reminders and follow-ups that keep past customers and their neighbours calling you." },
];

// Reusable "what we do for local service businesses" — customised per industry via wording.
const svc = (
  book: string,
  reviews: string,
  emergency: string,
): IndustryCard[] => [
  { icon: "code", title: "Website That Wins the Job", body: "A fast, mobile-friendly site that loads quickly, builds trust, and turns visitors into enquiries." },
  { icon: "search", title: "Found on Google Maps", body: "Local SEO and Google Business Profile optimisation so nearby customers find you first." },
  { icon: "phone", title: book, body: "Make it effortless for customers to reach you and book, without playing phone tag." },
  { icon: "chat", title: reviews, body: "Ask for reviews at the right moment, respond to them, and turn your reputation into your best marketing." },
  { icon: "gauge", title: emergency, body: "Handle enquiries and dispatch faster with call handling, forms, and automation behind the scenes." },
  { icon: "refresh", title: "Customers Who Come Back", body: "Reminders, follow-ups, and simple campaigns that keep past customers choosing you again." },
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "bakeries",
    name: "Bakeries",
    short: "Bakeries",
    title: "Digital Solutions for Bakeries",
    heroBlurb:
      "Websites, local SEO, online ordering, social media, and workflow automation built specifically for bakeries — attract more customers, increase sales, and run the shop more efficiently.",
    helpHeading: "From Oven to Online",
    help: [
      { icon: "chart", title: "From Oven to Online", body: "Move beyond the counter with digital channels that bring in more customers and smooth out daily operations." },
      { icon: "tag", title: "Orders Without the Chaos", body: "Online ordering and WhatsApp integration so customers browse, order, and pay effortlessly while your team stays organised." },
      { icon: "wrench", title: "Smart Bakery Operations", body: "Automate inventory, order processing, staff scheduling, and customer messaging to cut waste and save time." },
      { icon: "search", title: "Fresh Online Presence", body: "A fast, mobile-friendly website and optimised Google Business Profile that make the bakery easy to find." },
      { icon: "phone", title: "Local Customers, Bigger Reach", body: "Local SEO and Google Maps optimisation so hungry customers nearby discover and choose you first." },
      { icon: "refresh", title: "Customers Who Keep Coming Back", body: "Loyalty programs, review management, and social campaigns that turn first-timers into regulars." },
    ],
    serveHeading: "What We Serve",
    serve: [
      { icon: "wrench", title: "Bake More, Stress Less", body: "Automation tools that handle inventory, ordering, and staff coordination so you can focus on baking." },
      { icon: "search", title: "Your Bakery, Always Visible", body: "Get found when customers search for fresh bread, cakes, or pastries nearby." },
      { icon: "tag", title: "Deliciously Simple Ordering", body: "A smooth online menu and ordering experience that lifts sales and cuts phone-order errors." },
      { icon: "chat", title: "A Loyal Bakery Community", body: "Loyalty programs, review management, and social content that showcases your daily fresh bakes." },
      { icon: "code", title: "A Website That Sells", body: "Show off your creations with a modern, fast-loading site that converts visitors 24/7." },
      { icon: "lifebuoy", title: "One Partner, Complete Growth", body: "Instead of juggling freelancers, work with one team across website, SEO, social, and automation." },
    ],
    photos: [
      "/media/bakery/photo-1.jpg",
      "/media/bakery/photo-2.jpg",
      "/media/bakery/photo-3.jpg",
      "/media/bakery/photo-4.jpg",
    ],
  },
  {
    slug: "coffee-shop",
    name: "Coffee Shops",
    short: "Coffee Shop",
    title: "Digital Solutions for Coffee Shops",
    heroBlurb:
      "Websites, local SEO, online ordering, loyalty, and social media for coffee shops — bring in more regulars and keep the queue moving.",
    helpHeading: "Grind, Brew, Grow",
    help: [
      { icon: "search", title: "Be the Nearby Coffee", body: "Show up first when people search “coffee near me” with local SEO and a polished Google Business Profile." },
      { icon: "tag", title: "Order-Ahead & Pickup", body: "Let regulars order and pay from their phone so the morning rush moves faster." },
      { icon: "chat", title: "Reviews That Bring Foot Traffic", body: "Prompt happy customers for reviews and reply to every one — your rating is your storefront." },
      { icon: "refresh", title: "Loyalty That Actually Works", body: "Digital stamp cards and reward campaigns that turn a first visit into a daily habit." },
      { icon: "code", title: "A Site That Looks as Good as the Latte", body: "A quick, mobile-first website with menu, hours, and location front and centre." },
      { icon: "gauge", title: "Less Admin, More Coffee", body: "Automate ordering, messaging, and scheduling so the team stays behind the bar." },
    ],
    serveHeading: "What We Serve",
    serve: svc("Order-Ahead & Booking", "Turn Regulars Into Reviews", "Keep the Queue Moving"),
  },
  {
    slug: "cafe",
    name: "Cafés",
    short: "Café",
    title: "Digital Solutions for Cafés",
    heroBlurb:
      "Websites, local SEO, online ordering and reservations, reviews, and automation for cafés — fill more tables and keep guests coming back.",
    helpHeading: "From Menu to Marketing",
    help: [
      { icon: "search", title: "Get Discovered Locally", body: "Local SEO and Google Maps optimisation so people nearby find your café before the chain down the road." },
      { icon: "tag", title: "Bookings & Online Orders", body: "Table reservations and online ordering that reduce no-shows and phone interruptions." },
      { icon: "chat", title: "Reputation on Autopilot", body: "Collect reviews at the right moment and respond to them so your rating keeps climbing." },
      { icon: "code", title: "A Website With Personality", body: "A fast site that captures the atmosphere, with menu, photos, hours, and directions." },
      { icon: "refresh", title: "Bring Guests Back", body: "Email and SMS campaigns for events, seasonal menus, and loyalty perks." },
      { icon: "gauge", title: "Smoother Operations", body: "Automate reservations, waitlists, and customer messaging so front-of-house runs calmly." },
    ],
    serveHeading: "What We Serve",
    serve: svc("Reservations & Online Orders", "Reviews That Fill Tables", "Fewer No-Shows"),
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Real Estate",
    title: "Digital Solutions for Real Estate",
    heroBlurb:
      "Websites, IDX/listing integration, local SEO, lead capture, and follow-up automation for agents and brokerages — more listings seen, more leads worked.",
    helpHeading: "List, Market, Close",
    help: [
      { icon: "code", title: "A Website That Shows Listings", body: "Fast, searchable listing pages with map search, saved searches, and mortgage tools." },
      { icon: "search", title: "Rank for Local Searches", body: "SEO for “homes for sale in [area]” and neighbourhood pages that pull in organic buyers and sellers." },
      { icon: "tag", title: "Capture Every Lead", body: "High-converting valuation, enquiry, and viewing-request forms wired straight into your CRM." },
      { icon: "refresh", title: "Automated Follow-Up", body: "Drip sequences and reminders so no lead goes cold while you're showing property." },
      { icon: "chart", title: "Know What's Working", body: "Reporting on where leads come from and which listings and pages convert." },
      { icon: "chat", title: "Build Your Reputation", body: "Review collection, testimonials, and social proof that win listing appointments." },
    ],
    serveHeading: "What We Serve",
    serve: [
      { icon: "code", title: "Agent & Brokerage Websites", body: "Custom sites with listing search, IDX/portal feeds, and neighbourhood guides." },
      { icon: "search", title: "Local & Hyperlocal SEO", body: "Area, suburb, and building-level pages that rank for real buyer and seller searches." },
      { icon: "tag", title: "Lead Capture & CRM Sync", body: "Valuation tools and forms that feed your CRM and trigger the right follow-up." },
      { icon: "refresh", title: "Nurture Automation", body: "Email and SMS sequences for buyers, sellers, and past clients." },
      { icon: "chat", title: "Reviews & Referrals", body: "Systems to collect reviews and stay in front of past clients for referrals." },
      { icon: "gauge", title: "Listing Marketing", body: "Fast single-property pages, social posts, and email blasts for new listings." },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC Companies",
    short: "HVAC",
    title: "Digital Solutions for HVAC Companies",
    heroBlurb:
      "Websites, local SEO, booking and call handling, reviews, and automation for HVAC contractors — more service calls booked, fewer missed.",
    helpHeading: "Heating Up Your Pipeline",
    help: genericHelp("technicians", "heating and cooling help"),
    serveHeading: "What We Serve",
    serve: svc("Online Booking & Call Handling", "Reviews That Rank You Higher", "Never Miss an Emergency Call"),
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    short: "Plumbers",
    title: "Digital Solutions for Plumbers",
    heroBlurb:
      "Websites, local SEO, booking and call handling, reviews, and automation for plumbing businesses — show up for emergency searches and book more jobs.",
    helpHeading: "Fixing Your Lead Flow",
    help: genericHelp("plumbers", "a plumber"),
    serveHeading: "What We Serve",
    serve: svc("Online Booking & Call Handling", "Reviews That Rank You Higher", "Never Miss an Emergency Call"),
  },
  {
    slug: "electricians",
    name: "Electricians",
    short: "Electricians",
    title: "Digital Solutions for Electricians",
    heroBlurb:
      "Websites, local SEO, booking and call handling, reviews, and automation for electrical contractors — get found for urgent work and win more quotes.",
    helpHeading: "Wired for More Work",
    help: genericHelp("electricians", "an electrician"),
    serveHeading: "What We Serve",
    serve: svc("Quote Requests & Call Handling", "Reviews That Rank You Higher", "Never Miss an Urgent Call"),
  },
  {
    slug: "auto-repair",
    name: "Auto Repair Shops",
    short: "Auto Repair Shop",
    title: "Digital Solutions for Auto Repair Shops",
    heroBlurb:
      "Websites, local SEO, online booking, reviews, and reminders for auto repair shops — keep the bays full and customers coming back for service.",
    helpHeading: "Tune Up Your Bookings",
    help: genericHelp("mechanics", "car repair"),
    serveHeading: "What We Serve",
    serve: svc("Online Booking & Estimates", "Reviews That Bring Cars In", "Fill Every Bay"),
  },
  {
    slug: "veterinary",
    name: "Veterinary Clinics",
    short: "Veterinary",
    title: "Digital Solutions for Veterinary Clinics",
    heroBlurb:
      "Websites, local SEO, online appointment booking, reviews, and reminder automation for veterinary practices — more appointments, fewer no-shows.",
    helpHeading: "Care That Fills the Calendar",
    help: genericHelp("clinic staff", "a vet"),
    serveHeading: "What We Serve",
    serve: svc("Online Appointment Booking", "Reviews From Happy Pet Owners", "Reminders That Cut No-Shows"),
  },
  {
    slug: "chiropractic",
    name: "Chiropractic Practices",
    short: "Chiropractic Services",
    title: "Digital Solutions for Chiropractic Practices",
    heroBlurb:
      "Websites, local SEO, online booking, reviews, and recall automation for chiropractic clinics — a steadier flow of new and returning patients.",
    helpHeading: "Aligned for Growth",
    help: genericHelp("practitioners", "a chiropractor"),
    serveHeading: "What We Serve",
    serve: svc("Online Booking & Intake", "Reviews That Build Trust", "Recalls That Bring Patients Back"),
  },
  {
    slug: "dentists",
    name: "Dental Practices",
    short: "Dentists",
    title: "Digital Solutions for Dental Practices",
    heroBlurb:
      "Websites, local SEO, online booking, reviews, and recall automation for dental practices — more new patients and better chair utilisation.",
    helpHeading: "Something to Smile About",
    help: genericHelp("clinic staff", "a dentist"),
    serveHeading: "What We Serve",
    serve: svc("Online Booking & New-Patient Forms", "Reviews That Win New Patients", "Recalls That Fill the Diary"),
  },
];

export function getAllIndustries(): Industry[] {
  return INDUSTRIES;
}

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
