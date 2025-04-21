import project2 from "../assets/projects/Portfolio.png";
import project1 from "../assets/projects/Textutils.png";
import project3 from "../assets/projects/job.png";
import project4 from "../assets/projects/prediction.png";
import project5 from "../assets/projects/leetcode.png";



export const HERO_CONTENT = `I am a third year Computer Engineering student skilled inFull Stack Development and Machine Learning. I am proficient in multiple programming languages including Python, C++. Additionally, I have a strong foundation in Data Structures and Algorithms (DSA). My goal is to apply my skills to build scalable and innovative web applications that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a Computer Engineer with a pronounced focus on Full Stack Development and Machine Learning,  studying at Dr. D. Y. Patil Institute of  Technology in Pune, I am eager to apply my skills to real-world software projects. Known for my meticulous attention to
 detail and innovative solutions, I am a passionate and self-driven professional on a quest to leverage technology to  make the world a better place.`;

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
    title: "CodeWise – Company-Specific LeetCode Practice App",
    link:"company-wise-leetcode-practice-app-qbt5gthx4fcjp3em7zg8sa.streamlit.app/",
    image: project5,
    duration:"Mar-25 - April-25",
    description: "CodeWise is a streamlined web application designed to help aspiring developers and job seekers practice coding interview questions based on specific companies like Amazon, Google, Microsoft, and more. The app categorizes LeetCode-style questions by company and difficulty, allowing users to target their preparation efficiently.Built using Python and Streamlit, the app dynamically loads questions from structured CSV datasets organized by company and practice period (30 days, 60 days, all time). Users can navigate through different companies and timeframes, view problems, and enhance their preparation strategy with a clean and responsive UI.",
    technologies: ["Python", "NumPy","Scikit-learn","Streamlit"],
  },
  {  
    title: "EduPredict – Student Pass/Fail Predictor",
    link:"https://studentresultprediction-jy8agduxc4netvu5rb6x3p.streamlit.app/",
    image: project4,
    duration:"Jan-25 - Feb-25",
    description: "EduPredict is a machine learning-powered web application designed to predict whether a student will pass or fail based on various academic and personal input factors. The goal of the project is to assist educators, parents, and students in identifying at-risk individuals early on, enabling timely intervention and support.The model is trained on real-world student performance data, applying data preprocessing, feature engineering, and classification algorithms to make accurate predictions. The frontend interface is built with Streamlit, providing an intuitive and interactive experience for users",
    technologies: ["Python", "NumPy","Scikit-learn", "Seaborn","Matplotlib","Streamlit"],
  },
  {  
    title: "JobSphere",
    link:"job-portal-frontend-z822.onrender.com",
    image: project3,
    duration:"Nov-24 - Jan-25",
    description: "JobSphere is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that serves as an efficient platform for job seekers and employers. It provides a seamless interface for users to search, apply, and manage job applications, while enabling recruiters to post new jobs, track applications, and find the right candidates.The application emphasizes real-time updates, intuitive UI/UX, and robust backend APIs, creating a smooth experience across devices.",
    technologies: ["MongoDB", "Express.js","React.js", "Node.js"],
  },
  {
    title: "Portfolio Website",
    link:"abaditya07.github.io/PersonalPortFolio/",
    image: project2,
    duration:"Sept-24 - Oct-24",
    description: "A personal portfolio website showcasing projects, skills, and contact information. Built to highlight my expertise in Frontend development with an interactive and responsive design. The site provides an easy way to explore my work, background, and ways to get in touch.",
    technologies: ["React.js", "TailwindCSS", "Framer-Motion"],
  },
  {
    title: "TextEdit- App for Editing the Text",
    link:"abaditya07.github.io/TextUtilsApp/",
    image: project1,
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
