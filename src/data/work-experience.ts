export interface WorkExperience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const workExperienceData: WorkExperience[] = [
  // {
  //   date: "Summer 2023",
  //   title: "IT Staff Intern",
  //   company: "PT Event Hunter Indonesia",
  //   description:
  //     "Experienced in managing network maintenance, database administration, software installations, and system deployment, alongside handling SMS marketing campaigns to support operational and promotional objectives.",
  //   advisor: "",
  //   manager: "",
  //   companyUrl: "",
  // },
  {
    date: "July 2024 - June 2025",
    title: "Social Medial Specialist Freelance",
    company: "PT Bukhori Grup Indonesia",
    description:
      "Skilled in analyzing social media performance and developing targeted digital marketing strategies and content plans to boost engagement, alongside delivering prompt, solution-oriented customer support across digital channels to maximize customer satisfaction.",
    advisor: "",
    manager: "",
    companyUrl: "",
  },
  {
    date: "September 2025  - December 2025",
    title: "Internship",
    company: "Bandung City Cooperation Section",
    description:
      "Experienced in managing administrative documentation, official memos, and internal and external meeting minutes for the Bandung City Government alongside line ministries, inter-regional partners, NGOs, and international stakeholders. Proven track record in supporting cross-border coordination for major events—including the Asia-Africa Youth Forum and Festival—and facilitating city-to-city partnerships with Hamamatsu, Kawasaki, and Chungnam.",
    advisor: "",
    manager: "",
    companyUrl: "https://www.bagian.kerjasama.bandung.go.id/",
  },
];
