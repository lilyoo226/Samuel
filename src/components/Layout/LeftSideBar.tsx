import React from "react";
import "./leftSideBar.scss";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <div className="head">
        <h1>S</h1>
        <h3>Homie</h3>
        <h5>Web Developer</h5>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">My Skills</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className="down">
        <ul className="left__social">
          <li className="left__linkItems">
            <a
              href="https://www.youtube.com/channel/UCax8or2_bzQCHe0GdSLITOA"
              className="left__links"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="left__icon">
                <use href="icons/symbol-defs.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
          <li className="left__linkItems">
            <a
              href="https://codepen.io/yashfalke77"
              className="left__links"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="left__icon">
                <use href="/icons/symbol-defs.svg#icon-codepen"></use>
              </svg>
            </a>
          </li>
          <li className="left__linkItems">
            <a
              href="https://github.com/yashfalke77"
              className="left__links"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="left__icon">
                <use href="/icons/symbol-defs.svg#icon-github"></use>
              </svg>
            </a>
          </li>
          <li className="left__linkItems">
            <a
              href="https://www.instagram.com/yashfalke77/"
              className="left__links"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="left__icon">
                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className="left__linkItems">
            <a
              href="https://www.linkedin.com/in/yashfalke77/"
              target="_blank"
              rel="noreferrer"
              className="left__links"
            >
              <svg className="left__icon">
                <use href="/icons/symbol-defs.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>

        <div className="left__line"></div>
      </div>
    </div>
  );
};

export default LeftSideBar;
