import React, { Component } from 'react';
import TopNav from './component/TopNav';
import ItemsBody from './component/ItemsBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingleItem from './component/SingleItem';
import CreateEntry from './component/CreateEntry';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ItemsBody} />
              <Route path="/new" exact component={CreateEntry} />
              <Route path="/:id" component={SingleItem} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
