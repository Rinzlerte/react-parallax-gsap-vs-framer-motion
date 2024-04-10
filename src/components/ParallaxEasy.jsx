"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import imagePick from "../../public/pexels-alex.jpg";

gsap.registerPlugin(ScrollTrigger);

const ParallaxEasy = ({ title }) => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(".pContent", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".pImage", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section className="pSection">
      <div className="container">
        <h1 className="header-section">{title}</h1>
        <br />
        <br /> <br />
        <h1 className="header-section">
          Scroll down to see some parallax effects
        </h1>
        <br />
        <div className="pContent">
          <p>
            This is a super simple example of how to create a basic parallax
            effect using ScrollTrigger!
          </p>
          <p>
            For more information about ScrollTrigger, check out{" "}
            <a href="https://greensock.com" target="_blank">
              the GreenSock website.
            </a>
          </p>
        </div>
        <br />
      </div>

      <div className="container">
        <Image
          className="pImage"
          src={imagePick}
          width={500}
          height={700}
          quality={100}
          alt="Picture of the author"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 33vw"
        />
      </div>
    </section>
  );
};

export default ParallaxEasy;
