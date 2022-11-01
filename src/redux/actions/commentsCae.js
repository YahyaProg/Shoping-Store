export const commentsCase = (dependId) => {
  return async (dispatch, getState) => {
    const comments = getState().Comments;
    console.log("comments", comments);
    const commentsCase = comments
      .filter((item) => {
        return item.dependId === dependId;
      })
      .sort((a, b) => {
        return b.date - a.date;
      });

    await dispatch({ type: "GET_COMMENTS_CASE", payload: commentsCase });
  };
};
