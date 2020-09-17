import * as types from './action_types'

export function show_alert_message(message, on_accept) {
  return { type: types.SHOW_ALERT_MESSAGE, message, on_accept }
}

export function hide_alert_message() {
  return { type: types.HIDE_ALERT_MESSAGE }
}
