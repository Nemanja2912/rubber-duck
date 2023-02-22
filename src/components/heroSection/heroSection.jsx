import React from "react";

import Image1 from "../../assets/image/elem_square.png";
import Image2 from "../../assets/image/elem_intersection.png";
import Image3 from "../../assets/image/elem_slash.png";
import Image4 from "../../assets/image/elem_line.png";
import Image5 from "../../assets/image/logo_R_letter.png";
import Image6 from "../../assets/image/logo_D_letter.png";
import Image7 from "../../assets/image/elem_equals.png";
import Image8 from "../../assets/image/elem_bracket.png";
import Image9 from "../../assets/image/elem_less.png";

import { useEffect, useRef, useState } from "react";

const words = [
  ["Research", "Development"],
  ["Responsive", "Design"],
  ["Rapid", "Debbuging"],
  ["Reliable", "Dudes"],
  ["Really", "Dope"],
  ["Rubber", "Duck"],
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const [animationLevel, setAnimationLevel] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimationLevel(0.5);

      setTimeout(() => {
        setAnimationLevel(1);

        setTimeout(() => {
          setAnimationLevel(2);
        }, 1000);
      }, 100);
    }, 3000);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("about");

    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="hero relative"
      style={{ height: window.innerWidth < 600 ? window.innerHeight : "100vh" }}
    >
      <div className="wrapper" style={{ opacity: animationLevel >= 1 ? 0 : 1 }}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        <img src={Image7} alt="" />
        <img src={Image8} alt="" />
        <img src={Image4} alt="" />
      </div>
      <img
        onClick={handleScroll}
        className="cursor-pointer"
        src={Image9}
        alt=""
        style={{
          transform:
            animationLevel >= 1
              ? "rotate(-90deg) scale(0.8)"
              : "rotate(0deg) scale(1)",
          left: animationLevel >= 1 ? "49%" : "42.8%",
          bottom: animationLevel >= 1 ? "5%" : "10.5%",
          animationName: animationLevel >= 0.5 ? "" : "swing",
        }}
      />

      <div className="logo" style={{ opacity: animationLevel >= 1 ? 0 : 1 }}>
        <img src={Image5} className="img1" alt="" />
        <img src={Image6} className="img2" alt="" />
      </div>

      <AnimatedHeader
        words={words[index]}
        index={index}
        setIndex={setIndex}
        limit={index === words.length - 1}
        activeAnimation={animationLevel > 1}
        rotate={animationLevel >= 1}
      />
    </div>
  );
};

export default HeroSection;

function AnimatedHeader({ words, limit, setIndex, activeAnimation, rotate }) {
  const [letterIndex1, setLetterIndex1] = useState(1);
  const [letterIndex2, setLetterIndex2] = useState(1);

  const [cursorIndex, setCursorIndex] = useState(-1);

  let activeWordIndex = useRef(0);
  let reverse = useRef(false);

  useEffect(() => {
    if (!activeAnimation) return;

    let interval = setInterval(() => {
      setCursorIndex(activeWordIndex.current);

      if (reverse.current) {
        if (activeWordIndex.current === 1) {
          if (letterIndex2 > 1) {
            setLetterIndex2((prev) => prev - 1);
          } else {
            activeWordIndex.current = 0;

            setCursorIndex(0);
          }
        } else {
          if (letterIndex1 > 1) {
            setLetterIndex1((prev) => prev - 1);
          } else {
            console.log("index");
            setIndex((prev) => prev + 1);

            reverse.current = false;
          }
        }
      } else {
        const index = [letterIndex1, letterIndex2];

        if (
          index[activeWordIndex.current] < words[activeWordIndex.current].length
        ) {
          if (activeWordIndex.current === 0) {
            setLetterIndex1((prev) => prev + 1);
          } else {
            setLetterIndex2((prev) => prev + 1);
          }
        } else {
          if (activeWordIndex.current === 0) {
            activeWordIndex.current = 1;

            setCursorIndex(1);
          } else {
            if (limit) {
              clearInterval(interval);

              setCursorIndex(-1);
            } else {
              reverse.current = true;
            }
          }
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [letterIndex1, letterIndex2, activeAnimation, limit]);

  return (
    <h1 className="font-bold">
      <div
        className="line1 flex justify-center items-center"
        style={{
          opacity: rotate ? 1 : 0,
          transform: !rotate
            ? `rotate(-90deg) translate(-42%,-5%) scale(0.7)`
            : "rotate(0deg) translate(0,0) scale(1)",
        }}
      >
        {words[0].slice(0, letterIndex1)}

        <div
          className="blinkCursor"
          style={{ animationName: cursorIndex === 0 ? "blink" : "" }}
        ></div>
      </div>
      <div
        className="line2 flex justify-center items-center"
        style={{
          opacity: rotate ? 1 : 0,
          transform: !rotate
            ? `rotate(90deg) translate(-18%,7%) scale(0.7)`
            : "rotate(0deg) translate(0,0) scale(1)",
        }}
      >
        {words[1].slice(0, letterIndex2)}

        <div
          className="blinkCursor"
          style={{ animationName: cursorIndex === 1 ? "blink" : "" }}
        ></div>
      </div>
    </h1>
  );
}
