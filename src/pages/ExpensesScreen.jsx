import { useNavigate, useParams } from 'react-router-dom'
import ExpenseCard from '../components/ExpenseCard'
import CategoryBadge from '../components/CategoryBadge'
import { mockExpenses } from '../data/mockExpenses'

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

const categoryIcons = {
  Alimentación: '🛒',
  Transporte: '⛽',
  Servicios: '🌐',
}

function ExpensesScreen() {
  const { id } = useParams()
  const navigate = useNavigate()
  const expense = id
    ? mockExpenses.find((item) => item.id === id)
    : undefined
  const total = mockExpenses.reduce((sum, expense) => sum + expense.amount, 0)

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
              {categoryIcons[expense.category] ?? '🧾'}
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
          {mockExpenses.length} gastos · {currencyFormatter.format(total)} en total
        </p>
      </div>
      <ul className="expense-list" aria-label="Lista de gastos">
        {mockExpenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseCard expense={expense} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExpensesScreen
