export class AssignBestOfferRequest {
  constructor(build) {
    this.body = build
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers/assign_best'
  }
  get payload() {
    return this.body
  }
  static get Builder() {
    class Builder {
      constructor() {
        this.product_code = ''
        this.quantity = ''
        this.customerLocation = {
          latitude: '',
          longitude: '',
        }
      }
      withProductCode(product_code) {
       this.product_code = product_code
       return this
      }
      withQuantity(quantity) {
       this.quantity = quantity
       return this
      }
      withCustomerLocationLatitude(latitude) {
        this.customerLocation.latitude = latitude
        return this
      }
      withCustomerLocationLongitude(longitude) {
        this.customerLocation.longitude = longitude
        return this
      }
      build() {
        return new AssignBestOfferRequest(this)
      }
    }
    return Builder
  }
}