import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthors } from '../../contexts/AuthorContext';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addAuthor, updateAuthor } from '../../services/AuthorService';
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, IconButton, Spinner } from '@chakra-ui/react';
import AuthorForm from '../../components/author-components/AuthorForm';

export default function AuthorPage() {

    const { id } = useParams();
    const navigate = useNavigate()

    const [isEditPage, setIsEditPage] = useState(false)

    //State to handle button loading 
    const [btnLoading, setBtnLoading] = useState(false)

    //Getting the contexts
    const { handleDelete, toast, getAuthors, deleteBtnLoading } = useAuthors()

    // State to store user inputs
    const [userInputs, setUserInputs] = useState({
        name: '',
        username: '',
        short_biography: '',
        birth_date: '',
        famous_books: '',
        no_of_books_written: ''
    });


    //Checking whelther the page is edit page or create page
    useEffect(() => {
        if (id) {
            setIsEditPage(true)
        }
    }, [])


    const commaSeparatedWordCountValidator = (value) => {
        if (!value) return true;
        const words = value.split(',').map(word => word.trim());
        return words.length >= 2;
      };
    

    //Validation schema
    const authorValidation = Yup.object().shape({
        name: Yup.string().required('Author name is required!'),
        username: Yup.string().required('Username is required!'),
        short_biography: Yup.string().required('Short Biography is required!').min(100, "Short biography should contain minimum 100 characters!"),
        birth_date: Yup.date().required('Date of Birth is required!'),
        famous_books: Yup.string().test('max-words', 'Minimum 2 books is required also all books must be comma seperated!', commaSeparatedWordCountValidator).required('Famous Books is required!'),
        no_of_books_written: Yup.number().required('No of Books Written is required!')
    });

    //Creating the book formik using useFormik hook
    const authorFormik = useFormik({
        initialValues: userInputs,
        validationSchema: authorValidation,
        enableReinitialize: true,
        onSubmit: async (values) => {
            setBtnLoading(true)
            try {

                const response = isEditPage ? await updateAuthor(id, values) : await addAuthor(values);
                if (response) {
                    setBtnLoading(false)
                    toast({
                        title: `Author ${isEditPage ? 'Updated' : 'Created'}`,
                        description: `Success!, We have ${isEditPage ? 'Updated' : 'Created'} the requested author for you!`,
                        status: "success",
                        duration: 3000,
                        isClosable: true
                    })
                    navigate('/authors')

                    //Calling the books list api
                    getAuthors();
                }
            }

            catch (error) {
                setBtnLoading(false)
                toast({
                    title: "Error",
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true
                })
            }
        }
    })

    return (
        <form onSubmit={authorFormik.handleSubmit}>
            <div className='flex flex-col gap-5 justify-center my-10 w-full'>
                <div className='flex justify-center md:justify-between flex-wrap gap-5'>
                    <div className='flex items-center flex-wrap gap-5'>
                        <IconButton icon={<ArrowBackIcon />} onClick={() => {
                            navigate('/authors');
                            getAuthors();
                        }} />
                        <h1 className='text-[35px] font-[800]'>{isEditPage ? "Edit or Delete Author" : "Create Author"}</h1>
                    </div>
                    <div className='flex items-center flex-wrap md:flex-nowrap gap-5'>
                        <Button colorScheme="twitter" size="md" leftIcon={(!btnLoading && isEditPage) && <EditIcon />} type='submit' className='flex items-center gap-2'>{btnLoading && <Spinner size={'sm'} />}{isEditPage ? " Update" : " Save"}</Button>
                        {isEditPage && <Button colorScheme='red' leftIcon={(!deleteBtnLoading && isEditPage) && <DeleteIcon />} onClick={() => handleDelete(id)} className='flex gap-2 items-center'>{deleteBtnLoading && <Spinner size='sm' />}Delete Author</Button>}

                    </div>
                </div>

                <AuthorForm
                    authorId={id}
                    isEditPage={isEditPage}
                    userInputs={userInputs}
                    setUserInputs={setUserInputs}
                    authorFormik={authorFormik}
                />
            </div>
        </form>
    )
}
