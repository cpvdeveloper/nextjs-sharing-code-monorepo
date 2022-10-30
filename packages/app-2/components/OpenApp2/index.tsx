const linkStyle = {
  background: "royalblue",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "8px",
  fontSize: "12px",
  cursor: "pointer",
};

export default function OpenApp2() {
  return (
    <a
      href="http://localhost:3002"
      target="blank"
      rel="noreferrer"
      style={linkStyle}
    >
      Open App 2 &rarr;
    </a>
  );
}
