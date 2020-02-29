import React, {Suspense} from "react";
import Layout from './Layout';
import {Route} from "react-router-dom";
import Spinner from "./components/Spinner"
function App() {
   return (
      <Suspense fallback={Spinner}>
         <Route path="/" render={Layout} />
      </Suspense>
   )
}

export default App;
