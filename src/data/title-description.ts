export interface CustomMetadata {
  metadataBase?: URL;
  title?: {
    default: string;
    template: string;
  };
  description?: string;
  keywords?: Array<string>;
  authors?: Array<{ name: string }>;
  alternates?: object;
  openGraph?: object;
  twitter?: object;
  icons?: {
    icon: string;
  };
}

export const customMetadata: CustomMetadata = {
  metadataBase: new URL("https://www.khofiyatul-awaliyah.vercel.app"),
  title: {
    default: "Khofiyatul Awaliyah Portfolio",
    template: "%s | Khofiyatul Awaliyah Portfolio",
  },
  description: "Explore the official portfolio of Khofiyatul Awaliyah.",
  keywords: ["Khofiyatul Awaliyah", "Website Portfolio"],
  authors: [{ name: "Khofiyatul Awaliyah" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khofiyatul Awaliyah",
    description: "Explore the official portfolio of Khofiyatul Awaliyah.",
    url: "https://www.khofiatulawaliyah.my.id",
    siteName: "Khofiyatul Awaliyah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khofiyatul Awaliyah",
    description: "Explore the official portfolio of Khofiyatul Awaliyah.",
  },
  icons: {
    icon: "/logo/khofi-logo.png",
  },
};
