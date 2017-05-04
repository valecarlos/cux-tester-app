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
      backgroundColor: "white",
      alignItems: "center"
    }
    return(
      <div className="header" style={style}>
        <NavLink className="logo" activeClassName='active' to='/'>
            <p>Canal</p>
            <span>UX</span>
        </NavLink>
        <LoggedInMenu />
      </div>
    )
  }
}

module.exports = Header;