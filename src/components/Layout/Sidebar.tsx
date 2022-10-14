import React from "react";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>

      <aside className="aside">
        <div className="aside-wrapper">
          <div className="logo-section">
            <a className="logo" rel="home" href="#">
              <img src="images/logo.png" alt="logo" />
              <span>Jack</span>
            </a>
            <span>Web Developer</span>
          </div>
          <nav className="nav-links">
            <a href="#">About</a>
            <a href="#">My Skills</a>
            <a href="#">Work</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          {/* social icons */}
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-rss" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
