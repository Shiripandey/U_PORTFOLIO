/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Utkarsh Singh Parihar ",
  title: "Hi all, I'm Utkarsh ",
  subTitle: emoji(
    "I have a strong foundation in Python, C++, and databases like MySQL, along with hands-on experience in DevOps and AI-driven solutions, making me well-equipped to drive innovation. My expertise in optimizing system performance and automating processes aligns seamlessly with the roles of SDE and DevOps."
  ),
  resumeLink:
    " https://drive.google.com/file/d/1W3bNWjW9gcRLDMzhKXMzwKJuNdjeuHfw/view?usp=drivesdk",  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Utkarsh3367676",
  linkedin: "https://www.linkedin.com/in/utkarshparihar33/",
  gmail: "Utkarshparihar3367@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ System Optimization: Improve system performance using Python, C++, and MySQL by writing efficient code and optimizing database queries."
    ),
    emoji("⚡Automation: Leverage DevOps tools to automate CI/CD pipelines and streamline deployment processes, enhancing software delivery efficiency."),
    emoji(
      "⚡ AI Solutions: Implement AI-driven models to automate decision-making and optimize operations for better predictive insights and innovation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "machine learning",
    fontAwesomeClassname: "fas fa-robot"// Emoji for Machine Learning
  },
  {
    skillName: "devops",
    fontAwesomeClassname: "fas fa-tools"// Emoji for DevOps
  },
  {
    skillName: "mongodb",
    fontAwesomeClassname: "fas fa-leaf" // Emoji for MongoDB
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Army Institute Of Technology, Pune",
      
      subHeader: "Bachelor’s Of Engineering in Information Technology (IT)",
      duration: "August 2021 - August 2025",
      desc: "Pursuing a degree in Information Technology with a focus on software development and system engineering.",
      descBullets: ["Aggregate SGPA: 8.23/10.0"]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning (ML)",
      progressPercentage: "70%" // Added ML proficiency percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%" // Added DevOps proficiency percentage
    },
    {
      Stack: "Cloud/AWS",
      progressPercentage: "60%" // Added Cloud/AWS proficiency percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%" // Updated proficiency percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%" // Updated proficiency percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Intern (DevOps)",
      company: "ConnectWise LLP",
      date: "May 2024 – July 2024",
      desc: "Proactive solutions for system optimization with a focus on AI-enhanced DevOps.",
      companylogo: require("./assets/images/logo1.png"),
      descBullets: [
        "Implemented MLOps using Dynatrace Davis AI for ECS clusters, automating actions via AWS Lambda when CPU saturation exceeded 95 percent, with notifications through GitLab CI/CD and MS Teams.",
        "Monitored synthetic devices in Dynatrace to resolve blank device page errors caused by MSSQL/MySQL stored procedures.",
        "Deployed AI-driven solutions using Docker, AWS (EKS/ECS), and enhanced CI/CD pipelines with GitLab CLI."
      ]
    },
    {
      role: "Research Intern",
      company: "The Analytical Brain (TAB)",
      date: "July 2023 – August 2023",
      desc: "Research and Development work on Deep Learning Algorithms.",
      companylogo: require("./assets/images/brain.avif"),
      descBullets: [
        "Applied development principles to produce clean, scalable, and testable code, resulting in a 30 percent improvement in algorithm efficiency and optimization.",
        "Developed analytical skills, leading to a 15 percent improvement in the accuracy of data analysis methodologies."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "PROJECTS",
  subtitle: "STOCK LISTING APP DEVELOPMENT PROJECT & TOMATO LEAF DISEASE PREDICTION",
  projects: [
    {
      image: require("./assets/images/stock.jpeg"), // Add the logo image path for the Stock Listing App
      projectName: "Stock Listing App Development Project",
      projectDesc: `ReactJs, NodeJs, Polygon API
      • Innovatively designed and implemented a dynamic Stock Listing App using Node.js and ReactJS, integrating real-time stock data from the Polygon API for up to 20 stocks simultaneously.
      • Engineered user-centric features, including customizable watchlists and real-time notifications, resulting in a 25% boost in user engagement.`,
      footerLink: [] // You can add extra buttons here if needed
    },
    {
      image: require("./assets/images/pdd.webp"), // Add the logo image path for the Tomato Leaf Disease Prediction
      projectName: "Tomato Leaf Disease Prediction",
      projectDesc: `Implemented KNN and SVM Algorithms
      • Developed a tomato leaf disease detection project using Data Analysis, Data Visualization, and Machine Learning algorithms, including K-Nearest Neighbor (KNN).
      • Achieved 92% Accuracy in disease identification.`,
      footerLink: [] // You can add extra buttons here if needed
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Amazon ML Summer School, 2024",
      subtitle: "Selected for the prestigious Amazon ML Summer School, gaining insights into advanced ML concepts and real-world applications.",
      image: require("./assets/images/ama.png"), // Add the logo image path for Amazon ML Summer School
      imageAlt: "Amazon ML Summer School Logo",
      footerLink: [] // You can add extra buttons here if needed
    },
    {
      title: "ZS Campus Beats Hackathon",
      subtitle: "Shortlisted among top 75 teams, advancing through multiple rounds of inter-college interviews.",
      image: require("./assets/images/zs.png"), // Add the logo image path for ZS Campus Beats Hackathon
      imageAlt: "ZS Campus Beats Logo",
      footerLink: [] // You can add extra buttons here if needed
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
 
};

// Podcast Section

const podcastSection = {
 // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  
  email_address: "Utkarshparihar3367@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
