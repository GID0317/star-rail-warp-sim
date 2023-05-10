import React, { useState } from "react";

const MiniBanners = ({
  vers,
  bannerType,
  setBannerType,
  hasBeginner,
  resize,
}) => {
  const [highlightIndex, setHighlightIndex] = useState(null);

  return (
    <React.Fragment>
      {hasBeginner && (
        <React.Fragment>
          <img
            className="mini-banner beginner"
            alt="mini beginner banner"
            src={`../assets/banner/mini/beginner.webp`}
            width={resize.getWidth(160)}
            style={{
              transform: `translateY(180%)`,
              opacity: `${bannerType === "beginner" ? 0 : 1}`,
            }}
            onClick={() => {
              setBannerType("beginner");
            }}
            draggable="false"
            onMouseDown={() => {
              if (highlightIndex !== 0) setHighlightIndex(0);
            }}
            onMouseUp={() => {
              setHighlightIndex(null);
            }}
            onMouseLeave={() => {
              setHighlightIndex(null);
            }}
          />
          <img
            className="mini-banner"
            alt="mini beginner banner active"
            src={`../assets/banner/mini/beginner-active.webp`}
            width={resize.getWidth(180)}
            style={{
              transform: `translateY(100%)`,
              opacity: `${bannerType === "beginner" ? 1 : 0}`,
              pointerEvents: "none",
            }}
            draggable="false"
          />
        </React.Fragment>
      )}
      <img
        className="mini-banner"
        alt="mini character banner active"
        src={`../assets/banner/mini/${vers}-char-active.webp`}
        width={resize.getWidth(180)}
        style={{
          transform: hasBeginner ? `translateY(190%)` : `translateY(100%)`,
          opacity: `${bannerType === "char" ? 1 : 0}`,
          pointerEvents: "none",
        }}
        draggable="false"
      />
      <img
        className="mini-banner"
        alt="mini character banner"
        src={`../assets/banner/mini/${vers}-char.webp`}
        width={resize.getWidth(160)}
        style={{
          transform: hasBeginner ? `translateY(320%)` : "translateY(180%)",
          opacity: `${bannerType === "char" ? 0 : 1}`,
        }}
        onClick={() => {
          setBannerType("char");
        }}
        draggable="false"
        onMouseDown={() => {
          if (hasBeginner) {
            if (highlightIndex !== 1) setHighlightIndex(1);
          } else if (highlightIndex !== 0) setHighlightIndex(0);
        }}
        onMouseUp={() => {
          setHighlightIndex(null);
        }}
        onMouseLeave={() => {
          setHighlightIndex(null);
        }}
      />
      <img
        className="mini-banner"
        alt="mini weapon banner active"
        src={`../assets/banner/mini/${vers}-weap-active.webp`}
        width={resize.getWidth(180)}
        style={{
          transform: hasBeginner ? `translateY(310%)` : "translateY(200%)",
          opacity: `${bannerType === "weap" ? 1 : 0}`,
          pointerEvents: "none",
        }}
        draggable="false"
      />
      <img
        className="mini-banner"
        alt="mini weapon banner"
        src={`../assets/banner/mini/${vers}-weap.webp`}
        width={resize.getWidth(160)}
        style={{
          transform: hasBeginner ? `translateY(470%)` : "translateY(320%)",
          opacity: `${bannerType === "weap" ? 0 : 1}`,
        }}
        onClick={() => {
          setBannerType("weap");
        }}
        draggable="false"
        onMouseDown={() => {
          if (hasBeginner) {
            if (highlightIndex !== 2) setHighlightIndex(2);
          } else if (highlightIndex !== 1) setHighlightIndex(1);
        }}
        onMouseUp={() => {
          setHighlightIndex(null);
        }}
        onMouseLeave={() => {
          setHighlightIndex(null);
        }}
      />
      <img
        className="mini-banner"
        alt="mini standard banner active"
        src={`../assets/banner/mini/${vers}-standard-active.webp`}
        width={resize.getWidth(180)}
        style={{
          transform: hasBeginner ? `translateY(450%)` : "translateY(335%)",
          opacity: `${bannerType === "standard" ? 1 : 0}`,
        }}
        draggable="false"
      />
      <img
        className="mini-banner"
        alt="mini standard banner"
        src={`../assets/banner/mini/${vers}-standard.webp`}
        width={resize.getWidth(160)}
        style={{
          transform: hasBeginner ? `translateY(620%)` : "translateY(460%)",
          opacity: `${bannerType === "standard" ? 0 : 1}`,
        }}
        onClick={() => {
          setBannerType("standard");
        }}
        draggable="false"
        onMouseDown={() => {
          if (hasBeginner) {
            if (highlightIndex !== 3) setHighlightIndex(3);
          } else if (highlightIndex !== 2) setHighlightIndex(2);
        }}
        onMouseUp={() => {
          setHighlightIndex(null);
        }}
        onMouseLeave={() => {
          setHighlightIndex(null);
        }}
      />
      <img
        className="mini-highlight"
        src="../assets/banner/mini/highlight.webp"
        alt="highlight"
        width={resize.getWidth(160)}
        style={{
          transform: hasBeginner ? "translateY(172%)" : "translateY(170%)",
          opacity: hasBeginner
            ? `${highlightIndex === 0 && bannerType !== "beginner" ? 1 : 0}`
            : `${highlightIndex === 0 && bannerType !== "char" ? 1 : 0}`,
        }}
      />
      <img
        className="mini-highlight"
        src="../assets/banner/mini/highlight.webp"
        alt="highlight"
        width={resize.getWidth(160)}
        style={{
          transform: "translateY(305%)",
          opacity: hasBeginner
            ? `${highlightIndex === 1 && bannerType !== "char" ? 1 : 0}`
            : `${highlightIndex === 1 && bannerType !== "weap" ? 1 : 0}`,
        }}
      />
      <img
        className="mini-highlight"
        src="../assets/banner/mini/highlight.webp"
        alt="highlight"
        width={resize.getWidth(160)}
        style={{
          transform: hasBeginner ? "translateY(450%)" : "translateY(440%)",
          opacity: hasBeginner
            ? `${highlightIndex === 2 && bannerType !== "weap" ? 1 : 0}`
            : `${highlightIndex === 2 && bannerType !== "standard" ? 1 : 0}`,
        }}
      />
      <img
        className="mini-highlight"
        src="../assets/banner/mini/highlight.webp"
        alt="highlight"
        width={resize.getWidth(160)}
        style={{
          transform: "translateY(595%)",
          opacity: hasBeginner
            ? `${highlightIndex === 3 && bannerType !== "standard" ? 1 : 0}`
            : 0,
        }}
      />
    </React.Fragment>
  );
};

export default MiniBanners;
