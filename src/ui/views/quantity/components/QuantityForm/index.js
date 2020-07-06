import React from 'react'
import css from './styles.module.css'
import Label from 'src/ui/components/Label'
import * as images from 'src/ui/views/common/images'

export class QuantityForm extends React.Component {
  render() {
    const { selected_product, price } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(selected_product.code.toLocaleLowerCase())})`
    }
    return (
      <div className={css.container}>
        <div className={css.image} style={style}/>
        <div className={css.productName}>{selected_product.name}</div>
        <Label
          value={'$' + price + ' / ' + selected_product.quantity_type + ' (aprox.)'}/>
        <div className={css.quantity}>Cantidad</div>
        <div className={css.spinners}>
          <button className={css.subtractButton} onClick={this.props.subtractQuantity}>
            -
          </button>
          <input
            className={css.input}
            type="Text"
            pattern="[0-9]*"
            value={this.props.quantity}
            onInput={this.props.changeQuantity.bind(this)}
          />
          <button className={css.addButton} onClick={this.props.addQuantity}>
            +
          </button>
        </div>
        <div className={css.totalContainer}>
          <div className={css.total}>Total</div>
          <div className={css.total}>${this.props.total} (aprox.)</div>
        </div>
        <div className={css.buttonContainer}>
          <button className={css.backButton} onClick={this.props.goToProducts}>
            Cancelar
          </button>
          <button className={css.button} onClick={this.props.goToAssignedOffer}>
            Continuar
          </button>
        </div>
      </div>
    )
  }
}
