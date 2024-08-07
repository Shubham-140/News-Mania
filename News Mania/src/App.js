import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>

          <Navbar title="NewsMania" type1="General" type2="Bussiness" type3="Technology" type4="Health" type5="Science" type6="Entertainment" type7="Sports" />

          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={12} country="in" category="general" />
            </Route>
            <Route exact path="/bussiness">
              <News key="bussiness" pageSize={12} country="in" category="bussiness" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={12} country="in" category="technology" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={12} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={12} country="in" category="science" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={12} country="in" category="entertainment" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={12} country="in" category="sports" />
            </Route>
          </Switch>

        </Router>
      </>
    )
  }
}