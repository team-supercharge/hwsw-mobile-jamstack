import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Attach middleware to capture every dispatch
  const enhancedDispatch = applyMiddleware(dispatch)

  return (
    <StateContext.Provider value={[state, enhancedDispatch]}>
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({}).isRequired,
  reducer: PropTypes.func.isRequired,
}

export const useStore = () => useContext(StateContext)
