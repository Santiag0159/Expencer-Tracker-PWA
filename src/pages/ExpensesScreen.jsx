import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExpenseCard from '../components/ExpenseCard'
import CategoryBadge from '../components/CategoryBadge'
import NewExpenseModal from '../components/NewExpenseModal'
import { useExpenses } from '../context/ExpensesContext'
import { getCategoryIcon } from '../data/categories'

const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function ExpensesScreen() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { expenses } = useExpenses()

  const expense = id
    ? expenses.find((item) => item.id === id)
    : undefined
  const total = expenses.reduce((sum, item) => sum + item.amount, 0)

  if (id && !expense) {
    return (
      <section className="not-found" aria-labelledby="expense-not-found">
        <h1 id="expense-not-found">No encontramos ese gasto</h1>
        <p>Es posible que el gasto ya no exista o que el enlace no sea válido.</p>
        <button
          className="back-button"
          type="button"
          onClick={() => navigate(-1)}
        >
          <span aria-hidden="true">←</span>
          Volver a la lista de gastos
        </button>
      </section>
    )
  }

  if (expense) {
    return (
      <section aria-labelledby="expense-detail-title">
        <button className="back-button" type="button" onClick={() => navigate(-1)}>
          <span aria-hidden="true">←</span>
          Volver
        </button>
        <article className="detail-card">
          <header className="detail-overview">
            <span className="expense-icon" aria-hidden="true">
              {getCategoryIcon(expense.category)}
            </span>
            <div>
              <h1 id="expense-detail-title">{expense.description}</h1>
              <p className="detail-amount">
                {currencyFormatter.format(expense.amount)}
              </p>
            </div>
          </header>
          <dl className="detail-fields">
            <div className="detail-field">
              <dt>Categoría</dt>
              <dd>
                <CategoryBadge>{expense.category}</CategoryBadge>
              </dd>
            </div>
            <div className="detail-field">
              <dt>Fecha</dt>
              <dd>
                {dateFormatter.format(new Date(`${expense.date}T00:00:00`))}
              </dd>
            </div>
            <div className="detail-field detail-notes">
              <dt>Notas</dt>
              <dd>{expense.notes || 'Sin notas'}</dd>
            </div>
          </dl>
        </article>
      </section>
    )
  }

  return (
    <section aria-labelledby="expenses-title">
      <div className="page-heading">
        <p className="eyebrow">Tu actividad</p>
        <h1 id="expenses-title">Gastos recientes</h1>
        <p className="page-subtitle">
          {expenses.length} gastos · {currencyFormatter.format(total)} en total
        </p>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          style={{
            marginTop: 12,
            minHeight: 44,
            padding: '0 16px',
            backgroundColor: '#2a514b',
            color: '#ffffff',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          + Nuevo Gasto
        </button>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No hay gastos registrados todavía.</p>
          <p>Tocá "+ Nuevo Gasto" para cargar tu primer movimiento.</p>
        </div>
      ) : (
        <ul className="expense-list" aria-label="Lista de gastos">
          {expenses.map((item) => (
            <li key={item.id}>
              <ExpenseCard expense={item} />
            </li>
          ))}
        </ul>
      )}

      <NewExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

export default ExpensesScreen