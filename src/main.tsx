import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto.tsx';
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
    path: "/alterar-produto/:id",
    element: <><Header/><AlterarProduto/></>,
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
