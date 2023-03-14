export function createStore(reducer, initialState) {
  let state = initialState
  let listeners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[1]
      listener()
    }
  }
  function subscribe(listener) {
    listeners.push(listener)
  }
  return { getState, dispatch, subscribe }
}
