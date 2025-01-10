import React from 'react'
import './App.css'
import { RobotRemoteControl } from './robot-remote-control/RobotRemoteControl'

function App() {

  return (
    <RobotRemoteControl
      move={({x, y}) => console.log('move', x, y)}
      stop={() => console.log('stop')}
    />
  )
}

export default App
