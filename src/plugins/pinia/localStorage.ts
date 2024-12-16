import type { PiniaPluginContext } from 'pinia'

const localStoragePlugin = (context: PiniaPluginContext) => {
  const { store } = context
  // get the data
  const storedState = localStorage.getItem(store.$id)
  // init the data
  if (storedState) {
    store.$patch(JSON.parse(storedState))
  }
  // save the data
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state))
  })
}

export default localStoragePlugin
