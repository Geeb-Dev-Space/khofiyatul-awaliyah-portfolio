export type LanguageLevel =
  | "Beginner"
  | "Elementary"
  | "Intermediate"
  | "Advanced"
  | "Fluent"
  | "Native";

export interface Language {
  language: string;
  level: LanguageLevel;
}

export interface Skill {
  label: string;
}

export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  linkedin?: {
    username: string;
    url: string;
  };
  twitterUsername?: string;
  blogUrl?: string;
  cvUrl?: string;
  institutionUrl?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  languages?: Language[];
  softSkills?: Skill[];
  hardSkills?: Skill[];
}

export const aboutMe: AboutMe = {
  name: "Khofiyatul Awaliyah",
  title: "Bachelor of Social Science",
  institution: "Amikom Yogyakarta University",
  description:
    "International Relations graduate (GPA 3.65) with hands-on experience in project management, event coordination, PR, and administration. Proven track record of leading international forums, with strong communication and organizational skills.",
  email: "khofiyatulawaliyah123@gmail.com",
  imageUrl: "/images/profile.jpeg",
  linkedin: {
    username: "khofiyatul-awaliyah",
    url: "khofiyatul-awaliyah-a0646a2ab",
  },
  twitterUsername: "",
  blogUrl: "",
  cvUrl: "/documents/CV_KHOFIYATUL AWALIYAH.pdf",
  institutionUrl: "https://amikom.ac.id/",
  funDescription: "",
  secretDescription: "",
  altName: "",
  languages: [
    { language: "Indonesian", level: "Native" },
    { language: "Javanese", level: "Fluent" },
    { language: "English", level: "Beginner" },
    { language: "Mandarin", level: "Beginner" },
  ],
  softSkills: [
    { label: "Leadership" },
    { label: "Administration" },
    { label: "Team Coordination" },
    { label: "Analysis" },
  ],
  hardSkills: [
    { label: "Project Management" },
    { label: "Event Coordination" },
    { label: "Social Media Management" },
    { label: "Public Relations" },
  ],
};
