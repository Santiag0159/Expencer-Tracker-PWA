import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallBanner() {
  const { canInstall, install } = usePWAInstall();

  if (!canInstall) return null;

  return (
    <div style={{
      position: "fixed", bottom: 16, left: 16, right: 16,
      background: "#4f46e5", color: "#fff", padding: 12,
      borderRadius: 12, display: "flex",
      justifyContent: "space-between", alignItems: "center",
    }}>
      <span>Instalá Expense Tracker en tu dispositivo</span>
      <button onClick={install}>Instalar app</button>
    </div>
  );
}