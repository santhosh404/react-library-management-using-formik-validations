import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAuthor, getAllAuthors, getSingleAuthor } from "../services/AuthorService";


const AuthorContext = createContext();


export default function AuthorProvider({children}) {

    //useState hooks
    const [loading, setLoading] = useState(false)
    const [deleteBtnLoading, setDeleteBtnLoading] = useState(false)
    const [allAuthors, setAllAuthors] = useState([])
    const [authorDetail, setAuthorDetail] = useState({})

    //useNavigate hook
    const navigate = useNavigate()

    //Toast hook
    const toast = useToast()


    const getAuthors = async () => {
        setLoading(true)
        try {
            const response = await getAllAuthors();
            if(response) {
                setLoading(false)
                setAllAuthors(response)
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
        getAuthors()
    }, [])




    //Function to get the user detail based on id
    const getAuthor = async (id) => {
        setLoading(true)

        try {
            const response = await getSingleAuthor(id);
            if (response) {
                setAuthorDetail(response)
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
            const response = await deleteAuthor(id);
            if(response) {
                setDeleteBtnLoading(false)
                toast({
                    title: 'Author Deleted!',
                    description: 'Author has been removed from the library!',
                    status: 'success',
                    isClosable: true,
                    duration: 2000
                })
                navigate('/authors')

                //Calling all the books after deleting
                getAuthors()
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
        <AuthorContext.Provider value={{ allAuthors, setAllAuthors, loading, setLoading, toast, handleDelete, getAuthors, authorDetail, setAuthorDetail, getAuthor, deleteBtnLoading }}>
            {children}
        </AuthorContext.Provider>
    )
}


export const useAuthors = () => useContext(AuthorContext)