// TELA PRINCIPAL ONDE SERAO EXIBIDOS OS PRODUTOS

// Componentes presentes:
// - SearchBar.jsx
// - ProductList.jsx > (ProductCard.jsx)
// - Categories.jsx

import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import './App.css';


export class MainScreen extends Component {
  render() {
    return (
      <SearchBar></SearchBar>
    )
  }
}

export default MainScreen


