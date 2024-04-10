"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import imageONE from "../../public/pexels-albjona.jpg";

const ParalaxByFramerMotion = ({ title }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smallMove = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const middleMove = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const largeMove = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const myImagesList = [
    {
      src: imageONE,
      parallax: 0,
    },
    {
      src: imageONE,
      parallax: middleMove,
    },
    {
      src: imageONE,
      parallax: largeMove,
    },
  ];

  return (
    <section className="section framer-section">
      <div className="container">
        <h3 ref={container}>{title}</h3>
        <br />
        <br />
        <motion.h1 style={{ y: smallMove }}>HELLO PARALLAX</motion.h1>
        <h2>scroll</h2>
        <div className="image-container-wrapper">
          {myImagesList.map(({ src, parallax }, index) => {
            return (
              <motion.div
                style={{ y: parallax }}
                key={`i_${index}`}
                className="image-container"
              >
                <Image
                  src={src}
                  placeholder="blur"
                  alt="Picture of the author"
                  fill
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ParalaxByFramerMotion;
