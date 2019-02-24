import React from 'react'
import * as offersService from 'src/services/offers/index'
import { ChangeDeliverer } from './ChangeDeliverer/index'
import { views } from 'src/ui/views/index'

export class ChangeDelivererView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offers: [],
      location: {
        latitude: '',
        longitude: '',
      },
    }
  }
    
  goToAssignedOffer = () => {
    this.props.changeView(views.ASSIGNED_OFFER)
  }

  async componentDidMount() {
    const location = await this._getPosition()
    this.setState({
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    })
    const serviceResponse = await offersService.searchForOneProduct(
      this.state.location,
      this.props.params.productCode,
      this.props.params.quantity,
    )
    this.setState({ offers: serviceResponse.data })
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

  render() {
    return <ChangeDeliverer {...this.state}
        goToAssignedOffer={this.goToAssignedOffer}/>
  }
}
