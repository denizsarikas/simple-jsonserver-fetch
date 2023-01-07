import './App.css'
import TripList from './components/TripList'
import { useState } from 'react'

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>hide trips</button>
      <button onClick={() => setShowTrips(true)}>show trips</button>
      {showTrips && <TripList /> }
    </div>
  );
}

export default App