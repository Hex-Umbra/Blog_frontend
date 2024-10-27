import { SnackbarProvider } from "notistack";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrowseArticles from "./pages/BrowseArticles";
import Navbar from "./components/Navbar";
import ShowArticle from "./pages/ShowArticle";
import NewArticle from "./pages/NewArticle";
import NotFound from "./pages/NotFound";
import UpdateArticle from "./pages/UpdateArticle";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Access the user from your authentication context

  if (!user) {
    // If user is not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, render the children
};

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<BrowseArticles />}></Route>
          <Route path="/articles/:id" element={<ShowArticle />}></Route>
          <Route path="/articles/new" element={<NewArticle />}></Route>
          <Route path="/articles/new" element={<UpdateArticle />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
