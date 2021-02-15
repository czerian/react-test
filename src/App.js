import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Parent, FetchApi, Axios, NotFound} from './components';
import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Parent} />
      <Route exact path="/rest-fetch-api" component={FetchApi} />
      <Route exact path="/rest-axios" component={Axios} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;


// 1. Using functional code, demonstrate how you would pass data to parent in React component?
// 2. Consume a public REST Api of your choosing with React 
// One more thing, when you’re done, kindly commit your on a public repo on GitHub 