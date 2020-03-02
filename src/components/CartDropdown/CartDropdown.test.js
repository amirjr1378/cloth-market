import React from "react";
import {renderWithRedux, screen, fireEvent} from "test-utils";
import CartDropdown from './index';

test('test cart dropdown render correctly',() => {
  const items = [
    {
      name:'product-name',
      price: 24,
      imageUrl:''
    }
  ];
  
  let hidden = true;
  const toggle = jest.fn();
  const {container, rerenderWithRedux} = renderWithRedux(<CartDropdown items={items} hidden={hidden} toggle={toggle} />)

  //it is hidden and should not render anything
  expect(container.innerHTML).not.toMatch(items[0].name);

  // now we should have one item
  hidden = false;
  rerenderWithRedux(<CartDropdown items={items} hidden={hidden} toggle={toggle} />) 
  expect(screen.getByText(items[0].name)).toBeInTheDocument();


  // now we should try without items to render empty message
  rerenderWithRedux(<CartDropdown items={[]} hidden={hidden} toggle={toggle} />) 
  expect(screen.getByText('basket is empty')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('close-cart'));
  expect(toggle).toHaveBeenCalledTimes(1);


})
