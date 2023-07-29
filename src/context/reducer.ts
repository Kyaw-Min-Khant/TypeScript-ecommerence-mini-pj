import { addType, stateType, updateType } from ".";
type actionType = updateType | addType;
export const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "GET_Products":
      return { ...state, products: action.payload };
  }
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, buyProducts: [...state.buyProducts, action.payload] };
  }
  switch (action.type) {
    case "REMOVE_FROM_CART":
      return {
        ...state,
        buyProducts: [
          state?.buyProducts.filter((item) => item.id !== action?.payload),
        ],
      };
  }
};
