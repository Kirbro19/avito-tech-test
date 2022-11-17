import React from "react";
import { useDispatch } from "react-redux";
import "./header.css";
import hackerNewsIcon from "../../icons/y18.gif";
import { Button } from "../Button/Button";
import { getNews } from "../../redux/actions/NewsActions";
import { useMatch } from "react-router-dom";

const Header = () => {
  const match = useMatch('/');
  const dispatch = useDispatch();
  const handleUpdate = () => dispatch(getNews());

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-wrapper">
          <img
            className="header-logo"
            src={hackerNewsIcon}
            alt="Hacker News icon"
          />
          <div className="header-title">
            <h1>Hacker News</h1>
          </div>
        </div>
        <div className="header-button">
          <Button onClick={handleUpdate}>Update News</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
