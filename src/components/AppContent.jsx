import React from 'react'
import { routes } from '../routes'
import { Route, Routes } from 'react-router-dom'

export default function Appcontent() {
  return (
    <div className='w-full flex flex-col gap-10 px-5 my-10' style={{maxWidth: "calc(100% - 70px)", overflow: 'auto', height: 'calc(100vh - 140px)'}}>
      <Routes>
        {
          routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            )
          })}
        {/* <Route path={'/'} element={<Dashboard />} /> */}

      </Routes>
    </div>
  )
}
