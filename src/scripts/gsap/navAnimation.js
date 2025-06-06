import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function navBarAnimation() {
    ScrollTrigger.create({
        start: "top -80",
        end: "top 110px",
        onEnter: () => {
            gsap.to(".nav-bar", {
                height: "100px",
                duration: 0.5,
            });
            gsap.to(".logo", {
                height: "125px",
                width: "175px",
                duration: 0.5,
            });
        },
        onLeaveBack: () => {
            gsap.to(".nav-bar", {
                height: "150px",
                duration: 0.5,
            });
            gsap.to(".logo", {
                height: "170px",
                width: "250px",
                duration: 0.5,
            });
        },
    });
}