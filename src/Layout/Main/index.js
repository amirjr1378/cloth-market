import React from 'react';
import {Container} from './Main.styles';
import {Switch, Route} from 'react-router-dom';
import Directory from '../../pages/Directory';
import Category from '../../pages/Category';
import Shop from '../../pages/Shop';

function Main({ ...props }) {
   return (
      <Container>
         <Switch>
            <Route path='/' exact component={Directory} />
            <Route path='/category/:name' component={Category} />
            <Route path='/shop' component={Shop} />
         </Switch> 
      </Container>
   );
}

export default Main;
