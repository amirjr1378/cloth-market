import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selector";
import {
   HeaderContainer,
   LogoContainer,
   OptionLink,
   OptionsContainer
} from "./Header.styles";
import CartIcon from "../../components/CartIcon";
import CartDropdown from "../../components/CartDropdown";

function Header({ ...props }) {
   const items = useSelector(selectCart);
   const currentUser = false;
   const signout = (...args) => console.log("...args: ", ...args);
   const [hidden, setHidden] = useState(true);
   const toggle = useCallback(() => {
      setHidden(hidden => !hidden);
   }, [hidden]);
   return (
      <HeaderContainer>
         <LogoContainer to="/">
            <img
               src={require("../../assets/img/amir-logo.png")}
               alt="amir logo"
            />
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            {/*
                  {currentUser ? (
                  <OptionLink as="div" onClick={signout}>
                  SIGN OUT
                  </OptionLink>
               ) : (
                  <OptionLink to="/signin">SIGN IN</OptionLink>
                     )}
                     */}
         </OptionsContainer>
         <CartIcon toggle={toggle} />
         <CartDropdown items={items} hidden={hidden} toggle={toggle} />
      </HeaderContainer>
   );
}

export default Header;
