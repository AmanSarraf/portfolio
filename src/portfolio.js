/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aman Sarraf",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aman Sarraf Portfolio",
    type: "website",
    url: "https://amansarraf.live/",
  },
};

//Home Page
const greeting = {
  title: "Aman Sarraf",
  logo_name: "Aman Sarraf",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1OA0HqgIJfHg8f3bebxmUCqDBOL6_JbnG/view?usp=sharing",
  portfolio_repository: "https://github.com/AmanSarraf/Opensource-Buddy",
  githubProfile: "https://github.com/AmanSarraf",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/AmanSarraf",
  // linkedin: "https://www.linkedin.com/in/amansarraf/",
  // gmail: "amansarrafnit@gmail.com"
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Amansarraf",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amansarraf/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/opensourcebuddy",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:amansarrafnit@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/aman_stwts",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",

        "⚡ Creating application backend in Golang,Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "mongodb",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "vscode-icons:file-type-mysql",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Azure and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "IIMT College of Management",
      subtitle: "Bachlors of Computer Application",
      logo_path: "IIMTbg.png",
      alt_name: "IIMT_logo",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://iimtu.edu.in/",
    },
    {
      title: "National Institute of Technology",
      subtitle: "Masters of Computer Application",
      logo_path: "NITKLOGO.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - present",
      descriptions: [
        "⚡  I have studied software engineering subjects like DS, Algorithms, DBMS, OS, Computer Networking ,AI,Data Analytics, System Design etc",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
        "⚡ During my time at university, I was also associated with CodeCats Society. As part of it, I have worked with members to help everyone develop there computer science skills that are not part of academic syllabus, also taken sessions on OpenSource and technologies like git and cloud",
      ],
      website_link: "https://nitkkr.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "KCNA",
      subtitle: "- linux foundation",
      logo_path: "KCNA.png",
      certificate_link:
        "https://www.credly.com/badges/f7de6103-2b01-418d-a3e7-a99255bcfbe3/public_url",
      alt_name: "kcna",
      color_code: "",
    },
    {
      title: "Introduction to linux",
      subtitle: "- linux Foundation",
      logo_path: "lfx.png",
      certificate_link: "https://www.edx.org/course/introduction-to-linux",
      alt_name: "lfx.png",
      color_code: "",
    },
    {
      title: "Google Cloud Program",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1oosM9AFU7VPwd81eHQ_Jmemz0np_4M44/view?usp=drive_link",
      alt_name: "Google",
      color_code: "",
    },
    {
      title: "Python",
      subtitle: "- code for cause",
      logo_path: "pyht.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/5831eb90-d1f8-4524-859a-db46985f76b7",
      alt_name: "pyhton",
      color_code: "",
    },
    {
      title: "C++",
      subtitle: "- MysirG",
      logo_path: "C++.png",
      certificate_link:
        "https://premium.mysirg.com/learn/certificate/5130568-109054",
      alt_name: "C++",
      color_code: "",
    },
    {
      title: "Web Development",
      subtitle: "- Hitesh Chaudhary",
      logo_path: "lco.png",
      certificate_link:
        "https://courses.learncodeonline.in/learn/certificate/775355-11931",
      alt_name: "lco",
      color_code: "",
    },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as,Developer, Designer and Software Architect. I have also worked with some popular companies mostly as Developer. I love to collaborate ans organise events and that is why I am also involved with many opensource communities .",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Triggermesh",
          company_url: "https://www.triggermesh.com/",
          logo_path: "triggermesh.png",
          duration: "May 2022 - Nov 2022",
          location: "Remote",
          description:
            "Building new features on the backend , specifically involved in building the CLI tools and test for the product",
          color: "#000000",
        },
      ],
    },
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web developer",
          company: "City Comuter Clinic",
          company_url: "http://www.citycomputerclinic.com/",
          logo_path: "legato_logo.png",
          duration: "May 2021 - Aug 2021",
          location: "remote",
          description:
            "Worked on the automation of all the manual process involved in the complany, built mobile and web app to facilitate online commerce ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Maintainer",
          company: "Kubernetes",
          company_url: "https://kubernetes.io/",
          logo_path: "kubernetes.png",
          duration: "June 2022 - Present",
          location: "Remote",
          description: "",
          color: "#4285F4",
        },
        {
          title: "Opensource Mentor",
          company: "Hactoberfest",
          company_url: "https://hacktoberfest.com/",
          logo_path: "hacktoberfest.png",
          duration: "Oct 2022 - Present",
          location: "Remote",
          description:
            "Under this program, I have organised hands on workshops and seminars to empower begginers to start there opensource contribution journey.",
          color: "#D83B01",
        },
        {
          title: "Mentor",
          company: "CodeCats Society",
          company_url: "https://www.linkedin.com/company/codecats-society",
          logo_path: "codecats.jpg",
          duration: "Oct 2022 - Present",
          location: "NIT,kurukshetra",
          description:
            "My responsibility for this program was to create coding and opensource environment in college. We have organised multiple sessions on various tech topics and guidence. We have build opensource community of our own college.",
          color: "#000000",
        },

        {
          title: "Technical writer",
          company: "WeMakeDevs",
          company_url: "https://wemakedevs.org/",
          logo_path: "wemakedevs.png",
          duration: "July 2022 - PRESENT",
          location: "Remote",
          description:
            "wrote blogs on diversed technologies and topics like cloud, backend , security and DevOps.",
          color: "#181717",
        },
        {
          title: "Ambassador",
          company: "Kubesimplify",
          company_url: "https://kubesimplify.com/",
          logo_path: "kubesimplify.jpg",
          duration: "Jan 2021 - May 2021",
          location: "Remote",
          description:
            "Empowering community by spreading cloud native and opensource knowledge",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "",
  // description:
  //   "",
  // // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {     <<<<<<<<<<<<<<<SAMPLE >>>>>>>>>>>>>>>>>>>>
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect",
    profile_image_path: "amanbgless.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://amansarraf.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
