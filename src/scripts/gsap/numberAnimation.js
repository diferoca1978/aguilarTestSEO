import { gsap } from "gsap";

export function numberAnimation() {
    gsap.from(".number", {
        innerText: 0,
        duration: 5,
        ease: "power4.inOut",
        snap: {
            innerText: 1,
        },
    });
}
