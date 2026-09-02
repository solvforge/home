export type PricingTier = {
  name: string;
  price?: string;
  features: string[];
  highlighted?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
};

export type StatCallout = {
  value: string;
  label: string;
};

export type ComparisonRow = {
  label: string;
  a: string;
  b: string;
};

export type Comparison = {
  columnA: string;
  columnB: string;
  rows: ComparisonRow[];
};

export type Feature = {
  title: string;
  description: string;
};

export type CustomHero = {
  headline: string;
  body: string;
  ctaLabel: string;
  image?: { src: string; alt: string };
  background?: "light" | "dark";
  ctaStyle?: "filled" | "outline";
  bullets?: string[];
  secondaryHeadline?: string;
  align?: "left" | "center";
};

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  billing: "recurring" | "project";
  intro?: string;
  bodyParagraphs?: string[];
  details: string[];
  features?: Feature[];
  featuresHeading?: string;
  featuresIntro?: string;
  featuresColumns?: 2 | 3;
  featuresAsList?: boolean;
  explainer?: { heading: string; body: string; image: { src: string; alt: string } };
  secondaryHeading?: string;
  secondaryIntro?: string;
  secondaryImage?: { src: string; alt: string };
  secondaryDetails?: string[];
  secondaryAsCards?: boolean;
  secondaryPosition?: "early" | "late";
  pricing?: PricingTier[];
  testimonial?: Testimonial;
  faq?: FaqItem[];
  howItWorks?: HowItWorksStep[];
  howItWorksHeading?: string;
  formPosition?: "early" | "late";
  stats?: StatCallout[];
  comparison?: Comparison;
  customHero?: CustomHero;
  platformLogos?: string;
  logoRow?: string[];
  supplementaryImage?: { src: string; alt: string };
};

