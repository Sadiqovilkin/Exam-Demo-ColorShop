import React from 'react'
import { Outlet } from 'react-router-dom'

const ClientRoot = () => {
    return (
        <>
            <h1>header test</h1>
            <Outlet />
        </>
    )
}

export default ClientRoot
