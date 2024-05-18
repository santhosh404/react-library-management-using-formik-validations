import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  )
}
