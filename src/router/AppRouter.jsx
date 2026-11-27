import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeScreen from "../pages/HomeScreen";
import ExpensesScreen from "../pages/ExpensesScreen";
import ExpenseDetailsScreen from "../pages/ExpenseDetailsScreen";
import SettingsScreen from "../pages/SettingsScreen";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/expenses" element={<ExpensesScreen />} />
          <Route path="/expenses/:id" element={<ExpenseDetailsScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;