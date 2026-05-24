import miBrowserImage from "../assets/images/projects/mi-browser.png";
import nandBoxImage from "../assets/images/projects/nandbox.png";
import boxedLettersIcon from "../assets/images/projects/letter-boxed.png";
import bioPageIcon from "../assets/images/projects/bio-page.png";

export const personalProjects = [
    {
        id: "mi-browser",
        title: "mi. Browser",
        description: "A lightweight, distraction-free mobile android browser designed for the modern web, featuring a unique simplistic design, deep customization options, and high-speed performance optimizations.",
        link: "https://github.com/jleesCY/mi-browser",
        image: miBrowserImage,
        tags: ["React Native", "Expo", "TypeScript", "WebView", "Mobile Development"],
        isActive: true,
        file: "mi-browser.md"
    },
    {
        id: "bio-page",
        title: "Bio Page & Portfolio",
        description: "My take on an interactive, modern, and highly polished personal portfolio website designed to showcase my projects, skills, and professional experience.",
        link: "https://github.com/jleesCY/bio",
        image: bioPageIcon,
        tags: ["React", "CSS3", "Markdown", "Portfolio"],
        isActive: true,
        file: "bio-page.md"
    },
        {
        id: "boxed-letters",
        title: "Boxed Letters",
        description: "An algorithmic solver and clean interactive interface for the popular NYT word puzzle game, Letter Boxed.",
        link: "https://github.com/jleesCY/letter-boxed",
        image: boxedLettersIcon,
        tags: ["React", "Graph Algorithms", "Game Dev"],
        isActive: false,
        file: "boxed-letters.md"
    },
    {
        id: "nandbox",
        title: "NANDbox",
        description: "A powerful web-based digital logic simulation tool that allows users to design, build, and test boolean circuits interactively.",
        link: "https://github.com/jleesCY/NANDbox",
        image: nandBoxImage,
        tags: ["HTML5", "CSS3", "JavaScript", "Event Simulation", "Interactive UI"],
        isActive: true,
        file: "nandbox.md"
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
