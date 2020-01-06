import React from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainers } from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item"/>
    <ItemDetailsContainers>
      <span>{name}</span>
      <span>{quantity} x ${price}</span>
    </ItemDetailsContainers>
  </CartItemContainer>
)

export default CartItem;