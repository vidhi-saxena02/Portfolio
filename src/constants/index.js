import { atp, qs, here, edu, nasa } from "../assets/images";
import {
  threads,
  ment,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  flutter,
  nodejs,
  cpp,
  python,
  dart,
  blender,
  unreal,
  svelte,
  react,
  redux,
  docker,
  kub,
  tailwindcss,
  jenkins,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Programming Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: dart,
    name: "Dart",
    type: "Programming Language",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: svelte,
    name: "Svelte",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DEVOPS AND DEPLOYMENT",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "DEVOPS AND DEPLOYMENT",
  },
  {
    imageUrl: kub,
    name: "Kub",
    type: "DEVOPS AND DEPLOYMENT",
  },
  {
    imageUrl: blender,
    name: "Blender",
    type: "3D Modeling",
  },
  {
    imageUrl: unreal,
    name: "Unreal Engine",
    type: "Game Development",
  },
];

export const experiences = [
  {
    title: "Associate Flutter Developer",
    company_name: "INFOZ TECHCRAFT PRIVATE LIMITED",
    link: "https://educircle.in/",
    icon: edu,
    iconBg: "#fee5fa",
    date: "January 2022 – April 2022",
    points: [
      "Spearheaded front-end development efforts as a Flutter Developer at a dynamic startup.",
      "Contributed to the development of Educircle, an education app.",
      "Crafted and implemented user-friendly interfaces to enhance the overall app experience.",
      "Successfully collaborated on the integration of design elements into the final product.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "QURINOM SOLUTIONS",
    icon: qs,
    link: "https://qurinomsolutions.com/",
    iconBg: "#fbc3bc",
    date: "May 2022 - July 2022",
    points: [
      "Led the development of a multifaceted camera-video-social app Biscuit, powered by AI and AR, enabling users to showcase their talents through camera, music, video, social networking, and educational features.",
      "Developed with GETx state management and implemented MVC architecture.",
      "Integrated Firebase for real-time data synchronization and utilized Express.js and MongoDB for backend development.",
      "Proficient in Node.js for server-side scripting.",
    ],
  },
  {
    title: "Reactjs Developer",
    company_name: "SYNTHESIS INC",
    link: "https://askthepod.com",
    icon: atp,
    iconBg: "#FDEDDF",
    date: "Jan 2023 - July 2023",
    points: [
      "Developed the entire front-end architecture from scratch, utilizing React.js.",
      "Implemented user authentication using Firebase, ensuring secure access to the application and protecting user data.",
      "Leveraged React Query to efficiently manage data fetching and state management, improving performance and user experience.",
      " Designed and styled the userinterface using Tailwind CSS, creating a visually appealing and responsive application.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Here Technologies",
    link: "https://www.here.com/",
    icon: here,
    iconBg: "#CEE0E0",
    date: "July 2023 - Dec 2023",
    points: [
      "Developed features for HERE Navigation app, WEGO, as a Flutter Frontend Developer",
      "Managed tasks through Jira, providing daily progress updates in stand-up meetings.",
      "Applied Bloc pattern for effective state management and implemented Hook Widget for flexible widget management",
      "Active participation in sprint planning and grooming meetings, contributing to story point assignments",
    ],
  },
];

export const projects = [
  {
    iconUrl: atp,
    theme: "btn-back-yellow",
    name: "Ask The Pod",
    description:
      "AskThePod provides an AI companion service, offering summaries and Q&A for Business, Tech, and Health/Fitness podcasts. It caters to individuals with limited time, allowing them to stay informed without investing hours daily in podcast consumption. This service enhances accessibility for those interested in diverse topics, providing a convenient solution for podcast enthusiasts on the go.",
    link: "https://askthepod.com",
  },
  {
    iconUrl: threads,
    theme: "btn-back-pink",
    name: "EZ Allocate",
    description:
      "EZ Allocate streamlines university operations by efficiently assigning teachers to various courses while ensuring they stay within their maximum limits. The application allows for the allocation of lecture, tutorial, and practical classes based on teachers' preferences. Additionally, EZ Allocate generates comprehensive Excel reports, providing a clear overview of the teacher-course assignments and distribution of hours.",
  },
  {
    iconUrl: nasa,
    theme: "btn-back-black",
    name: "NASA Mission Control Project",
    description:
      "The website enables users to schedule missions with destinations set to habitable Kepler Exoplanets. This innovative website harnesses Node API technology, offering a space-themed experience where users can plan and simulate missions to distant, potentially habitable planets. It combines the excitement of space exploration with cutting-edge technology to engage users in a thrilling journey beyond our solar system.",
    link: "https://github.com/vidhi-saxena02/NASA-PROJECT",
  },
  {
    iconUrl: ment,
    theme: "btn-back-blue",
    name: "Mentisano",
    description:
      "Mentisano offers a comprehensive mental health platform with engaging games, a unique 'Rent a Person' service for companionship, guided breathing exercises, therapist booking, and relaxing videos. The app aims to address stress, anxiety, and depression while prioritizing user privacy. With features like Rent a Person and diverse relaxation methods,Mentisano seeks to make mental health support accessible and positive.",
    link: "https://github.com/vidhi-saxena02/Mentisano",
  },
];
