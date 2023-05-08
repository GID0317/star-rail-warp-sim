import React from "react";
import "../../css/Banners.css";

const BrilliantFixation = ({ getWidth, getHeight }) => {
  return (
    <React.Fragment>
      <div
        style={{
          width: getWidth(764),
          height: getHeight(677.33, 1100),
          background:
            "linear-gradient(to bottom, rgba(16, 20, 56, 1) 70%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(8, 8, 8, 0.521)",
          top: "50%",
          left: "50%",
          transform: "translate(-27.5%, -50%)",
        }}
      >
        <div
          style={{
            backgroundImage: "url(../assets/banner/right-corner.webp)",
            height: getHeight(200, 148),
            width: getWidth(148),
            backgroundSize: `${getWidth(148)}px ${getHeight(200, 148)}px`,
            position: "absolute",
            zIndex: "1000",
            right: "0",
          }}
        />
        <img
          src="../assets/banner/1.0-weap-banner-back.webp"
          height="250%"
          alt="right"
          draggable="false"
          style={{
            position: "relative",
            animation: "seele-weap-back-animation 2s 1",
            animationTimingFunction: "cubic-bezier(.27,.42,.2,.97)",
            animationFillMode: "both",
          }}
        />
      </div>
      <img
        src="../assets/banner/1.0-weap-left.webp"
        width={getWidth(1101.5)}
        alt="left"
        draggable="false"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "100",
        }}
      />
      <img
        className="ring"
        src="/assets/rings.webp"
        alt="rings"
        width={getWidth(550)}
        style={{
          filter: "brightness(1.4)",
          top: "50%",
          left: "50%",
          animation: "banner-ring-spin 60s infinite linear",
          transform: `translate(-24%, -50%) rotate(${Math.floor(
            Math.random() * 360
          )}deg)`,
        }}
      />
      <img
        src="../assets/magnify.webp"
        width={getWidth(40)}
        alt="magnify"
        draggable="false"
        style={{
          zIndex: 100,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-540%, 40%)",
          filter: "brightness(0.4)",
        }}
      />
    </React.Fragment>
  );
};

export default BrilliantFixation;
