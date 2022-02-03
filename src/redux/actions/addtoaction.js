export const ADD_TO_CART='ADD_TO_CART';

export const addtocart=(item)=>{
  return {
      type:ADD_TO_CART,
      item
  }
}  