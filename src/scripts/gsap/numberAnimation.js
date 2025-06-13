import { gsap } from "gsap";

export const numberAnimation = () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    // Get all number elements
    const numberElements = document.querySelectorAll('.number');
    
    if (!numberElements.length) return;

    numberElements.forEach(element => {
        // Get the target number from the element's text content
        const targetNumber = parseInt(element.textContent, 10) || 0;
        
        // Set initial text to 0
        element.textContent = '0';
        
        // Animate the number
        gsap.to(element, {
            textContent: targetNumber,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate: function() {
                // Format number with commas if needed
                element.textContent = Math.round(this.targets()[0].textContent).toLocaleString();
            }
        });
    });
}
