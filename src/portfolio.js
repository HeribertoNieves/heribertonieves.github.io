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
  username: "Heriberto Andres Nieves-Vazquez",
  title: "Hello! I'm Heriberto,",
  subTitle: (
    <>
      A passionate researcher and engineer, dedicated to advancing healthcare by bridging AI, robotics, and medical imaging technologies.      {/* <br />      <br />
      Oh, and I love teaching robotics too. */}
    </>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pM5rHffS4y7Mt3kn0QVxQT019DRq-rQZ/view?usp=sharing",
  cvLink:
    "https://drive.google.com/file/d/1rjV2lC4FdKZxXp4nvOv87fXywT_se-2X/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hnieves/",
  gmail: "hnieves6@gatech.edu",
  github: "https://github.com/HeribertoNieves",
//  gitlab: "https://gitlab.com/saadpasta",
//  facebook: "https://www.facebook.com/saad.pasta7",
//  medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// About Me

const aboutMe = {
  title: "About me",
  subTitle: (
  <>
  <br /> <br /> Thanks for visiting!
  <br /> <br /> I’m Heriberto, but you can call me <strong>Andy</strong> (short for my middle name, Andres). I’m currently pursuing a <strong>Ph.D. in Robotics at the Georgia Institute of Technology</strong>. Outside of my academic pursuits, I enjoy Latin dance, drawing, and gaming.
  <br /><br />
  My interests lie at the <strong>intersection of AI, healthcare, and robotics</strong>. I’m particularly focused on automating medical imaging analysis, developing MRI-compatible robotics, and creating intelligent systems to improve patient care and diagnostics. 
  <br /><br />
  <strong>My research centers on enhancing the accuracy and reducing inter-reader variability in magnetic resonance elastography through AI and computational modeling</strong>. I have experience developing innovative solutions that bridge healthcare, AI (including machine learning, deep learning, computer vision, and optimization), and robotics.
  <br /><br />
  My work has led me to recieve the <strong>NSF GRFP, GEM Fellowship, GT Pathbreakers Fellowship, Atlanta ARCS Fellowship, and the GT Goizueta Fellowship</strong>.
  <br /><br />
  In addition to my research, I’m passionate about mentoring and making AI more accessible. Whether guiding students in machine learning projects or <strong>exploring AI-driven entrepreneurship</strong>, I thrive on fostering innovation and sharing knowledge.
  <br /><br /> When I’m not in the lab or coding, you can find me dancing to my favorite tunes, watching a new series, or climbing in rank in my video games.
  <br /><br /> Feel free to explore my site, and don’t hesitate to reach out via the "Contact Me" tab — I’d love to connect!

  {/* <br /> <br /> 💡  Affine Transformation-based Perfectly Undetectable False Data Injection Attacks on Remote Manipulator Kinematic Control with Attack Detector, 
  <br /><br /> 💡 Encrypted Model Reference Adaptive Control with False Data Injection Attack Resilience via Somewhat Homomorphic Encryption-Based Overflow Trap​, 
  <br /><br />💡 Deep Learning-Based Control Security for Networked Multi-Agent Systems​,
  <br /><br />💡 Large Language Models for Engineering Makerspaces. */}


  
  </>),
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],
  display: true // Set false to hide this section, defaults to true
};

// Skills section

