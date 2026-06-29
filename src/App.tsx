import DotBackground from "./components/DotBackground";

export default function App() {
  return (
    <DotBackground>
      <div style={{ background: "transparent" }}>
        <div
          style={{
            width: "50vw",
            height: "20vh",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "40px",
            background: "#e05e5e77",
            borderRadius: "20px",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Your page content here
        </div>
      </div>
    </DotBackground>
  );
}
