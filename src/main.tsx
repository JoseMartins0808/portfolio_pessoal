import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { Home } from '@/pages/home';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AppProvider } from './providers/appProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
      <AppProvider>
        <NavBar />
        <Home />
        <Footer />
      </AppProvider>
    </GlobalStyle>
  </React.StrictMode>
)
