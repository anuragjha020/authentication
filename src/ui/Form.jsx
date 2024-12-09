const formStyle = {
  width: "400px",
  margin: "107px auto",
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  gap: "30px",
  borderRadius: "22px",
  border: "1px solid rgba(255, 255, 255, 0.40)",
  background: "#FEFEFF",
  fontFamily: "Plus Jakarta Sans, sans-serif",
};

function Form({ children, onSubmit }) {
  return (
    <form style={formStyle} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
