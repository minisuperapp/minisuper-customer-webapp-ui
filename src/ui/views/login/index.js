import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'

class Login extends Component {
  state = {
    email: '',
    password: '',
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/register" />
    }
  }
  render() {
    return (
      <Style>
        <div className="header">Ingresa tus Datos de Acesso</div>
        <div className="body">
          <div>
            <label htmlFor="email">Email: </label>
            <input
              className="field"
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              className="field"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="buttons">
            {this.renderRedirect()}
            <div>
              <input
                type="submit"
                value="Ingresar"
                className="ok-button"
                onClick={() => {
                  this.props.login_customer_request(this.state, () => {
                    this.setState({
                      email: '',
                      password: '',
                    })
                    alert('Bienvenido!')
                  })
                }}
              />
            </div>
            <div>
              <button className="cancel-button" onClick={this.setRedirect}>
                No tengo cuenta
              </button>
            </div>
          </div>
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {
  return {
    login_succesful: state.auth.login.login_succesful,
  }
}

const mapDispatchToProps = {
  login_customer_request,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)