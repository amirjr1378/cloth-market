import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/selector';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';


const CartIcon = ({ toggle, itemCount = 0 }) => (
  <CartContainer onClick={toggle}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
 

export default connect(
  mapStateToProps,
)(CartIcon);
