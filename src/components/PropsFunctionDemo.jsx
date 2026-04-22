function FunctionSampleComponent({ name }) {
  return (
    <h3><i>{name}</i></h3>
  );
}

export default function PropsFunctionDemo() {
  return (
    <div className="demo-box">
      <FunctionSampleComponent name="Function Sample" />
      <p>As props são recebidas por parâmetro.</p>
    </div>
  );
}