const skillsSection = {
  title: "Technical Skills",
  skills: [],

  categories: {
    "Programming": [
      {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "C++",
        fontAwesomeClassname: "fas fa-code"
      },
      {
        skillName: "MATLAB",
        fontAwesomeClassname: "fas fa-calculator"
      },
    ],

    "Machine Learning": [
      {
        skillName: "PyTorch",
        fontAwesomeClassname: "fas fa-fire"
      },
      {
        skillName: "Keras",
        fontAwesomeClassname: "fas fa-layer-group"
      },
      {
        skillName: "CUDA",
        fontAwesomeClassname: "fas fa-microchip"
      },
      // {
      //   skillName: "Cloud Computing",
      //   fontAwesomeClassname: "fas fa-cloud"
      // }
      {
        skillName: "Pandas",
        fontAwesomeClassname: "fas fa-table"
      },
      {
        skillName: "Seaborn",
        fontAwesomeClassname: "fas fa-chart-bar"
      }
    ],

    "Robotics": [
      {
        skillName: "ROS2",
        fontAwesomeClassname: "fas fa-robot"
      },
      // {
      //   skillName: "Gazebo",
      //   fontAwesomeClassname: "fas fa-home"
      // },
      // {
      //   skillName: "Isaac SIM",
      //   fontAwesomeClassname: "fas fa-eye"
      // },
      // {
      //   skillName: "OpenAI Gym",
      //   fontAwesomeClassname: "fas fa-dumbbell"
      // },
      // {
      //   skillName: "Robodk",
      //   fontAwesomeClassname: "fas fa-cogs"
      // },
      {
        skillName: "OpenCV",
        fontAwesomeClassname: "fas fa-camera"
      },
      {
        skillName: "Controls",
        fontAwesomeClassname: "fas fa-sliders-h"
      }
    ],

    "Medical & Neuromotor": [
      {
        skillName: "Medical Imaging",
        fontAwesomeClassname: "fas fa-x-ray"
      },
      {
        skillName: "Human Physiology",
        fontAwesomeClassname: "fas fa-male"
      },
      {
        skillName: "Biosignals",
        fontAwesomeClassname: "fas fa-heartbeat"
      },
      {
        skillName: "Electromyography (EMG)",
        fontAwesomeClassname: "fas fa-bolt"
      },
      {
        skillName: "MR Elastography",
        fontAwesomeClassname: "fas fa-wave-square"
      }
    ],

    // "Design And Manufacturing": [
    //   {
    //     skillName: "CAD",
    //     fontAwesomeClassname: "fas fa-drafting-compass"
    //   },
    //   {
    //     skillName: "Metalworking",
    //     fontAwesomeClassname: "fas fa-industry"
    //   },
    //   {
    //     skillName: "Woodworking",
    //     fontAwesomeClassname: "fas fa-tree"
    //   },
    //   {
    //     skillName: "3D Printing",
    //     fontAwesomeClassname: "fas fa-cube"
    //   }  
    // ],

    "Business & Innovation": [
      {
        skillName: "Startup Strategy",
        fontAwesomeClassname: "fas fa-rocket"
      },
      {
        skillName: "Business Model Design",
        fontAwesomeClassname: "fas fa-lightbulb"
      }
    ]
  },
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia_Tech_Yellow_Jackets_logo.png"),
      subHeader: "Ph.D. in Robotics",
      duration: "Fall 2021 - Fall 2025 (Expected)",
      desc: "Research: Deep Learning for Medical Image (MR Elastography) Processing",
      descBullets: [
        "Coursework: Artificial Intelligence, Machine Learning, Robotics, Deep Reinforcement Learning, Linear Controls, Digital Controls",
        "Minor: Technology Innovation and Entrepreneurship (TI:GER Program)",
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia_Tech_Yellow_Jackets_logo.png"),
      subHeader: "M.S. in Mechanical Engineering",
      duration: "Fall 2023 - Fall 2025 (Expected)",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Coursework: Machine Learning, Artificial Intelligence, Deep Learning, Robotics Research, Deep Reinforcement Learning, Multi-Robot Systems"
      // ]
    },
    {
      schoolName: "Florida International University",
      logo: require("./assets/images/FIU Alone.png"),
      subHeader: "B.S. in Biomedical Engineering",
      duration: "Fall 2017 - Spring 2021",
      desc: "Outstanding Graduate Award (1st in Class)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Georgia Institute of Technology",
    //   logo: require("./assets/images/Georgia-Tech-Seal.png"),
    //   subHeader: "Bachelors of Science in Mechanical Engineering",
    //   duration: "Fall 2016 - Spring 2020",
    //   // desc: "Participated in the research of XXX and published 3 papers.",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Controls, Systems", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Artificial Intelligence, Machine Learning, Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Sensor Fusion",
      progressPercentage: "60%"
    },
    {
      Stack: "Sensor Fusion",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Academic Professional",
      company: "Georgia Tech",
      companylogo: require("./assets/images/GT.jpg"),
      date: "December 2024 – Present",
      desc: "",
      descBullets: [
        "Lecturing System Dynamics, Experimental Methods, and Computing Techniques",
        "Integrating ML techniques into the mechanical engineering curriculum, helping students understand how they can use data science to solve complex engineering problems",
        "Managing undergraduate research and tutoring programs, bringing students to their full academic potential"
      ]
    },
    {
      role: "Graduate Researcher and Teaching Assistant",
      company: "Georgia Tech",
      companylogo: require("./assets/images/GT.jpg"),
      date: "August 2020 – Present",
      desc: "",
      descBullets: [
        "Research on security of networked robotic systems",
        "Teaching and advising mechanical engineering laboratory focusing on heat transfer, thermodynamics, signals, systems ID, controls, IC engines, and refrigeration"
      ]
    },
    {
      role: "Lab & Facilities Coordinator",
      company: "Georgia Tech",
      companylogo: require("./assets/images/GT.jpg"),
      date: "May 2021 – November 2024",
      desc: "",
      descBullets: [
        "Teaching lab-based courses focusing on design, manufacture, and technical communication",
        "Management and design of Georgia Tech’s mechanical engineering course labs, resulting in state-of-the-art machine and equipment availability and quality workflow for thousands of students and design teams",
        "Training students on fabrication machinery, tools, and manufacturing safety"
      ]
    },
    {
      role: "Mechanical Engineer Intern",
      company: "AC & DC Power Technologies",
      companylogo: require("./assets/images/ACDC.png"),
      date: "May 2020 – August 2020",
      desc: "",
      descBullets: [
        "Design and Analysis of energy storage systems via AutoCAD drawings and MATLAB for validating failure modes",
        "MATLAB programing of application for creating detailed customer power-load charts"
      ]
    },
    {
      role: "Large Engines Intern",
      company: "Caterpillar",
      companylogo: require("./assets/images/CAT.jpeg"),
      date: "May 2019 – August 2019",
      desc: "",
      descBullets: [
        "Large engine head fatigue testing, measurement, and temperature data analysis to ensure industry specifications are met"
      ]
    },
    {
      role: "Advanced Engineering Intern",
      company: "Panasonic Automotive",
      companylogo: require("./assets/images/panasonic.jpg"),
      date: "May 2018 – August 2018",
      descBullets: [
        "Redesigned and optimized the kinematics system of a General Motors Heads Up Display"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = { // This is under StartupProjects container
  title: "Projects",
  subtitle: "My passion lies in the development of novel control and perception models for autonomous robots!",
  projects: [
    {
      image: require("./assets/images/bboxes.jpg"),
      projectName: "NVIDIA Open Hackathon: Language to Action",
      projectDesc: "Team Lead for a Robotic LLM Agent (LangChain). Integrated Llama3.3 and YOLOworld object detection in a Turtlebot3 to auto generate and execute code for pathing and control commands from human language. i.e. tell your robot what to do and it will do it! I implemented the LangChain agent for query solving, code execution, and self-revising coding errors.",
      footerLink: [
        {
          name1: "About",
          url1: "https://www.openhackathons.org/s/siteevent/a0CUP00000rQtdU2AS/se000354",
          name2: "Visit Repo (In Progress)",
          url2: "https://github.com/jblevins32/NVIDIA_Hackathon"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Maze Solver Pic.jpeg"),
      projectName: "Robotic Maze Solver",
      projectDesc: "Programmed Turtlebot3 (ROS, Python) to solve a maze using KNN for sign reading, SLAM with LiDAR for collision avoidance, and PID control.",
      footerLink: [
        {
          name1: "Video",
          url1: "https://drive.google.com/file/d/1UpxFD14YY5Gb7d2V74vq6o6VIfgGI5aN/view?usp=sharing",
        }
      ]
    },
    {
      image: require("./assets/images/Dead Reck Pic.jpeg"),
      projectName: 'Robotic "Perfect Square" Navigation using Dead Reckoning',
      projectDesc: "Developed a Turtlebot3 (ROS, Python) that navigates in a perfect square using dead reckoning, incorporating obstacle avoidance to compensate for drift and accumulated error.",
      footerLink: [
        {
          name1: "Video",
          url1: "https://drive.google.com/file/d/169KZMTqV_N477LYxgyvx7ISTyzPduEz6/view?usp=sharing",
        }
      ]
    },
    // {
    //   image: require("./assets/images/2R.png"),
    //   projectName: "Manipulator Motion Planning with Lagrangian Neural Networks",
    //   projectDesc: "Comparison of data-driven neural network control with classical PD feedback control for manipulator lagrangian dynamics.",
    //   footerLink: [
    //     {
    //       name1: "No Paper",
    //       url1: "",
    //       name2: "Visit Repo",
    //       url2: "https://github.com/jblevins32/Manipulator_Intelligent_Control"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/pattern_pfp.png"),
    //   projectName: "Style Transfer Deep Learning Playground",
    //   projectDesc: "Implementation of deep learning style transfer techniques with specialized style transfer loss functions with web interface image playground",
    //   footerLink: [
    //     {
    //       name1: "About",
    //       url1: "",
    //       name2: "Visit Repo",
    //       url2: ""
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/Model Chain.png"),
      projectName: "Comparing Unsupervised and Supervised Techniques for Instance-level Segmentation: Cityscapes Dataset",
      projectDesc: "Implemented instance segmentation on Cityscapes dataset using model chaining (DETR for object detection with SegMyO) against pre-trained DeepLab for pixel-level segmentation. Evaluated transformer-based models against pre-trained CNN architectures, as well as unsupervised techniques (K-Means, and DBSCAN) for accuracy and computational efficiency.",
      footerLink: [
        {
          name1: "Report",
          url1: "https://drive.google.com/file/d/1s5f3tXFM4jqitTTrqYDse6CJ1aO2FqJu/view?usp=sharing",
          name2: "Visit Repo",
          url2: ""
        }
      ]
    },
    // {
    //   image: require("./assets/images/robonav.png"),
    //   projectName: "Robot Drawing",
    //   projectDesc: "Motion planning subteam; Development of path planning and control for a mars rover with an NVIDIA Jetson Orin Nano for traversal over complex terrain for the 2025 University Rover Competition.",
    //   footerLink: [
    //     {
    //       name1: "About",
    //       url1: "",
    //       name2: "No Repo Available",
    //       url2: ""
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/DND EDA2.png"),
      projectName: "Dungeons and Dragons 5e Spells: Exploratory Data Analysis",
      projectDesc: "The magic behind the mechanics! Conducted an exploratory data analysis of D&D 5e spells, visualizing trends in sourcebooks, classes, schools of magic, spell levels, components, rituals, casting times, ranges, and durations.",
      footerLink: [
        {
          name1: "Repo",
          url1: "https://github.com/HeribertoNieves/5eML",
          name2: "No Repo Available",
          url2: ""
        }
      ]
    },
    {
      image: require("./assets/images/Multi Armed.png"),
      projectName: "Multi-Armed Bandit Optimization",
      projectDesc: "Implemented Multi-Armed Bandit optimization using Reinforcement Learning techniques, comparing Epsilon-Greedy and Upper Confidence Bound (UCB) algorithms to balance exploration and exploitation for optimal decision-making.",
      footerLink: [
        {
          name1: "About",
          url1: "",
          name2: "No Repo Available",
          url2: ""
        }
      ]
    },
    {
      image: require("./assets/images/FinanceLit.png"),
      projectName: "FinanceLit - Financial Literacy Mock Startup",
      projectDesc: "Founded the idea for FinanceLit, a financial literacy app designed to provide a one-stop learning platform for investment and personal finance education with a subscription business model. Through this project, I deepened my understanding of technology innovation and entrepreneurship, exploring market segmentation, customer discovery, and business modeling principles. Additionally, I explored how AI can address business needs through data-driven insights and personalization.",
      footerLink: [
        {
          name1: "About",
          url1: "",
          name2: "",
          url2: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Research Section

const research = {
  title: emoji("Research"),
  subtitle:
    "As AI, healthcare, and robotics continue to evolve, innovating solutions that enhance their integration and impact is crucial. Check out my work below!",

  achievementsCards: [
    {
      title: "Deep Learning‐Enabled Automated Quality Control for Liver MR Elastography: Initial Results",
      subtitle:
        "This study demonstrates the potential of deep learning (DL) architectures for automating liver MR Elastography image quality classification, achieving an accuracy of up to 92.1%, providing a reliable tool for improving diagnostic efficiency in liver assessments.",
      image: require("./assets/images/DL MRE QC.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://onlinelibrary.wiley.com/doi/full/10.1002/jmri.29490"
        }
      ]
    },
    {
      title: "Effects of Driver Placement and Phase on Multi-actuator Magnetic Resonance Elastography via Finite Element Analysis",
      subtitle:
        "This research explores the use of finite element analysis (FEA) to optimize multi-actuator configurations in magnetic resonance elastography (MRE), aiming to enhance displacement uniformity and minimize wave attenuation during imaging.",
      image: require("./assets/images/MRE Wave ACC.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/10155915/"
        }
      ]
    },
    {
      title: "Closed-Loop Estimation of Individualized Inter-Stimulus Interval Window for Transient Neuromodulation via Paired Mechanical and Brain Stimulation",
      subtitle:
        "This work introduces a real-time, closed-loop framework using Bayesian Optimization for efficiently determining individualized stimulation windows in Mechanical Stimulation-Conditioned Transcranial Magnetic Stimulation (Mstim-cTMS), reducing the calibration time by 93.8%.",
      image: require("./assets/images/Mstim TMS.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/10020183"
        }
      ]
    },
    {
      title: "Undetectable False Data Injection Attacks on Encrypted Bilateral Teleoperation System based on Dynamic Symmetry and Malleability",
      subtitle:
        "This paper explores the vulnerability of bilateral teleoperation systems to perfectly undetectable False Data Injection Attacks (FDIAs), revealing the potential for cyberattacks to alter robot motion while remaining imperceptible to operators by testing connected, teleoperated robots located in the US and Japan.",
      image: require("./assets/images/bilat teleop.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.arxiv.org/abs/2409.13061"
        }
      ]
    },
    {
      title: "A Virtual Reality Guidance System for a Precise MRI Injection Robot",
      subtitle:
      "This work presents the development of an immersive virtual reality tool for visualizing MRI data during precision robot-assisted surgeries, aimed at improving trajectory selection and enhancing user experience through expert and novice feedback.",
      image: require("./assets/images/VR.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/10039442"
        }
      ]
    },
    {
      title: "Sensor-Embedded Tissue Phantom for Magnetic Resonance Elastography Mechanical Failure Testing",
      subtitle:
        "This work introduces a sensor-embedded tissue phantom setup paired with a support vector machine (SVM) classifier to automate the MRE actuator testing process for improving contact detection and reducing failed acquisitions in clinical MRE applications.",
      image: require("./assets/images/MRE Phantom.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://asmedigitalcollection.asme.org/medicaldevices/article-abstract/18/4/041003/1202997/Sensor-Embedded-Tissue-Phantom-for-Magnetic?redirectedFrom=fulltext"
        }
      ]
    },
    {
      title: "MRI Compatible Robotic Dosimeter System for Safety Assessment of Medical Implants",
      subtitle:
      "This paper presents an MRI-compatible robotic system that generates heat and electric field maps around implantable medical devices, providing a novel approach for evaluating medical device safety in clinical MRI settings.",
      image: require("./assets/images/efield.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/10417364"
        }
      ]
    },
    {
      title: "Prediction of Single Trial Somatosensory Evoked Potentials From Mechanical Stimulation Intensity",
      subtitle:
      "This project develops a method for predicting single-trial somatosensory evoked potentials (SSEPs) from tendon hammer accelerations, offering a practical alternative for clinical settings where traditional SSEP measurement is not feasible.",
      image: require("./assets/images/ssep.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/abstract/document/9896482"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Professional Support Excellence",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "News",
  subtitle: "Here are news articles that I am featured in!",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://research.gatech.edu/robotics",
    //   title: "Institute for Robotics and Intelligent Machines",
    //   description:
    //     "Georgia Tech, faculty member"
    // },
    {
      url: "https://research.gatech.edu/using-deep-learning-techniques-improve-liver-disease-diagnosis-and-treatment-0",
      title: "Using Deep Learning Techniques to Improve Liver Disease Diagnosis and Treatment",
      // description:
      //   "Georgia Tech IRIM Article about my new research paper, 'Deep Learning-Enabled AUtomated Quality Control for Liver MR Elastography: Initial Results'.",
      // image: require("./assets/images/ssep.png")
    },
    {
      url: "https://grad.gatech.edu/news/15-georgia-tech-phd-students-awarded-fellowship-propel-stem-research?utm_source=newsletter&utm_medium=email&utm_content=Graduate%20Students&utm_campaign=Daily%20Digest%20-%20Oct.%2015%2C%202024",
      title: "Honored as an Atlanta ARCS Foundation Scholar",
      // description:
      //   "I have been named an ARCS Foundation Atlanta Scholar for 2024-25, recognizing my research in applying deep learning to automate quality control and measurement for staging liver fibrosis with MR Elastography! This prestigious award supports outstanding Ph.D. students making significant contributions to science and technology. Read more about the recognition and other awardees."
    },
  //   {
  //     url: "https://a2c2.org/event/conference/2024-4th-modeling-estimation-and-control-conference",
  //     title: "Modeling Estimation and Control Conference",
  //     description:
  //       "Reviewer"
  //   },
  //   {
  //     url: "https://www.firstinspires.org/robotics/frc",
  //     title: "FIRST Robotics",
  //     description:
  //       "Software workshop lead"
  //   },
  //   {
  //     url: "https://ctl.gatech.edu/tech-teaching",
  //     title: "Tech to Teaching Graduate",
  //     description:
  //       "Georgia Tech's Teaching Program"
  //   },
  //   {
  //     url: "https://safety.me.gatech.edu/",
  //     title: "Interactive Learning Committee",
  //     description:
  //       "Georgia Tech - Mechanical Engineering"
  //   },
  //   {
  //     url: "",
  //     title: "Undergraduate Curriculum Committee",
  //     description:
  //       "Georgia Tech - Mechanical Engineering"
  //   },
  //   {
  //     url: "https://robograds.gatech.edu/",
  //     title: "RoboGrads",
  //     description:
  //       "Georgia Tech"
  //   },
  //   {
  //     url: "https://www.scoutspirit.org/",
  //     title: "Eagle Scout",
  //     description:
  //       "Boy Scouts of America"
  //   },
  //   {
  //     url: "",
  //     title: "Highest Honors",
  //     description:
  //       "Bachelor's 4.0 GPA"
  //   },
  //   {
  //     url: "https://www.me.gatech.edu/news/faculty-and-staff-recognized-annual-woodruff-school-awards",
  //     title: "Professional Support Excellence",
  //     description:
  //       "Georgia Tech - Mechanical Engineering"
  //   },
  //   {
  //     url: "",
  //     title: "Culture Champion",
  //     description:
  //       "Georgia Tech - Mechanical Engineering"
  //   }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Music 🎶"),
  subtitle: "One of my side hobbies is singing! Check out some of the pieces I am in! (or have sung with the Atlanta Symphony, but was recorded before my time)",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/track/2cimcHtPfLS2S60KzJW1Yf?utm_source=generator",
    "https://open.spotify.com/embed/track/7J0hYdgCaxYjz17L5smEhz?utm_source=generator",
    "https://open.spotify.com/embed/track/3nhOjl7qt8Hd3ozbJIBaG9?utm_source=generator",
    "https://open.spotify.com/embed/track/5eF5Lp6ncRfChFcLrENQoA?utm_source=generator",
    "https://open.spotify.com/embed/track/3mBnMk58L6CGjOuqBCr5Ng?utm_source=generator",
    "https://open.spotify.com/embed/track/19CEvGvCoMDaH15aoTG4hu?utm_source=generator",
    "https://open.spotify.com/embed/track/5rND1yAKs1ysp5DrMwmOYr?utm_source=generator",
    "https://open.spotify.com/embed/track/30oWbUM7jgDSwWqhRkqisK?utm_source=generator"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me!"),
  subtitle: "",
  email_address: "hnieves6@gatech.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const awardsSection = {
  display: true,
  title: "Awards & Recognitions",
  subtitle: "Honors, Fellowships, and Achievements",
  displayDynamicAwards: "true", // Set to "false" if you want static awards
  awards: [
    {
      title: "NSF Graduate Research Fellowship",
      description: "Awarded by the National Science Foundation to support outstanding graduate students.",
      year: "2021",
      url: "https://www.nsfgrfp.org/"
    },
    {
      title: "Atlanta ARCS Foundation Scholar",
      description: "Merit-based award honoring exceptional PhD candidates in Atlanta, GA.",
      year: "2025",
      url: "https://www.arcsfoundation.org/"
    },
    {
      title: "Georgia Tech UCEM Fellowship",
      description: "Competitive fellowship recognizing excellent PhD students at Georgia Tech.",
      year: "2023",
      //url: "https://www.arcsfoundation.org/"
    },
    {
      title: "Georgia Tech Goizueta Fellowship",
      description: "Fellowship awarded to distinguished Hispanic PhD students.",
      year: "2023",
      // url: "https://www.arcsfoundation.org/"
    },
    {
      title: "GEM Fellow",
      description: "Nationally recognized fellowship supporting underrepresented graduate students.",
      year: "2021",
      url: "https://www.gemfellowship.org/"
    }
  ]
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  awardsSection,
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
  resumeSection,
  research,
  aboutMe
};
