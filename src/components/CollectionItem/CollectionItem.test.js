import React from 'react'
import {renderWithRouter, screen} from 'test-utils'
import CollectionItem from './CollectionItem'


test('test collection item render correctly', () => {
  const props = {
    imageUrl: 'fake',
    title:'men', 
    linkUrl:'/men',
    size:'large'
  }
  renderWithRouter(<CollectionItem {...props} />)

  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByTestId('directory-link').href).toMatch('/men')

})
