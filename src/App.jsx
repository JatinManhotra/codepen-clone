import React from 'react'
import NewHeader from './components/NewHeader'
import NewCode from './components/NewCode'
import NewResult from './components/NewResult'
import NewCodepenState from './context/NewContext'
const App = () => {
  return (
    <>
    <NewCodepenState>
    <NewHeader/>
    <NewCode/>
    <NewResult/>
    </NewCodepenState>
    </>
  )
}

export default App