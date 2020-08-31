import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Order extends React.Component {
  render() {
    const { order_details, products_by_code } = this.props
    const first_order_detail = order_details[0]
    const status = {
      STARTED: 'Iniciada',
      PLACED: 'Ordenada',
      IN_TRANSIT: 'En camino',
      ARRIVED: 'En puerta!',
      DELIVERED: 'Recibida',
      CANCELED_BY_CUSTOMER: 'Cancelada por el cliente',
      CANCELED_BY_DELIVERER: 'Cancelada por el proveedor',
    }
    return (
      <Style>
        <div className="header">{status[first_order_detail.status]}</div>
        <div className="content">
          <div className="info">
            <div>#{first_order_detail.id}</div>
            {order_details.map(detail => {
              const product = products_by_code[detail.product_code]
              return (
                <div key={detail.id}>
                  <div>{detail.product_name}</div>
                  <div>
                    {detail.product_quantity} {product.quantity_type} {product.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Style>
    )
  }
}
