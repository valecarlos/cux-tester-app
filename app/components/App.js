var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
//components
var Header = require('./Header');
var Nav = require('./Nav');
var Home = require('./Home');
var Settings = require('./Settings');

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/settings' component={Settings}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;