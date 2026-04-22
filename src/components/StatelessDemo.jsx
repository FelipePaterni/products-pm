function Welcome(props) {
  return <h3>Olá, {props.name}</h3>;
}

export default function StatelessDemo() {
  return (
    <div className="demo-box">
      <Welcome name="Tadeu" />
      <p>Este componente não possui estado interno.</p>
    </div>
  );
}
