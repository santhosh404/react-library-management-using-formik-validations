import React, { useEffect, useState } from 'react'
import { Box, Button, Card, FormLabel, Heading, Image, Input, Stack, Spinner, Textarea, IconButton } from '@chakra-ui/react'
import { useAuthors } from '../../contexts/AuthorContext';
import { AddIcon } from '@chakra-ui/icons';

export default function AuthorForm({ authorFormik, authorId, isEditPage, userInputs, setUserInputs }) {


    //Getting the context
    const { loading, setLoading, authorDetail, setAuthorDetail, getAuthor } = useAuthors()


    //Calling getSingleAuthor api
    useEffect(() => {
        //If the page is create author then we don't need to call the api
        if (authorId) {
            getAuthor(authorId)
        }
    }, [authorId])

    // Update userInputs when userDetail is fetched or when isEditPage changes
    useEffect(() => {
        if (isEditPage && authorDetail) {
            setUserInputs({
                name: authorDetail.name || '',
                username: authorDetail.username || '',
                short_biography: authorDetail.short_biography || '',
                birth_date: authorDetail.birth_date || '',
                famous_books: authorDetail.famous_books || '',
                no_of_books_written: authorDetail.no_of_books_written || '',
            });
        }
    }, [isEditPage, authorDetail]);

    return (
        <>
            {
                loading ? <div className='flex justify-center my-10 items-center gap-3'>
                    <Spinner />
                    <small>Loading author detail</small>
                </div> :
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        {/* Personal Details Card */}
                        <Card className='p-5 w-full'>
                            <Stack spacing={4}>
                                <h5 className='my-5 text-[20px] font-[800]'>Basic Details</h5>

                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className='w-full'>
                                        <FormLabel>Name <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="Brad"
                                            value={authorFormik.values.name}
                                            name='name'
                                            onChange={authorFormik.handleChange}
                                            onBlur={authorFormik.handleBlur}
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, name: e.target.value }))}
                                        />
                                        {
                                            authorFormik.touched.name && authorFormik.errors.name && (
                                                <small className='text-[red]'>
                                                    {authorFormik.errors.name}
                                                </small>
                                            )
                                        }
                                    </Box>
                                    <Box className='w-full'>
                                        <FormLabel>Username <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="braddy"
                                            value={authorFormik.values.username}
                                            name='username'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, username: e.target.value }))}
                                            onChange={authorFormik.handleChange}
                                            onBlur={authorFormik.handleBlur}
                                        />
                                        {
                                            authorFormik.touched.username && authorFormik.errors.username && (
                                                <small className='text-[red]'>
                                                    {authorFormik.errors.username}
                                                </small>
                                            )
                                        }
                                    </Box>
                                </div>

                                <Box className='w-full'>
                                    <FormLabel>Short Biography <span className='text-[red]'>*</span></FormLabel>
                                    <Textarea
                                        placeholder="Type short biography of author"
                                        value={authorFormik.values.short_biography}
                                        name='short_biography'
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, username: e.target.value }))}
                                        onChange={authorFormik.handleChange}
                                        onBlur={authorFormik.handleBlur}
                                    />
                                    {
                                        authorFormik.touched.short_biography && authorFormik.errors.short_biography && (
                                            <small className='text-[red]'>
                                                {authorFormik.errors.short_biography}
                                            </small>
                                        )
                                    }
                                </Box>


                                <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
                                    <Box className="w-full">
                                        <FormLabel>Date of Birth <span className='text-[red]'>*</span></FormLabel>
                                        <Input
                                            placeholder="Kulas Light"
                                            value={authorFormik.values.birth_date}
                                            name='birth_date'
                                            type='date'
                                            // onChange={(e) => setUserInputs(prev => ({ ...prev, address: { ...prev.address, street: e.target.value } }))}
                                            onChange={authorFormik.handleChange}
                                            onBlur={authorFormik.handleBlur}
                                        />
                                        {
                                            authorFormik.touched.birth_date && authorFormik.errors.birth_date && (
                                                <small className='text-[red]'>
                                                    {authorFormik.errors.birth_date}
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
                                <Box className="w-full">
                                   
                                    <FormLabel>Famous Books <span className='text-[red]'>*</span></FormLabel>
                                    <Input
                                        placeholder="Bible, Alchemist, Art of Living"
                                        value={authorFormik.values.famous_books}
                                        name='famous_books'
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, email: e.target.value }))}
                                        onChange={authorFormik.handleChange}
                                        onBlur={authorFormik.handleBlur}
                                    />
                                    {
                                        authorFormik.touched.famous_books && authorFormik.errors.famous_books && (
                                            <small className='text-[red]'>
                                                {authorFormik.errors.famous_books}
                                            </small>
                                        )
                                    }
                                </Box>
                                <Box className="w-full">
                                    <FormLabel>No of Books Written <span className='text-[red]'>*</span></FormLabel>
                                    <Input
                                        placeholder="34"
                                        value={authorFormik.values.no_of_books_written}
                                        name='no_of_books_written'
                                        // onChange={(e) => setUserInputs(prev => ({ ...prev, phone: e.target.value }))}
                                        onChange={authorFormik.handleChange}
                                        onBlur={authorFormik.handleBlur}
                                    />
                                    {
                                        authorFormik.touched.no_of_books_written && authorFormik.errors.no_of_books_written && (
                                            <small className='text-[red]'>
                                                {authorFormik.errors.no_of_books_written}
                                            </small>
                                        )
                                    }
                                </Box>
                            </Stack>
                        </Card>
                    </div>

            }

        </>
    )
}