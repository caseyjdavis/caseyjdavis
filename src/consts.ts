export type CollectionName = "blog" | "projects" | "talks";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "Casey J. Davis",
  description: "Systems Engineer in Denver, Colorado",
  author: "Casey Davis",
  authorPhotoSrc: "/caseyjdavis.png",
  logo: {
    darkThemeSrc: "/logo/logo.png",
    lightThemeSrc: "/logo/logo.png",
  }
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
}

export const HOME: HomeSite = {
  blogEntries: 10,
  projectEntries: 5,
  talkEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:casey.j.davis@gmail.com",
    displayAs: "casey.j.davis@gmail.com",
  },
  {
    type: "GitHub",
    href: "https://github.com/caseyjdavis",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/mrcaseyjdavis/",
  },
];
