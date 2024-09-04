import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import WorkPage from "./pages/WorksPage";

export default function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path="/work/:wordId" element={<WorkDetailPage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  </>
  )
}
