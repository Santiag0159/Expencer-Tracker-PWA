import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ExpensesScreen from '../pages/ExpensesScreen'
import MainLayout from '../layouts/MainLayout'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/expenses" replace />} />
          <Route path="/expenses" element={<ExpensesScreen />} />
          <Route path="/expenses/:id" element={<ExpensesScreen />} />
          <Route path="*" element={<Navigate to="/expenses" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
