import React from 'react';
import {renderWithRedux, fireEvent, screen} from 'test-utils';
import DropdownItem from './DropdownItem';

test('test dropdown item inside of cart item', async () => {
  const product = {
    name: 'product-name',
    imageUrl: 'dummy url',
    price: 24,
    id: 24,
    count: 3
  }
  renderWithRedux(<DropdownItem {...product} />)

  expect(screen.getByTestId('product-name')).toHaveTextContent(product.name);
  expect(screen.getByTestId('product-count')).toHaveTextContent(product.count);
  // we cannot test redux functionality here 
})
