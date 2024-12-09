const button = {
  padding: "10px 16px",
  backgroundColor: "#34724A",
  color: "#fff",
  border: "1px solid #34724A",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "500",
};

function Button({ children, onClick, type }) {
  return (
    <button type={type} style={button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
