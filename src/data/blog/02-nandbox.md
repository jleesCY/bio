# From Simulation to Web: Building NANDBox

Building a logic simulator in the browser sounds like a fun weekend project until you actually sit down and try to figure out how to evaluate thousands of interconnected logic gates efficiently without freezing the main thread. 

As a Modeling & Simulation Engineer, I spend my days dealing with SIL (Software-in-the-Loop) dataflows, hardware-in-the-loop testing, and massive DoD simulation frameworks. In my professional life, accuracy and deterministic execution are paramount. With NANDBox, I wanted to take those same concepts of high-performance dataflow and rigorous simulation architecture and apply them to a consumer-facing web application. I wanted to see if I could build a tool that didn't just look like a logic simulator, but fundamentally operated like a robust, professional-grade engine under the hood.

## The Architecture of a Browser-Based Simulator

In a standard web app, data flows predictably—usually from a server, down through a component tree, and into the DOM. But in a circuit simulator, data flows in complex, heavily interconnected, and often cyclical networks. A change in a single input switch can cascade through hundreds of logic gates, splitting off into parallel evaluation paths and potentially creating feedback loops (like those found in memory cells, flip-flops, and oscillators).

Early on in the development of NANDBox, the engine relied on a recursive signal propagation method. When an input changed, it would call an update function on its connected gates, which would then evaluate and recursively call update functions on their connected gates. 

![SR Latch Circuit](/bio/blog/02-nandbox/sr-latch.png)
*A basic SR Latch, which inherently contains a feedback loop that breaks recursive evaluation.*

While conceptually simple and easy to write, it quickly led to catastrophic issues. Specifically, sequential logic circuits would completely fail to function. The inherent feedback loops caused infinite recursions, blowing the call stack and freezing the browser. Furthermore, recursive evaluation made it impossible to accurately model the microscopic "propagation delay" that exists in real physical hardware.

To solve this, I underwent a major refactor: tearing out the recursive logic and migrating the entire simulation engine to a **tick-based** architecture. Just like real hardware clocks and professional simulation environments, the engine now evaluates the entire circuit state in discrete, highly optimized time steps (ticks). 

Here is a snippet showing an example of the four phases that must be completed each simulation tick:

```javascript
tick() {
    // Phase 1: Propagate wire values — each wire reads from its source connector
    for (let id of Object.keys(this.wires)) {
        let wire = this.wires[id]
        if (wire && wire.n1) {
            wire.value = wire.n1.value
        }
    }

    // Phase 2: Evaluate all components
    for (let id of Object.keys(this.components)) {
        let comp = this.components[id]
        if (comp && typeof comp.evaluate === 'function') {
            comp.evaluate()
        }
    }

    // Phase 3: Update visuals for all components
    for (let id of Object.keys(this.components)) {
        let comp = this.components[id]
        if (comp && typeof comp.updateVisuals === 'function') {
            comp.updateVisuals()
        }
    }

    // Phase 4: Update wire visuals
    for (let id of Object.keys(this.wires)) {
        let wire = this.wires[id]
        if (wire && typeof wire.updateVisual === 'function') {
            wire.updateVisual()
        }
    }
    this.tickCount++
}
```

As seen in the snippet above, during a tick, every wire and component evaluates its next state, and then—only after all logic evaluations are complete—the visuals are updated. This strict separation of the "evaluate" (Phases 1 & 2) and "update visuals" (Phases 3 & 4) entirely eliminated the infinite loop issues, allowed for the accurate simulation of gate delays, and provided a stable, deterministic evaluation cycle regardless of circuit complexity.

## Honoring the Roots: Pure JS over Frameworks

When dealing with hardware-accelerated design and LVC (Live, Virtual, Constructive) environments professionally, you learn quickly that the UI is just a lens into the simulation, not the simulation itself. The engine must remain decoupled and agnostic to how it is being visualized.

Modern web development relies heavily on component-driven frameworks to enforce this separation of concerns. However, NANDBox is a bit old-school—it does not use React, Vue, or any modern virtual-DOM framework. It was originally built from the ground up with pure HTML5, CSS3, vanilla JavaScript, jQuery, and Bootstrap 5 for the UI components. 

During the major tick-engine refactor, it would have been incredibly tempting to migrate the entire project to a modular framework like React to help manage the highly complex UI state and component wiring. However, I deliberately decided against it. Instead of rewriting the view layer to chase modern trends, I chose to honor the roots of the project, keeping the architectural bones exactly how they always were. 

The following is an example of how we can easily update a connector's visual state by calling `on()`, `off()`, or `float()` depending on the state of its parent gate. Notice how this uses raw `classList` manipulation directly on the DOM element:

```javascript
on = () => {
    this.dom.classList.remove('off')
    this.dom.classList.remove('float')
    this.dom.classList.add('on')
}
off = () => {
    this.dom.classList.remove('on')
    this.dom.classList.remove('float')
    this.dom.classList.add('off')
}
float = () => {
    this.dom.classList.remove('on')
    this.dom.classList.remove('off')
    this.dom.classList.add('float')
}
```

Sticking with pure JavaScript forced a strict, disciplined separation of concerns. The DOM purely listens to events emitted by the highly-optimized tick engine, selectively updating classes and SVG wire colors using raw DOM manipulation. This manual approach, while sometimes tedious, results in an incredibly lightweight bundle size and lightning-fast rendering updates that bypass the overhead of a virtual DOM reconciliation cycle.

## Why Build This?

NANDBox was, at its core, an exercise in bridging the gap between my professional day job and my passion for creative, interactive web development. It forced me to think deeply about browser performance limitations, complex state management, and the fundamental building blocks of computational logic, all while wrapping it in an intuitive, accessible interface.

It serves as a constant reminder that the foundational principles of engineering—determinism, separation of concerns, and optimized dataflows—apply just as much to front-end web development as they do to massive defense simulations. 

![NANDBox Adder Circuit](/bio/blog/02-nandbox/nandbox-adder.png)
*A functioning multi-bit adder circuit built and simulated entirely in NANDBox.*

Plus, there's just something undeniably satisfying about booting up a browser and building a working, calculating computer out of nothing but virtual NAND gates.

*— Joshua*
