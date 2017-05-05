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
      menu: {
        position : "relative",
        cursor: "pointer",
        padding: "10px"
      },
      menuHeader : {
        backgroundColor: "rgb(200,200,200)",
        padding: "10px"
      },
      hidden : {display: 'none'},
      visible: {
        width: "200px",
        display: "block",
        position: "absolute",
        zIndex: 2,
        top: "100%",
        right: "50%",
        backgroundColor: "white",
        boxShadow: "0px 0px 2px 2px rgba(100,100,100,0.5)"
      }
    };
    return(
      <div className="loggedInMenu">
        <div className="menu" style={style.menu} onClick={this.handleToggleMenu}>
          <div>User</div>
          <div style={!this.state.menuVisible ? style.hidden : style.visible}>
            <div style={style.menuHeader}>
              Menu de usuario
            </div>
            <ul>
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
        </div>
        
        
      </div>
    )
  }
}

module.exports = LoggedInMenu;