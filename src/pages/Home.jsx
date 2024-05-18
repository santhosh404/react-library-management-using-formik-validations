import React from 'react'
import { useBooks } from '../contexts/BookContext'
import { useAuthors } from '../contexts/AuthorContext'
import BookCard from '../components/book-components/BookCard'
import { Button, Container, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthorCard from '../components/author-components/AuthorCard'

export default function Home() {

    const { allBooks, loading } = useBooks()
    const { allAuthors } = useAuthors()


    return (
        <Container maxW={"1300px"}>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div className='bg-[lightgray] p-5 rounded-xl w-[250px] flex justify-center flex-col items-center'>
                    <h1 className='text-[18px] '>Total Active Users</h1>
                    <h1 className='text-[40px] font-[800]'>122</h1>
                </div>
                <div className='bg-[lightgray] p-5 rounded-xl w-[250px] flex justify-center flex-col items-center'>
                    <h1 className='text-[18px] '>Total Authors</h1>
                    <h1 className='text-[40px] font-[800]'>{allAuthors?.length}</h1>
                </div>
                <div className='bg-[lightgray] p-5 rounded-xl w-[250px] flex justify-center flex-col items-center'>
                    <h1 className='text-[18px] '>Total Books</h1>
                    <h1 className='text-[40px] font-[800]'>{allBooks?.length}</h1>
                </div>
                <div className='bg-[lightgray] p-5 rounded-xl w-[250px] flex justify-center flex-col items-center'>
                    <h1 className='text-[18px] '>Total Rented Books</h1>
                    <h1 className='text-[40px] font-[800]'>90</h1>
                </div>
            </div>

            <div className='flex flex-col justify-center gap-5 my-20'>
                <div className='flex justify-center md:justify-between items-center flex-wrap'>
                    <h1 className='text-3xl font-[900]'>Top Pics</h1>
                    <Link to={`/books`}>
                        <p className='text-[#1A94DA] hover:underline'>
                            View all books
                        </p>
                    </Link>
                </div>
                {/* Books List */}
                <div className='flex justify-center items-center gap-5 flex-wrap'>
                    {
                        loading ? <div className='flex justify-center my-10 items-center gap-3'>
                            <Spinner />
                            <small>Loading books</small>
                        </div> :
                            allBooks?.length === 0 && !loading ? <p>No users exist</p> :
                                allBooks?.reverse()?.slice(0, 3)?.map((book, idx) => (
                                    <BookCard
                                        key={idx}
                                        book={book}
                                        isHome={true}
                                    />
                                ))
                    }
                </div>
            </div>

            <div className='flex flex-col justify-center gap-5 my-20'>
                <div className='flex justify-center md:justify-between items-center flex-wrap'>
                    <h1 className='text-3xl font-[900]'>Top Authors</h1>
                    <Link to={`/authors`}>
                        <p className='text-[#1A94DA] hover:underline'>
                            View all authors
                        </p>
                    </Link>
                </div>
                {/* Books List */}
                <div className='flex justify-center items-center gap-5 flex-wrap'>
                    {
                        loading ? <div className='flex justify-center my-10 items-center gap-3'>
                            <Spinner />
                            <small>Loading authors</small>
                        </div> :
                            allAuthors?.length === 0 && !loading ? <p>No users exist</p> :
                                allAuthors?.reverse()?.slice(0, 3)?.map((author, idx) => (
                                    <AuthorCard
                                        key={idx}
                                        author={author}
                                        isHome={true}
                                    />
                                ))
                    }
                </div>
            </div>


        </Container>
    )
}
