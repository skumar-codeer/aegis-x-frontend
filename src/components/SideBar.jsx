export default function SideBar({
  active,
  setActive,
  collapsed,
  setCollapsed
}) {
  const items = [
    { key: "Text", icon: "🧪" },
    { key: "URL", icon: "🌐" },
    { key: "Files", icon: "📎" },
    { key: "Prompt", icon: "🤖" },
    { key: "Voice", icon: "🎙️" },
    { key: "Auto", icon: "⚔️" },
    { key: "About", icon: "ℹ️" }
  ];

  return (
    <div
      style={{
        width: collapsed ? "72px" : "230px",
        background: "linear-gradient(180deg, #020617, #000000)",
        borderRight: "1px solid #1f2937",
        padding: "14px",
        transition: "width 0.3s ease",
        boxShadow: "0 0 30px rgba(0,0,0,0.6)"
      }}
    >
      {/* Toggle */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{
          cursor: "pointer",
          marginBottom: "22px",
          fontSize: "1.3rem",
          color: "#e5e7eb",
          textAlign: collapsed ? "center" : "left"
        }}
      >
        {collapsed ? "☰" : "❮"}
      </div>

      {!collapsed && (
        <h3
          style={{
            color: "#9ca3af",
            marginBottom: "18px",
            letterSpacing: "1px",
            fontSize: "0.85rem"
          }}
        >
          COMMAND MODULES
        </h3>
      )}

      {items.map((item) => {
        const isActive = active === item.key;

        return (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            style={{
              all: "unset",
              width: "100%",
              padding: "10px 12px",
              marginBottom: "10px",
              cursor: "pointer",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: collapsed ? "0" : "12px",
              justifyContent: collapsed ? "center" : "flex-start",
              background: isActive
                ? "rgba(56,189,248,0.12)"
                : "transparent",
              color: isActive ? "#38bdf8" : "#9ca3af",
              border: isActive
                ? "1px solid rgba(56,189,248,0.4)"
                : "1px solid transparent",
              boxShadow: isActive
                ? "0 0 15px rgba(56,189,248,0.45)"
                : "none",
              transition: "all 0.25s ease",
              textAlign: "left"
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
            {!collapsed && (
              <span style={{ fontSize: "0.95rem" }}>
                {item.key}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
