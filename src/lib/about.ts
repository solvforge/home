export type ProcessStep = {
  step: string;
  name: string;
  description: string;
};

export type ExperienceEntry = {
  title: string;
  level: string;
  description: string;
};

export const HERO_TAGLINE = "Increasing the chances of a better tomorrow!";
export const ROLE_TITLE = "Product Designer";
export const YEARS_BADGE = "7+ Years of Experience";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    name: "Business Strategy & Research",
    description:
      "Initial contact: reach out to schedule a consultation. We take time to understand your vision, assess what you need, and discuss your preferences.",
  },
  {
    step: "Step 02",
    name: "Define & Design",
    description:
      "We turn the research into a concrete plan — scope, structure, and design direction — before any build work starts.",
  },
  {
    step: "Step 03",
    name: "Evaluate",
    description:
      "We review the work together, gather feedback, and refine until it's right.",
  },
  {
    step: "Step 04",
    name: "Business Outcome",
    description:
      "We ship, hand off, and stay available for ongoing support so the result keeps working for you.",
  },
];

export const WORK_EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Product Designer",
    level: "Design Expert",
    description:
      "Product designs shaped by research, usability, and purpose to create meaningful and practical solutions.",
  },
  {
    title: "Senior UI/UX Designer",
    level: "Design Expert",
    description:
      "An experienced senior UI/UX designer specializing in creating intuitive, user-centered digital experiences. Leads the design process from research and wireframing to prototyping and final interfaces, ensuring usability, aesthetics, and functionality are aligned. Guides junior team members, provides strategic design solutions, and contributes to high-quality, engaging web and mobile products.",
  },
  {
    title: "Junior Designer",
    level: "Mid-level",
    description:
      "A proactive junior designer skilled in creating visual elements, layouts, and supporting design projects from concept to completion. Assists with UI/UX design, branding, and ongoing creative tasks while gaining experience in industry tools and best practices. Brings fresh ideas and attention to detail to enhance project quality.",
  },
  {
    title: "Lead UI/UX Designer",
    level: "Expert",
    description:
      "In-depth UX research to identify user needs, expectations, and challenges before designing meaningful solutions.",
  },
  {
    title: "Graphics & UI Designer",
    level: "Mid-Level",
    description:
      "A versatile graphics and UI designer skilled in creating visually appealing interfaces and digital assets. Focuses on blending aesthetics with usability to enhance user experience across web and mobile platforms. Works on branding, layout design, icons, and interactive elements while ensuring consistency, clarity, and engagement in every project.",
  },
  {
    title: "Intern Designer",
    level: "Internee",
    description:
      "A motivated intern designer who supports design projects through research, layout assistance, and creative exploration. Works closely on visual concepts, basic UI elements, and design improvements while learning industry standards, tools, and best practices. Contributes fresh ideas and assists in maintaining design consistency across projects.",
  },
];

export const TOOLS: ExperienceEntry[] = [
  {
    title: "Adobe Illustrator",
    level: "Creative Designer",
    description:
      "Skilled in creating vector graphics, illustrations, and visual assets for web, mobile, and branding projects with precision and creativity.",
  },
  {
    title: "Adobe Photoshop",
    level: "Creative Designer",
    description:
      "Proficient in creating and editing visuals, layouts, and digital assets with attention to detail and visual consistency.",
  },
  {
    title: "After Effects",
    level: "Creative Designer",
    description:
      "Experienced in creating smooth animations and motion graphics that enhance visual storytelling and user engagement.",
  },
  {
    title: "Master in Sketch",
    level: "Creative Designer",
    description:
      "Experienced in designing clean, user-friendly interfaces and layouts using Sketch, focused on clarity, usability, and consistency.",
  },
  {
    title: "Expert in Figma",
    level: "Creative Designer",
    description:
      "Skilled in designing collaborative, user-focused interfaces and prototypes using Figma with clarity and consistency.",
  },
  {
    title: "Specialist Miro",
    level: "Creative Designer",
    description:
      "Experienced in using Miro for collaboration, user flows, wireframing, and visual planning to streamline design processes.",
  },
];

export const EDUCATION: ExperienceEntry[] = [
  {
    title: "B.Tech (Bachelor of Technology)",
    level: "Jamia University",
    description:
      "Strong technical foundation with practical knowledge in technology, problem-solving, and modern digital systems.",
  },
  {
    title: "Red Hat Certified Professional",
    level: "RedHat",
    description:
      "Certified in Linux system administration, server management, and enterprise-level configurations.",
  },
  {
    title: "Certification in .NET Technologies",
    level: "Microsoft",
    description:
      "Hands-on experience with application development using Microsoft .NET frameworks and tools.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    level: "AWS",
    description:
      "Foundational knowledge of cloud concepts, AWS services, security, and cloud-based solutions.",
  },
];

export const TAGLINES = [
  "Making websites that work for you",
  "Empowering Imaginations",
  "Better People, Better Websites",
];
