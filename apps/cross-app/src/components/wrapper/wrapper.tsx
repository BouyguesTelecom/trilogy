export const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        gap: 16,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
      }}
    >
      {title && (
        <div
          style={{ fontWeight: "bold", textAlign: "center", marginBottom: 16 }}
        >
          {title}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </div>
  )
}
