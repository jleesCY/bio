import miBrowserImage from "../assets/images/projects/mi-browser.png";
import nandBoxImage from "../assets/images/projects/nandbox.png";
import boxedLettersIcon from "../assets/images/projects/letter-boxed.png";

export const personalProjects = [
    {
    id: "mi-browser",
    title: "mi. Browser",
    description: "A lightweight, distraction-free mobile android browser designed for the modern web, featuring a unique simplistic design, deep customization opstions, and high-speed performance optimizations.",
    link: "https://github.com/jleesCY/mi-browser",
    image: miBrowserImage,
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    isActive: true,
    file: "mi-browser.md"
},
    {
        id: "nandbox",
        title: "NANDbox",
        description: "A powerful web-based digital logic simulation tool that allows users to design, build, and test boolean circuits interactively.",
        link: "https://github.com/jleesCY/NANDbox",
        image: nandBoxImage,
        tags: ["React", "HTML5 Canvas", "Digital Logic Engine", "Simulation"],
        isActive: true,
        file: "nandbox.md"
    },
    {
        id: "letter-boxed",
        title: "Letter Boxed",
        description: "An algorithmic solver and clean interactive interface for the popular NYT word puzzle game, Letter Boxed.",
        link: "https://github.com/jleesCY/letter-boxed",
        image: boxedLettersIcon,
        tags: ["React", "Graph Algorithms", "Game Dev"],
        isActive: false,
        file: "letter-boxed.md"
    },
];

export const professionalProjects = [
    // {
    //     id: "professional-work",
    //     title: "Professional Work",
    //     description: "Details about my professional projects and contributions.",
    //     link: "#",
    //     tags: ["Enterprise", "Collaboration"],
    //     isActive: false,
    //     details: null
    // }
];
