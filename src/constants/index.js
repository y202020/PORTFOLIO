import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
  threejs,
  Csharp,
  bootstrap,
  ajax,
  dotnetCore,
  java,
  mysql,
  phpadmin,
  sqlite,
  Unity,
  postman,
  faspi,
  echo,
  placement,
  threefl,
  claw
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DotNet Developer",
      icon: backend,
    },
    {
      title: "Unity-Game Developer",
      icon: Unity,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "Reactjs",
      icon: reactjs,
    },
  ];
  
const technologies = [
    {
      name: "Unity3D",
      icon: Unity,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C#",
      icon: Csharp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "Asp.NetCORE",
      icon: dotnetCore,
    },
    {
      name: "AJAX",
      icon: ajax,
    },
    {
      name: "ReactJs",
      icon: reactjs,
    },
    {
      name: "SQLite",
      icon: sqlite,
    },
    {
      name: "PhpMyAdmin",
      icon: phpadmin,
    },
    {
      name: "MySQLServer",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostMan",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "DotNet Developer",
      company_name: "Faspi Enterprises pvt ltd.",
      icon: faspi,
      iconBg: "#383E56",
      date: "Sept 2022 - Jan 2023",
      points: [
        "Worked on DOTNET and DOTNET CORE as an Backend Developer",
        "RESTAPIs Development and Managements etc.",
        "Also delivered and worked up on many business solutions to Hospitals, Educational Institutes, Transports etc.",
        "I developed Fee-Management Software of my own College and School.",
        "During internship I learned how to figure out and resolve unforeseen issues and to complete the assigned project with in limited timeframe."
      ],
    },
    {
      title: "Game Developer",
      company_name: "EchoIt Solutions",
      icon: echo,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - current",
      points: [
        "Software Engineer And Game Developer.",
        "Current tech stack is UNITY-Editor all the backend logical scripts are in C#-Visual Studio.",
        "Working along with 3D designing software like blender/3ds-Max.",
        "Also working on PHP-CodeIgnitor, project is an WebCummunity building platform."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Showcase great performance, execution and adaptablity on ground level, even aquired the Star performer in his second-month during his internship.",
      name: "Mr. Aman Gupta",
      designation: "Founder and Managing Director",
      company: "Faspi Enterprises Pvt.Ltd.",
    },
    {
      testimonial:
        "Performing well to an different domain i.e. Game development, didn't lag and always keep quality and client-satisfaction bar high.",
      name: "Deepak Sharma",
      designation: "Co-Founder",
      company: "EchoIt-Solutions.",
    },
  ];
  
  const projects = [
    {
      name: "Placement-Buddy",
      description:"An Web-Application that would provide an interface to the placement panel as well as to the student to apply and track the applications. It let the Users and the admin to manage the operations regaring the placement with ease !",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "react-BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: placement,
      source_code_link: "https://#",
    },
    {
      name: "3FL(Friend for four Legged)",
      description:"It will be an whole and sole platform cum web application for the pet owners or animal care takers.It provides an common platform to get best offer and quality of all basic-necessities  to medications. ",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: threefl,
      source_code_link: "https://#",
    },
    {
      name: "The-Claw",
      description:"It is an 3D claw machine game,The tech stack is UNITY Game Engine, scripting language is the C#(.NET) and 3D object designing on CINEMA-4D.",
      tags: [
        {
          name: "Unity3d",
          color: "blue-text-gradient",
        },
        {
          name: "VsualStudio",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
        {
          name: "3Ds-Max/Blender",
          color: "blue-text-gradient",
        },
      ],
      image: claw,
      source_code_link: "https://#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };