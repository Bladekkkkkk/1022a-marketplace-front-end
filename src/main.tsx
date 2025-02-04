import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
import AlterarProduto from './componentes/alterarusuario.tsx/AlterarProduto.tsx';  // Corrigido caminho
import AlterarUsuario from './componentes/alterarusuario.tsx/AlterarUsuario.tsx';  // Corrigido caminho
import CadastroUsuario from './componentes/cadastroproduto/CadastroUsuario.tsx'; // Importando CadastroUsuario
import Header from './componentes/header/Header.tsx';

// Layout Comum para o Header
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/produtos",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/cadastro-produto",
    element: <Layout><CadastroProduto /></Layout>,
  },
  {
    path: "/usuarios",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/alterar-produto/:id",
    element: <Layout><AlterarProduto /></Layout>,
  },
  {
    path: "/alterar-usuario/:id",
    element: <Layout><AlterarUsuario /></Layout>,
  },
  {
    path: "/cadastro-usuario", // Nova rota para Cadastro de Usuário
    element: <Layout><CadastroUsuario /></Layout>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
