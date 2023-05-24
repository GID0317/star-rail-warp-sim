import React, { useState, useEffect, useContext } from "react";
import SoundContext from "./SoundContext";
import { allChars, json, asianLang } from "../util/Constants";
import CloseButton from "./CloseButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useSound from "use-sound";
import ResizeContext from "./ResizeContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const trans = require("../assets/data/translations.json");

const baseDelay = 400;
const addDelay = 100;
const WarpSingle = ({
  currentWarp,
  newItems,
  hasFive,
  setNewItems,
  setContent,
}) => {
  const cleanText = (text) => {
    return text
      .replace(/[^\w\s-]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const { getWidth, getHeight } = useContext(ResizeContext);
  const { sound } = useContext(SoundContext);

  const [warpIndex, setWarpIndex] = useState(0);

  const [animateInfo, setAnimateInfo] = useState(false);
  const [animateFancy, setAnimateFancy] = useState(false);
  const [animateFive, setAnimateFive] = useState(false);
  const [firstAnimation, setFirstAnimation] = useState(true);

  const [playThree] = useSound("./assets/audio/sfx/three.mp3", { volume: 0.8 });
  const [playFour] = useSound("./assets/audio/sfx/four.mp3", { volume: 0.8 });
  const [playFive, playFiveData] = useSound("./assets/audio/sfx/five.mp3", {
    volume: 0.8,
  });

  const [item, setItem] = useState({
    name: json.getName(currentWarp[0]),
    path: json.getPath(currentWarp[0]),
    element: json.getElement(currentWarp[0]),
    rarity: json.getRarity(currentWarp[0]),
    isChar: allChars.includes(currentWarp[0]),
  });

  useEffect(() => {
    setItem({
      name: json.getName(currentWarp[warpIndex]),
      path: json.getPath(currentWarp[warpIndex]),
      element: json.getElement(currentWarp[warpIndex]),
      rarity: json.getRarity(currentWarp[warpIndex]),
      isChar: allChars.includes(currentWarp[warpIndex]),
    });
    if (json.getRarity(currentWarp[warpIndex]) === 5) setAnimateFive(true);
  }, [currentWarp, warpIndex]);

  useEffect(() => {
    const length = currentWarp.length;
    if (warpIndex === length) {
      if (length === 10) setContent("results");
      else setContent("main");
    }
  }, [warpIndex, currentWarp, setContent]);

  useEffect(() => {
    if (!sound) return;
    if (item.rarity === 3) playThree();
    else if (item.rarity === 4) playFour();
    else playFive();
  }, [item, playFour, playThree, playFive, sound]);

  const nextSingle = () => {
    setWarpIndex(warpIndex + 1);
    setAnimateInfo(false);
    setAnimateFancy(false);
    setAnimateFive(false);
    setFirstAnimation(true);
    if (sound) playFiveData.stop();
  };

  const starPrinter = (i) => {
    return (
      <LazyLoadImage
        effect="opacity"
        className={`${animateInfo ? "single-stars" : "transparent"}`}
        key={i}
        src="./assets/star.webp"
        alt="star"
        width={`${getWidth(22)}`}
        star={i + 1}
        draggable="false"
      />
    );
  };

  const pathWidth = (path) => {
    const multi = asianLang.includes(i18n.resolvedLanguage) ? 28 : 14;
    return trans[path][i18n.resolvedLanguage].length * multi;
  };

  const { i18n } = useTranslation();

  return (
    <motion.section
      key="single"
      initial={{ filter: "brightness(0)" }}
      animate={{ filter: "brightness(1)" }}
      exit={currentWarp.length === 10 ? { opacity: 0.5 } : {}}
      className="overlay"
      onClick={nextSingle}
      style={{
        backgroundImage: "url(../assets/warp-result.webp)",
      }}
    >
      <CloseButton
        onClose={() => {
          if (currentWarp.length === 10) {
            if (sound) {
              if (hasFive) playFiveData.stop();
            }
            setContent("results");
          } else {
            setContent("main");
            setNewItems([]);
          }
        }}
      />
      <div
        id="single-info"
        style={{
          height: getHeight(115, 550),
          width: getWidth(550),
          opacity: `${animateInfo ? 1 : 0}`,
          animationName: `${animateInfo ? "animate-info" : ""}`,
          animationDuration: "1s",
          animationFillMode: "forwards",
          animationTimingFunction: "cubic-bezier(.74,.04,.4,.87)",
        }}
      >
        <div
          className="single-info-shadow"
          style={{
            height: getHeight(100, Math.max(150 + 15 * item.name.length, 300)),
            width: getWidth(Math.max(150 + 15 * item.name.length, 300)),
          }}
        >
          {item.isChar ? (
            <LazyLoadImage
              effect="opacity"
              className={`${animateInfo ? "single-type" : "transparent"}`}
              src={`./assets/elem-${cleanText(item.element)}.webp`}
              alt={item.element}
              width={`${getWidth(90)}`}
              draggable="false"
            />
          ) : (
            <LazyLoadImage
              effect="opacity"
              className={`${animateInfo ? "single-type" : "transparent"}`}
              src={`./assets/path-${cleanText(item.path)}.webp`}
              alt={item.path}
              width={`${getWidth(115)}`}
              draggable="false"
            />
          )}
          <div id="info-pair">
            <div
              className={`${animateInfo ? "single-name" : "transparent"}`}
              style={{
                fontSize: `${getWidth(34)}px`,
                color: "white",
                marginTop: getWidth(8),
              }}
            >
              {trans[cleanText(item.name)][i18n.resolvedLanguage]}
            </div>
            <div id="stars-container">
              {Array(item.rarity)
                .fill()
                .map((e, i) => {
                  return starPrinter(i);
                })}
            </div>
          </div>
          {newItems.indexOf(cleanText(item.name)) !== -1 && (
            <LazyLoadImage
              effect="opacity"
              alt="new tag"
              src="/assets/new.webp"
              width={getWidth(70)}
              style={{
                marginLeft: 10,
                marginBottom: 20,
              }}
            />
          )}
        </div>
        {item.isChar && (
          <div
            className="path-shadow"
            style={{
              width: getWidth(80 + pathWidth(cleanText(item.path))),
              height: getHeight(40, 120),
              fontSize: getWidth(28),
            }}
          >
            <LazyLoadImage
              effect="opacity"
              alt={item.path}
              src={`./assets/path-${cleanText(item.path)}.webp`}
              width={getWidth(50)}
            />
            {trans[cleanText(item.path)][i18n.resolvedLanguage]}
          </div>
        )}
      </div>
      {animateFive && (
        <div className="five-special-container">
          <LazyLoadImage
            className="reveal-path"
            effect="opacity"
            src={`./assets/path-${cleanText(item.path)}-lg.webp`}
            alt={item.path}
            onAnimationEnd={() => {
              if (firstAnimation) setFirstAnimation(!firstAnimation);
              else setAnimateFive(false);
            }}
            style={{
              animation:
                "animate-reveal-path 400ms cubic-bezier(.77,.07,.57,.81) 0s 1 both, animate-out-path 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both",
            }}
          />
          <div
            className="reveal-star-group"
            style={{
              transform: "translate(-190%,-50%)",
              animation:
                "animate-reveal-first-group 400ms ease-in-out 0s 1 both",
            }}
          >
            <div
              className="reveal-star-back"
              style={{
                animation: `animate-reveal-back 100ms ease-in-out ${baseDelay}ms 1 both`,
              }}
            />
            <LazyLoadImage
              className="reveal-star"
              effect="opacity"
              src="./assets/reveal-star.webp"
              alt="Star"
              style={{
                animation:
                  "animate-reveal-star 400ms ease-in-out 0s 1 both, animate-out-small-star 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both",
              }}
            />
          </div>
          <div
            className="reveal-star-group"
            style={{
              transform: "translate(-120%,-50%)",
              animation:
                "animate-reveal-second-group 400ms ease-in-out 50ms 1 both",
            }}
          >
            <div
              className="reveal-star-back"
              style={{
                animation: `animate-reveal-back 100ms ease-in-out ${
                  baseDelay + addDelay
                }ms 1 both`,
              }}
            />
            <LazyLoadImage
              className="reveal-star"
              effect="opacity"
              src="./assets/reveal-star.webp"
              alt="Star"
              style={{
                animation: `animate-reveal-star 400ms ease-in-out ${addDelay}ms 1 both, animate-out-small-star 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both`,
              }}
            />
          </div>
          <div
            className="reveal-star-group"
            style={{
              transform: "translate(-50%,-50%)",
              animation:
                "animate-reveal-third-group 400ms ease-in-out 100ms 1 both",
            }}
          >
            <div
              className="reveal-star-back main"
              style={{
                animation: `animate-reveal-back 100ms ease-in-out ${
                  baseDelay + 2 * addDelay
                }ms 1 both`,
              }}
            />
            <LazyLoadImage
              className="reveal-star main"
              effect="opacity"
              src="./assets/reveal-star.webp"
              alt="Star"
              style={{
                animation: `animate-reveal-star 400ms ease-in-out ${
                  2 * addDelay
                }ms 1 both, animate-out-star 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both`,
              }}
            />
          </div>
          <div
            className="reveal-star-group"
            style={{
              transform: "translate(20%,-50%)",
              animation:
                "animate-reveal-fourth-group 400ms ease-in-out 50ms 1 both",
            }}
          >
            <div
              className="reveal-star-back"
              style={{
                animation: `animate-reveal-back 100ms ease-in-out ${
                  baseDelay + addDelay
                }ms 1 both`,
              }}
            />
            <LazyLoadImage
              className="reveal-star"
              effect="opacity"
              src="./assets/reveal-star.webp"
              alt="Star"
              style={{
                animation: `animate-reveal-star 400ms ease-in-out ${addDelay}ms 1 both, animate-out-small-star 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both`,
              }}
            />
          </div>
          <div
            className="reveal-star-group"
            style={{
              transform: "translate(90%,-50%)",
              animation:
                "animate-reveal-fifth-group 400ms ease-in-out 0ms 1 both",
            }}
          >
            <div
              className="reveal-star-back"
              style={{
                animation: `animate-reveal-back 100ms ease-in-out ${baseDelay}ms 1 both`,
              }}
            />
            <LazyLoadImage
              className="reveal-star"
              effect="opacity"
              src="./assets/reveal-star.webp"
              alt="Star"
              style={{
                animation:
                  "animate-reveal-star 400ms ease-in-out 0ms 1 both, animate-out-small-star 200ms cubic-bezier(.77,.07,.57,.81) 600ms 1 both",
              }}
            />
          </div>
        </div>
      )}
      {currentWarp.map((warp, i) => {
        if (item.isChar)
          return (
            <LazyLoadImage
              effect="opacity"
              className={`${
                i === warpIndex && (!animateFive || item.rarity !== 5)
                  ? "single-item"
                  : "transparent"
              } char`}
              key={warp + i}
              src={`/assets/splash/${cleanText(
                json.getName(currentWarp[i])
              )}.webp`}
              alt={item.name}
              onAnimationStart={() => setAnimateFancy(true)}
              onAnimationEnd={() => setAnimateInfo(true)}
              width={getWidth(1800)}
              draggable="false"
            />
          );
        else
          return (
            <React.Fragment key={warp + i}>
              <LazyLoadImage
                effect="opacity"
                className={`${
                  i === warpIndex && (!animateFive || item.rarity !== 5)
                    ? "glass"
                    : "transparent"
                } back`}
                src="./assets/glass-back.webp"
                alt="glass back"
                style={{ rotate: "7deg" }}
                width={getWidth(400)}
                draggable="false"
              />
              <LazyLoadImage
                effect="opacity"
                className={`${
                  i === warpIndex && (!animateFive || item.rarity !== 5)
                    ? "single-item"
                    : "transparent"
                } weap`}
                onAnimationStart={() => setAnimateFancy(true)}
                onAnimationEnd={() => setAnimateInfo(true)}
                alt={currentWarp[i]}
                src={`/assets/splash/${cleanText(
                  json.getName(currentWarp[i])
                )}.webp`}
                height={getHeight(558.75, 400)}
                width={getWidth(400)}
                draggable="false"
              />
              <LazyLoadImage
                effect="opacity"
                className={`${
                  i === warpIndex && (!animateFive || item.rarity !== 5)
                    ? "glass"
                    : "transparent"
                } front`}
                src="./assets/glass-front.webp"
                alt="glass front"
                style={{ rotate: "7deg" }}
                width={getWidth(400)}
                draggable="false"
              />
            </React.Fragment>
          );
      })}
      <LazyLoadImage
        className={`${animateFancy ? "animation-ring" : "transparent"}`}
        onAnimationEnd={() => setAnimateFancy(false)}
        width={700}
        effect="opacity"
        alt="animation-ring"
        src="assets/animation-ring.webp"
        rarity={item.rarity}
      />
      <div
        className={`${animateFancy ? "donut" : "transparent"}`}
        rarity={item.rarity}
      />
    </motion.section>
  );
};

export default WarpSingle;
