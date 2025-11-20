import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from '../src/routes/Routes';
import AuthProvider from '../src/Context/AuthContext/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
