export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "",
    title:
      "Discourse Analysis of Xenophobia and Identity Politics in Contemporary South Africa",
    authors: "Khofiyatul Awaliyah, Yoga Suharman, Isti Nur Rahmawati",
    paperUrl:
      "https://globalfocus.ub.ac.id/index.php/globalfocus/article/view/251",
    codeUrl: "https://doi.org/10.21776/ub.jgf.2026.006.01.3",
    bibtex: "",
    tldr: "",
    imageUrl: "",
    award: "",
  },
  {
    year: "2026",
    conference: "",
    title:
      "Understanding Indonesian Students’ Perceptions of Japan through One Piece as Cultural Diplomacy: The Case of Yogyakarta",
    authors: "Khofiyatul Awaliyah, Isti Nur Rahmawati",
    paperUrl: "https://ejournal.undip.ac.id/index.php/ip/article/view/71860",
    codeUrl: "https://doi.org/10.14710/ip.v11i1.71860",
  },
];
