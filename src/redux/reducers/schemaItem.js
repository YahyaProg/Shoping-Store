export const SchemaItem = (state = [], action) => {
  switch (action.type) {
    case "OFFER_SCHEMA":
      return action.payload;

    default:
      return state;
  }
};
