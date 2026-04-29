import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ankit Pandey",
  initials: "AP",
  url: "https://ankitpandey.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "MySQL, Python, Excel and Tableau",
  summary:
    "Data analyst skilled in SQL and PostgreSQL for querying, Excel for reporting, and Python for data cleaning and exploratory data analysis (EDA). Experienced in building dashboards and visualizations with Tableau to translate data into actionable insights.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36405347?v=4",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ankitpandey.connect@gmail.com",
    tel: "+91 7985592129",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ankitgkp",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankit-pandey01/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/noisy_ankit",
        icon: Icons.x,

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
      company: "Zigguratss",
      href: "https://zigguratss.com/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl:
        "https://zigguratss.com/assets/upload/daf46078cec518ef7578288b9247f153.png",
      start: "Mar 2026",
      end: "Present",
      description:
        "Optimized product APIs using GraphQL to improve performance and reduce unnecessary data fetching significantly, built scalable Node.js and Express services with database integration and efficient backend architecture design, and enhanced API response time using clean architecture practices while improving overall system maintainability effectively.",
    },
    {
      company: "ZoronTech",
      href: "https://zorontech.com/",
      badges: [],
      location: "Remote",
      title: "Mern Stack Intern",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQFJiXUaBhBTKA/company-logo_200_200/B56ZapLvpDGsAM-/0/1746595150946/zorontech_logo?e=2147483647&v=beta&t=hHeCZkpKk0yYQhpypvYLkSxps2U_6RCGP-2xi_tNyOQ",
      start: "Sept 2025",
      end: "Dec 2025",
      description:
        "Designed and managed RESTful APIs with database integration, handling data validation and core business logic, while implementing end-to-end CRUD operations to ensure seamless frontend–backend interaction across modules. Additionally, developed responsive and reusable React.js components for a consistent UI and improved user experience, and actively collaborated on debugging, optimization, and performance enhancements by following clean code best practices.",
    },
  ],
  education: [
    {
      school: "Newton School of Technology",
      href: "https://www.newtonschool.co/newton-school-of-technology-nst/home",
      degree: "Bachelor of Technology in Artificial Intelligence",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIrxSHP1HFyxIAQoQhNSGRFqJxF0zPmqxDw&s",
      start: "2024",
      end: "2028",
    },
    {
      school: "RD International School",
      degree: "Intermediate",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-lNlSwlj2HqwQRhC-m7BQ4OBXTVC2Gsczg&s",
      start: "2023",
      end: "2024",
    },
    {
      school: "Army Public School",
      href: "https://www.awesindia.com/",
      degree: "Matriculation",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpWr_-zY6C1Uj-ZCTgVsZDBjV_3b-eGH0vA&s",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Housing Market Pricing Analysis",
      href: "https://github.com/Ankitgkp/Housing-Market-Pricing-Analysis",
      dates: "Apr 2026",
      active: false,
      description:
        "Hands-on King County housing analysis focused on how property attributes and location influence sale prices. Built a repeatable EDA workflow with feature engineering (price per sqft, house age, price tiers), explored price drivers (size, grade, view, waterfront), and mapped geographic signals by zipcode. Documented insights and packaged Tableau-ready assets for stakeholder storytelling.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "EDA",
      ],
      links: [
        {
          type: "Live",
          href: "https://public.tableau.com/views/HousingPriceAnalysisTableauDashboard_17774099593130/HousingAnalysis?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ankitgkp/Housing-Market-Pricing-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/placeholder-cube.png",
      video: "",
    },
    {
      title: "Police Shootings Analysis",
      href: "https://github.com/Ankitgkp/A_G8_PoliceShootingsAnalysis",
      dates: "Apr 2026",
      active: false,
      description:
        "Collaborated with five teammates to clean and analyze police shooting data using notebooks, reports, and Tableau-style visual summaries. Performed EDA to explore demographic, geographic, and time-based patterns, then distilled results into clear metrics and visuals that highlight trends and data quality considerations.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "EDA",
      ],
      links: [
        {
          type: "Live",
          href: "https://public.tableau.com/views/v3DVA_Capstone2-EditedbyAdithya/Dashboard3-Impact?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ankitgkp/A_G8_PoliceShootingsAnalysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/placeholder-sphere.png",
      video: "",
    },
    {
      title: "Flight Delay Analysis",
      href: "https://github.com/arya-p-gh/SectionA_Group18_FlightDelayAnalysis",
      dates: "Apr 2026",
      active: false,
      description:
        "Collaborated with five teammates on an operational performance study of flight delays across airlines, weekdays, and airports. Cleaned and validated a 5,000‑record sample derived from 1,050,000+ flights, engineered delay categories and KPIs, and built Google Sheets dashboards to compare airline performance, weekday trends, and airport bottlenecks.",
      technologies: [
        "Python",
        "Pandas",
        "SQL",
        "Matplotlib",
        "Seaborn",
        "EDA",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/arya-p-gh/SectionA_Group18_FlightDelayAnalysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/placeholder-pyramid.png",
      video: "",
    },
    {
      title: "UFO Sightings Analysis (Tableau)",
      href: "https://github.com/Ankitgkp/UFO-Sightings-Analysis-Tableau",
      dates: "Apr 2026",
      active: false,
      description:
        "Exploratory analysis of the Kaggle UFO sightings dataset with a Python → Tableau workflow. Cleaned malformed rows, fixed datetime inconsistencies, normalized types, removed outliers, and enriched country fields before exporting a curated dataset. Built an interactive Tableau dashboard highlighting temporal trends, geographic hotspots, and country-level summaries.",
      technologies: ["Tableau", "Python", "Excel", "EDA", "Data Cleaning"],
      links: [
        {
          type: "Live",
          href: "https://public.tableau.com/views/UFOSightings_17774017787200/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ankitgkp/UFO-Sightings-Analysis-Tableau",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/placeholder-torus.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
