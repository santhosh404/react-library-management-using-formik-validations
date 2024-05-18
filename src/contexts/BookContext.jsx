import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { deleteBook, getAllBooks, getSingleBook } from "../services/BookService";
import { useNavigate } from "react-router-dom";


const BookContext = createContext();


export default function BookProvider({children}) {

    //useState hooks
    const [loading, setLoading] = useState(false)
    const [deleteBtnLoading, setDeleteBtnLoading] = useState(false)
    const [allBooks, setAllBooks] = useState([])
    const [bookDetail, setBookDetail] = useState({})

    //useNavigate hook
    const navigate = useNavigate()

    //Toast hook
    const toast = useToast()


    const getBooks = async () => {
        setLoading(true)
        try {
            const response = await getAllBooks();
            if(response) {
                setLoading(false)
                setAllBooks(response)
            }
        }
        catch(err) {
            setLoading(false)
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                isClosable: true,
                duration: 2000
            })
        }
    }

    

    useEffect(() => {
        getBooks()
    }, [])




    //Function to get the user detail based on id
    const getBook = async (id) => {
        setLoading(true)

        try {
            const response = await getSingleBook(id);
            if (response) {
                setBookDetail(response)
                setLoading(false)
            }
        }
        catch (error) {
            setLoading(false);
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                isClosable: true,
                duration: 2000
            })
        }
    }


    //Function to delete the books
    const handleDelete = async (id) => {
        setDeleteBtnLoading(true)
        try {
            const response = await deleteBook(id);
            if(response) {
                setDeleteBtnLoading(false)
                toast({
                    title: 'Book Deleted!',
                    description: 'Book has been removed from the library!',
                    status: 'success',
                    isClosable: true,
                    duration: 2000
                })
                navigate('/books')

                //Calling all the books after deleting
                getBooks()
            }
        }
        catch(err) {
            setDeleteBtnLoading(false)
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                isClosable: true,
                duration: 2000
            })
        }
    }

    return (
        <BookContext.Provider value={{ allBooks, setAllBooks, loading, setLoading, toast, handleDelete, getBooks, bookDetail, setBookDetail, getBook, deleteBtnLoading }}>
            {children}
        </BookContext.Provider>
    )
}


export const useBooks = () => useContext(BookContext)