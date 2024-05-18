import React, { useEffect, useState } from 'react'
import { Box, Button, Card, FormLabel, Heading, Image, Input, Stack, Spinner, Textarea } from '@chakra-ui/react'
import { useBooks } from '../../contexts/BookContext';

export default function BookForm({ bookFormik, userId, isEditPage, userInputs, setUserInputs }) {


    //Getting the context
    const { loading, setLoading, bookDetail, setBookDetail, getBook } = useBooks()


    //Calling getSingleUserApi
    useEffect(() => {
        //If the page is create user then we don't need to call the api
        if (userId) {
            getBook(userId)
        }
    }, [userId])

    // Update userInputs when userDetail is fetched or when isEditPage changes
    useEffect(() => {
        if (isEditPage && bookDetail) {
            setUserInputs({
                title: bookDetail.title || '',
                description: bookDetail.description || '',
                author: bookDetail.author || '',
                isbn_number: bookDetail.isbn_number || '',
                publication_date: bookDetail.publication_date || '',
                genere: bookDetail.genere || '',
                rating: bookDetail.rating || '',
                no_of_rating: bookDetail.no_of_rating || '',
                no_of_pages: bookDetail.no_of_pages || ''

            });
        }
    }, [isEditPage, bookDetail]);




    return (
        <>
            {
                loading ? <div className='flex justify-center my-10 items-center gap-3'>
                    <Spinner />
                    <small>Loading  book detail</small>
                </div> :
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        {/* Personal Details Card */}
                        <Card className='p-5 w-full'>
                            <Stack spacing={4}>
                                <h5 className='my-5 text-[20px] font-[800]'>Basic Details</h5>

                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className='w-full'>
                                        <FormLabel>Title <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="The Power of Subconcious mind"
                                            value={bookFormik.values.title}
                                            name='title'
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, name: e.target.value }))}
                                        />
                                        {
                                            bookFormik.touched.title && bookFormik.errors.title && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.title}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>
                                <Box className='w-full'>
                                    <FormLabel>Description <span className='text-[red]'>*</span></FormLabel>
                                    <Textarea
                                        placeholder="Type some description"
                                        value={bookFormik.values.description}
                                        name='description'
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, username: e.target.value }))}
                                        onChange={bookFormik.handleChange}
                                        onBlur={bookFormik.handleBlur}
                                    />
                                    {
                                        bookFormik.touched.description && bookFormik.errors.description && (
                                            <small className='text-[red]'>
                                                {bookFormik.errors.description}
                                            </small>
                                        )
                                    }
                                </Box>

                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className="w-full">
                                        <FormLabel>Author name <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="Joseph Guard"
                                            value={bookFormik.values.author}
                                            name='author'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, email: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.author && bookFormik.errors.author && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.author}
                                                </small>
                                            )
                                        }
                                    </Box>
                                    <Box className="w-full">
                                        <FormLabel>ISBN number <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="978-3-16-148410-0"
                                            value={bookFormik.values.isbn_number}
                                            name='isbn_number'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, phone: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.isbn_number && bookFormik.errors.isbn_number && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.isbn_number}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>

                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className="w-full">
                                        <FormLabel>Publication Date <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="Kulas Light"
                                            value={bookFormik.values.publication_date}
                                            name='publication_date'
                                            type='date'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, address: { ...prev.address, street: e.target.value } }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.publication_date && bookFormik.errors.publication_date && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.publication_date}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>

                            </Stack>
                        </Card>

                        {/* Company Details Card */}
                        <Card className="p-5 w-full">
                            <Stack spacing={4}>
                                <h5 className='my-5 text-[20px] font-[800]'>Additional Details</h5>
                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className="w-full">
                                        <FormLabel>Genere <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="Comedy"
                                            value={bookFormik.values.genere}
                                            name='genere'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, email: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.genere && bookFormik.errors.genere && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.genere}
                                                </small>
                                            )
                                        }
                                    </Box>
                                    <Box className="w-full">
                                        <FormLabel>Rating <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="4.5"
                                            value={bookFormik.values.rating}
                                            name='rating'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, phone: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.rating && bookFormik.errors.rating && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.rating}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>
                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className="w-full">
                                        <FormLabel>No of rating <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="44"
                                            value={bookFormik.values.no_of_rating}
                                            name='no_of_rating'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, email: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.no_of_rating && bookFormik.errors.no_of_rating && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.no_of_rating}
                                                </small>
                                            )
                                        }
                                    </Box>
                                    <Box className="w-full">
                                        <FormLabel>No of Pages <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="122"
                                            value={bookFormik.values.no_of_pages}
                                            name='no_of_pages'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, phone: e.target.value }))}
                                            onChange={bookFormik.handleChange}
                                            onBlur={bookFormik.handleBlur}
                                        />
                                        {
                                            bookFormik.touched.no_of_pages && bookFormik.errors.no_of_pages && (
                                                <small className='text-[red]'>
                                                    {bookFormik.errors.no_of_pages}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>
                            </Stack>
                        </Card>
                    </div>

            }

        </>
    )
}