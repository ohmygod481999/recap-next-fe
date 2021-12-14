import React from "react";

function Loading() {
  return (
    <div id="preloader">
      <div className="loader">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx={25}
            cy={25}
            r={20}
            fill="none"
            strokeWidth={5}
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
