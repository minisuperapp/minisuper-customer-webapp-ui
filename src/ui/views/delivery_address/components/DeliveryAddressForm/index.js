import React from 'react'
import Style from './style'

export class DeliveryAddressForm extends React.Component {
  render() {
    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="A donde te entregamos?" type="text" />
        </div>
      </Style>
    )
  }
}
