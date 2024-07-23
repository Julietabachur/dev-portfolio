import professionalDeveloper from "../assets/png/professionalDeveloper.png";
import UxUi from "../assets/png/BachurUxUi.PNG";
import react from "../assets/png/reactCoder.png";

export const achievementData = {
  bio: "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
  achievements: [
    {
      id: 1,
      title: "Professional Developer",
      details: "1st track of Certified Tech Developer career",
      date: "Dic, 2023",
      field: "Coding",
      image: professionalDeveloper,
    },
    {
      id: 2,
      title: "Angular: De cero a experto",
      details: "An Angular course from Udemy",
      date: "Jul 5, 2023",
      field: "Coding",
      image:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-1fed7499-01fe-4b57-a85b-465c31ceb49f.jpg?v=1688650463000",
    },
    {
      id: 3,
      title: "UX-UI Design",
      details: "UX-UI Design Course from GCBA",
      date: "Dic, 2022",
      field: "UX-UI",
      image: UxUi,
    },
    {
      id: 4,
      title: "React JS",
      details: "A React JS course from Coderhouse",
      date: "Aug, 2022",
      field: "Coding",
      image: react,
    },
  ],
};
