import React from "react";
import PropTypes from "prop-types";
import {
   DropdownContainer,
   EmptyMessage,
   CloseButton
} from "./CartDropdown.styles";
import DropdownItem from "./DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartDropdown({ items, hidden = true, toggle }) {
   return !hidden ? (
      <DropdownContainer>
         <CloseButton onClick={toggle} data-testid="close-cart">
            <FontAwesomeIcon icon={["fas", "times"]} />
         </CloseButton>
         {items.length ? (
            items.map((item, i) => (
               <DropdownItem key={"item" + item.name} {...item} />
            ))
         ) : (
            <EmptyMessage>basket is empty</EmptyMessage>
         )}
      </DropdownContainer>
   ) : null;
}

CartDropdown.propTypes = {
   items: PropTypes.array,
   hidden: PropTypes.bool,
   toggle: PropTypes.func.isRequired,
};

export default CartDropdown;
