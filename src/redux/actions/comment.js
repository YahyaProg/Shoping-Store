export const Comment = (dependId, name, comment,email) => {
  return async (dispatch, getState) => {
    const state = getState().Comments;
    const fakKey = Math.floor(Math.random() * 20000000000);
    await dispatch({
      type: "GET_COMMENT",
      payload: [
        ...state,
        {
          key: fakKey,
          dependId: dependId,
          date: new Date(),
          name,
          comment,
          email,
          children: [],
        },
      ],
    });
  };
};
export const CommentStart = (comments) => {
  return async (dispatch) => {
    await dispatch({
      type: "START_COMMENTS",
      payload: [...JSON.parse(comments)],
    });
  };
};
export const replyComments = (name, comments, key) => {
  console.log("key1", key);
  return async (dispatch, getState) => {
    const state = getState().Comments;
    const commentsCse = state.map((item) => {
      console.log("key2", item.key);
      if (item.key === key) {
        return {
          ...item,
          children: [
            ...item.children,
            {
              key: Math.floor(Math.random() * 5000000),
              name,
              comment: comments,
            },
          ],
        };
      } else {
        return item;
      }
    });

    dispatch({ type: "REPLY_COMMENT", payload: commentsCse });
  };
};
