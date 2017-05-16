var React = require('react');
var PropTypes = require('prop-types');

class TestRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.test.testType}</td>
        <td>{this.props.test.device}</td>
        <td>{this.props.test.detalle}</td>
        <td>
          <input type='button' style={{color: 'white', backgroundColor: '#00A83A'}} value="Aceptar"/>
          <input type='button' style={{color: 'white', backgroundColor: '#FF0000'}} value="Declinar"/>
        </td>
        <td>{this.props.test.valor}</td>
      </tr>
    )
  }
}

class AvailableTests extends React.Component{
  render(){
    const tests = [
      {testType: 'Test de preferencia', device: 'Dispositivo móvil', detalle : 'Puede realizar el test en dispositivos Apple/Windows/Samsung', valor: 7.5},
      {testType: 'Test de navegación', device: 'Laptop', detalle : 'Visitar la página e intentar navegar a la opción que más le llame la atención', valor: 6},
      {testType: 'Test de los 5 segundos', device: 'Desktop', detalle : 'Analizar el look and feel de la página e intentar alguna acción', valor: 4},
      {testType: 'Test de los 5 segundos', device: 'Desktop', detalle : 'Analizar el look and feel de la página e intentar alguna acción', valor: 4},
      {testType: 'Test de los 5 segundos', device: 'Desktop', detalle : 'Analizar el look and feel de la página e intentar alguna acción', valor: 4}
    ];

    if(tests && tests.length > 0){
      return (
        <table className="tests-table">
          <tr>
            <th>Tipo de test</th>
            <th>Dispositivo</th>
            <th>Detalle</th>
            <th>Acción</th>
            <th>Valor</th>
          </tr>
          {tests.map((test)=>
            <TestRow test={test}/>
          )}
        </table>

      )
    } else {
      return (
        <div className="home-content-empty">
          <p>En este momento no tenemos tests disponibles para ti.</p>
          <p>Te enviaremos un mensaje de correo electrónico tan pronto haya alguno disponible.</p>
        </div>
      )
    }

  }
}

module.exports = AvailableTests;