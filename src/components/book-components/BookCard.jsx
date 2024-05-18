import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BookCard({ book, isHome }) {
    return (
        <Link to={`/book/${book.id}`}>
            <Box maxW="sm" borderWidth="1px" borderRadius="3xl" overflow="hidden" className='bookCard  transform transition duration-500 hover:scale-[1.03] cursor-pointer'>
                {/* <Image src={book.image} alt={book.title} h="200px" objectFit="cover" /> */}

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <span className="inline-block bg-[#1A94DA] rounded-full px-2 py-1 text-sm font-semibold text-[#fff] mr-2">{book.genere}</span>
                    </Box>
                    <div className="flex items-center gap-2 mt-5">
                        <Text fontWeight="semibold" fontSize="xl" lineHeight="tight" isTruncated>{book.title}</Text>
                        <div><small>(<em><b>isbn: </b></em> {book.isbn_number})</small></div>
                    </div>

                    <div className="flex items-center gap-2">
                        {Array(5).fill("").map((_, i) => (
                            <StarIcon key={i} color={i < book.rating ? "yellow.400" : "gray.300"} />
                        ))}
                        <Text>({book.no_of_rating})</Text>
                    </div>

                    <Text mt="2" fontSize="sm" className="description">{book.description}</Text>

                    <Box className='flex mt-4'>
                        <Text>By <b>{book.author}</b></Text>
                    </Box>
                    <Box className='flex justify-between items-center mt-4'>
                        <Text color="gray.500" fontSize="sm">Pub At: {`${book.publication_date}`}</Text>
                        <Text color="gray.500" fontSize="sm">{book.no_of_pages} pages</Text>
                    </Box>
                </Box>
                {/* {
                    !isHome && <div className="flex justify-center">
                        <Link to={`/book/${book.id}`} className="w-full"><Button colorScheme="twitter" className="w-full" style={{ borderRadius: '0px' }}>View book</Button></Link>

                    </div>
                } */}

                <style jsx='true'>{`
                .description {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: justify;
                    margin: 20px 0px
                }
            `}</style>
            </Box>
        </Link>
    );
}
