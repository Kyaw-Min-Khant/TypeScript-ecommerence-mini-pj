export type stateType = {
  products: any[];
  buyProducts: any[];
};
export type updateType = {
  type: "GET_Products";
  payload: any[];
};
export type addType = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CART_EMPTY";
  payload: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
};
