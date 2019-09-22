import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
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
