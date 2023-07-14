import Best from "./components/best deals/Best";
import Features from "./components/features/Features";
import Items from "./components/items/Items";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Work from "./components/work/Work";
import Heat from "./components/heat/Heathot"
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Work />
      <Items />
      <Features />
      <Search />
      <Best />
      <Heat />
      <Footer />
    </div>
  );
}

export default App;
