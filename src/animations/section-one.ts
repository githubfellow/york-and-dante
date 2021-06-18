import gsap from "gsap";
import RevealTextAnimation from "./reveal-text";
gsap.config({
	force3D: true,
});

const SectionOneAnimation = (elements: gsap.TweenTarget[], delay: number) => {
	const one = gsap.utils.selector("#section-one");
	gsap.set(one(".hidden-init"), { visibility: "visible" });

	RevealTextAnimation(one(".split-text .word > .char, .whitespace"), delay);
	gsap.from(elements[0], {
		delay: delay,
		duration: 1.5,
		opacity: 0,
    ease: "power2.inOut"
	});
  gsap.from(elements[1], {
		delay: delay,
		duration: 1.5,
		xPercent: 175,
    ease: "power2.out"
  })
};

export default SectionOneAnimation;