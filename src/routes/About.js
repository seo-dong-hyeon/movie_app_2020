import React from "react";
import "./About.css";

// react router -> 자동으로 props 전달
function About(props) {
    return (
        <div className="about__container">
          <span>
            “Freedom is the freedom to say that two plus two make four. If that is
            granted, all else follows.”
          </span>
          <span>− George Orwell, 1984</span>
        </div>
    );
}

export default About;