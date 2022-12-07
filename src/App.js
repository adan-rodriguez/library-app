import { Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Layout from "./Layout";
import Form from "./components/Form";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="books" element={<BookList />}>
          <Route path="add-book" element={<Form />} />
        </Route>
        <Route path="books/:bookId" element={<BookDetails />}>
          <Route path="edit-book" element={<Form />} />
        </Route>
        <Route
          path="*"
          element={<div className="not-found">Not Found 404</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
