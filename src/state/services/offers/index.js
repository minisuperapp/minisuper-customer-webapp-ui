import _ from 'lodash'
import * as R from 'ramda'
import * as apiRequester from '../api_requester'
import { OffersGroupedByProductRequest } from './requests/search_for_all_products'
import { SearchOffersForOneProductRequest } from './requests/search_for_one_product'
import { AssignBestOfferRequest } from './requests/assign_best'
import { DiscardAssignmentRequest } from './requests/discard_assigment'

export const getOffersByProduct = async (customerLocation) => {
  const offersRequest = new OffersGroupedByProductRequest.Builder()
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offersByProductResponse = await apiRequester.send(offersRequest)

  return _.get(offersByProductResponse, 'data.data.offersByProduct', {})
}

export const assignBestOffer = async (customerLocation, product_code, quantity) => {
  const request = new AssignBestOfferRequest.Builder()
    .withProductCode(product_code)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offers = await apiRequester.send(request)
  return offers.data
}

export const searchForOneProduct = async (customerLocation, product_code, quantity) => {
  const request = new SearchOffersForOneProductRequest.Builder()
    .withProductCode(product_code)
    .withQuantity(quantity)
    .withCustomerLocationLatitude(customerLocation.latitude)
    .withCustomerLocationLongitude(customerLocation.longitude)
    .build()
  const offers = await apiRequester.send(request)
  return offers.data
}

export const discardOfferAssigment = async (offerId) => {
  const request = new DiscardAssignmentRequest.Builder()
    .withOfferId(offerId)
    .build()
  const response = await apiRequester.send(request)

  return _.get(response, 'data', {})
}

export const addToOffersByProduct = (offersByProduct, offer) => {
  return {
    ...offersByProduct,
    [offer.product_code]: {
      ...offersByProduct[offer.product_code],
      offers: [
        ...(offersByProduct[offer.product_code]
          ? offersByProduct[offer.product_code].offers
          : []),
        offer
      ]
    }
  }
}

export const getLowestPriceByProduct = async offersByProduct => {
  return R.compose(
    R.reduce((acc, val) => {
      const id = Object.keys(val)[0]
      acc[id] = val[id]
      return acc
    }, {}),
    R.map(p => ({ [p]: offersByProduct[p].lowestUnitPrice }))
  )(Object.keys(offersByProduct))
}

export const isLowestPrice = (lowestPriceByProduct, offer) => {
  return (
    !lowestPriceByProduct[offer.product_code] ||
    Number(offer.unitPrice) < Number(lowestPriceByProduct[offer.product_code])
  )
}

export const addToLowestPriceByProduct = (lowestPriceByProduct, offer) => {
  return {
    ...lowestPriceByProduct,
    [offer.product_code]: offer.unitPrice
  }
}