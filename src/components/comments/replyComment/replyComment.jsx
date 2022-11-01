import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoArrowSmallDown, GoArrowSmallUp, GoPerson } from "react-icons/go";
const ReplyComments = ({ item }) => {
  const state = useSelector((state) => state.CommentsCae);
  const primeState = useSelector((state) => state.Comments);
  const [showComments, setShowComments] = useState(false);

  const commentsLength = item.children.length;

  return (
    <section>
      {commentsLength > 0 && (
        <div className="letShow">
          <span onClick={() => setShowComments(!showComments)}>
            <h4>
              {showComments ? <GoArrowSmallUp /> : <GoArrowSmallDown />}{" "}
              {`show all the replies (${commentsLength})`}
            </h4>
          </span>
        </div>
      )}
      {item?.children.map((ite) => {
        console.log("itemKey", ite.key);

        return (
          <section
            key={ite.key}
            className={
              showComments ? "commentShow show-comment-show" : "commentShow"
            }
          >
            <section className="person_info_comment">
              <div className="person_Image_comment">
                <GoPerson />
              </div>
              <div className="pesron_name_comment">{ite.name}</div>
            </section>
            <section className="comment_container">
              <h3>{ite.comment}</h3>
            </section>
            <hr className="ceprate"/>
          </section>
          
        );
      })}
    </section>
  );
};

export default ReplyComments;
