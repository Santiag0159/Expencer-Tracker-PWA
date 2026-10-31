import React from 'react';
import './styles/HomeScreen.css';

const HomeScreen = () => {
    return (
        <main className="dashboard-container">
            <header className="dashboard-header">
                <h1>Expense Tracker</h1>
                <p>Bienvenido a tu gestor de gastos y resúmenes financieros</p>
            </header>

            <section className="dashboard-content">
           <article className="balance-card">
            <h2>Balance Total</h2>
            <p className="balance">$0.00</p>
            </article> 

            <nav className="dashboard-actions">
                <button className="boton-primario">Agregar Gasto</button>
                <button className="boton-secundario">Historial</button>
            </nav>
            </section>
        </main>
    );
};
export default HomeScreen;