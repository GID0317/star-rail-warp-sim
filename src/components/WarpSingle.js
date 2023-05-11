import React, { useState, useEffect } from "react";
import { allChars, json } from "../classes/Constants";
import CloseButton from "./CloseButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WarpSingle = ({
  currentWarp,
  newItems,
  setNewItems,
  setContent,
  resize,
}) => {
  const cleanText = (text) => {
    return text
      .replace(/[^\w\s-]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const [warpIndex, setWarpIndex] = useState(0);

  const [animateInfo, setAnimateInfo] = useState(false);

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
  }, [currentWarp, warpIndex]);

  useEffect(() => {
    const length = currentWarp.length;
    if (warpIndex === length) {
      if (length === 10) setContent("results");
      else setContent("main");
    }
  }, [warpIndex, currentWarp, setContent]);

  const nextSingle = () => {
    setWarpIndex(warpIndex + 1);
    setAnimateInfo(false);
  };

  const starPrinter = (i) => {
    return (
      <LazyLoadImage
        effect="opacity"
        className={`${animateInfo ? "single-stars" : "transparent"}`}
        key={i}
        src="./assets/star.webp"
        alt="star"
        width={`${resize.getWidth(22)}`}
        star={i + 1}
        draggable="false"
      />
    );
  };

  return (
    <div
      className="overlay"
      onClick={nextSingle}
      style={{
        backgroundImage: "url(../assets/warp-result.webp)",
      }}
    >
      <CloseButton
        resize={resize}
        onClose={() => {
          if (currentWarp.length === 10) setContent("results");
          else {
            setContent("main");
            setNewItems([]);
          }
        }}
      />
      <div
        id="single-info"
        style={{
          height: resize.getHeight(115, 550),
          width: resize.getWidth(550),
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
            height: resize.getHeight(
              100,
              Math.max(150 + 15 * item.name.length, 300)
            ),
            width: resize.getWidth(Math.max(150 + 15 * item.name.length, 300)),
          }}
        >
          {item.isChar ? (
            <LazyLoadImage
              effect="opacity"
              className={`${animateInfo ? "single-type" : "transparent"}`}
              src={`./assets/${cleanText(item.element)}.webp`}
              alt={item.element}
              width={`${resize.getWidth(90)}`}
              draggable="false"
            />
          ) : (
            <LazyLoadImage
              effect="opacity"
              className={`${animateInfo ? "single-type" : "transparent"}`}
              src={`./assets/${cleanText(item.path)}.webp`}
              alt={item.path}
              width={`${resize.getWidth(115)}`}
              draggable="false"
            />
          )}
          <div id="info-pair">
            <div
              className={`${animateInfo ? "single-name" : "transparent"}`}
              style={{
                fontSize: `${resize.getWidth(34)}px`,
                color: "white",
                marginTop: resize.getWidth(8),
              }}
            >
              {item.name}
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
              width={resize.getWidth(70)}
              style={{
                marginLeft: resize.getWidth(10),
                marginBottom: resize.getWidth(20),
              }}
            />
          )}
        </div>
        {item.isChar && (
          <div
            className="path-shadow"
            style={{
              width: resize.getWidth(60 + cleanText(item.path).length * 12),
              height: resize.getHeight(40, 120),
              fontSize: resize.getWidth(28),
            }}
          >
            <LazyLoadImage
              effect="opacity"
              alt={item.path}
              src={`./assets/${cleanText(item.path)}.webp`}
              width={resize.getWidth(50)}
            />
            {item.path.slice(4)}
          </div>
        )}
      </div>
      {currentWarp.map((warp, i) => {
        if (item.isChar)
          return (
            <LazyLoadImage
              effect="opacity"
              className={`${
                i === warpIndex ? "single-item" : "transparent"
              } char`}
              key={warp + i}
              src={`/assets/splash/${cleanText(
                json.getName(currentWarp[i])
              )}.webp`}
              alt={item.name}
              onAnimationEnd={() => setAnimateInfo(true)}
              width={resize.getWidth(1800)}
              draggable="false"
            />
          );
        else
          return (
            <React.Fragment key={warp + i}>
              <LazyLoadImage
                effect="opacity"
                className={`${i === warpIndex ? "glass" : "transparent"} back`}
                src="./assets/glass-back.webp"
                alt="glass back"
                style={{ rotate: "7deg" }}
                width={resize.getWidth(400)}
                draggable="false"
              />
              <LazyLoadImage
                effect="opacity"
                className={`${
                  i === warpIndex ? "single-item" : "transparent"
                } weap`}
                onAnimationEnd={() => setAnimateInfo(true)}
                alt={currentWarp[i]}
                src={`/assets/splash/${cleanText(
                  json.getName(currentWarp[i])
                )}.webp`}
                height={resize.getHeight(558.75, 400)}
                width={resize.getWidth(400)}
                draggable="false"
              />
              <LazyLoadImage
                effect="opacity"
                className={`${i === warpIndex ? "glass" : "transparent"} front`}
                src="./assets/glass-front.webp"
                alt="glass front"
                style={{ rotate: "7deg" }}
                width={resize.getWidth(400)}
                draggable="false"
              />
            </React.Fragment>
          );
      })}
    </div>
  );
};

export default WarpSingle;
