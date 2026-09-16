import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlansPage } from './pages/PlansPage';
import { TradersPage } from './pages/TradersPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage, RegisterPage } from './pages/AuthPages';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync with browser back/forward buttons & URL bar changes
  React.useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/plans':
        return <PlansPage navigate={navigate} />;
      case '/traders':
        return <TradersPage />;
      case '/faq':
        return <FaqPage />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/login':
        return <LoginPage navigate={navigate} />;
      case '/register':
      case '/signup':
        return <RegisterPage navigate={navigate} />;
      case '/dashboard':
        return <DashboardPage />;
      default:
        return (
          <div style={{ textAlign: 'center', padding: '100px 20px', color: '#fff' }}>
            <h1 style={{ fontSize: '3rem', color: '#ff5252', marginBottom: '16px' }}>404 - Page Not Found</h1>
            <p style={{ color: '#94a3b8', marginBottom: '24px' }}>The requested route path "{currentPath}" does not exist.</p>
            <button onClick={() => navigate('/')} className="btn btn-primary">Return to Homepage</button>
          </div>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#080c14' }}>
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
