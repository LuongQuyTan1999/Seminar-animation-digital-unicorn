gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ duration: 1 });

ScrollTrigger.defaults({
  scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  markers: false,
});
tl.from(".wrapper-title-prod .title-prod", {
  y: 100,
  opacity: 0,
  duration: 0.5,
})
  .from(".wrapper-title-prod .sub-title-prod", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".wrapper-title-prod .content", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });

let tl_video_intro = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".wrapper-video-intro",
    // pin: true, // pin the trigger element while active
    // pinSpacing: true,
    start: "500px bottom", // when the top of the trigger hits the top of the viewport
    end: "1500px center", // end after scrolling 500px beyond the start
    id: "video-intro",
  },
});

tl_video_intro
  .from(".wrapper-video-intro", {
    opacity: 0,
    duration: 1,
  })
  .from(".wrapper-video-intro .video-intro .title-hight-audio", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
  .from(".wrapper-video-intro .video-intro .title-active", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
  .to(
    ".wrapper-video-intro .video-intro .title-hight-audio",
    {
      immediateRender: false,
      opacity: 0,
      y: -100,
      duration: 1,
    },
    "-=1"
  )
  .from(".wrapper-video-intro .video-intro .title-active-spatial", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
  .to(
    ".wrapper-video-intro .video-intro .title-active",
    {
      immediateRender: false,
      opacity: 0,
      y: -100,
      duration: 1,
    },
    "-=1"
  )
  .from(".wrapper-video-intro .video-intro .title-active-stunning", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
  .to(
    ".wrapper-video-intro .video-intro .title-active-spatial",
    {
      immediateRender: false,
      opacity: 0,
      y: -100,
      duration: 1,
    },
    "-=1"
  );

const tl_customer_designer = gsap.timeline();

tl_customer_designer
  .from(".intro-custom-designed .wrapper-text-image .text p:nth-child(1)", {
    opacity: 0,
    x: -100,
    duration: 2,
  })
  .from(
    ".intro-custom-designed .wrapper-text-image .section1",
    {
      opacity: 0,
      x: -100,
      duration: 2,
    },
    0
  )
  .fromTo(
    ".intro-custom-designed .wrapper-text-image .time-line .line",
    {
      minHeight: "0px",
      opacity: 0,
    },
    {
      minHeight: "250px",
      duration: 1,
      opacity: 1,
    },
    0
  );

const tl_customer_designer1 = gsap.timeline();

tl_customer_designer1
  .from(".intro-custom-designed .wrapper-text-image .text p:nth-child(2)", {
    opacity: 0,
    x: 100,
    duration: 2,
  })
  .from(
    ".intro-custom-designed .wrapper-text-image .section2",
    {
      opacity: 0,
      x: 100,
      duration: 2,
    },
    0
  )
  .to(
    ".intro-custom-designed .wrapper-text-image .time-line .line",
    {
      minHeight: "700px",
      duration: 1,
    },
    0
  );

const tl_customer_designer2 = gsap.timeline();

tl_customer_designer2
  .from(".intro-custom-designed .wrapper-text-image .text p:nth-child(3)", {
    opacity: 0,
    x: -100,
    duration: 2,
  })
  .from(
    ".intro-custom-designed .wrapper-text-image .section3",
    {
      opacity: 0,
      x: -100,
      duration: 2,
    },
    0
  )
  .to(
    ".intro-custom-designed .wrapper-text-image .time-line .line",
    {
      duration: 1,
      minHeight: "900px",
    },
    0
  );

const tl_customer_designer3 = gsap.timeline();

tl_customer_designer3
  .from(".intro-custom-designed .wrapper-text-image .text p:nth-child(4)", {
    opacity: 0,
    x: 100,
    duration: 2,
  })
  .from(
    ".intro-custom-designed .wrapper-text-image .section4",
    {
      opacity: 0,
      x: 100,
      duration: 2,
    },
    0
  )
  .to(
    ".intro-custom-designed .wrapper-text-image .time-line .line",
    {
      duration: 1,
      minHeight: "1200px",
    },
    0
  );

ScrollTrigger.create({
  scrub: false,
  trigger: ".intro-custom-designed",
  start: "200 100%",
  // toggleActions: "restart none none revert",
  animation: tl_customer_designer,
  id: "customer_designer",
});

ScrollTrigger.create({
  scrub: false,
  trigger: ".intro-custom-designed",
  start: "800 100%",
  // toggleActions: "restart none none revert",
  animation: tl_customer_designer1,
  id: "customer_designer",
});

ScrollTrigger.create({
  scrub: false,
  trigger: ".intro-custom-designed",
  start: "1200 100%",
  // toggleActions: "restart none none revert",
  animation: tl_customer_designer2,
  id: "customer_designer",
});

ScrollTrigger.create({
  scrub: false,
  trigger: ".intro-custom-designed",
  start: "1500 100%",
  animation: tl_customer_designer3,
  id: "customer_designer",
});