export type ServiceCategory = {
  slug: string;
  name: string;
  summary: string;
  services: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "marketing",
    name: "Marketing",
    summary: "Get found, and get chosen once you are.",
    services: [
      {
        slug: "seo-services",
        name: "SEO Services",
        summary: "Custom SEO packages covering on-page, off-page, and technical work.",
        billing: "recurring",
        customHero: {
          headline: "SEO Packages That Boost Your Organic Rankings, Traffic & Sales!",
          body: "Are you looking for affordable SEO Services? We offer cheap SEO packages for small to large size businesses. Instead of providing fixed-price monthly SEO packages, we give custom and affordable SEO packages that help the business requirements of every client. Our average monthly SEO cost for a project is $150 to $500 per month.",
          ctaLabel: "Get a Free Quotation, No Commitment Needed",
        },
        intro:
          "Instead of a fixed-price package, we scope SEO around what your business actually needs. Most projects run $150–$500/month depending on scope and competition.",
        details: [
          "Full-spectrum SEO: on-page, off-page, and technical, across all devices",
          "Custom strategy per business — no one-size-fits-all package",
          "Keyword research targeted at revenue-driving search terms, not just traffic",
          "White-hat backlink building through outreach, directories, and guest posts",
          "In-house content team for SEO-optimized articles, landing pages, and metadata",
          "Monthly reporting: keyword rankings, traffic analytics, link progress, competitor analysis",
          "Technical SEO audits and fixes — crawl issues, schema markup, and more",
          "No lock-in contracts — scale up or down anytime",
        ],
        features: [
          { title: "Full-Spectrum SEO", description: "We handle on-page, off-page, and technical SEO — ensuring your site ranks higher, loads faster, and performs better across all devices." },
          { title: "Custom Strategy for Each Business", description: "No one-size-fits-all. We craft SEO strategies based on your industry, competition, and audience." },
          { title: "Keyword Research That Drives Revenue", description: "We target search terms your ideal customers are actively using — not just traffic-chasing terms." },
          { title: "High-Authority Backlink Building", description: "We acquire backlinks through outreach, directories, guest posts, and niche-specific platforms — all white-hat." },
          { title: "SEO-Optimized Content", description: "Our in-house content team writes compelling, keyword-rich articles, landing pages, and metadata that convert." },
          { title: "Transparent Reporting & Progress Tracking", description: "Monthly reports with keyword rankings, traffic analytics, link building progress, and competitor analysis." },
        ],
        faq: [
          {
            question: "What is included in your SEO services?",
            answer: "Keyword research and analysis, on-page and off-page optimization, technical SEO audits, content creation and optimization, and link-building strategies.",
          },
          {
            question: "How long does it take to see results from SEO?",
            answer: "SEO is a long-term strategy. Depending on the competition and your website's current state, you can expect noticeable improvements in 3 to 6 months.",
          },
          {
            question: "What's the difference between on-page and off-page SEO?",
            answer: "On-page SEO focuses on optimizing website content, meta tags, and structure. Off-page SEO involves building backlinks and improving the site's authority outside its domain.",
          },
          {
            question: "Is SEO better than paid ads?",
            answer: "SEO provides sustainable, long-term results by improving organic traffic, while paid ads offer immediate visibility but require ongoing investment. Ideally, a combination of both works best.",
          },
          {
            question: "Do you provide SEO reports?",
            answer: "Yes — detailed monthly reports covering keyword rankings, traffic analytics, and performance metrics.",
          },
        ],
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        summary: "Show up when nearby customers search for what you do.",
        billing: "recurring",
        customHero: {
          headline: "Get Your Brand Seen by the Right People with Local SEO",
          body: "Are you searching for a local SEO service and SEO consultants that can give you a full bundle of SEO services? Local SEO is part of the online marketing omnichannel — improving search engine rankings through on-page and off-page techniques to get targeted traffic to your website from organic search results.",
          ctaLabel: "Get a Free Quotation",
        },
        details: [
          "Hyperlocal keyword targeting for location-specific search terms",
          "Google Business Profile setup, optimization, and ongoing management",
          "Consistent NAP (Name, Address, Phone) citations across directories",
          "Localized content creation tailored to your community and services",
          "Review and reputation management to build trust and improve rankings",
          "Monthly local SEO performance reporting",
        ],
        features: [
          { title: "Hyperlocal Keyword Targeting", description: "We focus on location-specific search terms to help your business show up where it matters most." },
          { title: "Google Business Profile Optimization", description: "We optimize and manage your GBP to boost visibility in Google Maps and local pack results." },
          { title: "Consistent NAP Citations", description: "We ensure your Name, Address, and Phone number are consistent across top directories for stronger local ranking signals." },
          { title: "Localized Content Creation", description: "Our team creates SEO-rich content tailored to your community, services, and customer base." },
          { title: "Review & Reputation Management", description: "We help you gain and manage customer reviews to build trust and improve search rankings." },
          { title: "Detailed Reporting & Insights", description: "Track your growth with easy-to-read local SEO performance reports and actionable insights." },
        ],
        faq: [
          {
            question: "What is Local SEO, and how does it benefit my business?",
            answer: "Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. It improves visibility on search engines, enhances customer trust, and drives more foot traffic to your physical location.",
          },
          {
            question: "What are the key components of Local SEO?",
            answer: "Google Business Profile optimization, local keyword research, citation building, review management, local link building, and location-specific content.",
          },
          {
            question: "Can Local SEO help a business without a physical storefront?",
            answer: "Yes — local SEO also benefits service-based businesses targeting specific regions or cities, helping them appear in local searches even without a physical location.",
          },
          {
            question: "How long does it take to see results from Local SEO?",
            answer: "It's an ongoing process, but you can typically start seeing improvements in rankings and traffic within 3-6 months, depending on competition.",
          },
          {
            question: "Do reviews impact local search rankings?",
            answer: "Yes — reviews are a significant factor in local SEO. Positive reviews increase trust, improve click-through rates, and influence local search rankings.",
          },
        ],
      },
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        summary: "Structure and content changes made directly on your site.",
        billing: "recurring",
        customHero: {
          headline: "Get Your Brand Seen by the Right People With the Help of On Page SEO Services",
          body: "Are you Searching for On-Page SEO Services freelancer and SEO consultants that can give a 360 bundle of SEO Services? On-Page SEO Services service is part of the online marketing Omni channel, and improving search engine rankings in digital marketing is vital to fulfilling your marketing strategy can be defined as the on-page and off-page techniques of getting targeted traffic to a website from a search engine's organic rankings - the Google search engine results page is the most popular.\n\nCommon tasks associated with On-Page SEO Services include Technical SEO, indexation management, creating high-quality content, optimizing content, link building and content marketing.\n\nTo be on top of your customers' minds, your business goals are to stay on top of search results and rank higher - at all times. This will help you to achieve your business goals.\n\nAs a leading On-Page SEO Services provider, we have served clients and successfully run On-Page SEO Services campaigns for e-commerce, travel, retail, B2C / B2B, health, news and real-estate websites. Furthermore, we have built Local SEO strategies and worked closely with pay-per-click, UX, CRO, PR, social, and data analyst teams in different niches, resulting in results-driven campaigns that have impacted business ROI, brand positioning, and store footfall. - Check our Case studies for more.\n\nOur organic search team crafts bespoke On-Page SEO Services marketing campaigns that will build and nurture your online presence, drive organic traffic to your website, and skyrocket sales by improving your website visibility and increasing its traffic organically.\n\nOur philosophy of On-Page SEO Services is built around this deep understanding of search engines and user intent. We build strategies that put your business objectives in the centre and turn your website into the most relevant answers to searches your target audiences are making, enabling you to take the lead over your competitors and stay there.\n\nThe end result of our work is a custom-made, real-world, results-oriented performance architecture that is robust, self-maintaining, self-evolving and as automatic as possible so you can move on with the business of publishing content.",
          ctaLabel: "Get a Free Quotation",
          ctaStyle: "outline",
        },
        details: [],
        secondaryHeading: "Our Three SEO Pillars Keep You Ahead of the Digital Curve",
        secondaryAsCards: true,
        secondaryDetails: [
          "Technical — Poor technical SEO health impacts all areas of your site, leading to lost organic visibility. We have a particular appetite for identifying and fixing technical errors (page speed, code optimization, website hierarchy, URL structure, indexation management such as robots.txt and XML sitemap, etc.) to ensure your site doesn't miss out on the visibility it deserves. Using our data & tech tools, we can identify opportunities to optimize the website more effectively for search engines and user experience.",
          "Content — Original, rich, SEO-optimized content development is the undisputed king of digital marketing. The heart of our strategy is creating copy that converts while still being optimized for search engines. Our SEO-copywriting team will care for your website content. We start this exercise with extensive keyword research that looks after your relevant business and semantic keywords by assigning primary and secondary keyword targeting.",
          "Authority — Authoritative websites in your industry are your best friends. We link to trustworthy sites to help set your brand as a source of authority that search engines will be happy to rank. We build a customized list (database) of websites relevant to your niche through professional research and outreach to publishers.",
        ],
        howItWorksHeading: "Our Process",
        howItWorks: [
          { title: "Discovery", description: "Our discovery phase stacks the odds in your favor by uncovering extensive search term data — full keyword research and mapping —, audience persona, searcher behaviour, and competition analysis (both organic and industry competitors), and unleashing Google Trends keywords capabilities. We call it the setup phase too, where we set up your website on Google Search Console and Bing/Yahoo Webmaster Tools, besides submitting it to our SEO premium tools (technical, content and backlinks tools)." },
          { title: "Execution Strategy", description: "Next, we craft a bespoke SEO strategy for on-page optimization, off-page optimization, and content marketing that is in line with your digital growth objectives. For technical SEO, after we analyze your website and list all technical issues and advanced implementations such as schema markups, we send these recommendations with an action list and guides to your IT team to implement live — or optionally we can do this from our end upon agreement." },
          { title: "Reporting", description: "We closely track and monitor your site's performance and generate reports that show the impact of your bespoke campaigns on your website rankings and organic traffic improvements, ensuring a robust measurement framework to measure the impact of all SEO deployments. We build advanced Google Data Studio reports for our clients that can fetch data in real time and export it in different formats." },
        ],
      },
      {
        slug: "link-building",
        name: "Link Building",
        summary: "Earn the backlinks that move search rankings.",
        billing: "recurring",
        customHero: {
          headline: "It's Time for You to Be on the 1st Page",
          body: "Your supply of one-way links pointing back to your website is at your fingertips. Link building is the #1 factor that contributes to high search engine rankings, and you can get in on it right now — in any language.",
          ctaLabel: "Get a Free Review of Your Website",
          image: { src: "/hero-link-building.jpg", alt: "A typewriter with the word 'Backlinks' typed on paper" },
        },
        intro: "Over 400 orders delivered, trusted by 250+ customers.",
        details: [
          "Backlinks from Web 2.0 properties, bookmarking sites, wikis, and social signals",
          "High PA/DA and .edu/.gov domain placements where relevant",
          "Full refund if a purchased link isn't placed within 30 business days",
          "Customers have typically seen higher rankings within 4 weeks",
        ],
        stats: [
          { value: "400+", label: "Orders delivered" },
          { value: "250+", label: "Customers trusted us" },
          { value: "4 wks", label: "Typical time to higher rankings" },
        ],
        faq: [
          {
            question: "What is your refund policy?",
            answer: "You'll get a full refund for the link if the purchased link was not successfully placed within 30 business days.",
          },
          {
            question: "How long does it take to see effects on rankings?",
            answer: "It depends on competition in your niche — anywhere from 1 week to 6 months. Moz's own research pegs the average around 10 weeks.",
          },
          {
            question: "What type of backlinks do you build?",
            answer: "Web 2.0 properties, bookmarking sites, wikis, comments, social signals, and high PA/DA sites — always safe, white-hat placements.",
          },
          {
            question: "Is link building a one-time process?",
            answer: "No — it's an ongoing process that requires consistent effort to maintain and improve your site's authority and rankings.",
          },
          {
            question: "How do you measure the success of a campaign?",
            answer: "By tracking domain authority, the number of acquired backlinks, referral traffic, and improvements in keyword rankings.",
          },
        ],
      },
      {
        slug: "social-media-management",
        name: "Social Media Management",
        summary: "Consistent posting and real engagement across your social accounts.",
        billing: "recurring",
        customHero: {
          headline: "Social Media Management",
          body: "Did you know that the best way for businesses to stay on top of their game is through the assistance of a social media manager? We know promoting and managing a social media is really difficult and time consuming, there are many business owners who do not have time to manage their media. We will fully manage your media and engage with your audience for 30 days, and work to increase your ranking in social media search results. (Facebook, Twitter, Pinterest, Instagram, Linkedin. Likes will be genuine and relevant to your business.",
          ctaLabel: "Get A Free Review of Your Social Media Accounts",
        },
        details: [],
        featuresHeading: "Why Choose SolvForge for Social Media Management?",
        featuresAsList: true,
        secondaryHeading: "Why It's Important to Have Social Media Manager?",
        secondaryAsCards: true,
        secondaryDetails: [
          "Post Creation (Stories/Static Posts) — Nobody likes a slow website. 43% of users lose their patience and leave a website if it takes more than 3 seconds to load. Having a fast website will ensure a good customer experience and increase the chances of users visiting other pages on your site.",
          "Content writing — Page load time is a very important search engine ranking factor. Faster website leads to higher rank in the search engine results, which will, in return, attract more potential customers. This means that having a optimized website is a must.",
          "Hashtag research — Speed matters and a faster website can contribute to the rise of your conversion rates. In fact, a one second delay can cost you up to 7% of conversions. Imagine what additional 5 seconds of load time will do. Don't let your business suffer, speed up your website today.",
          "An agent at your service — Nobody likes a slow website. 43% of users lose their patience and leave a website if it takes more than 3 seconds to load. Having a fast website will ensure a good customer experience and increase the chances of users visiting other pages on your site.",
          "A social dashboard for content scheduling — Page load time is a very important search engine ranking factor. Faster website leads to higher rank in the search engine results, which will, in return, attract more potential customers. This means that having a optimized website is a must.",
          "Hashtag research — Speed matters and a faster website can contribute to the rise of your conversion rates. In fact, a one second delay can cost you up to 7% of conversions. Imagine what additional 5 seconds of load time will do. Don't let your business suffer, speed up your website today.",
          "Client approvals on posts — Nobody likes a slow website. 43% of users lose their patience and leave a website if it takes more than 3 seconds to load. Having a fast website will ensure a good customer experience and increase the chances of users visiting other pages on your site.",
          "Branded Posts + Content that drive traffic & conversions — Page load time is a very important search engine ranking factor. Faster website leads to higher rank in the search engine results, which will, in return, attract more potential customers. This means that having a optimized website is a must.",
          "Promote brand/products/services/promo — Speed matters and a faster website can contribute to the rise of your conversion rates. In fact, a one second delay can cost you up to 7% of conversions. Imagine what additional 5 seconds of load time will do. Don't let your business suffer, speed up your website today.",
          "Establish credibility & authority with consistent, engaging social media posts — Nobody likes a slow website. 43% of users lose their patience and leave a website if it takes more than 3 seconds to load. Having a fast website will ensure a good customer experience and increase the chances of users visiting other pages on your site.",
          "Unique Graphics designed for your business — Blow up your social media presence with killer graphics, and copy/content to keep your tribe engaged whilst attracting the attention of passers-by who want to learn more about your brand.",
          "Keep your channel fresh and upto date — Keep your channels fresh, up to date and on point with quality branded posts including photos, video & copywriting.",
        ],
        pricing: [
          {
            name: "Basic",
            price: "$50 / Month",
            features: [
              "2 Branded Posts Every Week",
              "1 Platform of your choice (Facebook, Twitter, Youtube, Instagram, LinkedIn, Pinterest)",
              "5 Hashtag Research",
              "Social Dashboard For Content Scheduling",
              "Monthly Analytics",
              "Minimum 60 Seconds Video For Youtube",
              "Client Approval On Posts",
              "1 Dedicated Agent For You",
            ],
          },
          {
            name: "Standard Plan",
            price: "$150 / Month",
            highlighted: true,
            features: [
              "5 Posts Every Week",
              "5 Platforms of your choice (Facebook, Twitter, Youtube, Instagram, LinkedIn, Pinterest)",
              "10 Hashtag Research",
              "Social Dashboard For Content Scheduling",
              "Weekly Analytics",
              "Minimum 300 Seconds Video For Youtube",
              "Client Approval On Posts",
              "1 Dedicated Agent For You",
            ],
          },
          {
            name: "Business Plan",
            price: "$300 / Month",
            features: [
              "15 Posts Every Week",
              "All 6 Platforms Covered (Facebook, Twitter, Youtube, Instagram, LinkedIn and Pinterest)",
              "25 Hashtag Research",
              "Social Dashboard For Content Scheduling",
              "Daily Analytics",
              "Minimum 600 seconds Video For Youtube",
              "Client Approval On Posts",
              "1 Dedicated Agent For You",
            ],
          },
        ],
        features: [
          { title: "Platform-Specific Expertise", description: "From Instagram reels to LinkedIn strategy — we tailor content and tactics for each platform you use." },
          { title: "Content That Converts", description: "Professionally designed posts, captions, and CTAs that align with your brand voice and drive results." },
          { title: "Hashtag & Trend Research", description: "We monitor trending topics and use optimized hashtags to maximize organic reach and engagement." },
          { title: "Real Engagement, Not Just Posting", description: "Our team interacts with your audience, replies to messages, and builds a loyal follower base." },
          { title: "Performance-Driven Strategy", description: "We track KPIs like reach, engagement, clicks, and conversions — and refine the strategy monthly." },
          { title: "Visual Consistency & Branding", description: "Maintain a cohesive, eye-catching aesthetic across your social media presence." },
          { title: "Monthly Reports with Actionable Insights", description: "Understand what worked, what didn't, and where your brand is growing with clear reporting." },
          { title: "Content Calendars & Approval Workflow", description: "Stay in control of your brand with preview-based content planning and scheduled approvals." },
          { title: "Flexible Plans for All Business Sizes", description: "From small businesses to multi-brand agencies, we offer scalable packages tailored to your growth." },
        ],
        faq: [
          {
            question: "What is included in SolvForge's Social Media Management service?",
            answer: "We offer full-service social media support, including content creation (static posts and stories), hashtag and trend research, professional design of branded graphics, platform-specific posting schedules using a social dashboard, and real engagement through responses and audience interaction.",
          },
          {
            question: "Which platforms do you support?",
            answer: "We manage all major social media platforms: Facebook, Twitter, Pinterest, Instagram, LinkedIn — and can include YouTube for video content.",
          },
          {
            question: "Do you create video content?",
            answer: "Yes. Our plans include minimum video deliverables for YouTube: 60s in Basic, 300s in Standard, and 600s in Business.",
          },
          {
            question: "Can I review and approve posts before they go live?",
            answer: "Absolutely. Each piece of content is previewed via a content calendar and requires your approval before publishing.",
          },
          {
            question: "How do you measure performance?",
            answer: "We track key metrics like reach, engagement, clicks, and conversions. You'll receive weekly or monthly analytics reports depending on your plan, with actionable insights to guide future strategy.",
          },
          {
            question: "Do you engage with followers?",
            answer: "Yes, they actively reply to messages and comments, fostering real engagement — not just posting — aimed at building community and brand loyalty.",
          },
          {
            question: "Is there a dedicated social media manager?",
            answer: "Yes, each Business Plan client receives a designated agent to oversee their campaign, ensuring consistency and a point of contact for updates and strategy.",
          },
          {
            question: "Is the service available worldwide?",
            answer: "SolvForge is a remote-first company serving global clients across industries. Our offerings — from server management to social media — are tailored for businesses of any size or location.",
          },
          {
            question: "Can I customize a plan or start with a quote?",
            answer: "Yes! We provide free quotes, and custom plans are available to meet different budgets or specific goals. No upfront payment is required to receive your breakdown.",
          },
          {
            question: "What makes SolvForge stand out?",
            answer: "Our strength lies in platform-specific strategies, cohesive visual branding, performance-driven methodology, and genuine community interaction. Plus, we include analytics, hashtag research, content calendars, and solid client support within each package.",
          },
        ],
      },
      {
        slug: "internet-radio-setup",
        name: "Internet Radio Setup",
        summary: "Set up and configure internet radio streaming for your business or project.",
        billing: "project",
        details: [
          "Full streaming setup and configuration",
          "A newer addition to what we offer — get in touch to talk through your specific setup",
        ],
      },
      {
        slug: "adwords-campaign-setup",
        name: "Adwords Campaign Setup",
        summary: "Google Ads campaign setup and management from a certified team.",
        billing: "project",
        customHero: {
          headline: "Get Adwords Campaign Setup From an Experienced Team",
          body: "We are a Digital Marketing Agency who has helped 200+ businesses across the world to establish a great online presence and generate a sustainable revenue through it. We are Digital Marketers who exactly know what strategy would work best for which business. To help businesses amplifying their growth and achieve their goals, we craft customized Digital Marketing Solutions that deliver quick results.",
          ctaLabel: "Get a Free Review of Your Website",
          ctaStyle: "outline",
        },
        details: [
          "Certified Google Ads campaign setup and management",
          "Keyword research, ad copy, and conversion tracking included",
        ],
        formPosition: "early",
        featuresHeading: "Why Choose SolvForge for Google Ads Campaign Setup?",
        featuresAsList: true,
        features: [
          { title: "Certified Google Ads Experts", description: "Our campaigns are built by professionals with deep knowledge of Google's ad ecosystem and policies." },
          { title: "Keyword Research That Drives ROI", description: "We identify high-converting, cost-effective keywords to maximize your ad spend." },
          { title: "Custom Campaign Structures", description: "Whether it's Search, Display, or Shopping — we structure each campaign for clarity, performance, and control." },
          { title: "Landing Page Alignment", description: "Ad creatives and landing pages are fully aligned to improve Quality Scores and conversion rates." },
          { title: "Budget Optimization", description: "We help you start small, scale smart, and avoid wasted clicks by refining targeting and bidding strategies." },
          { title: "Compelling Ad Copy", description: "Eye-catching headlines and persuasive ad text designed to increase click-throughs and lower cost per acquisition." },
          { title: "Conversion Tracking Setup", description: "We implement proper tracking with Google Analytics and Tag Manager to measure every lead, sale, or form fill." },
          { title: "A/B Testing & Optimization", description: "Post-launch, we test different versions of your ads to find what resonates best with your audience." },
          { title: "Transparent Reporting", description: "You'll receive easy-to-understand reports with insights into clicks, costs, and what's performing best." },
        ],
        secondaryHeading: "Boost Your Business With Google Adwords Now",
        secondaryDetails: [
          "Paid Search — Grow your brand with the most powerful paid search platforms, including Google Ads, Microsoft Ads and more.",
          "Paid Social — Connect with audiences on the leading paid social platforms, including Facebook Ads, Instagram, LinkedIn, Twitter and Pinterest.",
          "Shopping — Drive revenue growth with expertly managed campaigns on Google Shopping and Bing Shopping.",
          "Video — Drive brand growth on the world's most powerful video platform, YouTube.",
          "Display — Connect with audiences on websites across the world, with Google Display and DisplayAds360.",
          "Retargeting — Increase your ROI with highly targeted retargeting strategies.",
        ],
        pricing: [
          {
            name: "Starter Plan",
            price: "$99 / One-Time Setup",
            features: [
              "Up to 1 Campaign (Search or Display)",
              "Up to 10 Targeted Keywords",
              "Custom Ad Copy (2 Ad Variations)",
              "Basic Audience & Location Targeting",
              "Landing Page Review & Recommendations",
              "Conversion Tracking Setup",
              "Google Analytics Integration",
              "5-Day Delivery",
              "1 Revision",
            ],
          },
          {
            name: "Growth Plan",
            price: "$199 / One-Time Setup",
            features: [
              "Up to 3 Campaigns (Search, Display, or Remarketing)",
              "Up to 30 Keywords",
              "Custom Ad Copy (A/B Split Testing – 4 Ads)",
              "Advanced Location, Device & Demographic Targeting",
              "Landing Page Review & Recommendations",
              "Conversion Tracking + Tag Manager Setup",
              "Google Analytics Integration + Competitor Analysis",
              "7-Day Delivery",
              "2 Revisions",
            ],
          },
          {
            name: "Pro Plan",
            price: "$299 / One-Time Setup",
            features: [
              "Up to 5 Campaigns (Search, Display, Shopping, Remarketing)",
              "Up to 75 Keywords",
              "Complete Campaign Structure & Ad Groups",
              "A/B Testing for Ads and Extensions",
              "Landing Page CRO Recommendations",
              "Budget & Bid Strategy Optimization",
              "Conversion, Event, and Call Tracking",
              "Weekly Performance Reports",
              "15 Days of Active Monitoring & Tweaks",
              "3 Revisions",
            ],
          },
        ],
        faq: [
          {
            question: "What is included in an AdWords campaign setup?",
            answer: "An AdWords campaign setup typically includes keyword research, ad copy creation, audience targeting, budget allocation, and account configuration to maximize ad performance.",
          },
          {
            question: "How long does it take to set up an AdWords campaign?",
            answer: "The setup process usually takes 1–3 days, depending on the campaign's complexity and the number of ads being created.",
          },
          {
            question: "What is the minimum budget required for an AdWords campaign?",
            answer: "There is no strict minimum budget, but Google recommends starting with a budget that aligns with your business goals and industry standards for competitive bidding.",
          },
          {
            question: "Can you target specific locations with AdWords?",
            answer: "Yes, AdWords allows you to target specific cities, regions, or countries, ensuring your ads reach the right audience.",
          },
          {
            question: "How do you choose the right keywords for my campaign?",
            answer: "Keywords are chosen based on thorough research of your industry, competition, and audience behavior to ensure high relevance and performance.",
          },
          {
            question: "What types of ads can be created with AdWords?",
            answer: "AdWords supports various ad types, including text ads, display ads, shopping ads, and video ads, tailored to meet your business goals.",
          },
          {
            question: "How do you track the performance of an AdWords campaign?",
            answer: "Performance is tracked using Google Analytics and AdWords reports, which provide insights into clicks, impressions, conversions, and ROI.",
          },
          {
            question: "Can I change my campaign after it is set up?",
            answer: "Yes, campaigns can be adjusted anytime to refine targeting, update ads, or optimize budget allocation based on performance data.",
          },
          {
            question: "Will I receive a report on my campaign's performance?",
            answer: "Yes, regular performance reports can be provided to keep you informed about your campaign's progress and outcomes.",
          },
          {
            question: "Why should I use a professional service for AdWords campaign setup?",
            answer: "A professional service ensures that your campaign is set up efficiently, targets the right audience, and maximizes your return on investment.",
          },
          {
            question: "What is the refund policy",
            answer: "There is no refund on this service, since i will only charge for setup, rest all the payment will be made directly to google ads",
          },
        ],
      },
    ],
  },
  {
    slug: "security",
    name: "Security",
    summary: "Keep sites and servers from becoming someone else's problem.",
    services: [
      {
        slug: "server-hardening",
        name: "Server Hardening",
        summary: "Lock down server configuration against common attack vectors.",
        billing: "project",
        customHero: {
          headline: "Keep your entire infrastructure secure",
          body: "A web server is an internet-facing device, so its security needs to be managed before it becomes an entry point for attackers. An attack on the web server can do serious damage — modification of user information held on the host machine, data theft, and loss of other important information.\n\nWith server hardening, we keep your entire IT infrastructure up to date and secure on Linux-based servers. You save time and reduce complexity by having a single solution for all your security needs.",
          ctaLabel: "Contact Us",
          image: { src: "/hero-server-hardening.jpg", alt: "A sticker reading 'Your ports were open... so I invited myself in'" },
        },
        platformLogos: "/platform-supported.webp",
        bodyParagraphs: [
          "Our server hardening service is designed to minimize vulnerabilities by securing system configurations, disabling unnecessary services, and implementing strict SSH and TLS policies. We reduce the attack surface by eliminating default ports, enforcing PoLP, and enabling IDS where applicable.",
          "By integrating essential hardening protocols and applying CIS benchmark standards, we ensure your server environment is resilient against unauthorized access, malware injection, and privilege escalation threats.",
          "Whether you're running Linux, Windows, or cloud-based infrastructure, our tailored hardening process brings your servers to a secure, compliant, production-ready state.",
        ],
        details: [
          "Secures system configurations and disables unnecessary services",
          "Strict SSH and TLS policies, default ports eliminated",
          "Principle of Least Privilege (PoLP) enforcement, IDS where applicable",
          "CIS benchmark standards applied across Linux, Windows, and cloud infrastructure",
          "Ongoing hardening available as a ongoing security plan, not just a one-time pass",
        ],
        featuresHeading: "Why Choose SolvForge for Malware Removal?",
        features: [
          { title: "Emergency Response & Fast Cleanup", description: "We act quickly to remove malware, restore access, and secure your website — often within hours." },
          { title: "Comprehensive Malware Scanning", description: "Deep scans detect hidden backdoors, injected scripts, and suspicious files missed by basic tools." },
          { title: "Manual & Automated Removal", description: "We combine automated tools with expert manual inspection to eliminate threats without breaking your site." },
          { title: "Blacklist & SEO Fix Assistance", description: "Help with Google blacklist removal, search engine reindexing, and restoring SEO trust." },
          { title: "Server-Side Security Audit", description: "We don't just clean — we investigate how the infection happened and secure your hosting environment." },
          { title: "Protection Against Reinfection", description: "Includes firewall setup, plugin/theme hardening, and admin/user security upgrades." },
          { title: "Zero Downtime Approach", description: "We work on staging environments when needed, keeping your live site online and stable." },
          { title: "Post-Cleanup Report & Recommendations", description: "Receive a full summary of the threat, what was done, and what to avoid going forward." },
          { title: "One-Time Fix or Ongoing Security Plans", description: "Choose a single cleanup or opt into a maintenance plan for long-term peace of mind." },
        ],
        faq: [
          {
            question: "What does your server hardening service include?",
            answer: "A comprehensive security assessment, software updates, configuration adjustments, removal of unnecessary services, security patches, and best-practice hardening.",
          },
          {
            question: "How often should server hardening be performed?",
            answer: "It should be an ongoing process — we recommend a thorough pass at least once a year, with periodic reviews and updates in between.",
          },
          {
            question: "Will server hardening affect my server's performance?",
            answer: "It's designed to enhance security without compromising performance — in some cases optimized configurations even improve it.",
          },
          {
            question: "What types of servers can you harden?",
            answer: "Web servers, database servers, application servers, and file servers, across Linux, Windows, and UNIX.",
          },
          {
            question: "Can server hardening prevent all cyberattacks?",
            answer: "It significantly reduces risk, but no system is entirely immune — it's one part of a comprehensive security strategy including monitoring and incident response.",
          },
        ],
      },
      {
        slug: "malware-removal",
        name: "Malware Removal",
        summary: "Clean an infected site or server and close the hole that let it in.",
        billing: "project",
        customHero: {
          headline: "WordPress Malware Removal — $149 Flat Rate with One-Year Warranty",
          body: "We will do complete malware removal on your site within 24 hours or less for a flat rate of $149. If your website has been flagged by Google, there will be a $29 extra charge for removing the warning.",
          ctaLabel: "Contact Us Now",
          image: { src: "/hero-malware-removal.png", alt: "A word cloud of cybersecurity terms" },
        },
        intro: "$149 flat rate, complete removal within 24 hours, one-year warranty.",
        details: [
          "Deep scans for hidden backdoors, injected scripts, and suspicious files",
          "Manual and automated removal — expert inspection, not just an automated scan",
          "Google blacklist removal assistance (+$29 if your site's been flagged)",
          "Server-side security audit to find how the infection happened, not just clean it",
          "Firewall setup and hardening afterward to prevent reinfection",
          "Work done without disrupting your live site",
        ],
        features: [
          { title: "Emergency Response & Fast Cleanup", description: "We act quickly to remove malware, restore access, and secure your website — often within hours." },
          { title: "Comprehensive Malware Scanning", description: "Deep scans detect hidden backdoors, injected scripts, and suspicious files missed by basic tools." },
          { title: "Manual & Automated Removal", description: "We combine automated tools with expert manual inspection to eliminate threats without breaking your site." },
          { title: "Blacklist & SEO Fix Assistance", description: "Help with Google blacklist removal, search engine reindexing, and restoring SEO trust." },
          { title: "Server-Side Security Audit", description: "We don't just clean — we investigate how the infection happened and secure your hosting environment." },
          { title: "Protection Against Reinfection", description: "Includes firewall setup, plugin/theme hardening, and admin/user security upgrades." },
        ],
        howItWorks: [
          {
            title: "Send us the details",
            description: "Tell us about the malware, your hosting provider, whether your site's been blacklisted, and any other details.",
          },
          {
            title: "We remove it",
            description: "Our experts remove the malware without disrupting your live website.",
          },
          {
            title: "Pay for the results",
            description: "We won't ask you to pay until your website is 100% malware-free and you're completely satisfied.",
          },
        ],
      },
      {
        slug: "one-time-fix",
        name: "One-Time Fix",
        summary: "A single specific issue, fixed fast, no ongoing commitment.",
        billing: "project",
        customHero: {
          headline: "Get 2 Hours of Unlimited Fixes for $49 Only",
          body: "",
          bullets: [
            "Get expert help for any issue or request you have",
            "Lightning-quick turnaround time from our 24/7 Technical Support Team",
            "Pay only once you are 100% happy with our service",
          ],
          ctaLabel: "Contact Us Now",
          ctaStyle: "outline",
        },
        howItWorksHeading: "How It Works",
        secondaryPosition: "late",
        intro: "$49 for 2 hours of unlimited fixes.",
        details: [],
        featuresHeading: "Why Choose SolvForge for One-Time Fix Services?",
        features: [
          { title: "Instant Response & Resolution", description: "Get quick help for broken layouts, plugin conflicts, or critical errors — no ongoing commitment required." },
          { title: "One-Time, Flat-Rate Transparency", description: "Clear, upfront pricing with no hidden charges or recurring costs." },
          { title: "Fixes That Last", description: "We don't patch — we resolve the root cause to prevent recurring issues." },
          { title: "Security-Focused Repairs", description: "Every fix includes a check for malware, vulnerabilities, and outdated software." },
          { title: "Wide Issue Coverage", description: "From CSS glitches to PHP errors and login problems, we handle it all in one go." },
          { title: "Backup Before We Touch Anything", description: "Full site backups ensure you're always protected — even if something goes wrong." },
          { title: "Platform Versatility", description: "Whether it's WordPress, custom HTML, or a CMS like Joomla or Wix, we've got you covered." },
          { title: "Developer-Level Expertise", description: "You get hands-on attention from experts who understand code, not just surface-level fixes." },
          { title: "Follow-Up Support", description: "Short-term post-fix support included to ensure your issue stays fixed after the job is done." },
        ],
        howItWorks: [
          {
            title: "Describe the issue",
            description: "Tell us about the issue you're having in as much detail as you can.",
          },
          {
            title: "We do the fix",
            description: "Our team backs up your website and fixes the issue.",
          },
          {
            title: "Pay once you're happy",
            description: "You pay us after we've solved your issue and you're 100% happy with the fix.",
          },
        ],
        secondaryHeading: "We Offer Two Support Options",
        secondaryDetails: [
          "One-Time Help — If you only need a one-time fix for a specific issue without ongoing maintenance and support, simply fill out our One-Time Fix support form above, or open a ticket, start a live chat, or use our Skype support service.",
          "Ongoing Help — If you'd rather focus on growing your business, try our ongoing support service instead. You'll get 24/7 unlimited support from our professionals, with any issues fixed within a few hours.",
        ],
      },
    ],
  },
  {
    slug: "performance-optimization",
    name: "Performance Optimization",
    summary: "Make an existing site faster, on whatever platform it's already built on.",
    services: [
      {
        slug: "wordpress-performance",
        name: "WordPress Speed Optimization",
        summary: "Speed up a WordPress site without a rebuild.",
        billing: "project",
        customHero: {
          headline: "Fast WordPress Speed Optimization Service",
          body: "Unlike our competition who do wordpress speed optimization, we do not install a few plugins and call it a day. We also do not lie to you and sell you on artificial 'Load Times' that have absolutely nothing to do with what your site's real users are actually experiencing. Further, we do not sell you grades on general best practices suggestions tools that do not correlate with your site's real-world performance, rope you into services you do not need, or, manipulate you into a sales funnel designed to bamboozle you into ultimately paying ten times more than you thought you were going to.\n\nInstead, through a painstaking process of testing numerous different performance configurations, we make your WordPress-powered website as fast as it can possibly be for your site's real, human users.\n\nThe end result of our work is a custom-made, real-world, results-oriented performance architecture that is robust, self-maintaining, self-evolving and as automatic as possible so you can move on with the business of publishing content.\n\nAnd, once your Complete WordPress Speed Optimization project is complete, it will literally be impossible for your website to be any faster.",
          secondaryHeadline: "Increase Your Website Loading Speed for Slow Sites",
          ctaLabel: "Get a Free Review of Your Website",
          ctaStyle: "outline",
        },
        details: [
          "Real-world load times, not just a better score on a testing tool",
          "Core Web Vitals optimization — LCP, FID, CLS",
          "Plugin and theme bloat cleanup, replaced with lightweight alternatives",
          "Database optimization and image compression (WebP conversion included)",
          "Works with whatever you're already running — Elementor, Divi, WPBakery, or custom code",
          "Full backups and staging environments used for anything major",
        ],
        features: [
          { title: "Performance-First Approach", description: "We don't just chase scores — we improve real-world load times that boost conversions and SEO." },
          { title: "Core Web Vitals Optimization", description: "We fine-tune your site to pass Google's key metrics like LCP, FID, and CLS — without breaking functionality." },
          { title: "Plugin & Theme Bloat Cleanup", description: "We identify and remove resource-heavy plugins/themes, replacing them with lightweight, efficient alternatives." },
          { title: "Server & CDN Integration", description: "From caching layers to premium CDN setup, we optimize both front-end and server-side delivery." },
          { title: "Database Optimization & Image Compression", description: "We reduce database overhead and compress images (WebP conversion included) to enhance speed without sacrificing quality." },
          { title: "No Downtime Guarantee", description: "All optimization is done safely with full backups and staging environments where required." },
        ],
        pricing: [
          {
            name: "Basic",
            price: "$49",
            features: [
              "Initial Speed Audit: Comprehensive analysis of your current website speed and performance.",
              "Image Optimization: Compress and optimize images for faster loading times.",
              "Caching Configuration: Implement and configure basic caching solutions to improve load times.",
              "Minification: Minify CSS, JavaScript, and HTML files to reduce file sizes and improve speed.",
            ],
          },
          {
            name: "Standard",
            price: "$99",
            highlighted: true,
            features: [
              "All Basic Plan Features: Includes all features from the Basic Plan.",
              "Advanced Caching Techniques: Implement advanced caching strategies for maximum performance.",
              "Lazy Loading: Implement lazy loading for images and videos to improve initial load times.",
              "Plugin Audit: Review and optimize the use of plugins, removing any unnecessary or conflicting plugins.",
              "Enhanced Security: Apply security hardening as part of the optimization pass.",
            ],
          },
          {
            name: "Premium",
            price: "$120",
            features: [
              "All Standard Plan Features: Includes all features from the Standard Plan.",
              "Custom CDN Configuration: Advanced configuration of CDN tailored to your website's needs.",
              "Code Optimization: Optimize website code for maximum efficiency, speed and minimum load time.",
              "Mobile Optimization: Ensure your website is fully optimized for fast loading on mobile devices.",
            ],
          },
        ],
        stats: [
          { value: "<2-3s", label: "Typical page load target after optimization" },
          { value: "24-48h", label: "Typical turnaround" },
        ],
        faq: [
          {
            question: "What factors can slow down my WordPress website?",
            answer: "Large unoptimized images, excessive or poorly-coded plugins, unoptimized code, lack of caching, a low-performance host, and unoptimized databases.",
          },
          {
            question: "How much can you improve the speed of my site?",
            answer: "It depends on the current state of your site, but we aim to bring load times down to under 2-3 seconds. We provide an initial assessment with a realistic estimate.",
          },
          {
            question: "How long does optimization take?",
            answer: "Typically 24-48 hours. Larger, more complex sites may take longer.",
          },
          {
            question: "Will speed optimization affect my site's design or functionality?",
            answer: "No — we take care to ensure all changes are non-intrusive, and we back up your site before making any modifications.",
          },
          {
            question: "Can you optimize speed without hurting my SEO rankings?",
            answer: "Yes — our techniques are SEO-friendly, and faster load times typically help rankings rather than hurt them.",
          },
        ],
      },
      {
        slug: "wix-performance",
        name: "Wix Website Speed Optimization",
        summary: "Speed up a Wix site within the platform's constraints.",
        billing: "project",
        customHero: {
          headline: "Wix Website Speed Optimization",
          body: "Wix Website Speed Optimization focuses on fine-tuning your site to ensure quick loading times, smooth navigation, and a better overall user experience. By speeding up your Wix website, you'll not only enhance your visitors' experience but also improve your SEO and increase the likelihood of higher search engine rankings.",
          secondaryHeadline: "Increase Your Website Loading Speed for Slow Sites",
          ctaLabel: "Get a Free Review of Your Website",
          ctaStyle: "outline",
        },
        details: [],
        formPosition: "early",
        featuresAsList: true,
        features: [
          { title: "Wix-Specific Optimization Experts", description: "We understand the platform's structure and limitations — and know how to push performance within its framework." },
          { title: "Visual & Structural Optimization", description: "We fine-tune image sizes, strip unused sections, and streamline animations for faster interaction." },
          { title: "App & Element Cleanup", description: "We analyze all installed apps and third-party integrations, removing unnecessary bloat that slows your site." },
          { title: "Mobile Speed Enhancements", description: "Mobile-first adjustments for improved speed and usability across devices." },
          { title: "Before/After Speed Reports", description: "Transparent speed test reports using tools like GTmetrix and Google PageSpeed Insights." },
          { title: "No Downtime, Full Backup Approach", description: "All changes are handled safely with full backups and in close coordination with your team." },
          { title: "Advanced Page Structure Refinement", description: "We optimize page layering, repeaters, strips, and galleries without sacrificing design." },
          { title: "Wix SEO & Performance Integration", description: "Speed improvements aligned with Wix SEO best practices — boosting ranking and UX together." },
          { title: "Affordable, Results-Driven Packages", description: "Whether you're running a portfolio or business site, we have plans that deliver measurable performance gains." },
        ],
        secondaryHeading: "Why It's Important to Have a Fast Website?",
        secondaryPosition: "late",
        secondaryDetails: [
          "More Visitors — Nobody likes a slow website. 43% of users lose their patience and leave a website if it takes more than 3 seconds to load. Having a fast website ensures a good customer experience and increases the chances of users visiting other pages on your site.",
          "Better Ranking — Page load time is a very important search engine ranking factor. A faster website leads to higher rank in the search engine results, which will, in return, attract more potential customers.",
          "Maximize Profit — Speed matters and a faster website can contribute to the rise of your conversion rates. In fact, a one second delay can cost you up to 7% of conversions. Don't let your business suffer, speed up your website today.",
        ],
      },
    ],
  },
  {
    slug: "call-center",
    name: "Call Center",
    summary: "Phone infrastructure for businesses that live on the phone.",
    services: [
      {
        slug: "call-center-setup",
        name: "Call Center Setup",
        summary: "Stand up a call center from scratch.",
        billing: "project",
        customHero: {
          headline: "Call Center Setup",
          body: "If you are looking for a reasonably priced, stable call center setup with experienced professionals to work for you, then SolvForge is the right place for you.",
          secondaryHeadline: "Ultimate Call Center Setup For Your Business",
          ctaLabel: "Get Started Now",
        },
        featuresHeading: "Advanced Inbound & Outbound Contact Center features that makes every communication better",
        features: [
          { title: "Calling Module Includes", description: "Click-to-Call, Call Recording, Voicemail, Queue Manager, 6 Call Queuing Methods." },
          { title: "AutoDialers comes with", description: "Progressive Dialers, Advance Dialer (with configured dialing ratio)." },
          { title: "Intelligent IVR Solution comes with", description: "Automatic Call Distributor, Multi-Lingual Support, Multi-level (Up to 3), Custom SMS API." },
          { title: "Easy Lead Management Dashboard", description: "Automatic Lead Distribution, Contact History, Call Disposition, Preview Dialer (via Tentacle)." },
          { title: "Retrieve Insight Analytics", description: "Activity Dashboards, Customer Insights, Live Call Monitoring, Account Based Analytics." },
          { title: "Calling Module Includes", description: "In-Call Transfer, Warm/Cold Call Transfer, Barge, Whisper, Snooping, Call Transfer for Feedback." },
        ],
        details: [],
        secondaryHeading: "What's NEW in Cloud Contact Center Setup",
        secondaryIntro:
          "Our solutions can be merged with our Cloud Contact Center for better functioning and call connectivity ratio — automate business communication by merging a Softphone Solution with the Cloud Contact Center to turn your laptop into a phone and place calls via the internet, even in low network coverage areas.",
        secondaryDetails: [
          "No dependency on traditional telephones or mobile handsets",
          "No network dependence — ensures fail-safe connectivity at all times",
          "Remote Working and Collaboration are facilitated since there's no dependence on traditional telephone systems/infrastructure",
          "Maintain HD voice quality over the Internet & incur lower cost than conventional call operations on Mobiles/Landlines",
        ],
        faq: [
          {
            question: "What is a Call Center Setup Service?",
            answer: "A call center setup service refers to a professional service that assists businesses in establishing and optimizing their call center operations. It includes designing the infrastructure, selecting the right technology, implementing necessary software and hardware, recruiting and training agents, and establishing effective processes and workflows.",
          },
          {
            question: "Why Should I Consider Using a Call Center Setup Service?",
            answer: "It ensures your call center is properly designed and equipped to handle customer inquiries efficiently, resulting in enhanced customer satisfaction. It also saves you time and effort by outsourcing the complex setup process to experts, letting you focus on your core business.",
          },
          {
            question: "Is it Easy to Use for Manager and Agents?",
            answer: "Agents will need a training and then they will be good to go.",
          },
          {
            question: "How Many Campaigns I Can Have on the Server?",
            answer: "No limitations on Campaigns, You can have as many as you want.",
          },
          {
            question: "What Kinds of Campaigns are Supported?",
            answer: "Vicidial supports inbound, outbound and blended campaigns.",
          },
          {
            question: "Can I make New Users, Campaigns, DIDs myself?",
            answer: "Yes! We usually create templates for everything you'll need on a regular basis, so you can simply copy one within 10 seconds.",
          },
          {
            question: "Can I Download Call Recordings?",
            answer: "Absolutely, you can access call recordings from the reports area and you can download it as well.",
          },
          {
            question: "How much does a call center setup service typically cost?",
            answer: "It varies depending on the size of your call center, the complexity of your requirements, the technology and infrastructure involved, and the level of support needed. It's best to request a quote to get an accurate estimate tailored to your requirements.",
          },
          {
            question: "Do call center setup service providers offer ongoing support and maintenance?",
            answer: "Yes, many providers (including us) offer ongoing technical support, troubleshooting assistance, and regular maintenance so your operations keep running smoothly.",
          },
          {
            question: "Can you provide server also?",
            answer: "We can recommend some server providers, or you can buy one from your preferred provider, or get one from our partner site, managedservers.us. (Disclaimer: we earn a commission from Managed Servers for any sales we refer to them.)",
          },
        ],
      },
      {
        slug: "call-center-management",
        name: "Call Center Management",
        summary: "Ongoing management of an existing call center operation.",
        billing: "recurring",
        customHero: {
          headline: "Ultimate Call Center Management For Your Business",
          body: "Empower Your Business with FASTER. EASIER. SMARTER Communication",
          ctaLabel: "Request a Free Consultation",
          ctaStyle: "outline",
        },
        details: [],
        formPosition: "early",
        featuresHeading: "Advanced Inbound & Outbound Contact Center features that makes every communication better",
        features: [
          { title: "Calling Module Includes", description: "Click-to-Call, Call Recording, Voicemail, Queue Manager, 6 Call Queuing Methods." },
          { title: "AutoDialers comes with", description: "Progressive Dialers, Advance Dialer (with configured dialing ratio)." },
          { title: "Intelligent IVR Solution comes with", description: "Automatic Call Distributor, Multi-Lingual Support, Multi-level (Up to 3), Custom SMS API." },
          { title: "Easy Lead Management Dashboard", description: "Automatic Lead Distribution, Contact History, Call Disposition, Preview Dialer (via Tentacle)." },
          { title: "Retrieve Insight Analytics", description: "Activity Dashboards, Customer Insights, Live Call Monitoring, Account Based Analytics." },
          { title: "Calling Module Includes", description: "In-Call Transfer, Warm/Cold Call Transfer, Barge, Whisper, Snooping, Call Transfer for Feedback." },
        ],
        faq: [
          {
            question: "Is it easy to use for managers and agents?",
            answer: "Agents just need a short training session and then they're good to go.",
          },
          {
            question: "How many campaigns can I have on the server?",
            answer: "No limitations on campaigns — you can have as many as you want.",
          },
          {
            question: "What kinds of campaigns are supported?",
            answer: "Vicidial supports inbound, outbound and blended campaigns.",
          },
          {
            question: "Can I make new users, campaigns, DIDs myself?",
            answer: "Yes! We usually create templates for everything you'll need on a regular basis, so you can simply copy one within 10 seconds.",
          },
          {
            question: "Can I download call recordings?",
            answer: "Absolutely — you can access and download call recordings from the reports area.",
          },
        ],
      },
      {
        slug: "asterisk-development",
        name: "Custom Asterisk Development",
        summary: "Custom dialplan, IVR, and integration work on the Asterisk platform.",
        billing: "project",
        customHero: {
          headline: "Asterisk Development for Your Business",
          body: "We provide tailored Asterisk development services to elevate your business communications. Our skilled team specializes in customized Asterisk solutions that optimize call center performance, improve customer engagement, and streamline telephony systems. With deep expertise in Asterisk development, we deliver scalable solutions designed to meet your specific needs and help your business unlock the full potential of this robust open-source platform.",
          ctaLabel: "Contact Us",
          ctaStyle: "outline",
          image: { src: "/asterisk-logo.png", alt: "Asterisk logo" },
        },
        explainer: {
          heading: "What is Asterisk Development?",
          body: "Asterisk development involves using the power of the Asterisk open-source system to create customized telephony solutions for businesses, particularly call centers. Asterisk, known for its flexibility and scalability, lets developers build feature-rich systems such as IVR (Interactive Voice Response), PBX (Private Branch Exchange), and call routing applications tailored to specific operational needs. The process typically involves designing, programming, and configuring Asterisk-based systems.",
          image: { src: "/media/asterisk-whatis.webp", alt: "Illustration of an Asterisk development workflow" },
        },
        details: [],
        featuresHeading: "Different Asterisk Development Services",
        featuresIntro: "Experience the Next Level in Call Center Technology",
        featuresColumns: 2,
        features: [
          { title: "Installation & Configuration", description: "Our team will set up your Asterisk system efficiently, tailored to your specific requirements. From initial installation to fine-tuning configurations, trust us for optimal performance and reliability." },
          { title: "Custom Development", description: "Our expert team tailors Asterisk-based solutions to your specific needs, delivering customized IVR systems, call routing solutions, and telephony applications that optimize your operations and elevate customer interactions." },
          { title: "AMI & AGI Development", description: "Whether you need real-time call control or seamless integration with CRM systems, our AMI (Asterisk Manager Interface) and AGI (Asterisk Gateway Interface) development services optimize your Asterisk infrastructure." },
          { title: "Dial Plan Designing", description: "Our expert Asterisk developers craft efficient and tailored dial plans to optimize call handling, automate processes, and ensure seamless connectivity within your call center environment." },
          { title: "Support & Maintenance", description: "Our experienced team is dedicated to providing timely updates, troubleshooting, and proactive monitoring, allowing you to focus on your core business while we handle the technical aspects." },
          { title: "Training", description: "Our tailored Asterisk training programs are designed to equip your team with the knowledge and skills needed to efficiently manage and leverage Asterisk-based telephony solutions." },
          { title: "Cluster Setup", description: "Our experts specialize in configuring high-availability Asterisk clusters that ensure seamless failover and load balancing, minimizing downtime and optimizing performance." },
          { title: "Consultancy", description: "Our Asterisk development consultancy services offer expert guidance and strategic insights to optimize your call center infrastructure." },
        ],
        secondaryHeading: "Custom Asterisk Development For Modern Call Centers",
        secondaryAsCards: true,
        secondaryImage: { src: "/asterisk-features.webp", alt: "Asterisk Development Features diagram" },
        secondaryIntro:
          "Equip your modern call center operations with our custom Asterisk development solutions. Our team specializes in creating telephony systems on Asterisk's open-source framework. Whether you need custom IVR solutions, advanced call routing, or seamless CRM integrations, we've got you covered. We prioritize scalability, flexibility, and reliability in every Asterisk development project.",
        secondaryDetails: [
          "Call Transfer — Whether it's transferring calls between agents or departments, or even routing calls to external numbers, our Asterisk solutions ensure efficient and reliable call handling.",
          "Text-to-Speech — Enhance customer experience by enabling personalized and informative messages, reducing agent workload, and ensuring consistent communication across all customer touchpoints.",
          "Call Monitoring — With our solutions, you gain real-time visibility into call activities, allowing supervisors to monitor agent performance, track call quality, and ensure compliance with regulatory standards.",
          "Call Recording — With our tailored solutions, you can efficiently capture and store inbound and outbound calls for quality assurance, compliance, and training purposes.",
          "Call Routing (DID & ANI) — With DID, callers can directly reach specific extensions or agents without navigating through a receptionist or IVR, streamlining the calling process and improving customer experience.",
          "Database Integration — By integrating Asterisk with your databases, such as CRM platforms or customer databases, we empower your call center agents with instant access to caller information and historical data during interactions.",
          "Call Detail Records — Call Detail Records (CDR) are a vital aspect of Asterisk development. With CDR, you can access detailed information such as call duration, caller ID, destination number, and call disposition.",
          "Automated Attendant — The automated attendant feature in Asterisk development provides callers with a seamless experience by efficiently routing incoming calls to the appropriate destination without manual intervention.",
          "Calling Cards — We optimize Asterisk to handle various calling card functionalities, including balance management, PIN authentication, multi-language prompts, and real-time call monitoring.",
        ],
        faq: [
          {
            question: "Which versions of Asterisk and which distributions do you work with?",
            answer: "We work with current Asterisk releases (18 LTS and later) as well as older versions still in production. We're comfortable with plain Asterisk, FreePBX, and Issabel, and can advise on the best fit for your use case.",
          },
          {
            question: "Can you work with our existing Asterisk setup, or does it need to be rebuilt?",
            answer: "In most cases we can work with what you already have. We start with a review of your current dialplan, configuration, and integrations, then extend or refactor it. A full rebuild is only recommended when the existing setup can't safely support what you need.",
          },
          {
            question: "How long does a typical Asterisk development project take?",
            answer: "It depends on scope. A dialplan change or a single integration is usually a few days to two weeks. A full IVR build with CRM integration and reporting typically runs three to six weeks. We give you a timeline with the quote, before any work starts.",
          },
          {
            question: "Can you integrate Asterisk with our CRM or other systems?",
            answer: "Yes. Using AMI and AGI we can push screen-pops to agents, log calls and dispositions back to your CRM, trigger click-to-call, and sync data both ways with platforms like Salesforce, HubSpot, Zoho, or a custom database.",
          },
          {
            question: "Do you provide the server, or do we?",
            answer: "Either. You can host it on your own infrastructure, or we can provision and manage a server for you. We'll recommend specs based on your expected call volume and concurrent channels.",
          },
          {
            question: "What support do you offer after the project is finished?",
            answer: "We offer ongoing support and maintenance plans that cover monitoring, updates, troubleshooting, and small changes. You're not locked in — plans run month to month.",
          },
        ],
      },
      {
        slug: "hosted-call-center-solution",
        name: "Hosted Call Center Solution",
        summary: "A fully hosted call center — no on-prem hardware to manage.",
        billing: "recurring",
        customHero: {
          headline: "How Cloud Call Center Solution Can Help Your Business",
          body: "In Cloud Call Center Solution, you get a complete one stop solution for all your call center needs. A virtual Call Center system comes with a range of advanced features to help you tailor your communications around you. A VoIP system is easy for businesses to set up and use: as everything is handled and managed by us, you can access and change settings at any time via your intuitive online dashboard. Our Cloud based Call Center system also make international communications simple - you're not tied to a specific phone line, so you can receive calls anywhere you have an internet connection. Everything across your business is connected, so it's easy to route calls to wherever you need them.",
          ctaLabel: "Contact Us",
          ctaStyle: "outline",
        },
        details: [],
        featuresHeading: "Advanced Inbound & Outbound PBX features that makes every communication better",
        features: [
          { title: "Call Announcement", description: "Greet your callers with custom announcements which you want your callers to listen anywhere in the Call Flow." },
          { title: "Multi-level IVR", description: "You can configure multiple departments and sub-departments to server your business needs." },
          { title: "Call Recording", description: "Every call gets recorded and available for auditing & training. Listen & download anytime." },
          { title: "Working Hours", description: "Routes call to agents phones or voicemail based on time preference." },
          { title: "Custom Hold Tune", description: "Play a customized corporate jingle or a pre-recorded voice to your callers while you keep them on Hold." },
          { title: "Blacklisting", description: "Block unwanted caller to prioritize important callers." },
        ],
        comparison: {
          columnA: "Cloud Contact Center",
          columnB: "On-Premise Call Center",
          rows: [
            { label: "Cost to scale", a: "Software upgrade only, no CapEx", b: "Heavy infrastructure upgrades + CapEx" },
            { label: "Where agents work", a: "Anywhere, anytime", b: "Office only" },
            { label: "Customization", a: "Quick, based on your needs", b: "Not available" },
            { label: "Maintenance", a: "Handled by us", b: "On you" },
            { label: "Data access", a: "One platform, easy access", b: "Not centralized" },
          ],
        },
        faq: [
          {
            question: "What is Hosted PBX?",
            answer: "A virtual Private Branch Exchange — a phone system that works through the internet rather than a traditional phone line.",
          },
          {
            question: "What's the difference between virtual and traditional PBX?",
            answer: "Traditional PBX needs physical hardware installed on-site and regular maintenance. Virtual PBX is cloud-hosted — no hardware, near-instant setup, and you can forward calls anywhere you have an internet connection.",
          },
          {
            question: "How secure is a PBX solution?",
            answer: "We implement industry-standard encryption, firewall traversal, secure remote access, and authentication — and keep systems updated against emerging threats.",
          },
          {
            question: "What is an IVR system?",
            answer: "An automated system that answers calls, asks questions based on the caller's needs, and routes them based on keypad (DTMF) input — single-level (direct to an agent) or multi-level (routed by language, branch, department).",
          },
          {
            question: "Can I monitor agent performance?",
            answer: "Yes — detailed agent monitoring dashboards are available with full access.",
          },
        ],
      },
      {
        slug: "sip-trunk-service",
        name: "SIP Trunk Service",
        summary: "Reliable SIP trunking for your existing phone system.",
        billing: "recurring",
        customHero: {
          headline: "Giving Voice to Your Business at a Cost You Can Afford",
          body: "We satisfy all your voice calling needs with industry-leading SIP trunking. Empower your business with faster, easier, smarter communication.",
          ctaLabel: "Order Now",
          ctaStyle: "outline",
        },
        details: [],
        featuresHeading: "Advanced Inbound & Outbound Contact Center features that make every communication better",
        featuresColumns: 3,
        features: [
          { title: "No Account Activation Charges", description: "Get started with SIP trunking without any upfront activation or setup fees." },
          { title: "Cheap Call Rates to Any Country", description: "Competitive per-minute rates for international and domestic calling, with transparent billing." },
          { title: "Works on Recharge Basis", description: "Top up as you go — no fixed monthly commitment, and you only pay for what you use." },
        ],
        secondaryHeading: "What's NEW in Cloud Contact Center Solution",
        secondaryIntro:
          "Our solutions can be merged with our Cloud Contact Center for better functioning and call connectivity ratio. Automate business communication by merging Softphone Solution with Cloud Contact Center to transform your laptop into a phone & place calls via the internet even in low network coverage areas.",
        secondaryDetails: [
          "No dependency on traditional telephones or mobile handsets",
          "No network dependence ensures fail-safe connectivity at all times",
          "Remote Working and Collaboration are facilitated since there's no dependence on traditional telephone systems/infrastructure",
          "Maintain HD voice quality over the Internet & incur lower cost than conventional call operations on Mobiles/Landlines",
        ],
        comparison: {
          columnA: "Cloud Based Call Center",
          columnB: "On-Premise Contact Center",
          rows: [
            { label: "Equipment required", a: "None — deployed on cloud", b: "Physical server, switchboards, telephones" },
            { label: "Where agents work", a: "Anywhere, anytime", b: "Office only" },
            { label: "Customization", a: "Quick, based on your needs", b: "Not available" },
            { label: "Maintenance", a: "Handled by the vendor", b: "Not incurred by the vendor" },
            { label: "Data access", a: "Collated on a single platform", b: "Not possible on a single platform" },
            { label: "Scalability", a: "Software upgrade only, no CapEx", b: "Heavy infrastructure upgrades + additional CapEx" },
          ],
        },
        faq: [
          {
            question: "Is it easy to use for manager and agents?",
            answer: "Agents will need a training and then they will be good to go.",
          },
          {
            question: "How many campaigns I can have on the server.",
            answer: "No limitations on Campaigns, You can have as many as you want.",
          },
          {
            question: "What kinds of campaigns are supported?",
            answer: "Vicidial supports inbound, outbound and blended campaigns.",
          },
          {
            question: "Can I make new users, campaigns, DIDs myself?",
            answer: "Yes! We usually create templates for everything you'll need on a regular basis, so you can simply copy one within 10 seconds.",
          },
          {
            question: "Can I download call recordings?",
            answer: "Absolutely, you can access call recordings from the reports area and you can download it as well.",
          },
        ],
      },
    ],
  },
  {
    slug: "white-label-support",
    name: "White Label Support for Agencies",
    summary: "Backend support other agencies resell under their own name.",
    services: [
      {
        slug: "white-label-support",
        name: "White Label Support for Agencies",
        summary: "We do the work, you keep the client relationship — under your brand.",
        billing: "recurring",
        customHero: {
          headline: "White Label Support for Agencies",
          body: "We recognize the challenges agencies face when managing multiple client websites. Our White Label Website Support for Agencies is designed to integrate seamlessly with your business, letting you offer top-tier website support and maintenance under your own brand. That means you can focus on scaling your agency while we handle the technical work.",
          ctaLabel: "Contact Us Now",
          ctaStyle: "outline",
        },
        details: [
          "We operate as an invisible extension of your agency — clients never see us",
          "24/7 monitoring, maintenance, and technical support",
          "Content edits, plugin updates, performance tuning, and malware cleanup, all covered",
          "White-labeled monthly reports you can present directly to your clients",
          "Communicate via your agency's own email addresses and workflows",
          "Strict confidentiality — signed NDAs, your clients stay yours",
          "Agency-centric pricing designed to leave room for your own markup",
          "Scales with you — a handful of sites or hundreds",
        ],
        features: [
          { title: "Invisible Extension of Your Agency", description: "We operate under your brand, communicating professionally without ever revealing our identity to your clients." },
          { title: "Scalable Support Team", description: "Scale up resources for high-volume months or specific projects — no hiring headaches or delays." },
          { title: "All-in-One Technical Coverage", description: "From content edits and plugin updates to performance tuning and malware cleanup, we handle it all seamlessly." },
          { title: "Fast Turnaround Time", description: "Quick edits, issue resolution, and support responses — keeping your agency's reputation intact." },
          { title: "Platform Flexibility", description: "WordPress, HTML, custom CMS — we adapt to your tech stack with no learning curve." },
          { title: "Consistent Reporting You Can Rebrand", description: "Get white-labeled monthly reports, logs, and activity summaries to present to your clients." },
          { title: "Agency-Centric Pricing", description: "Designed to leave you room for markup — boosting profitability without compromising quality." },
          { title: "Dedicated Slack or Email Support Options", description: "Choose your preferred communication method — we're always just a ping away." },
          { title: "Strict Confidentiality & NDAs", description: "Your clients remain yours. We operate under signed agreements to guarantee total discretion." },
        ],
        secondaryHeading: "Benefits of Partnering With SolvForge",
        secondaryDetails: [
          "Enhanced Client Satisfaction — Deliver exceptional support to your clients, enhancing their satisfaction and loyalty. Our reliable white-label website support for agencies ensures their websites perform optimally, reflecting positively on your agency.",
          "Focus on Core Business — With the technical aspects handled by our team, you can focus on your core business activities, such as acquiring new clients and expanding your service offerings.",
          "Cost-Effective Solution — Avoid the expenses associated with hiring and training an in-house support team. Our white-label website support for agencies provides a cost-effective alternative, allowing you to offer premium support without the overhead.",
          "Brand Consistency — Maintain brand consistency by offering a seamless support experience under your agency's name. Our white-label website support for agencies ensures your clients associate the high-quality support with your brand.",
        ],
      },
    ],
  },
  {
    slug: "website-app-development",
    name: "Website & Application Development",
    summary: "Net-new builds — a project with a defined scope and end date.",
    services: [
      {
        slug: "website-development",
        name: "Website Development",
        summary: "Custom WordPress website builds, from marketing sites to full e-commerce.",
        billing: "project",
        customHero: {
          headline: "Website Development",
          body: "We're a website development partner offering custom builds and Magento development, backed by a team of strong developers.",
          ctaLabel: "Get a Free Consultation",
          ctaStyle: "outline",
          background: "dark",
        },
        bodyParagraphs: [
          "Our Website Development Services are designed to help you build a compelling and effective online presence. Leveraging the power of the WordPress platform, we create custom websites tailored to meet your specific needs, whether it's for a personal blog, an eCommerce store, or a corporate site. Our team of experienced developers ensures that every website is not only visually appealing but also functional and user-friendly.",
          "Our WordPress Development Services encompass a wide range of solutions, including theme customization, plugin development, and website optimization. We focus on delivering high-quality, responsive designs that work seamlessly across all devices and browsers. Our expertise extends to integrating advanced features and functionalities, ensuring that your site stands out and performs exceptionally.",
          "In addition to development, we provide ongoing support and maintenance to keep your WordPress site running smoothly. From regular updates and security patches to troubleshooting and performance enhancements, we are committed to delivering reliable and comprehensive WordPress Development Services.",
        ],
        features: [
          { title: "Custom Design & Development", description: "Tailor-made WordPress websites designed to align perfectly with your brand and business goals." },
          { title: "Responsive & Mobile-Friendly", description: "Your website looks great and functions seamlessly across all devices, from desktops to smartphones." },
          { title: "SEO Optimization", description: "Enhance your site's visibility on search engines with built-in SEO features and best practices." },
          { title: "Secure & Reliable", description: "Get peace of mind with top-notch security measures and regular updates to keep your site safe." },
          { title: "E-Commerce Integration", description: "Easily set up and manage an online store with powerful e-commerce tools like WooCommerce." },
          { title: "Ongoing Support & Maintenance", description: "Benefit from continuous support, regular updates, and prompt troubleshooting to keep your site running smoothly." },
        ],
        details: [
          "Custom design tailored to your brand, not a generic template",
          "Responsive across desktop, tablet, and mobile",
          "Built-in SEO best practices from the start",
          "WooCommerce integration available for e-commerce",
          "Theme customization and plugin development as needed",
          "Ongoing support and maintenance available separately once it ships",
        ],
        pricing: [
          {
            name: "Basic",
            features: [
              "Up to 5 pages (Home, About, Services, Blog, Contact)",
              "Responsive design",
              "Basic SEO setup",
              "Standard theme customization",
              "1 revision, 1 month of support",
            ],
          },
          {
            name: "Standard",
            features: [
              "Up to 10 pages",
              "Custom design tailored to your brand",
              "Advanced SEO setup",
              "WooCommerce integration",
              "Blog setup, 3 revisions, 3 months of support",
            ],
          },
          {
            name: "Professional",
            features: [
              "Up to 50 pages",
              "Fully custom design and custom plugin development",
              "WooCommerce with payment gateway",
              "Membership/subscription features",
              "5 revisions, 6 months of support",
            ],
          },
        ],
        faq: [
          {
            question: "How much does it cost to build a website?",
            answer: "It varies with scope, but domain registration ($10-15/year) and hosting ($3-30/month) are the baseline costs beyond the build itself.",
          },
          {
            question: "Is WordPress SEO-friendly?",
            answer: "Yes, out of the box, and it can be further optimized with SEO plugins like Yoast or All in One SEO.",
          },
          {
            question: "Can I customize the design myself later?",
            answer: "Yes — you get access to customize themes and layouts, and we can also hand off a fully custom theme if you have specific design requirements.",
          },
          {
            question: "Can you migrate my existing site to WordPress?",
            answer: "Yes — the complexity depends on your current platform and content structure, but we handle the migration end to end.",
          },
          {
            question: "What support is available after launch?",
            answer: "Ongoing maintenance and support plans are available separately once the site ships — see Website Maintenance.",
          },
        ],
      },
      {
        slug: "mobile-app-development",
        name: "Mobile App Development",
        summary: "Native or cross-platform mobile apps.",
        billing: "project",
        customHero: {
          headline: "Unmatched App Development Services From an Experienced Team",
          body: "An extensive range of app development services developed by an experienced and highly talented app developer.",
          secondaryHeadline: "Top Rated Mobile App Developer's Team",
          ctaLabel: "Get a Free Consultation",
          ctaStyle: "outline",
        },
        featuresAsList: true,
        details: [
          "iOS, Android, or hybrid (React Native/Flutter)",
          "Custom-built for your goals, not a templated app",
          "End-to-end: wireframing, prototyping, development, store deployment",
          "API and third-party integrations — CRMs, payment gateways, databases",
          "Agile workflow with sprint-based milestones and full visibility",
          "Post-launch support, bug fixes, and new features",
          "App Store / Google Play submission and optimization support",
        ],
        pricing: [
          { name: "Basic", price: "$120 / One Time Cost", features: ["Functional app", "1 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
          { name: "Standard", price: "$700 / One Time Cost", features: ["Functional app", "2 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
          { name: "Premium", price: "$900 / One Time Cost", features: ["Functional app", "2 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
        ],
        featuresHeading: "Why Choose SolvForge for Mobile App Development?",
        features: [
          { title: "Custom-Built Apps for Your Vision", description: "We don't use cookie-cutter templates — each app is developed to align with your unique goals and business needs." },
          { title: "Cross-Platform Expertise", description: "Whether you need Android, iOS, or hybrid apps (React Native/Flutter), we build fast, modern, and scalable solutions." },
          { title: "UI/UX That Engages Users", description: "Beautiful, intuitive designs that keep users engaged and boost retention." },
          { title: "End-to-End Development", description: "From wireframing and prototyping to development and store deployment — we handle the entire process." },
          { title: "API & Third-Party Integrations", description: "Seamless integration with CRMs, payment gateways, databases, and more." },
          { title: "Agile & Transparent Workflow", description: "Regular updates, sprint-based milestones, and full visibility into progress." },
          { title: "Post-Launch Support & Maintenance", description: "We stay with you beyond launch to squash bugs, optimize performance, and release new features." },
          { title: "Secure Code Standards", description: "We follow industry best practices to ensure your app and user data remain safe." },
          { title: "Launch & Store Optimization", description: "We help you get your app approved and ensure it's optimized for App Store and Google Play discoverability." },
        ],
        faq: [
          {
            question: "What kind of apps can you develop?",
            answer: "From eCommerce and social media apps to enterprise and utility apps, mobile app developers can create custom solutions tailored to your business needs.",
          },
          {
            question: "What do I need to get started?",
            answer: "We need a requirements document, or any designs or rough sketches, so we can get a clear idea of how we can help.",
          },
          {
            question: "Will you provide suggestions to make this project successful?",
            answer: "Yes — we'll suggest ways to make your project successful, based on our experience.",
          },
          {
            question: "Will you provide support for uploading apps on play store and App store",
            answer: "Yes — we provide support for uploading apps to both the iOS and Android stores.",
          },
          {
            question: "Can i get whole technical support which is needed for app development process.",
            answer: "Yes — don't worry. We provide support from the start through to uploading apps to the live stores.",
          },
          {
            question: "Can I update the app with new features after it's launched?",
            answer: "Absolutely! Adding new features and updates post-launch is common. Regular updates can improve user experience and keep the app competitive.",
          },
          {
            question: "What technologies are used in mobile app development?",
            answer: "Technologies vary based on the project, but popular choices include Swift and Objective-C for iOS, Kotlin and Java for Android, and frameworks like Flutter and React Native for cross-platform apps.",
          },
          {
            question: "Do you provide maintenance and support after the app is launched?",
            answer: "Yes, ongoing maintenance and support are often part of mobile app development packages to ensure the app runs smoothly and stays updated.",
          },
          {
            question: "How long does it take to develop a mobile app?",
            answer: "The development timeline varies based on the app's complexity. Simple apps may take 1-3 months, while more complex ones can require 3-6 months or more.",
          },
        ],
      },
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        summary: "Bespoke software for a process that doesn't fit an off-the-shelf tool.",
        billing: "project",
        customHero: {
          headline: "Unmatched App Development Services From an Experienced Team",
          body: "An extensive range of app development services developed by an experienced and highly talented team.",
          secondaryHeadline: "Top Rated Mobile App Developer's Team",
          ctaLabel: "Get a Free Consultation",
          ctaStyle: "outline",
        },
        featuresAsList: true,
        details: [],
        pricing: [
          { name: "Basic", price: "$120 / One Time Cost", features: ["Functional app", "1 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
          { name: "Standard", price: "$700 / One Time Cost", features: ["Functional app", "2 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
          { name: "Premium", price: "$900 / One Time Cost", features: ["Functional app", "2 operating system", "App submission", "App icon", "Splash screen", "Ad network integration", "Source code"] },
        ],
        featuresHeading: "Why Choose SolvForge for Custom Software Development?",
        features: [
          { title: "Custom-Built Apps for Your Vision", description: "We don't use cookie-cutter templates — each app is developed to align with your unique goals and business needs." },
          { title: "Cross-Platform Expertise", description: "Whether you need Android, iOS, or hybrid apps (React Native/Flutter), we build fast, modern, and scalable solutions." },
          { title: "UI/UX That Engages Users", description: "Beautiful, intuitive designs that keep users engaged and boost retention." },
          { title: "End-to-End Development", description: "From wireframing and prototyping to development and store deployment — we handle the entire process." },
          { title: "API & Third-Party Integrations", description: "Seamless integration with CRMs, payment gateways, databases, and more." },
          { title: "Agile & Transparent Workflow", description: "Regular updates, sprint-based milestones, and full visibility into progress." },
          { title: "Post-Launch Support & Maintenance", description: "We stay with you beyond launch to squash bugs, optimize performance, and release new features." },
          { title: "Secure Code Standards", description: "We follow industry best practices to ensure your app and user data remain safe." },
          { title: "Launch & Store Optimization", description: "We help you get your app approved and ensure it's optimized for App Store and Google Play discoverability." },
        ],
        faq: [
          {
            question: "What kind of apps can you develop?",
            answer: "From eCommerce and social media apps to enterprise and utility apps, mobile app developers can create custom solutions tailored to your business needs.",
          },
          {
            question: "What do I need to get started?",
            answer: "We need a requirements document, or any designs or rough sketches, so we can get a clear idea of how we can help.",
          },
          {
            question: "Will you provide suggestions to make this project successful?",
            answer: "Yes — we'll suggest ways to make your project successful, based on our experience.",
          },
          {
            question: "Will you provide support for uploading apps on play store and App store",
            answer: "Yes — we provide support for uploading apps to both the iOS and Android stores.",
          },
          {
            question: "Can i get whole technical support which is needed for app development process.",
            answer: "Yes — don't worry. We provide support from the start through to uploading apps to the live stores.",
          },
          {
            question: "Can I update the app with new features after it's launched?",
            answer: "Absolutely! Adding new features and updates post-launch is common. Regular updates can improve user experience and keep the app competitive.",
          },
          {
            question: "What technologies are used in mobile app development?",
            answer: "Technologies vary based on the project, but popular choices include Swift and Objective-C for iOS, Kotlin and Java for Android, and frameworks like Flutter and React Native for cross-platform apps.",
          },
          {
            question: "Do you provide maintenance and support after the app is launched?",
            answer: "Yes, ongoing maintenance and support are often part of mobile app development packages to ensure the app runs smoothly and stays updated.",
          },
          {
            question: "How long does it take to develop a mobile app?",
            answer: "The development timeline varies based on the app's complexity. Simple apps may take 1-3 months, while more complex ones can require 3-6 months or more.",
          },
        ],
      },
      {
        slug: "landing-page-design",
        name: "Landing Page Design",
        summary: "A single-purpose page built to convert visitors into leads or customers.",
        billing: "project",
        customHero: {
          headline: "We Craft Landing Pages that Captivate the Audience",
          body: "Need an effective landing page? Whether you sell a product, run a service, or teach people something — we're here to help.",
          secondaryHeadline: "Top-Rated Landing Page Design",
          ctaLabel: "Get a Free Consultation",
          ctaStyle: "outline",
        },
        featuresAsList: true,
        features: [
          { title: "Customized Design", description: "We create bespoke landing pages that resonate with your target audience, incorporating your brand's unique elements and aesthetics." },
          { title: "Optimized for Conversion", description: "Our designs are meticulously crafted to enhance user experience, guiding visitors seamlessly towards your desired action." },
          { title: "Mobile-Responsive", description: "Our landing pages are fully responsive, providing an optimal viewing experience across all devices." },
          { title: "SEO-Friendly", description: "Our Landing Page Design Services integrate SEO best practices, ensuring your page ranks well on search engines." },
          { title: "Fast Loading Speed", description: "Our designs are optimized for speed, providing a smooth and efficient user experience." },
          { title: "A/B Testing", description: "We offer A/B testing options to refine and perfect your landing page, ensuring it delivers the best possible results." },
        ],
        details: [
          "Custom design built around your brand and one clear call to action",
          "Mobile-responsive and SEO-friendly from the start",
          "Fast-loading — a slow landing page loses conversions before it earns them",
          "A/B testing available to refine what actually converts",
          "CRM / email marketing integration",
        ],
        pricing: [
          {
            name: "Basic",
            features: ["Up to 3 sections", "Mobile optimization", "SEO-friendly structure", "1 revision"],
          },
          {
            name: "Standard",
            features: ["Up to 5 sections", "Mobile & tablet optimization", "Basic A/B testing", "3 revisions"],
          },
          {
            name: "Business",
            features: ["Up to 20 sections", "Advanced A/B testing", "Full SEO optimization", "5 revisions"],
          },
        ],
        howItWorks: [
          { title: "Consultation", description: "We start with a detailed consultation to understand your objectives, audience, and design preferences." },
          { title: "Design & Development", description: "Our team designs and builds a visually strong, conversion-focused landing page." },
          { title: "Review & Revisions", description: "We collaborate with you throughout, incorporating feedback to hit your expectations." },
          { title: "Launch & Optimization", description: "Once approved, we launch and keep monitoring performance, adjusting to maximize results." },
        ],
        faq: [
          {
            question: "Why do I need a dedicated landing page?",
            answer: "A landing page is built for one specific campaign and one call to action — it converts visitors into leads or customers far better than sending traffic to a general site.",
          },
          {
            question: "How long does it take to launch?",
            answer: "A basic page: 1-2 weeks. More complex designs with advanced features: 3-4 weeks.",
          },
          {
            question: "Will it be mobile-responsive?",
            answer: "Yes — every landing page we build is fully responsive across phones, tablets, and desktop.",
          },
          {
            question: "Do you handle the copywriting too?",
            answer: "Yes, as an add-on — our team can write SEO-friendly, conversion-focused copy tailored to your audience.",
          },
          {
            question: "Is A/B testing included?",
            answer: "Yes, on the Standard and Business plans — we test different versions to see which converts better.",
          },
        ],
      },
    ],
  },
  {
    slug: "website-app-management",
    name: "Website & Application Management",
    summary: "Ongoing care for something that already exists.",
    services: [
      {
        slug: "website-maintenance",
        name: "Website Maintenance",
        summary: "Keep an existing site updated, backed up, and running.",
        billing: "recurring",
        customHero: {
          headline: "What Do Website Maintenance Services Include?",
          body: "Mostly there is a big sigh of relief once the website is completed and uploaded but just like your car, your body, your house, and even your website need maintenance on a periodic basis. Many people think that website maintenance is majorly about fixing the bugs that pop up after launching it but actually, it encompasses a lot more. Upgrading the website's visual branding, integrating with new systems and updates, or uploading fresh content is all part of maintenance. A website is the first impression of your business and this needs to be in line with the constantly evolving environment around you in order to not fall behind in the competition.",
          ctaLabel: "Get a Free Consultation",
          ctaStyle: "outline",
          align: "left",
        },
        supplementaryImage: { src: "/badge-moneyback-guarantee.webp", alt: "30 days money back guarantee badge" },
        intro: "Plans scale with your site's size and update frequency — get in touch for a quote. 30-day money-back guarantee on every plan. Prefer a single fix instead? One-time support starts at $49.",
        details: [
          "WordPress core, plugin, and theme updates",
          "Cloud backups and uptime monitoring",
          "Security scans and speed optimization",
          "On-page SEO monitoring, broken-link checks",
          "Content and design updates — new sections, blog posts, image swaps",
          "No long-term contracts, cancel anytime",
        ],
        features: [
          { title: "Tailored for Non-eCommerce Sites", description: "We understand business, portfolio, and content-driven websites have different needs than online stores — we optimize accordingly." },
          { title: "Speed, Security & Uptime Priority", description: "We continuously monitor and optimize your website's performance, apply security patches, and ensure stable uptime." },
          { title: "Custom Maintenance Plans", description: "Choose a plan based on your update frequency, size, and platform. No one-size-fits-all." },
          { title: "Content & Design Updates", description: "Need new sections, blog posts, image swaps, or layout tweaks? We handle it for you — no tech skills needed on your end." },
          { title: "Core & Plugin Updates", description: "We safely update WordPress core, themes, and plugins with backup protocols in place." },
          { title: "No Long-Term Contracts", description: "Cancel anytime, no advance payment required — flexible and transparent." },
        ],
        faq: [
          {
            question: "What do you need to get started?",
            answer: "Admin access to your website — ideally a dedicated login, though we're happy to use one you provide. We may also need access to your hosting and domain provider.",
          },
          {
            question: "What's included in a typical edit?",
            answer: "Content edits on any page, banner/header/footer changes, plugin settings, CSS adjustments, blog updates, new landing pages, image/text changes, and coupon codes.",
          },
          {
            question: "What's NOT included?",
            answer: "Custom development (PHP, plugins, themes), updating custom code, graphic design, PSD-to-WordPress, new content creation, or building an entirely new site/subdomain.",
          },
          {
            question: "Can I cancel at any time?",
            answer: "Yes — no long-term contracts, cancel whenever you want.",
          },
          {
            question: "What if I go over my monthly support time?",
            answer: "We'll always try to keep work within your monthly plan, but if something won't fit, you can buy extra hours.",
          },
        ],
      },
      {
        slug: "server-management",
        name: "Server Management",
        summary: "Ongoing management of the server your site or app runs on.",
        billing: "recurring",
        customHero: {
          headline: "One Stop Solution for All Your Managed Hosting & Server Management Needs",
          body: "We are a premium server management company. Equipped with a great cloud-based infrastructure and technical expertise, we render experienced server management services and technical support for Linux and Windows servers based on control panels such as cPanel, Plesk, DirectAdmin, SolusVM, and Virtualizor, and virtualization technologies based on Xen, KVM, VMware, and Hyper-V hypervisors.",
          ctaLabel: "Request a Free Quotation",
        },
        details: [
          "Linux and Windows server support — cPanel, Plesk, DirectAdmin, SolusVM, Virtualizor",
          "Xen, KVM, VMware, and Hyper-V virtualization support",
          "24/7 monitoring, uptime tracking, and incident response",
          "Security hardening, firewall configuration, malware scanning",
          "Application-specific tuning — Apache, NGINX, MySQL, and more",
          "Scheduled backups with secure storage and restore protocols",
          "Custom stack support — Redis, Elasticsearch, Node.js, Docker, and more",
          "Real server admins for support, not a ticketing bot",
        ],
        features: [
          { title: "Linux & Windows Server Expertise", description: "We manage both Linux (Ubuntu, CentOS, openSUSE) and Windows-based servers with precision and security-first protocols." },
          { title: "24/7 Server Monitoring & Incident Response", description: "We proactively monitor uptime, performance, and threats — with alerts and instant fixes as needed." },
          { title: "Security Hardening & Firewall Configuration", description: "From SSH optimization to DDoS mitigation and malware scans, we lock down your server infrastructure." },
          { title: "Application-Specific Optimization", description: "We fine-tune servers for cPanel, WHM, Apache, NGINX, MySQL, and more — ensuring maximum speed and reliability." },
          { title: "Custom Stack & Software Management", description: "Need Redis, Elasticsearch, Node.js, or Docker? We install, configure, and maintain the stack for optimal performance." },
          { title: "Client-Centric, Human Support", description: "Speak to real server admins — not a ticketing bot — for every issue, update, or emergency." },
        ],
        pricing: [
          {
            name: "Management",
            price: "$39.95/mo per server",
            features: [
              "Unlimited admin tasks",
              "Certified admins, 1-hour response time",
              "Full server setup and smart migration",
              "Complete server management and performance optimization",
            ],
          },
          {
            name: "Combo Offer",
            price: "$79.95/mo (20% off, $35 second month)",
            features: [
              "cPanel server management + cPanel security included",
              "1-hour response time",
              "Certified specialist",
            ],
          },
          {
            name: "Security",
            price: "$49.95 one-time per server",
            features: [
              "In-depth server analysis and firewall installation",
              "Antivirus configuration",
              "Disaster/hack recovery, spam security, IP blacklisting",
            ],
          },
        ],
        logoRow: [
          "/panel-cpanel.png",
          "/panel-plesk.png",
          "/panel-directadmin.png",
          "/panel-solusvm.png",
          "/panel-virtualizor.png",
          "/panel-hyperv.png",
        ],
        faq: [
          {
            question: "What do you need to get started?",
            answer: "We'll need admin access to your website, ideally with our own login — though we're happy to use any admin login you provide. We may also need access to your hosting provider and domain registrar.",
          },
          {
            question: "What do the edits include?",
            answer: "Edits to content on any page, changing banners/headers/footers, plugin settings, CSS adjustments, blog content, adding new landing pages, changing images or text, and adding coupon codes.",
          },
          {
            question: "What is NOT included in the edits?",
            answer: "Custom development (PHP, plugins, themes, etc.), updating custom code, graphic design, PSD to WordPress, creation of new content, or building out a new website or subdomain.",
          },
          {
            question: "Do you provide ad-hoc support?",
            answer: "Absolutely — reach out and we can discuss your requirements.",
          },
          {
            question: "What platforms do you support?",
            answer: "Primarily WordPress websites. If your site is built with Wix, Squarespace, or another non-WordPress platform, we're able to assist as well.",
          },
          {
            question: "What is your refund policy?",
            answer: "If you're not happy with the service, you can ask for a refund within 30 days from the date of purchase.",
          },
          {
            question: "Can you develop new websites also?",
            answer: "We don't build new sites ourselves, but we have a referral partner who does website and mobile application development work — contact us and we'll connect you.",
          },
        ],
      },
      {
        slug: "ecommerce-store-management",
        name: "Ecommerce Store Management",
        summary: "Ongoing management for a live online store.",
        billing: "recurring",
        customHero: {
          headline: "eCommerce Website Management",
          body: "Businesses today all have unique needs. We have moved on from when web designing professionals were left to handle all aspects of eCommerce management. Now, you need an excellent eCommerce website management company that will run your entire campaign successfully.",
          ctaLabel: "Get a Free Review of Your Website",
          ctaStyle: "outline",
        },
        formPosition: "early",
        featuresAsList: true,
        featuresHeading: "Why Choose SolvForge for eCommerce Management",
        details: [
          "Product uploads, inventory management, and order processing",
          "Platform and plugin/app updates across Shopify, WooCommerce, Magento, BigCommerce, Wix, and more",
          "On-page, technical, and off-page SEO for the store",
          "Social media management and content bundled in on higher tiers",
          "Multichannel sync — Amazon, eBay, Walmart, Facebook Shops",
          "Security scanning and regular backups",
          "Custom performance reporting: traffic, sales, cart abandonment",
        ],
        features: [
          { title: "eCommerce-First Expertise", description: "We specialize in managing and scaling online stores, not just generic websites — every strategy is tailored for conversions, cart value growth, and UX." },
          { title: "Transparent & Scalable Pricing", description: "Tiered plans that grow with your business — no hidden costs, just clear deliverables." },
          { title: "SEO, Speed, and Sales Focus", description: "From on-page and technical SEO to product speed optimization, our work directly impacts your visibility and sales pipeline." },
          { title: "All-in-One Service Coverage", description: "We handle product management, social media, blog content, and performance optimization — eliminating the need for multiple vendors." },
          { title: "Tailored Reporting & KPIs", description: "Monthly or bi-weekly reports built to track what matters: product indexing, traffic, conversions, load times, link growth." },
          { title: "Integration Ready", description: "From Shopify and WooCommerce to Amazon, Walmart, and Facebook Shops — we help you sync and scale across platforms." },
        ],
        pricing: [
          {
            name: "Starter",
            features: [
              "Up to 200 product uploads/updates monthly",
              "Essential speed optimization",
              "On-page SEO for homepage, categories, products",
              "1 platform social media (4 posts/mo)",
              "1 SEO article/mo, security scan + monthly backup",
            ],
          },
          {
            name: "Growth",
            features: [
              "Up to 1,000 product uploads/updates monthly",
              "CDN + caching setup",
              "2 platforms social media (12 posts/mo)",
              "2 SEO articles/mo, bi-weekly audit + backup",
              "Automated inventory sync",
            ],
          },
          {
            name: "Enterprise",
            features: [
              "Up to 2,000 product uploads/updates monthly",
              "Full speed optimization incl. code cleanup + CDN",
              "3 platforms social media (20 posts/mo + engagement)",
              "4 SEO articles/mo, weekly audit + backup",
              "Multichannel integration, email/chat/phone support",
            ],
          },
        ],
        testimonial: {
          quote: "They took our store from chaos to calm. Everything runs smoothly now — orders, stock, and even customer queries.",
          author: "Anna M., Shopify Store Owner",
        },
        faq: [
          {
            question: "What's included in your eCommerce management service?",
            answer: "Product uploads, inventory management, order processing, platform updates, speed optimization, and customer support integration — tailored to your store's needs.",
          },
          {
            question: "Do you manage all eCommerce platforms?",
            answer: "Yes — Shopify, WooCommerce, Magento, BigCommerce, Wix, and others, whether hosted or self-managed.",
          },
          {
            question: "Do you support multichannel selling (Amazon, eBay, Walmart)?",
            answer: "Yes — we sync and manage inventory, orders, and listings across multiple marketplaces so you can scale without the manual overhead.",
          },
          {
            question: "Can I pick specific tasks instead of a full plan?",
            answer: "Yes — full-service management or à la carte (product management, SEO updates, technical maintenance) are both available.",
          },
          {
            question: "Do you offer emergency support?",
            answer: "Yes — prompt troubleshooting and emergency support to minimize store downtime.",
          },
        ],
      },
      {
        slug: "magento-site-management",
        name: "Magento Site Management",
        summary: "Specialized ongoing management for Magento stores.",
        billing: "recurring",
        customHero: {
          headline: "Magento Website Development",
          body: "We are a Magento Website Development Partner, backed by a team of strong Magento developers.",
          ctaLabel: "Get a Free Quotation",
          ctaStyle: "outline",
        },
        supplementaryImage: { src: "/hero-magento.jpg", alt: "Magento logo icon" },
        featuresHeading: "The Magento Advantage",
        features: [
          { title: "Third Party", description: "Magento API supports countless third-party services, including CRM, ERP, payment modules, etc. It also allows users to connect with other eCommerce platforms, customized payment solutions and add analytical tools to boost site efficiency." },
          { title: "Load Pages Faster", description: "Magento has speed and allows pages to load faster than its counterparts. Fast loading pages are one reason visitors buy from a page. Get your eCommerce store to load faster with Magento." },
          { title: "Secure Your Site", description: "Magento provides patches and security updates that allow you to manage and monitor your sites for malware, security risks, and third-party vulnerabilities via free security tools." },
          { title: "Hosting", description: "No sleepless nights! 99.9% uptime hosting, with top-of-the-line equipment and system admins and developers ready to help you — best customer service, best bang for the buck." },
          { title: "CMS", description: "Give your customers a unique online experience and boost sales, retention, and conversion on a single platform — with unlimited support and excellent hosting behind your Magento store." },
          { title: "SEO-Ready", description: "Understanding how SEO works isn't simple for online store owners, and if you intend to succeed online, you need a platform that's SEO-ready and friendly to boost your products and services on major search engines." },
        ],
        details: [
          "Magento-specific patching and security updates",
          "Performance tuning for catalog-heavy stores — Magento scales to 500,000+ products",
          "Third-party service integration (CRM, ERP, payment modules)",
          "Extension conflict troubleshooting",
          "SEO-ready configuration and ongoing optimization",
        ],
        faq: [
          {
            question: "What is Magento?",
            answer: "An open-source PHP eCommerce platform built for businesses that need real product, category, inventory, and order management, with Google Analytics integration built in.",
          },
          {
            question: "How well does Magento scale?",
            answer: "It's built on flexible, open-source technology — businesses can scale functionality, content, and store design as they grow, without switching platforms.",
          },
          {
            question: "Can you install and customize Magento themes?",
            answer: "Yes — theme installation and customization to give your store a professional, on-brand look.",
          },
        ],
      },
    ],
  },
];

export function getAllCategories(): ServiceCategory[] {
  return SERVICE_CATEGORIES;
}

export function getCategory(categorySlug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
}

export function getService(
  categorySlug: string,
  serviceSlug: string
): { category: ServiceCategory; service: ServiceItem } | undefined {
  const category = getCategory(categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);
  if (!category || !service) return undefined;
  return { category, service };
}

/** Every service across all categories, flattened. Service slugs are unique,
 *  so every service is addressable as /services/<slug>. */
export function getAllServices(): {
  category: ServiceCategory;
  service: ServiceItem;
}[] {
  return SERVICE_CATEGORIES.flatMap((category) =>
    category.services.map((service) => ({ category, service }))
  );
}

export function getServiceBySlug(
  serviceSlug: string
): { category: ServiceCategory; service: ServiceItem } | undefined {
  return getAllServices().find(({ service }) => service.slug === serviceSlug);
}
