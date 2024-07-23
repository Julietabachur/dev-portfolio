// import one from "../assets/svg/projects/one.svg";
// import two from "../assets/svg/projects/two.svg";
// import three from "../assets/svg/projects/three.svg";
// import four from "../assets/svg/projects/four.svg";
// import five from "../assets/svg/projects/five.svg";
// import six from "../assets/svg/projects/six.svg";
// import seven from "../assets/svg/projects/seven.svg";
// import eight from "../assets/svg/projects/eight.svg";
import simpsons from "../assets/png/simpsons.PNG";
import rickAndMorty from "../assets/png/rickandmorty.PNG";
import testing from "../assets/png/testing.PNG";
import blooma from "../assets/png/blooma.PNG";
import ecommerce from "../assets/png/ecommerce.PNG";

export const projectsData = [
  {
    id: 1,
    projectName: "The Simpsons",
    projectDesc:
      "This page consumes 'The Simpsons' API. It allows you to search for famous quotes from each character, view descriptions of the main characters, and read news about the series. Developed with React, Redux Thunk, and TypeScript, the page uses Styled Components for better style management and Jest to perform unit testing and ensure code quality.",
    tags: [
      "React Js",
      "Redux Thunk",
      "API",
      "Styled Components",
      "Typescript",
      "JSDoc",
      "Jest",
    ],
    code: "https://github.com/Julietabachur/theSimpsons",
    demo: "https://the-simpsons-gules.vercel.app/",
    image: simpsons,
  },
  {
    id: 2,
    projectName: "Rick and Morty",
    projectDesc:
      "This project consumes the 'Rick and Morty' API and is developed with React.js, TypeScript, and Redux Thunk to provide an efficient user experience. On the main page, you can view paginated characters, search by name, and manage them in your favorites. Clicking on a character shows detailed information and episodes. React.js is used for dynamic interfaces, TypeScript for more maintainable code, and Redux Thunk to handle asynchronous logic.",
    tags: ["React Js", "Redux Thunk", "API", "Typescript", "JSDoc"],
    code: "https://github.com/Julietabachur/rickAndMorty",
    demo: "https://rick-and-morty-git-main-julietabachurs-projects.vercel.app/",
    image: rickAndMorty,
  },
  {
    id: 3,
    projectName: "TESTING ParaBank",
    projectDesc:
      "This project is designed to test the front-end and back-end of the Parabank site. Developed in Java using IntelliJ, it employs tools such as Selenium for UI testing, Rest Assured for API testing, and Extent Reports for detailed reporting. The goal is to ensure the quality and functionality of the site through comprehensive automated testing.",
    tags: ["HTML", "Java", "Selenium", "Rest-Assured", "Extent Reports"],
    code: "https://github.com/Julietabachur/finalTestingJulietaBachur",
    demo: "",
    image: testing,
  },
  {
    id: 4,
    projectName: "Blooma",
    projectDesc:
      "Blooma is a comprehensive professional practice project completed in collaboration with a community manager, a UX/UI designer, and another developer. We created a website and social media presence for a beauty services business. As developers, we used React.js and React Icons to build the site, consumed data from JSON files, implemented routing with React Router DOM, and styled the site using React Bootstrap.",
    tags: [
      "React JS",
      "React Bootstrap",
      "React Router DOM",
      "React Icons",
      "JSON",
    ],
    code: "https://github.com/Julietabachur/blooma",
    demo: "https://blooma-one.vercel.app/",
    image: blooma,
  },
  {
    id: 5,
    projectName: "Ecommerce - Dolce Julieta",
    projectDesc:
      "Dolce Julieta is my pastry business, and I decided that my first website built with React would be an ecommerce for it. The site lists all products, filters them by type, shows details with photos and descriptions, and allows adding products to the cart. I used React.js, React Hooks (useContext, useState, useParams), and consumed data from a Firestore database in Firebase, where orders are also saved, returning an order ID upon completion.",
    tags: ["HTML", "CSS", "React JS", "Bootstrap", "Firebase", "React Hooks"],
    code: "https://github.com/Julietabachur/ecommerce/",
    demo: "https://ecommerce-dolce-julieta.vercel.app/",
    image: ecommerce,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
