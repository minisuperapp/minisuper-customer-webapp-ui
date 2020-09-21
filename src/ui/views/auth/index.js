import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import LocationView from './location'
import Style from './style'

class Auth extends Component {
  render() {
    return (
      <Style>
        <Switch>
          <Route exact path={paths.location} component={LocationView} />
        </Switch>
      </Style>
    )
  }
}

const mapDispatchToProps = {}

export default connect(() => ({}), mapDispatchToProps)(Auth)
