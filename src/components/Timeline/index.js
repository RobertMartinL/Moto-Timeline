import React from "react";
import "./timeline.css";
import { useState } from "react";

const Timeline = () => {
  const [divs, setDivs] = useState([
    { id: 1, content: "Div 1 content", year: "1932", event: "First motorcycle made" },
    { id: 2, content: "Div 2 content", year: "1956", event: "Radda" },
    { id: 3, content: "Div 3 content", year: "1980", event: "Radda Radda" },
  ]);

  const [activeDivId, setActiveDivId] = useState(null);

  const activeDiv = divs.find((div) => div.id === activeDivId);
  const activeDivContent = activeDiv ? activeDiv.content : null;

  return (
    <div className="Timeline">
      <div className="timelineBar">
          {divs.map((div) => (
            <div className="itemContainer">
            <div key={div.id} className="needle">{div.year}{div.event}</div>
            <div key={div.id} className="item" onClick={() => setActiveDivId(div.id)}>
              {/* {div.content} */}
            </div>
            </div>
          ))}
      </div>
      <div className="info">{activeDivContent}</div>
    </div>
  );
};

export default Timeline;
