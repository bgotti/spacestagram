import React, { useState, useEffect } from "react"
import {AppProvider} from '@shopify/polaris';
import HttpClient from "./HttpClient"
import Header from './components/Header'
import CardComponent from './components/CardComponent'
import './App.css';


const App = () => {
  const [items, setItems] = useState({})

  useEffect(() => {
    HttpClient.getItem().then(itemData => {
      setItems(itemData.data)
    })
  }, [])

  return (

      <AppProvider className="App">
        <div className="App-header">
          <Header/>
          <CardComponent item={items}/>
          <CardComponent item={items}/>
          <CardComponent item={items}/>
          <CardComponent item={items}/>
          <CardComponent item={items}/>
          <CardComponent item={items}/>
        </div>
      </AppProvider>
  )
}

export default App