import Homepage from "./pages/Homepage";
import data from "./helper/data";
import "./styles/style.css";

function App() {
  return (
    <>
      <h1>ALBUMS</h1>
      <div className="container">
        {data.map((item) => (
          <Homepage photographer={item.photographer} src={item.src} />
        ))}
      </div>
    </>
  );
}

export default App;
