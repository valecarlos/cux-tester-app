var React = require('react');

class Settings extends React.Component{
  render(){
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

            </div>
          </div>
          <div className="form-section">
            <div className="label-column">
              <h4>Tu nombre completo</h4>
            </div>
            <div className="info-column">

            </div>
          </div>
          <div className="form-section">
            <div className="label-column">
              <h4>Tu experiencia con computadores</h4>
            </div>
            <div className="info-column">

            </div>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = Settings;