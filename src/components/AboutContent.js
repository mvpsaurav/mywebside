import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
        <div className="About">
            <div className="left">
                <h1>Who Am I</h1>
                <p>This is Saurav Kumar Mishra. Im a react font developer || Fresher ||. Looking for new job.</p>
                {/* <Link to="/Contact"> */}
                    <a href="https://drive.google.com/file/d/1XhKNAIbSTKukFN_bq03K5Vq6Zi0IqGKo/view?usp=sharing" target="_blank">
                    <button className="btn">Downlode CV</button>
                    </a>
                {/* </Link> */}
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent