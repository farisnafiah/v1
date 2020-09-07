import lsbu from "./lsbu-green.png";
import iium from "./iium-green.png";
import uoa from "./uoa-green.png";

let resumeData = {
  hero: {
    title: "Hi! My name is",
    name: 'Faris Nafiah',
    subtitle: "A grad student working on eddy current non-destructive testing.",
    subsubtitle: "Passionate about signal & image processing, machine learning and web development",
    roles: 'PhD Candidate | Electrical Engineer | Web Developer',
    fields: 'Eddy Current Testing (NDT) + Signal & Image Processing + ML',
    location: "📍 TWI Ltd, Cambridge, UK"
  },
  about: {
    sectionHeader: "About Me",
    aboutMe1: "I'm a PhD student in London South Bank University, currently stationed in TWI Ltd, Cambridge.",
    aboutMe2: "My research focuses on signal/image processing and data analysis for electromagnetic non-destructive testing (NDT). "+
    "In particular, my work aims at developing compensation techniques, using both algorithms and hardware improvement, for pulsed eddy current (PEC) application.",
    aboutMe3: "I'm passionate about signal/image processing, machine learning and web developments.",
    techHeader: "Here are some of the technologies I've worked with recently:",
    technologies: ["Python", "Javascript", "HTML & CSS", "Node.js", "React", "MongoDB"],
  },
  work: {
    sectionHeader: "Where I've Worked",
    jobs: [
    {
      expData: {
        company: "TWI",
        position: "Graduate Student",
        period: "Oct 2018 - present",
        details: [
          "Develop an engineering solution for detecting corrosion in pipelines.",
          "Work across multiple engineering disciplines: prototype design & development and data analysis using Python & MATLAB.",
          "Formulate novel signal processing technique for data analysis."
        ]
      }
    },
    {
      expData: {
        company: "IIUM",
        position: "Research Assistant",
        period: "Oct 2016 - May 2018",
        details: [
          "Engineered an automated system for inspection of cracks in metallic samples from aircraft wings.",
          "Interfaced with multi-disciplinary teams of engineers from a joint project with Malaysian Nuclear Agency."
        ]
      }
    },
    {
      expData: {
        company: "Intel",
        position: "Product Development Engineer",
        period: "Mar 2016 - Oct 2016",
        details: [
          "Proposed and implemented automation platform to assist validation plan of new product roll-out.",
          "Worked closely with engineers and management team to carry out tests on new Intel FPGA product."
        ]
      }
    }
  ]
  },
  academic: {
    sectionHeader: "Education",
    edus: [
      {
      image: lsbu,
      university: "London South Bank University",
      location: "London, UK",
      course: "PhD in Electrical & Electronics Eng.",
      duration: "Oct 2018 - Oct 2021",
      details: "Funded by Lloyd's Register Foundation, TWI  and LSBU, the collaborative research aims at developing an electromagnetic method for nondestructive testing of corrosion under insulation in pipelines. Works include circuit design, mechanical prototyping, data analysis and signal processing.",
      website: "https://www.lsbu.ac.uk/"
    },
    {
      image: iium,
      university: "International Islamic University Malaysia",
      location: "Kuala Lumpur, Malaysia",
      course: "Msc in Mechatronics Eng.",
      duration: "Oct 2016 - Feb 2018",
      details: "The study was funded by Malaysian Ministry of Higher Education. This joint research between IIUM and Nuclear Malaysia Agency successfully developed an automated system to inspect defects on aircraft wings using electromagnetic technique.",
      website: "https://www.iium.edu.my/"
    },
    {
      image: uoa,
      university: "University of Auckland",
      location: "Auckland, New Zealand",
      course: "BEng. (H) in Electrical & Electronics Eng.",
      duration: "Mar 2013 - Nov 2015",
      details: "Scholarship awarded by People's Trust Council (Malaysia). Majoring in signal processing, the final year dissertation aimed at developing a system enabling nerve signal acquisition from aquatic animal (fish). Work requires extensive use of control system and signal processing.",
      website: "https://www.auckland.ac.nz/en.html"
    }
    ]
  },
  contact: {
    sectionHeader: "Contact Me!",
    contactInfo: [

    ]
  }
};

export default resumeData;
