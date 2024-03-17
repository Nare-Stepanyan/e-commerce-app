import { Product } from "../../type";
import { toast } from "react-toastify";

export const addItemToCart = (
  cartItems: Product[],
  product: Product
): Product[] => {
  const productIndex = cartItems.findIndex((item) => item.id === product.id);

  if (productIndex >= 0) {
    if (cartItems[productIndex].cartQuantity) {
      cartItems[productIndex].cartQuantity! += 1;
      toast.info(`${product.title} increased by one`, {
        position: "top-left",
      });
    }
  } else {
    const tempProduct = { ...product, cartQuantity: 1 };
    cartItems.push(tempProduct);
    toast.success(`${product.title} added to cart`, {
      position: "top-left",
    });
  }
  return cartItems;
};

export const decreaseCartItem = (
  cartItems: Product[],
  product: Product
): Product[] => {
  const productIndex = cartItems.findIndex((item) => item.id === product.id);
  if (cartItems[productIndex].cartQuantity! > 1) {
    cartItems[productIndex].cartQuantity! -= 1;
    toast.info(`${product.title} decreased by one`, {
      position: "top-left",
    });
  } else if (cartItems[productIndex].cartQuantity === 1) {
    const newCartItem = cartItems.filter((item) => item.id !== product.id);
    cartItems = newCartItem;
    toast.success(`${product.title} removed from cart`, {
      position: "top-left",
    });
  }
  return cartItems;
};

export const removeItemFromCart = (
  cartItems: Product[],
  product: Product
): Product[] => {
  const newCartItem = cartItems.filter((item) => item.id !== product.id);
  cartItems = newCartItem;
  toast.success(`${product.title} removed from cart`, {
    position: "top-left",
  });

  return cartItems;
};

export const calculateCartSubtotal = (cartItems: Product[]): number => {
  const array: number[] = [];
  cartItems.map((item) => {
    const { price, cartQuantity } = item;
    const cartItemAmount = price * (cartQuantity as number);
    return array.push(cartItemAmount);
  });
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};

export const calculateCartTotalQuantity = (cartItems: Product[]): number => {
  const array: number[] = [];
  cartItems.map((item) => {
    const { cartQuantity } = item;
    const quantity = cartQuantity as number;
    return array.push(quantity);
  });
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};
