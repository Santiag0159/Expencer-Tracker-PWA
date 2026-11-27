import { useParams } from "react-router-dom";

function ExpenseDetailsScreen() {
  const { id } = useParams();

  return (
    <section className="page-heading">
      <p className="eyebrow">Detalle</p>
      <h1>Detalle del gasto #{id}</h1>
      <p className="page-subtitle">Vista en construcción.</p>
    </section>
  );
}

export default ExpenseDetailsScreen;