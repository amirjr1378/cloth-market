import React from 'react';
import PropTypes from 'prop-types';
import {ProductContainer, AddToCart, Background, Overlay, OverlayText, Description} from './Product.styles';
import {useDispatch} from "react-redux";
import {addItem} from './../../redux/cart/actions';

function Product({ name, imageUrl, price, id }) {
   const dispatch = useDispatch();
   const addToCard = e => {
      dispatch(addItem({name, imageUrl, price, id}))
   }
   return (
      <ProductContainer>
         <AddToCart>
            <Background url={imageUrl} />
            <Overlay>
               <OverlayText onClick={addToCard}>Add To Card</OverlayText>
            </Overlay>
         </AddToCart>
         <Description>
            <div>{name}</div>
            <div>{price}$</div>
         </Description>
      </ProductContainer>
   );
}


Product.propTypes = {
};

export default Product;
