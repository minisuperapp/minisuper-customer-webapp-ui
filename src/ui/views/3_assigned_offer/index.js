import * as offersService from 'src/services/offers/index'
import * as ordersService from 'src/services/orders/index'
import React from 'react'
import { AssignedOffer } from './AssignedOffer/index'
import { index } from 'src/ui/views/index'

export class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: {
        deliverer: {
          name: '-',
        },
      },
      total: '-',
    }
  }

  async componentDidMount() {
    const response = await offersService.assignBestOffer(
      this.props.customerLocation,
      this.props.params.product.code,
      this.props.params.quantity,
    )
    if (response && response.success) {
      const offer = response.data
      this.setState({ offer })
      this.setState({
        total: Number(offer.unitPrice) * Number(this.props.quantity),
      })
    } else {
      alert(JSON.stringify(response.errors))
    }
  }

  changeDeliverer = async () => {
    this.props.changeView(index.CHANGE_DELIVERER, {
      productCode: this.props.params.product.code,
      quantity: this.props.params.quantity,
    })
  }

  order = async () => {
    const response = await ordersService.placeOrder(
      this.props.customerLocation,
      this.state.offer.id,
      this.props.params.quantity,
    )
    if (response.success) {
      this.props.changeView(index.ORDER, {
        order: response.data,
        offer: this.state.offer,
        product: this.props.params.product
      })
    } else {
      alert(JSON.stringify(response))
    }
  }

  render() {
    return (
      <AssignedOffer
        {...this.props}
        {...this.state}
        changeDeliverer={this.changeDeliverer}
        order={this.order}
      />
    )
  }
}