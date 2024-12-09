import "../styles/Button.css";

function Button({ children, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
