import { Link, Outlet } from 'react-router-dom'
import "/src/styles/App.css";

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Gastos, ir a la lista">
          <span className="brand-mark" aria-hidden="true">
            $
          </span>
          <span>Mis gastos</span>
        </Link>
        <span className="header-caption">Tu resumen personal (santi viola)</span>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
      <footer className="site-footer">Una chusmeadita rapida a tus gastos (te salió cara la jodita)</footer>
    </div>
  )
}

export default MainLayout;
