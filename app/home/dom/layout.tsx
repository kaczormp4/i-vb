export default function DomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div style={{ backgroundColor: "lightgreen" }}>dsds</div>
      {children}
    </div>
  );
}
