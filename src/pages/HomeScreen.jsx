import "../styles/HomeScreen.css";
import NewExpenseModal from '../components/NewExpenseModal';
import { useState } from 'react';
import { useExpenses } from '../context/ExpensesContext';

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { expenses } = useExpenses();

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
          {expenses.length === 0 && (
            <p className="empty-state">
              Todavía no tenés gastos registrados. ¡Agregá el primero!
            </p>
          )}
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