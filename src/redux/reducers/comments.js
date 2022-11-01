export const Comments = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENT":
      return action.payload;
    case "REPLY_COMMENT":
      return action.payload;
    case "START_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};

export const CommentsCae = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS_CASE":
      return action.payload;
    default:
      return state;
  }
};
