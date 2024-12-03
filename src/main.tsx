import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Appi from './App2.tsx'
import Appo from './front.tsx'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componenter/cadastroproduto/CadastroProduto.tsx'
import CadastroUsuario from './componenter/cadastroproduto/CadastroUsuario.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: < Appo/>,
  },
  {
    path: "/produtos",
    element: < App/>,
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto/>,
  },
  {
    path: "/usuarios",
    element: < Appi/>,
  },
  {
    path: "/cadastro-usuario",
    element: <CadastroUsuario/>,
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
