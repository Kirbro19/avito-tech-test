import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "html-react-parser";
import "./comments.css";

import { getSubComment } from "../../redux/actions/SubCommentActions";
import dateConverter from "../../helpers/dateConverter";

const Comments = (comment) => {
  const dispatch = useDispatch();
  const { by, text, time, kids, id } = comment;

  const stateSubComment = useSelector((state) => state.SubComment.subComments);
  const [subComments, setSubComments] = useState([]);

  const showSubComments = async () => {
    await dispatch(getSubComment(kids));
  };

  return (
    <div className="comment">
      <div className="comment-title">
        <div className="author">
          <b>{by}</b>
        </div>
        <div className="time"> at {time}</div>
      </div>
      <div>
        <div className="text">{ReactHtmlParser(text)}</div>
      </div>
      {kids?.length && <button onClick={showSubComments}>Show answers</button>}
      {!comment.notShowSubcomments && stateSubComment?.length
        ? stateSubComment.map((elem) => {
            return elem.parent === id ? (
              <Comments
                id={elem.id}
                key={elem.id}
                by={elem.by}
                time={dateConverter(elem.time)}
                text={elem.text}
                notShowSubcomments={true}
              />
            ) : null;
          })
        : null}
    </div>
  );
};

export default Comments;
