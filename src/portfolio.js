// Portfolio configuration file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = { animated: true };

const greeting = {
  username: "Zakir Nizam",
  title: "Hi, I'm Nizam",
  subTitle: emoji(
    "Passionate Front-End Developer 🚀 with experience in React, TypeScript, and Redux, building responsive UIs and integrating RESTful APIs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OhCs8T7OTZZfRA4PhKJEuI9jTAjHFGx1/view?usp=drivesdk",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/zakirnizam",
  linkedin: "https://www.linkedin.com/in/mohammad-zakir-nizam-7064a7208/",
  gmail: "mohammadzakirnizam@gmail.com",
  facebook: "https://www.facebook.com/nizam.muhammad.3745",
  instagram: "https://www.instagram.com/17.n1z4m",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FRONT-END DEVELOPER WHO LOVES BUILDING CLEAN, RESPONSIVE UI",
  skills: [
    emoji("⚡ Build interactive and scalable web interfaces using React, TypeScript, and Redux"),
    emoji("⚡ Create responsive designs with Tailwind CSS, SCSS, and Bootstrap"),
    emoji("⚡ Develop real-time form validations and dynamic user experiences"),
    emoji("⚡ Integrate RESTful APIs for smooth backend communication"),
    emoji("⚡ Follow best practices for code quality, performance, and accessibility"),
    emoji("⚡ Collaborate in Agile environments using tools like Jira, GitLab, and Jenkins")
  ],
softwareSkills: [
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "TypeScript", fontAwesomeClassname: "devicon-typescript-plain" },
  { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Redux", fontAwesomeClassname: "devicon-redux-original" },
  { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
  { skillName: "MongoDB", fontAwesomeClassname: "devicon-mongodb-plain" }, // ✅ Add for MERN
  { skillName: "ExpressJS", fontAwesomeClassname: "devicon-express-original" }, // ✅ Add for MERN
  { skillName: "Tailwind CSS", fontAwesomeClassname: "devicon-tailwindcss-plain" },
  { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
  { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
  { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
  { skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
  { skillName: "GCP", fontAwesomeClassname: "devicon-googlecloud-plain" },
  { skillName: "Jest", fontAwesomeClassname: "devicon-jest-plain" },
  { skillName: "Postman", fontAwesomeClassname: "devicon-postman-plain" },
  { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
  { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" }
],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Yenepoya University",
      logo: require("./assets/images/Yenepoya.png"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "June 2019 - September 2022",
      desc: "I completed a 3-year Bachelor of Computer Applications (BCA) degree with a specialization in Big Data Analytics and Cloud Computing."
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "50%" }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Frontend Engineer",
      company: "Niveus Solutions",
      companylogo: require("./assets/images/NiveusLogo.jpg"),
      date: "June 2022 – Present",
      desc: "Worked across multiple frontend projects, building responsive and scalable interfaces for major financial products using modern tech stacks.",
      descBullets: [
        "Progressed through roles: Cloud Explorer → Cloud Associate → Cloud Engineer",
        "Built and optimized co-branded credit card journeys using React, TypeScript, Redux",
        "Developed modular UI for pre-approved, upgrade, and non-pre-approved flows",
        "Integrated APIs for KYC validation, eligibility checks, and dynamic offer handling",
        "Contributed to personal loan, home loan, and fixed deposit journeys",
        "Followed best practices in performance, accessibility, and responsive design",
        "Collaborated with senior developers and delivered on high-priority national launches"
      ]
    },
    {
      role: "AI/ML Intern",
      company: "Cognitive Solutions",
      companylogo: require("./assets/images/CognitiveLogo.jpg"),
      date: "April 2022 – June 2022",
      desc: "Developed and implemented AI and machine learning models using Jupyter notebooks. Utilized Python libraries such as TensorFlow, Scikit-learn, and Pandas for data processing and model training.",
      descBullets: [
        "Built and trained ML models using Python libraries like TensorFlow, Scikit-learn, and Pandas",
        "Used Jupyter notebooks for data exploration, visualization, and experimentation",
        "Performed data preprocessing tasks including cleaning, normalization, and feature selection",
        "Collaborated on model evaluation using metrics like accuracy, precision, and recall",
        "Gained exposure to AI workflows, version control, and team collaboration"
      ]
    }
  ]
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Recognitions, Certifications, and Achievements that reflect my journey and growth!",
  achievementsCards: [
    {
      title: "Google Cloud Certified: Associate Cloud Engineer",
      subtitle: "Certified by Google Cloud for foundational skills in deploying, managing, and scaling cloud-based projects.",
      image: require("./assets/images/CloudAssociateLogo.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/2323e014-4d5b-4c24-9839-9c091805ee65"
        }
      ]
    },
    {
      title: "Google Cloud Certified: Professional Cloud Developer",
      subtitle: "Certified by Google Cloud for designing and building scalable cloud-native applications.",
      image: require("./assets/images/CloudEngineerLogo.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/c5694175-59ea-4577-99bf-b590604f9a96"
        }
      ]
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      subtitle: "Completed a comprehensive React course by Zero To Mastery covering Redux, React Hooks, GraphQL, Firebase, and more.",
      image: require("./assets/images/ZtmReact.webp"),
      imageAlt: "Zero To Mastery Logo",
      footerLink: [
        {
          name: "Course",
          url: "https://www.udemy.com/certificate/UC-ebd07371-a44f-4373-9d1c-2bad7754ff03/"
        }
      ]
    },
    {
      title: "JavaScript: The Advanced Concepts",
      subtitle: "Mastered advanced JavaScript concepts including closures, prototypes, async/await, and performance optimization through Zero To Mastery.",
      image: require("./assets/images/ZtmJs.png"),
      imageAlt: "Zero To Mastery Logo",
      footerLink: [
        {
          name: "Course",
          url: "https://www.udemy.com/certificate/UC-6398709f-9872-4385-88ad-6c63fd0ab077/"
        }
      ]
    },
    {
      title: "Postman API Fundamentals Student Expert Certification",
      subtitle: "Gained hands-on experience with API testing, requests, environments, and collections using Postman. Certified as a Student Expert for mastering API fundamentals.",
      image: require("./assets/images/postman.jpeg"),
      imageAlt: "Postman Logo",
      footerLink: [
        {
          name: "Workshop Certificate",
          url: "https://verify.letsupgrade.in/certificate/LUEPAFSOCT123155"
        }
      ]
    },
    {
      title: "Prompt Engineering Zero to Hero",
      subtitle: "Explored advanced prompt engineering techniques to effectively work with large language models like ChatGPT. Learned to design, optimize, and apply prompts for real-world use cases.",
      image: require("./assets/images/chatgpt.jpeg"),
      imageAlt: "ChatGPT Logo",
      footerLink: [
        {
          name: "Workshop Certificate",
          url: "https://verify.letsupgrade.in/certificate/LUEPESEP123395"
        }
      ]
    },
    {
      title: "Star of the Month – May 2025",
      subtitle:
        "Awarded for playing a key role in frontend delivery for a major client rollout and handling high-pressure production scenarios.",
      image: require("./assets/images/starofthemonth.jpeg"),
      imageAlt: "Award Badge",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://lnk.ink/sotmMay"
        }
      ]
    },
    {
      title: "Star of the Month – June 2024",
      subtitle:
        "Recognized for being a committed team player and ensuring timely delivery during a partner journey development.",
      image: require("./assets/images/starofthemonth.jpeg"),
      imageAlt: "Award Badge",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://lnk.ink/sotmJune"
        }
      ]
    },
    {
      title: "Star of the Month – May 2023",
      subtitle:
        "Appreciated for quickly adapting to a new platform and delivering critical changes to the RCAS module of the Personal Loan journey.",
      image: require("./assets/images/starofthemonth.jpeg"),
      imageAlt: "Award Badge",
      footerLink: [
        {
          name: "LinkedIn Post",
          url: "https://lnk.ink/sotmMay23"
        }
      ]
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Excited to dive into new front-end opportunities! If you're hiring or just want to connect, my inbox is always open – let's build something great together!.",
  number: "+91-9113685089",
  email_address: "mohammadzakirnizam@gmail.com"
};

const twitterDetails = {
  userName: "mohdZakirNizam",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
