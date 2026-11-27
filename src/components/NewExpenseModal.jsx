import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../styles/NewExpenseModal.css';

export default function NewExpenseModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  // showModal() es el método nativo de HTML5 para abrir el <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    console.log("Guardando gasto...");
    onClose();
  };

  // Renderizamos el modal en el body usando createPortal
  return createPortal(
    <dialog ref={dialogRef} className="bottom-sheet" onCancel={onClose}>
      <form onSubmit={handleSubmit} className="expense-form">
        <h2>Nuevo Gasto</h2>

        <div className="form-group">
          <label htmlFor="expenseName">Nombre del gasto</label>
          <input type="text" id="expenseName" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="expenseAmount">Monto</label>
          {/* inputmode="decimal" abre el teclado numérico en el celular */}
          <input type="text" id="expenseAmount" name="amount" inputMode="decimal" required />
        </div>

        <div className="form-group">
          <label htmlFor="expenseCategory">Categoría</label>
          <select id="expenseCategory" name="category" required>
            <option value="">Seleccionar...</option>
            <option value="comida">Comida</option>
            <option value="transporte">Transporte</option>
            <option value="ocio">Ocio</option>
          </select>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button type="submit" className="btn-save">Guardar</button>
        </div>
      </form>
    </dialog>,
    document.body
  );
}