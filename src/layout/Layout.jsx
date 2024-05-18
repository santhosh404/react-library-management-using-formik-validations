import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Appcontent from '../components/AppContent'

export default function Layout() {
    return (
        <>
            <Topbar />
            <div className='flex w-full'>
                <Sidebar />
                <Appcontent />
            </div>
        </>
    )
}
