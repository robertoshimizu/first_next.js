// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// delete the Pet component

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
      <div>
        <SearchParams />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
