import { Link } from 'react-router-dom'
import CategoryBadge from './CategoryBadge'

const currencyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

const categoryIcons = {
  Alimentación: '🛒',
  Transporte: '⛽',
  Servicios: '🌐',
}

function ExpenseCard({ expense }) {
  return (
    <Link className="expense-card" to={`/expenses/${expense.id}`}>
      <span className="expense-icon" aria-hidden="true">
        {categoryIcons[expense.category] ?? '🧾'}
      </span>
      <span className="expense-card-copy">
        <span className="expense-card-title">{expense.description}</span>
        <span className="expense-card-meta">
          <CategoryBadge>{expense.category}</CategoryBadge>
        </span>
      </span>
      <span className="expense-card-amount">
        {currencyFormatter.format(expense.amount)}
      </span>
      <span className="expense-card-arrow" aria-hidden="true">
        ›
      </span>
    </Link>
  )
}

export default ExpenseCard
