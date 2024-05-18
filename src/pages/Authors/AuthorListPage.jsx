import React from 'react'
import { useAuthors } from '../../contexts/AuthorContext'
import { Button, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthorCard from '../../components/author-components/AuthorCard'

export default function AuthorListPage() {
    const { loading, allAuthors } = useAuthors()

    return (
        <>
            <div className='flex justify-center md:justify-between items-center flex-wrap'>
                <h1 className='text-3xl font-[900]'>All Authors ({allAuthors.length})</h1>
                <Link to={`/author`}>
                    <Button colorScheme='twitter'>
                        Create Author
                    </Button>
                </Link>
            </div>

            {/* Author List */}
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                {
                    loading ? <div className='flex justify-center my-10 items-center gap-3'>
                        <Spinner />
                        <small>Loading authors</small>
                    </div> :
                        allAuthors?.length === 0 && !loading ? <p>No users exist</p> :
                            allAuthors?.reverse()?.map((author, idx) => (
                                <AuthorCard
                                    key={idx}
                                    author={author}
                                />
                            ))
                }
            </div>
        </>
    )
}
