import "../styles/Form.css";

function FormStyle({ children, onSubmit }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default FormStyle;
