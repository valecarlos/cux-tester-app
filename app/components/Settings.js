var React = require('react');
var PropTypes = require('prop-types');

function LabelCheck(props){
  return(
    <div style={{display: "inline-block", width: '25%'}}>
      <input className="settingsCheck" id={props.id} type={props.type} name={props.groupName}/>
      <label htmlFor={props.id}>
        <span className="check-tag"></span>
        {props.children}
      </label>
    </div>
  )
}

LabelCheck.propTypes = {
  id: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox','radio']),
}

class Settings extends React.Component{
  render(){
  const devices = [
    {deviceName : "celular", img :"http://placehold.it/100x100", text: "Celular"},
    {deviceName : "tablet", img :"http://placehold.it/100x100", text: "Tablet"},
    {deviceName : "laptop", img :"http://placehold.it/100x100", text: "Laptop"},
    {deviceName : "desktop", img :"http://placehold.it/100x100", text: "Pc de escritorio"},
  ]
  const experienceLevels = [
    {expName : "Principiante", text: "Pido ayuda de forma frecuente al usar el computador"},
    {expName : "Intermedio", text: "Ocasionalmente pido ayuda cuanto utilizo un computador"},
    {expName : "Experto", text: "Yo soy quien ayuda y guia las personas que no saben utilizar un computador"}, 
  ];
  const genders = [
    {name :"masculino", img : "http://placehold.it/100x100"},
    {name :"femenino", img : "http://placehold.it/100x100"}
  ];
  const style = {
    route : {
      backgroundColor: "#f2f2f2",
      padding: "20px"
    },
    form : {
      margin: "auto",
      maxWidth: "1100px"
    }
  }
    return(
      <div className="route-wrapper" style={style.route}>
        <form style={style.form}>
          <h1>Cuéntanos sobre tus preferencias</h1>
          <p>Nosotros usamos esta información para poder enviarte los tests que prefieras y se ajusten a tu perfil.
            las empresas solo reciben información demográfica de nuestros usuarios, pero nunca información personal como tu nombre
            o tu dirección de correo electrónico.
          </p>
          <div className="form-section">
            <div className="label-column">
              <h4>Selecciona la plataforma en la cual puedes realizar tests</h4>
              <p>Selecciona uno o varios dispositivos que uses de forma regular</p>
            </div>
            <div className="info-column">
              {devices.map((device) =>
                <LabelCheck key={device.deviceName} id={device.deviceName} type="checkbox" groupName="devices">
                  <img src={device.img} alt={device.deviceName}/>
                  <div>
                    {device.text}
                  </div>
                </LabelCheck>
              )}
            </div>
          </div>
          <div className="form-section">
            <div className="label-column">
              <h4>Tu nombre completo</h4>
            </div>
            <div className="info-column">
              <div>
                <input type="text" placeholder="Nombres"/>
              </div>
              <div>
                <input type="text" placeholder="Apellidos"/>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="label-column">
              <h4>Tu experiencia con computadores</h4>
            </div>
            <div className="info-column">
              {experienceLevels.map((level) => 
                <LabelCheck key={level.expName} id={level.expName} type="radio" groupName="expLevels">
                  <div>
                    {level.expName}
                  </div>
                  <div>
                    {level.text}
                  </div>
                </LabelCheck>
              )}
            </div>
          </div>

          <div className="form-section">
            <div className="label-column">
              <h4>Ubicación</h4>
              
            </div>
            <div className="info-column">

            </div>
          </div>

          <div className="form-section">
            <div className="label-column">
              <h4>Sexo</h4>
              
            </div>
            <div className="info-column">
              {genders.map( (gender) => 
                <LabelCheck key={gender.name} id={gender.name} type="radio" groupName="gender">
                  <div>
                    <img src={gender.img} alt={gender.name}/>
                  </div>
                </LabelCheck>
              )}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = Settings;