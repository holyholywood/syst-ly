import Leftbar from "./components/organisms/Leftbar";
import Rightbar from "./components/organisms/Rightbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-mygray-5 min-h-screen w-full flex relative">
      <Leftbar />
      <Home />
      <Rightbar />
    </div>
  );
}

export default App;
