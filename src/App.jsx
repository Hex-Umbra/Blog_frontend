import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrowseArticles from "./pages/BrowseArticles";
import Navbar from "./components/Navbar";
import ShowArticle from "./pages/ShowArticle";
import NewArticle from "./pages/NewArticle";
import NotFound from "./pages/NotFound";
import UpdateArticle from "./pages/UpdateArticle";
import { RemoveScrollBar } from "react-remove-scroll-bar";

function App() {
  return (
    <SnackbarProvider>
      <RemoveScrollBar />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<BrowseArticles />}></Route>
          <Route path="/articles/:id" element={<ShowArticle />}></Route>
          <Route path="/articles/new" element={<NewArticle />}></Route>
          <Route path="/articles/new" element={<UpdateArticle />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
