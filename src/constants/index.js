import {
  rain,
  site,
  kraft,
  mobile,
  backend,
  creator,
  web,
  Citrok,
  portfoilio,
  soutvilleSite,
  crypto
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Typescript",
    icon: creator,
  },
  {
    title: "Node.js",
    icon: backend,
  },
  {
    title: "Express.js",
    icon: web,
  }
];

const experiences = [
  {
    title: "Web Engineer",
    company_name: "CITROK",
    icon: Citrok,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using js, Typescript, React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in  scrums, code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "CiTROK",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Rain.com",
    description:
      "A web3 project to trade crypto.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Adobe-photo-shop",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
    ],
    image: rain,
    source_code_link: "",
  },
  {
    name: "crypto site",
    description:
      "The porfolio for crypto site with live data and orderbook",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: crypto,
    source_code_link: "",
  },
  {
    name: "Golf Kraft",
    description:
      "A Golf website for Golf lovers in uae",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: kraft,
    source_code_link: "",
  },
  {
    name: "Club-lab-golf-website",
    description:
      "A Golf website for Golf lovers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: site,
    source_code_link: "",
  },
  {
    name: "Southville Solution Site",
    description:
      "Web application that is used for customer support for southville solutions and this let know the client about the project completed and achievement made by the company.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: soutvilleSite,
    source_code_link: "",
  },
  {
    name: "Personal Portfolio",
    description: "Web application that my own project works and achievement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfoilio,
    source_code_link: "https://github.com/Muneebhaffar01/React-Portfolio",
  },
];

export { services, experiences, testimonials, projects };
