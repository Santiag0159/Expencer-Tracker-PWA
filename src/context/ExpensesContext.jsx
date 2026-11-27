import { createContext, useContext, useState } from 'react'
import { mockExpenses } from '../data/mockExpenses'

const ExpensesContext = createContext(null)

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(mockExpenses)

  const [isLoaded] = useState(true)//True temporal

  const addExpense = (expense) => {
    const newExpense = { id: crypto.randomUUID(), ...expense }
    setExpenses((prev) => [newExpense, ...prev])
  }

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id))
  }

  return (
    <ExpensesContext.Provider
      value={{ expenses, isLoaded, addExpense, removeExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export function useExpenses() {
  const context = useContext(ExpensesContext)
  if (!context) {
    throw new Error('useExpenses debe usarse dentro de un ExpensesProvider')
  }
  return context
}