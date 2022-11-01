import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { replyComments } from "../../../redux/actions/comment";
const CommentBoxButton = ({ dependId, showcm }) => {
  console.log("depend", dependId);
  const { isLogin, userName } = useSelector((state) => state.Login);
  const message = useRef();
  const dispatch = useDispatch();
  const [showCommentLine, setCommentLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [commentFeild, setCommentField] = useState(false);
  const [enableBtn, setEnableBtn] = useState(true);
  const [comment, setComment] = useState();
  const commentFocus = () => {
    setShowButtons(true);
    setCommentLine(true);
  };
  const commentFocusOut = () => {
    setCommentLine(false);
  };
  const commentStroke = (event) => {
    let currMessage = event.target.value;
    if (currMessage) {
      setCommentField(true);
    } else {
      setCommentField(false);
    }
  };
  // const nameStroke = (event) => {
  //   let currMessage = event.target.value;
  //   if (currMessage) {
  //     setNameField(true);
  //   } else {
  //     setNameField(false);
  //   }
  // };
  useEffect(() => {
    if (commentFeild === true) {
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  }, [commentFeild]);

  const handleSubmit = (event) => {
    event.preventDefault();
    message.current.value = "";
    setShowButtons(false);
    dispatch(replyComments(userName, comment, dependId));
    showcm();
  };
  return (
    <form onSubmit={handleSubmit} className="commentForm replybox">
      <section className="commentBox">
        {/* <input
          ref={message2}
          autoFocus="false"
          type="text"
          placeholder="whats your name?"
          onKeyUp={nameStroke}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="what is your comment ?"
          ref={message}
          onFocus={commentFocus}
          onBlur={commentFocusOut}
          onKeyUp={commentStroke}
          onChange={(e) => setComment(e.target.value)}
        />
        {showCommentLine && <div className="commentLine"></div>}
      </section>
      {showButtons && (
        <div className="commentButtons">
          <button
            type="submit"
            className="commentButton sendButton"
            disabled={enableBtn}
          >
            Comment
          </button>
          <button
            onClick={() => {
              setShowButtons(false);
              message.current.value = "";
            }}
            className="commentButton"
            style={{ backgroundColor: "red" }}
          >
            Canel
          </button>
        </div>
      )}
    </form>
  );
};

export default CommentBoxButton;
