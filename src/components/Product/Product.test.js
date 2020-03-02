import React from "react";
import {renderWithRedux, screen} from 'test-utils';
import Product from './index';

test('test product render correctly', () => {
  const product = {
    name:'product-name',
    imageUrl: 'image-url',
    price: 24,
    id:24
  }
  renderWithRedux(<Product {...product} />);

  expect(screen.getByTestId('product-name')).toHaveTextContent(product.name);
  expect(screen.getByTestId('product-price')).toHaveTextContent(product.price);


})
