gsap.timeline()
  .from(".name", {
    scale: 0.8,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  })
  .to(".name", {
    opacity: 0,
    y: -50,
    duration: 1
  })
  .to("#intro", {
    opacity: 0,
    display: "none"
  });
