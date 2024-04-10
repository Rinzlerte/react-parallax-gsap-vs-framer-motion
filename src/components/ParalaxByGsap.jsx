"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import imagePick from "../../public/pexels-alex.jpg";
import imagePick1 from "../../public/pexels-alex01.jpg";
import imagePick2 from "../../public/pexels-albjona.jpg";

gsap.registerPlugin(ScrollTrigger);
const word = "simple word";

const ParalaxByGsap = ({ title }) => {
  const container = useRef(null);
  const animatedTitle = useRef(null);
  const characters = useRef([]);

  const ImageOne = useRef(null);
  const ImageSecond = useRef(null);
  const ImageThird = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(animatedTitle.current, { y: -200 }, 0);
      tl.to(ImageOne.current, { y: -200 }, 0);
      tl.to(ImageSecond.current, { y: -100 }, 0);
      tl.to(ImageThird.current, { y: -250 }, 0);

      characters.current.forEach((element) => {
        const top = Math.floor(Math.random() * -75) - 25;
        // tl.to(element, {top: -300}, 0)
        // tl.to(element, {top: top}, 0)
      });

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

    const imageStyle = {
        borderRadius: "4px",
        border: "1px solid transparent",
    };

  return (
    <section className="section">
        <br />
        <h3 className="section-title">{title ? title : ""}</h3>
        <div></div>
        <div ref={container} className="container parallax-container">
          <div className="image-box">
            <Image
              ref={ImageOne}
              className="image one"
              src={imagePick}
              width={500}
              height={700}
              quality={100}
              placeholder="blur"
              alt="Picture of the author"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 33vw"
              style={imageStyle}
            />
            <Image
              ref={ImageSecond}
              className="image second"
              src={imagePick1}
              width={500}
              height={700}
              quality={100}
              placeholder="blur"
              alt="Picture of the author"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 33vw"
              style={imageStyle}
            />
            <Image
              className="image third"
              src={imagePick2}
              ref={ImageThird}
              width={500}
              height={700}
              quality={100}
              placeholder="blur"
              alt="Picture of the author"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 33vw"
              style={imageStyle}
            />
          </div>
          <h1 ref={animatedTitle}>PARALLAX</h1>
          <h1>SCROLL</h1>
          <div className="text-box">
            <p>
              {word.split("").map((letter, index) => {
                return (
                  <span
                    ref={(ref) => (characters.current[index] = ref)}
                    key={`i_${index}`}
                  >
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
    </section>
  );
};

export default ParalaxByGsap;
