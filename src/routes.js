import AuthorListPage from "./pages/Authors/AuthorListPage";
import AuthorPage from "./pages/Authors/AuthorPage";
import Home from "./pages/Home";
import BookPage from "./pages/Books/BookPage";
import BookListPage from "./pages/Books/BookListPage";

export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/books',
        element: BookListPage
    },
    {
        path: '/book',
        element: BookPage
    },
    {
        path: '/book/:id',
        element: BookPage
    },
    {
        path: '/authors',
        element: AuthorListPage
    },
    {
        path: '/author',
        element: AuthorPage
    },
    {
        path: '/author/:id',
        element: AuthorPage
    }
]