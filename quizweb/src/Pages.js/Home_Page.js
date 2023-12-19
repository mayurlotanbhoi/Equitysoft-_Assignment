import React from 'react'
import Home_Banner from '../Components.js/Home_Banner'
import Gread from '../Components.js/Gread'

export default function Home_Page() {
    return (
        <div className='home_page container-fluid' style={{ width: "100vw", height: "100%" }}>
            <Home_Banner />
            <Gread />
        </div>
    )
}
