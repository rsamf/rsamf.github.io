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
  username: "rsamf",
  title: "Hi, I'm Richard",
  subTitle: emoji(
    "I have a love for a wide range of topics including Machine Learning, Blockchain, Web/Mobile Application, Cloud/IaC, and ETL."
  ),
  resumeLink: "https://drive.google.com/file/d/1V3tJcLTpje5wGSh1jfmzRng17wr5Rbxb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rsamf",
  linkedin: "https://www.linkedin.com/in/rsamfranklin/",
  gmail: "rsamfranklin@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Engineer and leading development of ML models",
  skills: [
    emoji("⚡ Researching and developing custom ML models for virtual try-on and clothing recommendation systems"),
    emoji("⚡ Graduated from UW with an MS degree where I conducted research in multimodal long-tailed visual recognition"),
    emoji("⚡ Web and mobile application development with React, AWS, GCP, Docker, Kubernetes, and more..."),
    emoji("⚡ Experienced building out telemetry and command services for space program delivery")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/uw-logo.png"),
      subHeader: "MS Computer Science",
      duration: "September 2022 - August 2023",
      desc: "Conducted research in multimodal long-tailed learning for computer vision",
      descBullets: [
        "Focused my education in Machine Learning",
        "Developed a novel approach to multimodal long-tailed learning for my thesis",
        "Published a paper to The 24th IEEE International Conference on Mobile Data Management and one more currently under review"
      ]
    },
    {
      schoolName: "University of California, Santa Cruz",
      logo: require("./assets/images/ucsc-slug-logo.png"),
      subHeader: "BS Computer Science, Minor Electrical Engineering",
      duration: "September 2015 - August 2019",
      desc: "Took courses about Software Engineering, Machine Learning, Operating Systems, and more ...",
      descBullets: [
        "Graduated with honors"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Typescript/Javascript",
      progressPercentage: "90%"
    },
    {
      Stack: "Terraform",
      progressPercentage: "80%"
    },
    {
      Stack: "C#",
      progressPercentage: "80%"
    },
    {
      Stack: "C++",
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
        role: "Founder",
        company: "Heddle AI",
        companylogo: require("./assets/images/heddle-logo.png"),
        date: "August 2023 - Present",
        desc: "Building a virtual try-on and clothing recommendation platform for online shoppers and fashion designers",
        descBullets: [
          "Gathering data and designing, training, and evaluating custom ML models for virtual try-on and clothing recommendation systems",
          "Leading a team of developers to build out a virtual try-on SaaS application",
          "Acting out multiple roles in the startup including software engineer, data scientist, and product manager"
        ]
    },
    {
      role: "Makerspace Student Assistant",
      company: "University of Washington",
      companylogo: require("./assets/images/uw-logo.png"),
      date: "October 2022 - August 2023",
      desc: "Guiding students in building out their creative projects while hile being a graduate student at UW",
      descBullets: [
        "Guided makers in building their creative projects with my expertise in 3D printing, laser cutting, poster printing, vinyl cutting, and sewing at the Makerspace",
        "Maintained safety and accessibility of Makerspace equipment and tools"
      ]
    },
    {
      role: "Software Engineer",
      company: "Maxar",
      companylogo: require("./assets/images/maxar-logo.png"),
      date: "January 2020 - September 2022",
      desc: "Developed a wide range of products across multiple teams to deliver value for Maxar's mission: For a Better World",
      descBullets: [
        "Built out CI/CD pipeline in GitLab, provisioned infrastructure with AWS and terraform, and lead team's modernization efforts",
        "With internal research and development team, I employed AI/ML processes and enterprise blockchain in Kubernetes",
        "With Unity and C#, developed an AR application to assist work processes for manufacturing satellite assemblies",
        "Maintained ground station ETL software to ingest, archive, retrieve, and visualize telemetry using C++ and Python"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Ultimate Khronos Group",
      companylogo: require("./assets/images/ukg.jpeg"),
      date: "May 2017 - May 2018",
      desc: "Developed and maintained automated test software for web apps",
      descBullets: [
        "Used Java, C#, JavaScript, Selenium, Angular, React"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My highlighted projects that I worked on myself",
  projects: [
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Autonomous Vacuuming Robot (\"Roomba\")",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     // {
    //     //   name: "Visit Website",
    //     //   url: "http://nextu.se/"
    //     // }
    //   ]
    // },
    {
      image: require("./assets/images/limelight.jpg"),
      projectName: "Limelight - Collaborative DJ",
      projectDesc: "In a party or any social gathering that requires music, Limelight allows the guests to construct the music with a voting system. Limelight gets its music from Spotify.",
      footerLink: [
        {
          name: "See Details",
          url: "https://appadvice.com/app/limelight-collaborative-dj/1430951858"
        },
        {
          name: "Code",
          url: "https://github.com/rsamf/limelight"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bobber.png"),
      projectName: "WoW Fishing Bot",
      projectDesc: "Autonomously fish in World of Warcraft with Computer Vision",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/rsamf/wow-fishing-bot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/118.jpg"),
      projectName: "Ping Pong Shooting Robot",
      projectDesc: "The final project for the hardest course (CMPE118) at University of California, Santa Cruz. The robot was designed to navigate tape, avoid obstacles, and shoot ping pong balls at a 2kHZ emitting IR beacon.",
      footerLink: [
        {
          name: "See Details",
          url: "https://sites.google.com/ucsc.edu/cmpe-118l/home"
        }
      ]
    },
    {
      image: require("./assets/images/igg.png"),
      projectName: "I Gotta Go",
      projectDesc: "Ever really need to go to the bathroom, but couldn't find the location to the nearest one? I Gotta Go is just for you! I Gotta Go is an app that lets users find, rate and review, and verify bathrooms.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sammyfranklin/i-gotta-go"
        }
      ]
    },
    {
      image: require("./assets/images/board.png"),
      projectName: "Board",
      projectDesc: "Board is an application that lets you draw collaboratively. Drawing can be done in 2D and 3D environments and your work is exportable in .png and .obj formats.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sammyfranklin/board"
        }
      ]
    },
    {
      image: require("./assets/images/voxel.png"),
      projectName: "Quick Voxel",
      projectDesc: "A game mechanic for high-performing cube creation and destruction. Minecraft lets players explore their creativy in a casual setting while QuickVoxel has the potential to power a game that is more action-packed.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sammyfranklin/QuickVoxel"
        }
      ]
    },
    {
      image: require("./assets/images/jsi.png"),
      projectName: "Just Sign In",
      projectDesc: "Just Sign In is a tool that lets club, businesses, orgs, etc. to keep track of who is present.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/sammyfranklin/justsignin"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Issued Mar 2022 - Expires Mar 2025. Basic AWS Cloud fluency. This certification can give candidates the confidence to tackle role-based AWS Certifications",
      image: require("./assets/images/aws-cert.png"),
      imageAlt: "AWS Cert Badge",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Generative Adversarial Networks (GANs)",
      subtitle: "Issued Apr 2021. Understand, build, and assess GAN components using PyTorch",
      image: require("./assets/images/gans.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/specialization/4JGEW5XTHK2E"
        }
      ]
    },
    {
      title: "Deep Learning with PyTorch",
      subtitle: "Issued Jan 2021. Build image classification, object detection, and semantic segmentation models with PyTorch and OpenCV",
      image: require("./assets/images/pytorch.png"),
      imageAlt: "OpenCV Logo",
      footerLink: [
        {
          name: "Certification", 
          url: "https://courses.opencv.org/certificates/44b70d54d70a4e0c8f4d3a2dc36b4390"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Awards Section

const awardSection = {
  title: "Hackathon Awards 🏆",
  subtitle: "With love for coding and developing cool things, I participated in 10+ hackathons. Here are my winnings:",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  awards: [
    {
      url: "https://devpost.com/software/i-gotta-go",
      title: "Stanford TreeHacks 2018",
      description: "Submitted I Gotta Go! Winner of mLab Sponsor prize."
    },
    {
      url: "https://devpost.com/software/spotlight-ke0c4l",
      title: "Hack UCSC 2017",
      description: "Submitted Spotlight. 3rd place winner in Innovation."
    },
    {
      url: "https://devpost.com/software/wevr-whiteboard-education-in-virtual-reality",
      title: "HackEDU 2015",
      description: "Submitted WEVR (Whiteboard Education in Virtual Reality). Top 10 finalists in main competition."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Publications Section
const publicationsInfo = {
    title: "Publications",
    subtitle: "My published papers while at University of Washington",
    publications: [
      {
        title: "SolarDetector: A Transformer-based Neural Network for the Detection and Masking of Solar Panels",
        year: "2023",
        authors: "Salama, A., Hendawi, A., Franklin, R., Al-Masri, E., Ali, M.",
        url: "https://dl.acm.org/doi/10.1145/3589132.3625649",
        conference: "SIGSPATIAL '23",
        descBullets: [
            "This paper presents an efficient system to detecting solar panels from satellite images and visualizing them."
        ]
      }
    ],
    currentlyInReview: 1,
    display: true // Set false to hide this section, defaults to true
}

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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? Send me an email or message me on LinkedIn.",
  // number: "+92-0000000000",
  email_address: "rsamfranklin@gmail.com"
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
  publicationsInfo,
  bigProjects,
  achievementSection,
  awardSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
