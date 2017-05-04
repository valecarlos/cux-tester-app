var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render(){
    return (
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Tests
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    )
  }
}

module.exports = Nav;