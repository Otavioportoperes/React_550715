import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//Importando os elementos vao ser usados
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import Error from './routes/Error/index.jsx';
import EditarProdutos from './routes/EditarProdutos/index.jsx';

//utilizando o método 'createBrowserRouter' cada objeto é uma das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/editar/produtos/:id",
        element: <EditarProdutos/>
      }
    ]
  
  }
  ])
  

  