import React from 'react'
import Header from './Header/Header'
import MainNavi from './MainNavi/MainNavi'
import './App.css'

const App = ({children}) => {
    return (
      <div>
        <Header />
        <MainNavi />
        {children}
      </div>
    )
}

export default App;