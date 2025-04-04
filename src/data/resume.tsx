import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Piero Rolando",
  initials: "PR",
  url: "https://piero.frankrolando.com",
  location: "Trujillo, PE",
  locationLink: "https://www.google.com/maps/place/trujillo",
  description:
    "Software Engineer. I love building things and helping people.",
  summary:
    "At the end of 2020, at the age of 14, I started the journey of programming. I was fascinated by the idea of creating something from scratch. I fall in love with computer science.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72224217",
  skills: [
    "Software Engineering",
    "Software Architecture",
    "Full Stack Development",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Flutter",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rolandopiero63@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/pierorolando-gh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/in-pierorolando",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/x-pierorolando",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/yt-pr",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Recolocate",
      href: "https://recolocate.pe/",
      badges: [],
      location: "Santiago de Surco, PE",
      title: "Software Engineer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnE7JOUJgDjJLtcRZyzitUV64ZBpdjNfwxrw&s",
      start: "Aug 2023",
      end: "Present",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Frank Rolando",
      href: "https://frankrolando.com/",
      badges: [],
      location: "Trujillo, PE",
      title: "Freelancer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQGG-TF3KVEyyQ/company-logo_100_100/company-logo_100_100/0/1630599273343/frankrolando_logo?e=2147483647&v=beta&t=OO6GwHUmpqr6uzil5ixLubBSbCh8cLsadGsROtNDsoE",
      start: "Dec 2020",
      end: "Aug 2025",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "National University of Trujillo",
      href: "https://unitru.edu.pe/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "https://corladlalibertad.org.pe/wp-content/uploads/2022/06/UNT.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    /*{
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    }*/
  ],
  hackathons: [
    /*{
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }*/
  ],
} as const;
