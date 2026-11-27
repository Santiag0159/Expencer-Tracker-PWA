import "../styles/HomeScreen.css";
import NewExpenseModal from '../components/NewExpenseModal';
import React, { useState } from 'react';

const HomeScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <button className="boton-primario" onClick={() => setIsModalOpen(true)}>
                Agregar Gasto
                </button>
                <button className="boton-secundario">Historial</button>
            </nav>
            </section>

            <NewExpenseModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </main>
    );
};
export default HomeScreen;
