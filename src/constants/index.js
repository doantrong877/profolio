import {
  tulipnails,
  smoothstack,
  java,
  python,
  sql,
  springboot,
  aws,
  flask,
  jenkins,
  ansible,
  kubernetes,
  terraform,
  devop,
  cloud,
  thisistrong,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS Developer",
    icon: cloud,
  },
  {
    title: "DevOps Developer",
    icon: devop,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "sql",
    icon: sql,
  },
 
  
];

const experiences = [
  {
    title: "Cloud/DevOps Developer",
    company_name: "Smoothstack",
    icon: smoothstack,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Current",
    points: [
      "Created Dockerfiles and Docker-Compose files to create images for each microservice.",
      "Achieved high scalability of microservices through Amazon Elastic Kubernetes Cloud Services.",
      "Developed CI/CD pipeline with Jenkins, Terraform, and Kubernetes to ensure up-to-date and stable microservices.",
      "Created CloudFormation and Terraform templates for easy stack creation and rapid deployment.",
      "Developed Data Simulator for the purpose of providing extensive testing to services prior to full-scale deployment.",
      "Worked in a team environment utilizing DevOps tools such as Jira Boards and Confluence to document Agile approach.",
    ],
  },
  {
    title: "Servicenow Developer",
    company_name: "Smoothstack",
    icon: smoothstack,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Stand up a ServiceNow instance and re-baseline ITSM to an OOTB functionality.",
      "Streamlined IT Support with Teams Integrations and Virtual Agent.",
      "Implemented Azure AD Integration, Field Masking, and Custom Access Controls.",
      "Configured and scripted Advanced Work Assignment.",
      "Utilized Twilio for SMS Integration and CTI Integration.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Tulip Nails & Spa",
    icon: tulipnails,
    iconBg: "#E6DEDD",
    date: "Jul 2017 - Sep 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Leveraged development and AWS for reliable hosting and ongoing maintenance of the website, ensuring seamless performance and scalability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using MongoDb to store user data and send out promotions periodically to client email with API calls.",
    ],
  },
];



const projects = [
  {
    name: "PromptHub",
    description:
      "Web-based platform that allows users to discover and share prompt ideas to get the best performance out of their AI assistant   ",
    tags: [
      {
        name: "react/nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "googleAi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://prompthub.trongdoan.com/",
  },
  {
    name: "MeetLoop",
    description:
      "Web application that allows users to initiate and participate in video calls. It includes features for user authentication, record meeting, call scheduling, and real-time communication.",
    tags: [
      {
        name: "react/nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "api(stream-clerk)",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://meetloop.trongdoan.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
