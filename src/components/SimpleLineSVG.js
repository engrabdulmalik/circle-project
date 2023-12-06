import React, { useState } from "react";
import "./SimpleLineSVG.css";

const SimpleLineSVG = () => {
  const [groupOneClicked, setGroupOneClicked] = useState(false);
  const [groupTwoClicked, setGroupTwoClicked] = useState(false);

  const handleGroupOneCircleClick = () => {
    setGroupOneClicked(!groupOneClicked);
    setGroupTwoClicked(false);
  };

  // const handleGroupOneCircleReset = () => {
  //   setClicked(false);
  // };
  const handleGroupTwoCircleClick = () => {
    setGroupTwoClicked(!groupTwoClicked);
    setGroupOneClicked(false);
  };

  // const handleGroupTwoCircleReset = () => {
  //   setClicked(false);
  // };

  return (
    <>
      <svg width="800" height="800">
        <circle cx="505" cy="500" r="270" fill="none" stroke="black" />
        <circle cx="505" cy="500" r="170" fill="none" stroke="black" />
        <circle cx="505" cy="500" r="100" fill="none" stroke="black" />
        <circle
          cx="770"
          cy="550"
          r="20"
          stroke="black"
          fill={groupOneClicked ? "black" : "white"}
          onClick={handleGroupOneCircleClick}
          className="similarCircles"
        />
        <circle
          cx="605"
          cy="500"
          r="20"
          stroke="black"
          fill={groupOneClicked ? "black" : "white"}
          onClick={handleGroupOneCircleClick}
          className="similarCircles"
        />
        <circle
          cx="755"
          cy="400"
          r="20"
          stroke="black"
          fill={groupOneClicked ? "black" : "white"}
          onClick={handleGroupOneCircleClick}
          className="similarCircles"
        />
        <circle
          cx="240"
          cy="550"
          r="20"
          stroke="black"
          fill={groupTwoClicked ? "black" : "white"}
          onClick={handleGroupTwoCircleClick}
          className="similarCircles2"
        />
        <circle
          cx="405"
          cy="500"
          r="20"
          stroke="black"
          fill={groupTwoClicked ? "black" : "white"}
          onClick={handleGroupTwoCircleClick}
          className="similarCircles2"
        />
        <circle
          cx="255"
          cy="400"
          r="20"
          stroke="black"
          fill={groupTwoClicked ? "black" : "white"}
          onClick={handleGroupTwoCircleClick}
          className="similarCircles2"
        />
        <line
          x1="622"
          y1="493"
          x2="740"
          y2="415"
          strokeWidth="1"
          stroke={groupOneClicked ? "black" : "grey"}
          className="similarLines"
        />

        <line
          x1="622"
          y1="493"
          x2="750"
          y2="550"
          strokeWidth="1"
          stroke={groupOneClicked ? "black" : "grey"}
          className="similarLines"
        />
        <line
          x1="385"
          y1="500"
          x2="273"
          y2="410"
          strokeWidth="1"
          stroke={groupTwoClicked ? "black" : "grey"}
          className="similarLines2"
        />

        <line
          x1="385"
          y1="500"
          x2="258"
          y2="540"
          strokeWidth="1"
          stroke={groupTwoClicked ? "black" : "grey"}
          className="similarLines2"
        />
        {groupOneClicked && (
          <text
            x="500"
            y="460"
            textAnchor="middle"
            fontSize="24"
            fontFamily="sans-serif"
            fill="blue"
          >
            <tspan x="515" dy="1.2em">
              Front-End
            </tspan>
            <tspan x="520" dy="1.2em">
              Web
            </tspan>
            <tspan x="510" dy="1.2em">
              Development
            </tspan>
          </text>
        )}

        {groupTwoClicked && (
          <text
            x="500"
            y="460"
            textAnchor="middle"
            fontSize="24"
            fontFamily="sans-serif"
            fill="green"
          >
            <tspan x="515" dy="1.2em">
              Back-End
            </tspan>
            <tspan x="520" dy="1.2em">
              Web
            </tspan>
            <tspan x="510" dy="1.2em">
              Development
            </tspan>
          </text>
        )}

        {/* Default text if none of the groups are clicked */}
        {!groupOneClicked && !groupTwoClicked && (
          <text
            x="500"
            y="460"
            textAnchor="middle"
            fontSize="24"
            fontFamily="sans-serif"
            fill="red"
          >
            <tspan x="515" dy="1.2em">
              Full Stack
            </tspan>
            <tspan x="520" dy="1.2em">
              Web
            </tspan>
            <tspan x="510" dy="1.2em">
              Development
            </tspan>
          </text>
        )}

        {/* <text
          x="500"
          y="460"
          text-anchor="middle"
          fontSize="24"
          fontFamily="sans-serif"
          fill="#000000"
        >
          <tspan x="515" dy="1.2em">
            Full Stack
          </tspan>
          <tspan x="520" dy="1.2em">
            Web
          </tspan>
          <tspan x="510" dy="1.2em">
            Development
          </tspan>
        </text> */}
      </svg>
    </>
  );
};

export default SimpleLineSVG;
