import React from 'react';
import PropTypes from 'prop-types';
import {DropdownItemContainer, Description, Img, Quantity} from "./CartDropdown.styles.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {addItem, decrease} from './../../redux/cart/actions';


function DropdownItem({name, imageUrl, price, count = 1, id}) {
   const dispatch = useDispatch();
   const dec = () => dispatch(decrease({id}))
   const inc = () => dispatch(addItem({id}))
   return(
      <DropdownItemContainer>
         <Description>
            <Img src={imageUrl} alt={name} />
            <span data-testid="product-name">{name}</span>
         </Description> 
         <Quantity>
            <FontAwesomeIcon data-testid="minus" icon={['fas', 'less-than']} onClick={dec} />
            <span data-testid="product-count" style={{margin: 10}}>{count}</span>
            <FontAwesomeIcon data-testid="plus" icon={['fas', 'greater-than']} onClick={inc}/>
         </Quantity>
            <span data-testid="product-price">{price}$</span>
      </DropdownItemContainer>
   );
}


 DropdownItem.propTypes = {
    name: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    imageUrl:PropTypes.string.isRequired,
};

export default  DropdownItem;
