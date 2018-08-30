const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The Action: ', action)
    // next is the dispatch
    const result = next(action)
    console.log('The new state is: ', store.getState())
  console.groupEnd()
  return result
}

export default logger