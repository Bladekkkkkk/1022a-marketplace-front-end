import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
import AlterarProduto from './componentes/alterarusuario.tsx/AlterarProduto.tsx';
import AlterarUsuario from './componentes/alterarusuario.tsx/AlterarUsuario.tsx';
import Header from './componentes/header/Header.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><App/></>,
  },
  {
    path: "/produtos",
    element: <><Header/>< App/></>,
  },
  {
    path: "/cadastro-produto",
    element: <><Header/><CadastroProduto/></>,
  },
  {
    path: "/usuarios",
    element: <><Header/>< App/></>,
  },
  {
    path: "/alterar-produto/:id",
    element: <><Header/><AlterarProduto/></>,
  },
  {
    path: "/alterar-usuario/:id",
    element: <><Header/><AlterarUsuario/></>,
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
