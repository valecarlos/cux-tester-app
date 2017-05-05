var React = require('react');
var PropTypes = require('prop-types');

function SelectTestType(props){
  const style ={
      textAlign: "center",
      padding: "13px"
    }
  let testTypes = ['Test de los 5 Segundos','Test de logos','Test de comparación']
  return(
    <ul>
      {testTypes.map((testType) => 
        <li style={style}>
          {testType}
        </li>
      )}
    </ul>
  )
}

class Home extends React.Component{
  render(){
    return(
      <div className="route-wrapper">
        <div className="side-bar">
          <SelectTestType />
        </div>
        <div className="home-content">
          This is where the table should be
        </div>
      </div>
    )
  }
}

module.exports = Home;