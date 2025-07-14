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
import sexforall from "../assets/png/sexforall.PNG";
import astrologia from "../assets/png/astrologia.PNG";
import actu from "../assets/png/actu.PNG";
import ventaDigital from "../assets/png/ventaDigital.PNG";
import reproyecciones from "../assets/png/reproyecciones.PNG";
import preliquidaciones from "../assets/png/preliquidaciones.PNG";
import siniestros from "../assets/png/siniestros.PNG";
import sinisterPortal from "../assets/png/sinisterPortal.PNG";
import motor from "../assets/png/motor.PNG";
import reaseguro from "../assets/png/reaseguro.PNG";
import PDC from "../assets/png/PDC.PNG";

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
    demo: ["https://the-simpsons-gules.vercel.app/"],
    image: simpsons,
  },
  {
    id: 2,
    projectName: "Rick and Morty",
    projectDesc:
      "This project consumes the 'Rick and Morty' API and is developed with React.js, TypeScript, and Redux Thunk to provide an efficient user experience. On the main page, you can view paginated characters, search by name, and manage them in your favorites. Clicking on a character shows detailed information and episodes. React.js is used for dynamic interfaces, TypeScript for more maintainable code, and Redux Thunk to handle asynchronous logic.",
    tags: ["React Js", "Redux Thunk", "API", "Typescript", "JSDoc"],
    code: "https://github.com/Julietabachur/rickAndMorty",
    demo: ["https://rick-and-morty-git-main-julietabachurs-projects.vercel.app/"],
    image: rickAndMorty,
  },
  {
    id: 3,
    projectName: "Redesign - Venta Digital",
    projectDesc: "I redesigned and developed a self-managed digital sales site for a partnership between CNP Seguros and Banco Credicoop. The user flow and contracting process were optimized, and a chatbot replaced the FAQ section to guide users through digital insurance purchases.",
    tags: ["Adobe XD", "AI Agent", "Chatbot", "Ux Research", "Redesign"],
    code: "",
    demo: ["https://xd.adobe.com/view/8845badf-3194-4edd-8e43-558a82c63d56-dd16/"],
    image: ventaDigital,
    
  },
  {
    id: 4,
    projectName: "Actu - chatbot",
    projectDesc:
      "This is a UX/UI design and development project for a chatbot called ACTU, created for insurance advisors. It answers commercial questions about product types, coverages and conditions, based on research and user feedback.",
    tags: ["Angular", "AI Agent", "Chatbot", "ASP .Net Core", "Adobe XD"],
    code: "",
    demo: ["https://xd.adobe.com/view/4dc28675-4292-4802-87bd-95148a75607b-1891/"],
    image: actu,
  },
  {
    id: 5,
    projectName: "Redesign - Sinister section",
    projectDesc: "This is a UX/UI redesign prototype for the claims section in the producers' portal. Outdated forms were replaced with a brief and visually engaging screen that redirects users to a new external claims portal. The update improves visibility and encourages producers to report claims through the correct channel.",
    tags: ["Usability testing", "Ux Research", "Adobe XD", "Interviews", "Redesign"],
    code: "",
    demo: ["https://xd.adobe.com/view/f8f7fbc7-8513-4eef-8789-7bb2263b1906-ada4/"],
    image: siniestros,    
  },
  {
    id: 6,
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
    demo: ["https://blooma-one.vercel.app/"],
    image: blooma,
  },
  {
    id: 7,
    projectName: "Astro App",
    projectDesc:
      "This is a simple project from a UX/UI design workshop where we designed a mobile app focused on astrology. It includes the necessary UX research and conclusions based on feedback from the conducted tests.",
    tags: ["Figma", "Ux Research", "Usability testing", "Interviews"],
    code: "https://drive.google.com/file/d/1MLIjZ756vQd7b8SGDDtdYptnjPIkzTAM/view?usp=drive_link",
    demo: ["https://www.figma.com/proto/YlTwuzG784vz9DrO8XNPIr/C9-E1-%E2%8F%A4-Figma-Astrolog%C3%ADa?node-id=1627-404&t=DMUZAWdHUs8pER1F-1&scaling=scale-down&content-scaling=fixed&page-id=1627%3A348&starting-point-node-id=1627%3A404"],
    image: astrologia,
  },
  {
    id: 8,
    projectName: "Preliquidaciones",
    projectDesc: "This is a UX/UI prototype for a portal section called 'Preliquidaciones', designed for the collections team. It allows insurance advisors to report grouped premium transfers and upload supporting documents. Analysts can then verify and approve or reject each submission. The project includes views for producers, analysts, and payment consultation, and was based on user interviews and usability testing.",
    tags: ["Usability testing", "Solution design","Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/6151feff-967c-4a59-b083-9f586ea2953f-3402/", "https://xd.adobe.com/view/840fa0e9-f3b4-41db-8b14-0378592500b2-d15c/","https://xd.adobe.com/view/567cdf99-5a39-4d54-b176-8072127d7a49-032f/"],
    image: preliquidaciones,
  },
  {
    id: 9,
    projectName: "SexForAll",
    projectDesc:
      "This is the design of an Android app in Figma that provides information on sexuality. It includes UX research, low and high fidelity wireframes, and a functional prototype with atomic design and grids. Usability testing, moodboards, and typography were also conducted.",
    tags: [
      "Figma",
      "Material Design Kit",
      "Ux Research",
      "MVP",
      "User Flow",
      "Benchmarking",
    ],
    code: "https://drive.google.com/file/d/1r4zBr7aYbMoAHipkk5SVjlAmtDoTWR70/view",
    demo: ["https://www.figma.com/proto/RpoaLLHlEgF45oWZBTJheA/SexForAll?node-id=926-1915&t=aKbDdecKCGiQIC9R-1&scaling=scale-down&content-scaling=fixed&page-id=926%3A1888&starting-point-node-id=926%3A1915"],
    image: sexforall,
    
  },
  {
    id: 10,
    projectName: "Assurances reprojections",
    projectDesc: "UX/UI prototype for 'Reprojections', a new section in the producers’ portal with producer and analyst views, enabling self-managed savings re-projections for universal life policies.",
    tags: ["Usability testing", "Solution design", "Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/0bed9fd7-eba1-4595-8c03-e36e9e961808-5ebe/", "https://xd.adobe.com/view/ebfcbf10-be91-46b3-a18c-3d7c00fd92c2-beaf/"],
    image: reproyecciones,
  },
  {
    id: 11,
    projectName: "TESTING ParaBank",
    projectDesc: "This project is designed to test the front-end and back-end of the Parabank site. Developed in Java using IntelliJ, it employs tools such as Selenium for UI testing, Rest Assured for API testing, and Extent Reports for detailed reporting. The goal is to ensure the quality and functionality of the site through comprehensive automated testing.",
    tags: ["HTML", "Java", "Selenium", "Rest-Assured", "Extent Reports"],
    code: "https://github.com/Julietabachur/finalTestingJulietaBachur",
    demo: [],
    image: testing,
  },
  {
    id: 12,
    projectName: "Ecommerce - Dolce Julieta",
    projectDesc:
      "Dolce Julieta is my pastry business, and I decided that my first website built with React would be an ecommerce for it. The site lists all products, filters them by type, shows details with photos and descriptions, and allows adding products to the cart. I used React.js, React Hooks (useContext, useState, useParams), and consumed data from a Firestore database in Firebase, where orders are also saved, returning an order ID upon completion.",
    tags: ["HTML", "CSS", "React JS", "Bootstrap", "Firebase", "React Hooks"],
    code: "https://github.com/Julietabachur/ecommerce/",
    demo: ["https://ecommerce-dolce-julieta.vercel.app/"],
    image: ecommerce,
  },
  {
    id: 13,
    projectName: "Sinister claims portal",
    projectDesc:
      "This is a UX/UI prototype for a new self-service portal that allows users to report insurance claims and track their status. The design aims to simplify the reporting process and improve transparency throughout the claims journey.",
    tags: ["Usability testing", "Solution design", "Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/10b62c95-bef7-446d-97ce-8583f88b912c-45e5/"],
    image: sinisterPortal,
  },
  {
    id: 14,
    projectName: "Recommendation Engine",
    projectDesc:
      "This is a UX/UI prototype for the quotation section in the producers’ portal. It includes a new recommendation engine that, based on client data (ID, email, gender), suggests the most suitable insurance product before starting the quotation process. The recommendations are powered by data analytics to better match each client's profile.",
    tags: ["Data Analytics","Usability testing", "Solution design", "Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/37995e71-fb8b-4e5a-ade4-c8c01cb45235-62ca/"],
    image: motor,
  },
  {
    id: 15,
    projectName: "Reinsurance section",
    projectDesc:
      "This is a UX/UI prototype for a new section called Reinsurance, added to the internal claims management application. It allows the technical team to create and store reinsurance contracts, defining conditions for cost-sharing on high-value claims. The data is saved in a structured way for future reference and integration with other processes.",
    tags: ["Usability testing", "Solution design", "Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/a5b12f02-be27-494f-b49d-67e8cafc5060-f0e2/"],
    image: reaseguro,
  },
  {
    id: 16,
    projectName: "Update Assured Portal",
    projectDesc:
      "This is a UX/UI prototype for the redesign of the self-service portal for policyholders. Updates include a news carousel, fixed redirect issues, removal of outdated content (e.g. COVID banners), and new actions such as policy cancellation, fraud reporting, and payment history download. Informative tooltips with icons were also added to improve accessibility for older users.",
    tags: ["Accessibility", "Solution design", "Ux Research", "Adobe XD", "Interviews"],
    code: "",
    demo: ["https://xd.adobe.com/view/fa6220b6-86b0-44cc-bc60-c7e3f4ece301-af31/"],
    image: PDC,
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
