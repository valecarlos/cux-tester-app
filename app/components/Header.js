var React = require('react');
var LoggedInMenu = require('./LoggedInMenu');
var NavLink = require('react-router-dom').NavLink;

class Header extends React.Component{
  render(){
    const style ={
      width : "100%",
      height: "60px",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "rgb(100,100,100)",
      alignItems: "center"
    }
    return(
      <div className="header" style={style}>
        <NavLink activeClassName='active' to='/'>
            Canal UX
        </NavLink>
        <LoggedInMenu />
      </div>
    )
  }
}

module.exports = Header;