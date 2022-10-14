import React, { useEffect, useState } from "react";
import AnimatedLettersFast from "components/AnimatedlettersFast";
import "./portfolio.css";
import image1 from "../../images/1-e1507916198561-scaled.jpg";
import image2 from "../../images/1.jpg";
// import image from "../../images/1-e1507916198561-scaled.jpg"
// import image from "../../images/1-e1507916198561-scaled.jpg"
// import image from "../../images/1-e1507916198561-scaled.jpg"

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "My Portfoilo".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });

  return (
    <div id="portfolio">
      <h1 className="bold-Text">Work</h1>
      <div>
        <span className="sectiontag">&lt;section&gt;</span>
        <h1 className="about__headingPrimary">
          <AnimatedLettersFast
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
      </div>

      <div className="text-zone-2">
        <div className="portfolio-des">
          <p>
            A small gallery of recent projects chosen by me. I've done them all
            together with amazing people from companies around the globe. It's
            only a drop in the ocean compared to the entire list.
            <br />
            interested to see some more? Visit
            <a href="#">my work</a>
            page
          </p>
        </div>
        <div className="portfolio-btn">
         <button>See More</button>
        </div>
      </div>

      <div>
        <div id="home-magicwall" className="fake-magicwall">
          <ul>
            <li>
              <div className="magic-wall_item lazyload" id="modal1">
                <img src={image1} alt="imWWEage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 1 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image2} alt="iEmage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 3 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image1} alt="imSDage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 3 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image2} alt="imaSDge" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 4 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image1} alt="imaSDge" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 5 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image2} alt="iERmage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 6 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image1} alt="imagDe" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 7 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image2} alt="idmage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 8 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image1} alt="imeage" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 9 */}
            <li>
              <div className="magic-wall_item lazyload">
                <img src={image2} alt="imagde" />
                <div className="hover-content" />
                <a href="#" className="colorbox" />
              </div>
            </li>
            {/* magic wall 10 */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
