import { IProduct } from "../../../shared/type";

export function addProductToCart(product: IProduct){
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  }
}