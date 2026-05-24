## Overview
NANDbox is an open-source, interactive educational sandbox designed for modeling and exploring digital logic architectures. It provides users with an infinite, vector-based canvas where they can dynamically instantiate, position, and interconnect basic logic gates to orchestrate highly complex Boolean circuits. Driven by a custom simulation runtime, the platform evaluates complex circuit states instantly, providing immediate visual feedback across interconnected nodes as users toggle active inputs. 

## Key Features
- **Infinite Interactive Canvas:** A fluid, vector-based workspace that supports drag-and-drop instantiation, mouse-wheel zooming, and panning for managing extensive circuit layouts.
- **Real-Time Simulation Engine:** An instantaneous evaluation framework that tracks and highlights signal propagation (high/low states) across wire networks as inputs change.
- **Comprehensive Component Suite:** Includes a wide library of logic components, ranging from fundamental gates (AND, OR, NOT) to universal gates (NAND, NOR), secondary logic (XOR, XNOR), and specialized input/output modules.
- **Local Persistence Layer:** Integrated storage mechanics that serialize entire canvas states and circuit topologies into structured JSON strings, allowing users to save and load designs instantly without server overhead.

## Architecture & Technologies
- **HTML5 Canvas**: Powers the high-performance rendering engine for drawing and animating circuits.
- **Vanilla JavaScript**: Manages the complex state, DAG evaluations, and simulation logic without external dependencies.
- **CSS3**: Styles the surrounding user interface and controls.
- **Custom Event Delegation**: Efficiently handles complex pointer and drag interactions across the canvas workspace.
- **JSON Serialization**: Provides the mechanism for saving and loading complex circuit topologies locally.

## Technical Challenges
Building a high-performance rendering engine utilizing the HTML5 Canvas API while simultaneously evaluating deep Boolean Directed Acyclic Graphs (DAGs) in real time presented a significant architectural hurdle. To achieve smooth rendering frames during rapid canvas movements, the rendering pipeline separates static visual assets from active data streams, using localized spatial indexing to ensure only onscreen components trigger canvas redraw operations.

Furthermore, implementing an evaluation loop capable of handling cyclical circuit topologies—such as SR latches, flip-flops, and unstable oscillators—required moving past standard DAG traversal. To prevent execution thread lockups and infinite loops, the simulation engine utilizes a discrete-event scheduling algorithm with strict propagation depth limits, cleanly simulating propagation delay and allowing feedback loops to settle or oscillate naturally without freezing the browser.

A foundational challenge was the strict architectural constraint to maintain the codebase entirely within vanilla HTML5, CSS3, and modern JavaScript. To honor the project's roots as a pure, dependency-free application, all component rendering, custom state management systems, and vector coordinate matrices had to be built completely from scratch without the aid of external front-end frameworks (like React) or canvas abstraction libraries. This required designing a robust, custom event delegation architecture to manually track complex pointer interactions, drag thresholds, and coordinate transformations between screen space and world space while keeping the core source code clean, lightweight, and incredibly fast.