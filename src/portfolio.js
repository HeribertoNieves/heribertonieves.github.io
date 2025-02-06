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
  <br /> <br /> I’m Heriberto, but feel free to call me Andy (short for my middle name, Andres). I’m currently pursuing a Ph.D. in Robotics at the Georgia Institute of Technology. Outside of my academic pursuits, I enjoy Latin dance, drawing, and gaming.
  <br /><br />
  My interests lie at the intersection of AI, healthcare, and robotics. I’m particularly focused on automating medical imaging analysis, developing MRI-compatible robotics, and creating intelligent systems to improve patient care and diagnostics. 
  <br /><br />
  My research centers on enhancing the accuracy and reducing inter-reader variability in magnetic resonance elastography through AI and computational modeling. I have experience developing innovative solutions that bridge healthcare, AI (including machine learning, deep learning, computer vision, and optimization), and robotics.
  <br /><br />
  In addition to my research, I’m passionate about mentoring and making AI more accessible. Whether guiding students in machine learning projects or exploring AI-driven entrepreneurship, I thrive on fostering innovation and sharing knowledge.
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
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  categories: {
    "Robotics": [
      {
        skillName: "ROS2",
        fontAwesomeClassname: "fas fa-robot"
      },
      {
        skillName: "Gazebo",
        fontAwesomeClassname: "fas fa-home"
      },
      {
        skillName: "Isaac SIM",
        fontAwesomeClassname: "fas fa-eye"
      },
      {
        skillName: "OpenAI Gym",
        fontAwesomeClassname: "fas fa-dumbbell"
      },
      {
        skillName: "Robodk",
        fontAwesomeClassname: "fas fa-cogs"
      },
      {
        skillName: "OpenCV",
        fontAwesomeClassname: "fas fa-camera"
      }
      // {
      //   skillName: "SLAM",
      //   fontAwesomeClassname: "fas fa-map"
      // },
      // {
      //   skillName: "Controls",
      //   fontAwesomeClassname: "fas fa-sliders-h"
      // },
      // {
      //   skillName: "Computer Vision",
      //   fontAwesomeClassname: "fas fa-eye"
      // },
    ],
    "Programming": [
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "C/C++",
        fontAwesomeClassname: "fas fa-code"
      },
      {
        skillName: "MATLAB/Simulink",
        fontAwesomeClassname: "fas fa-calculator"
      },
      // {
      //   skillName: "docker",
      //   fontAwesomeClassname: "fab fa-docker"
      // }
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
      {
        skillName: "Cloud Computing",
        fontAwesomeClassname: "fas fa-cloud"
      },
      // {
      //   skillName: "Deep Learning",
      //   fontAwesomeClassname: "fas fa-brain"
      // },
      // {
      //   skillName: "AI",
      //   fontAwesomeClassname: "fas fa-laptop"
      // }
    ],
    "Design And Manufacturing": [
      {
        skillName: "CAD",
        fontAwesomeClassname: "fas fa-drafting-compass"
      },
      {
        skillName: "Metalworking",
        fontAwesomeClassname: "fas fa-industry"
      },
      {
        skillName: "Woodworking",
        fontAwesomeClassname: "fas fa-tree"
      },
      {
        skillName: "3D Printing",
        fontAwesomeClassname: "fas fa-cube"
      }  
    ]
  },
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia-Tech-Seal.png"),
      subHeader: "Doctorate of Philosophy in Mechanical Engineering: Robotics and Controls",
      duration: "Summer 2022 - Fall 2026 (Expected)",
      // desc: "Relevant Coursework:",
      descBullets: [
        "Research: Secure Networked Robotics",
        "Coursework: Linear Controls, Digital Controls, Nonlinear Controls, Advanced Control Implementation, Robotics, Dynamics of Mechanical Systems",
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia-Tech-Seal.png"),
      subHeader: "Masters of Science in Computer Science: Machine Learning for Robotics",
      duration: "Summer 2024 - Fall 2026 (Expected)",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Coursework: Machine Learning, Artificial Intelligence, Deep Learning, Robotics Research, Deep Reinforcement Learning, Multi-Robot Systems"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia-Tech-Seal.png"),
      subHeader: "Masters of Science in Mechanical Engineering: Design",
      duration: "Fall 2020 - Spring 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia-Tech-Seal.png"),
      subHeader: "Bachelors of Science in Mechanical Engineering",
      duration: "Fall 2016 - Spring 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
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
  display: true, //Set it to true to show workExperiences Section
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
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = { // This is under StartupProjects container
  title: "Projects",
  subtitle: "My passion lies in the development of novel control and perception models for autonomous robots!",
  projects: [
    {
      image: require("./assets/images/bboxes.jpg"),
      projectName: "NVIDIA Open Hackathon: Language to Action",
      projectDesc: "Llama3.2 paired with YOLOworld to auto generate and execute code for pathing and control commands from human language. i.e. tell your robot what to do and it will do it!",
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
      image: require("./assets/images/yolo_cone_detection_sim.png"),
      projectName: "Autonomous Mobile Robot via Machine Learning",
      projectDesc: "PPO, YOLOv8, K-means, and other ML algorithms collaborating to guide a Turtlebot3 through an unknown environment to capture a care package.",
      footerLink: [
        {
          name1: "Paper",
          url1: "https://drive.google.com/file/d/1jaIncONsQz6vT9O9wu5v01NHebDZPQ_G/view?usp=sharing",
          name2: "Visit Repo",
          url2: "https://github.com/jblevins32/Autonomous_Mobile_Robot_via_Machine_Learning"
        }
      ]
    },
    {
      image: require("./assets/images/img_attentionyolo.jpg"),
      projectName: "Vision-Based Object Tracking Models for Autonomous Vehicles",
      projectDesc: "Development of custom vision-based deep perception models for object detection and tracking in road-way scenarios for autonomous vehicles with PyTorch. Developed end-to-end training and testing pipeline. A study on how variations in model architecture such as the addition of attention or encoder-decoders affect the final inference for this task.",
      footerLink: [
        {
          name1: "Paper",
          url1: "https://drive.google.com/file/d/1MRTCZ6oBk59E9YgXJN_5LrG2qpbGcri7/view?usp=sharing",
          name2: "Visit Repo",
          url2: "https://github.com/jblevins32/Vision-Based-Object-Tracking-Model-for-Autonomous-Vehicles"
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
      image: require("./assets/images/robonav.png"),
      projectName: "RoboJackets - RoboNav Mars Rover Software Team",
      projectDesc: "Motion planning subteam; Development of path planning and control for a mars rover with an NVIDIA Jetson Orin Nano for traversal over complex terrain for the 2025 University Rover Competition.",
      footerLink: [
        {
          name1: "About",
          url1: "https://urc.marssociety.org/home",
          name2: "Visit Repo",
          url2: "https://github.com/RoboJackets"
        }
      ]
    },
    {
      image: require("./assets/images/slosh.png"),
      projectName: "Liquid Sloshing Reduction via Input Shaping",
      projectDesc: "Input shaping of crane, double-pendulum, liquid system, reducing system modes to 5% of their original magnitude, saving factory workers from hazardous liquid sloshing ",
      footerLink: [
        {
          name1: "Paper",
          url1: "https://drive.google.com/file/d/138AKk0rJvJKB8Gt7015BfxH7fno3F07A/view?usp=sharing",
          name2: "No Repo Available",
          url2: ""
        }
      ]
    },
    {
      image: require("./assets/images/MMM.jpg"),
      projectName: "Machining Training Library",
      projectDesc: "Project lead for all-encompassing machining tutorial library",
      footerLink: [
        {
          name1: "About",
          url1: "https://www.me.gatech.edu/montgomery-machining-mall",
          name2: "Visit Training",
          url2: "https://www.youtube.com/@gatech_ME_machining_mall"
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
    "As networked robots become increasingly relevent, the security of such systems is imperative. Checkout my research below!",

  achievementsCards: [
    {
      title: "Affine Transformation-Based Perfectly Undetectable False Data Injection Attacks on Remote Manipulator Kinematic Control With Attack Detector",
      subtitle:
        "This letter demonstrates the viability of perfectly undetectable affine transformation attacks against robotic manipulators where intelligent attackers can inject multiplicative and additive false data while remaining completely hidden from system users.",
      image: require("./assets/images/scale.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10654498"
        }
      ]
    },
    {
      title: "Encrypted Model Reference Adaptive Control with False Data Injection Attack Resilience via Somewhat Homomorphic Encryption-Based Overflow Trap",
      subtitle:
        "This research proposes an encrypted adaptive control framework that can be secured for cloud computing with encryption and without issues caused by encryption overflow and large execution delays.",
      image: require("./assets/images/block_diagram.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.techrxiv.org/users/815499/articles/1216374-encrypted-model-reference-adaptive-control-with-false-data-injection-attack-resilience-via-somewhat-homomorphic-encryption-based-overflow-trap"
        }
      ]
    },
    {
      title: "Encrypted Coordinate Transformation via Parallelized Somewhat Homomorphic Encryption for Robotic Teleoperation",
      subtitle:
        "This paper seeks to understand the viability of encrypted robot control. This objective is accomplished through encrypted control via Dyer’s somewhat homomorphic encryption scheme on multi and single threaded matrix transformations for telecommunicated movement commands between a virtual-reality joystick and a robot arm.",
      image: require("./assets/images/URImage.PNG"),
      imageAlt: "",
      footerLink: [
        {
          name: "Publication",
          url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10196122"
        }
      ]
    },
    {
      title: "Defense Mechanisms Against Undetectable Cyberattacks on Telerobotic Systems",
      subtitle:
        "This research develops a two-detector mechanism for undetectable attack detection for a mobile robot and analyzes the strengths and weaknesses of both detectors in the covert attack and ATPA scenarios, resulting in a robust attack detection framework.",
      image: require("./assets/images/photoTraj.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "In Progress",
          url: ""
        }
      ]
    },
    {
      title: "Deep Learning for the Existence of Perfectly Undetectable FDIA on Output-Feedback LTI Systems",
      subtitle:
        "System states and control inputs can be perfectly modified such that an observer sees no operational modifications, regardless of the plant's actual modified operations. This research aims to determine the nontrivial solutions for such an attack through pattern recognition with deep learning networks.",
      image: require("./assets/images/deep_l_research.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "In Progress",
          url: ""
        }
      ]
    },
    {
      title: "Developing AI-Powered Knowledge Assistants to Enhance User Experience in Makerspaces",
      subtitle:
        "A framework for implementation of AI chatbots in Makerspaces to keep makerspace users trained, equipped, and safer.",
      image: require("./assets/images/ISAM_2024_Blevins_Poster.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Paper",
          url: "https://drive.google.com/file/d/1hjkZQARhwEzgF-Men--d27ofM2BetxrS/view?usp=sharing"
        }
      ]
    }
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
  title: "Service, Organizations, & Awards",
  subtitle:
    "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://research.gatech.edu/robotics",
    //   title: "Institute for Robotics and Intelligent Machines",
    //   description:
    //     "Georgia Tech, faculty member"
    // },
    {
      url: "https://www.ieee-ras.org/",
      title: "IEEE Robotics and Automation Society",
      description:
        "Graduate student member"
    },
    {
      url: "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra",
      title: "International Conference on Robotics and Automation",
      description:
        "Reviewer"
    },
    {
      url: "https://a2c2.org/event/conference/2024-4th-modeling-estimation-and-control-conference",
      title: "Modeling Estimation and Control Conference",
      description:
        "Reviewer"
    },
    {
      url: "https://www.firstinspires.org/robotics/frc",
      title: "FIRST Robotics",
      description:
        "Software workshop lead"
    },
    {
      url: "https://ctl.gatech.edu/tech-teaching",
      title: "Tech to Teaching Graduate",
      description:
        "Georgia Tech's Teaching Program"
    },
    {
      url: "https://safety.me.gatech.edu/",
      title: "Interactive Learning Committee",
      description:
        "Georgia Tech - Mechanical Engineering"
    },
    {
      url: "",
      title: "Undergraduate Curriculum Committee",
      description:
        "Georgia Tech - Mechanical Engineering"
    },
    {
      url: "https://robograds.gatech.edu/",
      title: "RoboGrads",
      description:
        "Georgia Tech"
    },
    {
      url: "https://www.scoutspirit.org/",
      title: "Eagle Scout",
      description:
        "Boy Scouts of America"
    },
    {
      url: "",
      title: "Highest Honors",
      description:
        "Bachelor's 4.0 GPA"
    },
    {
      url: "https://www.me.gatech.edu/news/faculty-and-staff-recognized-annual-woodruff-school-awards",
      title: "Professional Support Excellence",
      description:
        "Georgia Tech - Mechanical Engineering"
    },
    {
      url: "",
      title: "Culture Champion",
      description:
        "Georgia Tech - Mechanical Engineering"
    }
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
  display: true // Set false to hide this section, defaults to true
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
  number: "678-383-1625",
  email_address: "jacob.blevins@gatech.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection,
  research,
  aboutMe
};
