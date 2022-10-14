import { Route, Routes } from "react-router-dom";
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";
import DetailsBook from "./pages/DetailsBook";
import Layout from "./Layout";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<BooksList />}>
          <Route path="add-book" element={<Form />} />
        </Route>
        <Route path="books/:bookId" element={<DetailsBook />}>
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
