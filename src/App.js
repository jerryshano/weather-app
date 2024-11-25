import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import GlobalStyles from "./styles/Globalstyles";
import CityView from "./components/CityView";

function App() {
  // const [pictures, setPictures] = useState([]);

  // const fetchPics = async (weather) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/search/photos/?query=${weather}&page=1&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       setPictures(data);
  //     }
  //   } catch (err) {
  //     console.log("unsplash error jj");
  //   }
  // };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<AppLayout />}></Route>
        <Route path="cityview" element={<CityView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
