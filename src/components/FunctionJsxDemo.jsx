const SampleComponent = function () {
  return <i>I am so custom</i>;
};

export default function FunctionJsxDemo() {
  return (
    <div className="demo-box">
      <h3><SampleComponent /> text</h3>
    </div>
  );
}
