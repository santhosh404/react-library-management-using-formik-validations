import { Button, Spinner } from '@chakra-ui/react'
import React from 'react'
import BookCard from '../../components/book-components/BookCard'
import { useBooks } from '../../contexts/BookContext'
import { Link } from 'react-router-dom'


export default function BookListPage() {

  const { loading, allBooks } = useBooks()

  return (
    <>
      <div className='flex justify-center md:justify-between items-center flex-wrap'>
        <h1 className='text-3xl font-[900]'>All Books ({allBooks.length})</h1>
        <Link to={`/book`}>
          <Button colorScheme='twitter'>
            Create Book
          </Button>
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
              allBooks?.reverse()?.map((book, idx) => (
                <BookCard
                  key={idx}
                  book={book}
                />
              ))
        }
      </div>
    </>
  )
}
