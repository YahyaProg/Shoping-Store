import React, { useEffect, useState } from "react";
import "./commentShow.css";
import { useSelector, useDispatch } from "react-redux";
import { commentsCase } from "../../../redux/actions/commentsCae";
import { GoArrowSmallDown, GoArrowSmallUp, GoPerson } from "react-icons/go";
import { CommentBoxButton, ReplyComments } from "../../index";
const CommentShow = ({ dependId }) => {
  const { email,isLogin} = useSelector((state) => state.Login);
  const state = useSelector((state) => state.CommentsCae);
  const primeState = useSelector((state) => state.Comments);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const [id, setId] = useState();
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(primeState));
    dispatch(commentsCase(dependId));
  }, [dependId, dispatch, primeState]);
  const commentsLength = state.length;
  const replyActions = (key) => {
    setId(key);
    setOpenReply(!openReply);
  };

  const showCommentBox = () => {
    setOpenReply(!openReply);
  };
  const co = localStorage.getItem("comments");
  console.log("comments", JSON.parse(co));

  if (commentsLength===0){
    return <div className="comment-empty">
      <p>there is no comment</p>
    </div>
  }
  return (
    <section>
      {commentsLength > 0 && (
        <div className="letShow">
          <span onClick={() => setShowComments(!showComments)}>
            <h4>
              {showComments ? <GoArrowSmallUp /> : <GoArrowSmallDown />}{" "}
              {`show all the comments (${commentsLength})`}
            </h4>
          </span>
        </div>
      )}
      {state?.map((item) => {
        console.log("date", item.date);
        return (
          <section
            key={item.key}
            className={
              showComments ? "commentShow show-comment-show" : "commentShow"
            }
          >
            <section className="person_info_comment">
              <div className="person_Image_comment">
                <GoPerson />
              </div>
              <div>
                <div className="pesron_name_comment">{item.name}</div>

                <div className="comment-date">
                  {new Date(item.date).toUTCString()}
                </div>
              </div>
            </section>
            <section className="comment_container">
              <h3>{item.comment}</h3>
            </section>
           {isLogin && item.email !==email && <section className="comments-action">
              <span onClick={() => replyActions(item.key)} className="reply">
                Reply
              </span>
            </section>}
            {id && id === item.key && openReply && (
              <CommentBoxButton showcm={showCommentBox} dependId={item.key} />
            )}
            {item.children.length > 0 && <ReplyComments item={item} />}
          </section>
        );
      })}
    </section>
  );
};

export default CommentShow;
