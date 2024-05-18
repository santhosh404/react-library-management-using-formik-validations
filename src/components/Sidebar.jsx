import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';
import { useAuthors } from '../contexts/AuthorContext';


const data = [
    {
        title: "Dashboard",
        icon: <i className='fa-solid fa-house'></i>,
        path: "/"
    },
    {
        title: "Books",
        icon: <i className='fa-solid fa-book'></i>,
        path: "/books"
    },
    {
        title: "Authors",
        icon: <i className='fa-solid fa-user-tie'></i>,
        path: "/authors"
    }
]


export default function Sidebar() {

    const { getBooks } = useBooks()
    const { getAuthors } = useAuthors()

    return (
        <>
            <div className='flex flex-col items-center py-10 bg-[#5AB2FF]' style={{ minHeight: 'calc(100vh - 72px)', maxHeight: '100%', width: '300px' }}>
                {
                    data.map((d, idx) => (
                        <NavLink
                            to={d.path} key={idx}
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    backgroundColor: isActive ? "#fff" : "",
                                    color: isActive ? "#000" : "",
                                    padding: "15px 20px",
                                    borderRadius: isActive ? "2px" : "2px",
                                    width: '90%',
                                    transition: "all 0.5s ease",
                                    margin: '5px 0'
                                }
                            }}
                            className='text-[#fff] decoration-none w-full sidebar-link'
                            onClick={() => d.title === "Books" ? getBooks(): d.title === "Authors" ? getAuthors() : ''}
                        >
                            {d.icon} {d.title}
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}
