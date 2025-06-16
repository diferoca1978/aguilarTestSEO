import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const numberAnimation = () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    // Get elements
    const number1 = document.querySelector('#number1');
    const number2 = document.querySelector('#number2');
    const container = document.querySelector('#successStatistics');
    
    if (!number1 || !number2 || !container) {
        return;
    }

    // Get the target values from the HTML
    const target1 = parseInt(number1.textContent, 10) || 0;
    const target2 = parseFloat(number2.textContent.replace(/[^0-9.]/g, '')) || 0;

    // Reset to 0
    number1.textContent = '0';
    number2.textContent = '0';

    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 110%",
            toggleActions: "play none none reverse"
        }
    });
    tl.to(number1, {
    innerText: target1,
    duration: 3,
    snap: { innerText: 1 },
    ease: "easeInOut",
    modifiers: {
        innerText: (innerText) => {
            return Math.floor(innerText).toLocaleString();
        }
    }
},0);

// Animate the second number
tl.to(number2, {
    innerText: target2,
    duration: 3,
    snap: { innerText: 0.1 },
    ease: "easeInOut",
    onUpdate: function() {
        // Force exactly 3 decimal places
        number2.textContent = parseFloat(this.targets()[0].innerText).toFixed(3);
    }
},0); 
}