import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useExpenses } from '../context/ExpensesContext';
import '../styles/NewExpenseModal.css';

const DEFAULT_CATEGORIES = [
  'Alimentación',
  'Transporte',
  'Servicios',
  'Ocio',
  'Salud',
  'Otros',
];

export default function NewExpenseModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const { addExpense } = useExpenses();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const resetAndClose = () => {
    setDescription('');
    setAmount('');
    setCategory('');
    setError('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedDescription = description.trim();
    if (!trimmedDescription) {
      setError('El nombre del gasto no puede estar vacío.');
      return;
    }

    const parsedAmount = Number(amount.replace(',', '.'));
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError('El monto debe ser un número mayor a cero.');
      return;
    }

    if (!category) {
      setError('Seleccioná una categoría.');
      return;
    }

    addExpense({
      description: trimmedDescription,
      amount: parsedAmount,
      category,
      date: new Date().toISOString().split('T')[0],
      notes: '',
    });

    resetAndClose();
  };

  return createPortal(
    <dialog ref={dialogRef} className="bottom-sheet" onCancel={resetAndClose}>
      <form onSubmit={handleSubmit} className="expense-form" noValidate>
        <h2>Nuevo Gasto</h2>

        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="expenseName">Nombre del gasto</label>
          <input
            type="text"
            id="expenseName"
            name="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expenseAmount">Monto</label>
          <input
            type="text"
            id="expenseAmount"
            name="amount"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expenseCategory">Categoría</label>
          <select
            id="expenseCategory"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Seleccionar...</option>
            {DEFAULT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel" onClick={resetAndClose}>
            Cancelar
          </button>
          <button type="submit" className="btn-save">
            Guardar
          </button>
        </div>
      </form>
    </dialog>,
    document.body
  );
}