import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import BookProvider from './contexts/BookContext.jsx'
import AuthorProvider from './contexts/AuthorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <BookProvider>
        <AuthorProvider>
          <App />
        </AuthorProvider>
      </BookProvider>
    </ChakraProvider>
  </BrowserRouter>
)
