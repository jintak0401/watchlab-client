const navLinks: {
  [key in 'en']: { name: string; href: string }[];
} = {
  en: [
    {
      name: 'STUDY',
      href: '/study',
    },
    {
      name: 'JOURNAL',
      href: '/journal',
    },
    {
      name: 'MANUALS',
      href: '/manuals',
    },
    {
      name: 'PROFILES',
      href: '/profiles',
    },
    {
      name: 'GLOSSARY',
      href: '/glossary',
    },
    {
      name: 'ABOUT US',
      href: '/about',
    },
  ],
};

export const aboutUsLinks = [
  {
    name: 'Who We Are',
    href: 'who-we-are',
  },
  {
    name: 'Our Services',
    href: 'our-services',
  },
  {
    name: 'Terms and Conditions',
    href: 'terms-and-conditions',
  },
  {
    name: 'Get in Touch',
    href: 'get-in-touch',
  },
];

export default navLinks;
