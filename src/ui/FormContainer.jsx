const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#F3F4F7",
  minHeight: "100vh",
  fontFamily: "Plus Jakarta Sans, sans-serif",
};

function FormContainer({ children }) {
  return <div style={formContainerStyle}>{children}</div>;
}

export default FormContainer;
