import React from "react";
import "./story.css";

const Story = (props) => {
  const { title, score, by, time, onClick } = props;

  return (
    <div className="story" onClick={onClick}>
      <h4 className="story-name">{title}</h4>
      <div className="story-desc">
        <div className="story-rate">
          <b>{score}</b> Points
        </div>
        <div className="story-author">
          Post by <b>{by}</b>
        </div>
        <div className="story-date">at {time}</div>
      </div>
    </div>
  );
};

export default Story;
