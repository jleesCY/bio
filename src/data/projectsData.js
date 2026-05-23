import miBrowserImage from "../assets/images/projects/mi-browser.png";
import nandBoxImage from "../assets/images/projects/nandbox.png";
import boxedLettersIcon from "../assets/images/projects/letter-boxed.png";

export const personalProjects = [
    {
        id: "mi-browser",
        title: "mi-browser",
        description: "A lightweight, distraction-free mobile android browser designed for the modern web, featuring a unique simplistic design, deep customization opstions, and high-speed performance optimizations.",
        link: "https://github.com/jleesCY/mi-browser",
        image: miBrowserImage,
        tags: ["React Native", "Expo", "TypeScript", "AsyncStorage", "3D UI"],
        isActive: true,
        details: "mi-browser is a lightweight, mobile-first browser focused on performance and aesthetics. It eliminates unnecessary clutter and presents a clean, intuitive interface. All data associated with the browser is stored locally. History, Tab, and bookmark management is highly optimized, using AsyncStorage for persistent local storage while ensuring rapid lookups and unique ID generation for bookmarks. Settings are also stored locally, allowing for instant application of user preferences without the need for network requests.",
        challenges: "React native's architecture posed unique challenges for implementing a performant and visually appealing browser. Managing complex state for tabs, history, and bookmarks required careful optimization to prevent performance bottlenecks.",
        features: [
            "3D Perspective Effect: A global 3D perspective effect on the main app container that reacts to your interactions.",
            "Custom History Management: Efficiently manages your browsing history with unique IDs and timestamps.",
            "Unified Visual Style: Consistent UI for bookmarks and tabs for a seamless user experience.",
            "Lightweight & Fast: Built for speed and focus, removing unnecessary clutter from your browsing."
        ]
    },
    {
        id: "nandbox",
        title: "NANDbox",
        description: "A powerful web-based digital logic simulation tool that allows users to design, build, and test boolean circuits interactively.",
        link: "https://github.com/jleesCY/NANDbox",
        image: nandBoxImage,
        tags: ["React", "HTML5 Canvas", "Digital Logic Engine", "Simulation"],
        isActive: true,
        details: "NANDbox serves as an educational sandbox for digital logic. It provides an infinite, interactive canvas where users can drag and drop basic logic gates (AND, OR, NOT, NAND) to build highly complex boolean circuits. The custom simulation engine evaluates the circuit state in real-time as users flip input switches.",
        challenges: "Building a performant rendering engine on HTML5 Canvas while simultaneously evaluating complex boolean directed acyclic graphs (DAGs) on every frame. Implementing an efficient event loop that prevents infinite loops in cyclical circuit designs (like flip-flops and oscillators) was a significant algorithmic hurdle.",
        features: [
            "Interactive Canvas: Drag and drop logic gates to build complex circuits.",
            "Real-time Simulation: See the state of your circuit update instantly as you change inputs.",
            "Wide Range of Gates: Includes AND, OR, NOT, NAND, NOR, XOR, and more.",
            "Save & Load: Store your designs locally and come back to them later."
        ]
    },
    {
        id: "letter-boxed",
        title: "Letter Boxed",
        description: "An algorithmic solver and clean interactive interface for the popular NYT word puzzle game, Letter Boxed.",
        link: "https://github.com/jleesCY/letter-boxed",
        image: boxedLettersIcon,
        tags: ["React", "Graph Algorithms", "Game Dev"],
        isActive: false,
        details: "This application provides both a playable interface and a high-speed solver for the New York Times 'Letter Boxed' puzzle. It uses an extensive dictionary and validates user inputs in real-time. The core of the application is a solver engine that utilizes graph algorithms and recursive backtracking to find the absolute shortest sequence of words required to solve any given board state.",
        challenges: "Optimizing the graph search algorithm. A naive recursive backtracking approach would take minutes to solve complex boards due to the massive branching factor of the English dictionary. Implementing a Trie data structure combined with aggressive pruning and memoization brought the solve time down to mere milliseconds.",
        features: [
            "Optimal Solver: Quickly finds the shortest sequence of words to solve any Letter Boxed puzzle.",
            "Interactive UI: Play the game directly with a clean, modern interface.",
            "Word Validation: Uses an extensive dictionary to ensure all played words are valid.",
            "Hint System: Get unstuck with intelligently generated hints."
        ]
    },
];

export const professionalProjects = [
    {
        id: "professional-work",
        title: "Professional Work",
        description: "Details about my professional projects and contributions.",
        link: "#",
        tags: ["Enterprise", "Collaboration"],
        isActive: false,
        details: null
    }
];
