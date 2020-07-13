import { take, put, takeEvery, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { get_offers_by_product_response } from 'src/state/actions/offer_actions'
import * as offers_api from 'src/state/services/offers'
import * as types from 'src/state/actions/action_types'
import { connect } from 'src/state/api/socket'
import { get_location } from 'src/state/services/location'

export function* get_offers_by_product() {
  yield takeEvery(types.GET_OFFERS_BY_PRODUCT_REQUEST, function* (data) {
    const { customer_location } = data
    const response = yield call(offers_api.get_offers_by_product, customer_location)
    yield put(get_offers_by_product_response(response))
  })
}

export function* published_offers_listener() {
  const socket = connect()
  const location = yield call(get_location)
  socket.emit('subscribe_for_offers_updates', location, function () {})
  const chan = new eventChannel((emit) => {
    socket.on('published_offer', (offer) => {
      emit({ channel: 'published_offer', offer })
    })

    return () => {
      // remove listeners
    }
  })
  while (true) {
    let payload = yield take(chan)
    switch (payload.channel) {
      case 'published_offer':
        // yield put(set_running_step(payload.offer))
        break
    }
  }
}
