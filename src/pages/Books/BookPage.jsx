import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Heading, IconButton, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBooks } from '../../contexts/BookContext';
import BookForm from '../../components/book-components/BookForm';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addBook, updateBook } from '../../services/BookService';

export default function BookPage() {

  const { id } = useParams();
  const navigate = useNavigate()

  const [isEditPage, setIsEditPage] = useState(false)

  //State to handle button loading 
  const [btnLoading, setBtnLoading] = useState(false)

  //Getting the contexts
  const { handleDelete, toast, getBooks, deleteBtnLoading } = useBooks()

  // State to store user inputs
  const [userInputs, setUserInputs] = useState({
    title: '',
    description: '',
    author: '',
    isbn_number: '',
    publication_date: '',
    genere: '',
    rating: '',
    no_of_rating: '',
    no_of_pages: ''
    
  });


  //Checking whelther the page is edit page or create page
  useEffect(() => {
    if (id) {
      setIsEditPage(true)
    }
  }, [])


  //Validation schema
  const bookValidation = Yup.object().shape({
    title: Yup.string().required('Book title is required!'),
    description: Yup.string().min(100, 'Description should be more than 100 words!').required('Book description is required!'),
    author: Yup.string().required('Book author name is required!'),
    isbn_number: Yup.string().required('ISBN number is required!').matches(/^978-3-16-148410-0$/, 'ISBN must be in the format 978-3-16-148410-0'),
    publication_date: Yup.string().required('Published date is required!'),
    genere: Yup.string().required('Genere is required!'),
    rating: Yup.number().required('Rating is required').max(5, 'Rating must be less than or equal to 5'),
    no_of_rating: Yup.number().required('No of rating is required'),
    no_of_pages: Yup.number().required('No of pages is required')
  });

  //Creating the book formik using useFormik hook
  const bookFormik = useFormik({
    initialValues: userInputs,
    validationSchema: bookValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setBtnLoading(true)
      try {

        const response = isEditPage ? await updateBook(id, values) : await addBook(values);
        if (response) {
          setBtnLoading(false)
          toast({
            title: `Book ${isEditPage ? 'Updated' : 'Created'}`,
            description: `Success!, We have ${isEditPage ? 'Updated' : 'Created'} the requested book for you!`,
            status: "success",
            duration: 3000,
            isClosable: true
          })
          navigate('/books')

          //Calling the books list api
          getBooks();
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
    <form onSubmit={bookFormik.handleSubmit}>
      <div className='flex flex-col gap-5 justify-center my-10 w-full'>
        <div className='flex justify-center md:justify-between flex-wrap gap-5'>
          <div className='flex items-center flex-wrap gap-5'>
            <IconButton icon={<ArrowBackIcon />} onClick={() => {
              navigate('/books');
              getBooks();
            }} />
            <h1 className='text-[35px] font-[800]'>{isEditPage ? "Edit or Delete Book" : "Create Book"}</h1>
          </div>
          <div className='flex items-center flex-wrap md:flex-nowrap gap-5'>
            <Button colorScheme="twitter" size="md" leftIcon={(!btnLoading && isEditPage) && <EditIcon />} type='submit' className='flex items-center gap-2'>{btnLoading && <Spinner size={'sm'} />}{isEditPage ? " Update" : " Save"}</Button>
            {isEditPage && <Button colorScheme='red' leftIcon={(!deleteBtnLoading && isEditPage) && <DeleteIcon />} onClick={() => handleDelete(id)} className='flex gap-2 items-center'>{deleteBtnLoading && <Spinner size='sm' />}Delete book</Button>}

          </div>
        </div>

        <BookForm
          userId={id}
          isEditPage={isEditPage}
          userInputs={userInputs}
          setUserInputs={setUserInputs}
          bookFormik={bookFormik}
        />
      </div>
    </form>
  )
}
