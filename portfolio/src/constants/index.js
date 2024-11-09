import project1 from "../assets/projects/Portfolio.png";
import project2 from "../assets/projects/Textutils.png";


export const HERO_CONTENT = `I am a third year Computer Engineering student skilled in frontend web development using the React. I am proficient in multiple programming languages including Python, C++. Additionally, I have a strong foundation in Data Structures and Algorithms (DSA). My goal is to apply my skills to build scalable and innovative web applications that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a third year Computer Engineering student with expertise in frontend web development using the React stack. I am proficient in a range of programming languages including Python, C++. My strong foundation in Data Structures and Algorithms (DSA). I thrive on solving complex problems and leveraging my technical skills to create impactful solutions. Outside of academics, I enjoy exploring new technologies, staying active, and contributing to open-source projects.`;

export const EXPERIENCES = [
 
  {
    year: "Oct-24 - Nov-24",
    role: "Frontend Devlopment Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    description: `Oasis Infobyte offers a variety of website design and development services. Developing static websites using HTML, CSS, JavaScript, and Bootstrap at Oasis Infobyte.
                           Learning and applying API fetching, React as part of the  projects.`,
    technologies: ["React", "Javascript", "Bootstrap", "Html & Css"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    link:"https://port-folio-mahesh-rauts-projects.vercel.app/",
    image: project1,
    duration:"Sept-24 - Oct-24",
    description: "A personal portfolio website showcasing projects, skills, and contact information. Built to highlight my expertise in Frontend development with an interactive and responsive design. The site provides an easy way to explore my work, background, and ways to get in touch.",
    technologies: ["React.js", "TailwindCSS", "Framer-Motion"],
  },
  {
    title: "TextEdit- App for Editing the Text",
    link:"abaditya07.github.io/TextUtilsApp/",
    image: project2,
    duration:"Jul-24 - Aug-24",
    description:"TextEdit is a simple and powerful web application made with React and Bootstrap using the create-react-app bundler. The app provides various features to manipulate and analyze text, such as converting text to uppercase or lowercase, removing extra spaces, copying text to the clipboard, and counting words and characters.",
    technologies: ["React.js", "BootStrap"],
  },
];

export const CONTACT = {
  address: "Sant Tukaram Nagar, Pimpri, Pune - 411018",
  phoneNo: "+91 9322040498",
  email: "adityabhure63@gmail.com",
};
