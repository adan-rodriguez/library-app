import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import BookList from "./pages/BookList";
// import BookDetails from "./pages/BookDetails";
// import Form from "./components/Form";
// import NotFound404 from "./pages/NotFound404";

// const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const BookList = lazy(() => import("./pages/BookList"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const Form = lazy(() => import("./components/Form"));
const NotFound404 = lazy(() => import("./pages/NotFound404"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="books"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BookList />
            </Suspense>
          }
        >
          <Route
            path="add-book"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Form />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="books/:bookId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BookDetails />
            </Suspense>
          }
        >
          <Route
            path="edit-book"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Form />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound404 />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
