import React from 'react'
import { Router } from '@reach/router'
import Orders from '../components/orders'

const App = () => (
  <Router>
    <Orders path="/app/orders" />
  </Router>
)

export default App
