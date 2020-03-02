import React from "react"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import {rootReducer as reducer} from './redux/rootReducer';

import add from './fontAwesomeConfig';
add();
/*
 * its a wrapper for all of test that includes react router
 * @params {React Element} ui
 * @params {Object} options it is optional
 */
export function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  /*
   * for click on react router links
   * @params {dom element} linkElement
   */
  const linkClick = linkElement => {
    fireEvent.click(linkElement, { button: 0 });
  };

  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
    linkClick
  };
}

/*
 * every connected component should test with this function
 * @params {React Element} ui
 * @params {Object} initalState
 */
export function renderWithRedux(
  ui,
  {initialState, store = createStore(reducer, initialState)} = {},
) {

  const {rerender, ...renderProps} = render(<Provider store={store}>{ui}</Provider>)
  return {
    ...renderProps,
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    rerenderWithRedux:ui => rerender(<Provider store={store}>{ui}</Provider>),
    store,
  }
}


export * from "@testing-library/react";
