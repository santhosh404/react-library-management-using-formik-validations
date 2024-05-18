import React from 'react';

// Chakra ui imports
import {
    Avatar,
    Card,
    Flex,
    Box,
    CardHeader,
    Heading,
    CardBody,
    Button,
    Text,

} from '@chakra-ui/react';

import { Link } from 'react-router-dom';



export default function AuthorCard({ author, isHome }) {


    return (
        <>
            <Card maxW='sm' sx={{ borderRadius: "20px" }} borderRadius="3xl" className='authorCard cursor-pointer transform transition duration-500 hover:scale-[1.03]'>
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={author?.name} src={author?.avatar ? author?.avatar : "https://bit.ly/sage-adebayo"} />

                            <Box>
                                <Heading size='sm'>{author?.name}</Heading>
                                <Text>@{author?.username}</Text>
                            </Box>
                        </Flex>


                    </Flex>
                </CardHeader>
                <CardBody>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[14px] font-[700] my-2'>Short Biography</h3>
                        <small>(<em>Born At: </em> {author?.birth_date})</small>
                    </div>
                    <p className='biography'>
                        {author?.short_biography}
                    </p>
                    <div className='flex items-center gap-3 my-3'>
                        <p className='text-[14px] font-[700] my-2'>Famous by: </p> <p className='text-[14px] my-2'>{author?.famous_books}</p>
                    </div>
                    <div>
                        <small>{author?.no_of_books_written} Books written</small>
                    </div>
                </CardBody>

                {
                    !isHome && <Link to={`/author/${author.id}`} className='w-full'>
                        <Button colorScheme='twitter' flex='1' className='w-full' style={{ borderRadius: '0 0 1.5rem 1.5rem' }}>
                            View author
                        </Button>
                    </Link>
                }


            </Card>
            <style jsx='true'>{`
                .biography {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: justify;
                    font-size: 13px
                }
            `}</style>
        </>
    )
}