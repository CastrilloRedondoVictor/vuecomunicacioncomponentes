<template>
    <div class="menu-container">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/deportes">Deportes</router-link></li>
        <li><router-link to="/comics">Cómics</router-link></li>
        <li><router-link to="/checkbox">CheckBox</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent'
  }
  </script>
  
  <style>
  /* Contenedor principal centrado */
  .menu-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  /* Estilo de la lista */
  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
  }
  
  /* Estilo de los elementos de lista */
  .menu li {
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .menu li a {
    color: #3498db;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
  }
  
  /* Efecto hover */
  .menu li a:hover {
    background-color: #3498db;
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Efecto en enlace activo */
  .menu li a.router-link-active {
    background-color: #2c82c9;
    color: white;
    font-weight: bold;
  }
  
  </style>
  