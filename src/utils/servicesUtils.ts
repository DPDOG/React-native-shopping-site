import {Cart} from '../redux';

export const checkIsLoading = (status: string) => {
  return status === 'loading';
};

export const checkItemAlreadyOrAdd = (fullCart: Cart[], cartItem: Cart) => {
  let copyFullCart = JSON.parse(JSON.stringify(fullCart));
  if (copyFullCart.length === 0) {
    copyFullCart.push(cartItem);
  } else {
    for (const element of copyFullCart) {
      if (element.id === cartItem.id) {
        element.quantity += 1;
        break;
      } else {
        copyFullCart.push(cartItem);
      }
    }
  }
  return copyFullCart;
};

export const incDecQuantity = (fullCart: Cart[], id: number, inc = true) => {
  let copyFullCart = JSON.parse(JSON.stringify(fullCart));
  for (const element of copyFullCart) {
    if (element.id === id) {
      if (inc) {
        element.quantity += 1;
      }
      if (!inc) {
        if (element.quantity > 1) {
          element.quantity -= 1;
        }
      }
      break;
    }
  }
  return copyFullCart;
};

export const removeFromCart = (fullCart: Cart[], id: number) => {
  let copyFullCart = JSON.parse(JSON.stringify(fullCart));
  const newCart = copyFullCart.filter((item: Cart) => item.id === id);
  return newCart;
};

export const totalPrice = (fullCart: Cart[]) => {
  let allPrice = 0;
  for (const element of fullCart) {
    allPrice = allPrice + element.quantity * element.price;
  }
  return allPrice;
};

export const create_UUID = () => {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    },
  );
  return uuid;
};
