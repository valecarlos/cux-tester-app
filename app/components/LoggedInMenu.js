var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class LoggedInMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuVisible : false
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }
  handleToggleMenu(event){
    console.log("should toggle that menu though")
    this.setState(function(){
      return {
        menuVisible : !this.state.menuVisible
      }
    });
  }
  render(){
    const style = {
      display: 'none'
    };
    return(
      <div className="loggedInMenu">
        <div className="menu" onClick={this.handleToggleMenu}>
          User
        </div>
        <ul style={!this.state.menuVisible ? style : {}}>
          <li>
            <NavLink activeClassName='active' to='/settings'>
              Settings
          </NavLink>
          </li>
          <li>
            Logout
          </li>
        </ul>
        
        
      </div>
    )
  }
}

module.exports = LoggedInMenu;