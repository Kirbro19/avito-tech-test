import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./main.css";
import dateConverter from "../../helpers/dateConverter";

import { getNews } from "../../redux/actions/NewsActions";
import Story from "../Story/Story";

const Main = () => {
  const dispatch = useDispatch();

  const update = () => dispatch(getNews());

  useEffect(() => {
    update();
    setInterval(() => update(), 60000);
  }, []);

  const News = useSelector((state) => state.News.news);

  const navigate = useNavigate();

  return (
    <div className="container">
      {News.map((item) => (
        <Story
          key={item.id}
          title={item.title}
          by={item.by}
          score={item.score}
          time={dateConverter(item.time)}
          onClick={() => navigate(`/story/${item.id}`)}
        />
      ))}
    </div>
  );
};

export default Main;
