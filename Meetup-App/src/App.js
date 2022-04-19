import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
