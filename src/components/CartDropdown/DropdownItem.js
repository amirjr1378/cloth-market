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
            {name}
         </Description> 
         <Quantity>
            <FontAwesomeIcon icon={['fas', 'less-than']} onClick={dec} />
            <span style={{margin: 10}}>{count}</span>
            <FontAwesomeIcon icon={['fas', 'greater-than']} onClick={inc}/>
         </Quantity>
            <span>{price}$</span>
      </DropdownItemContainer>
   );
}


 DropdownItem.propTypes = {
    name: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    imageUrl:PropTypes.string.isRequired,
};

export default  DropdownItem;
