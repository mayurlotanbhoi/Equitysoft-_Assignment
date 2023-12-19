import React from 'react'
import { Link } from 'react-router-dom'

export default function Test_complet_Page() {
    return (
        <div className=' bg-body-secondary d-flex justify-content-center align-items-center' style={{ width: "100vw", height: "100vh" }}>
            <div>
                <img className='d-block' src='https://img.freepik.com/free-vector/giant-checklist_23-2148140048.jpg?t=st=1702982385~exp=1702982985~hmac=31b6d27e05dc235faf1596d0f5b32e4a06831631971a506de1d492edc62325c5' />
                <Link className='btn text-white d-block bg-primary' to={"/"}>HOME</Link>
            </div>


        </div>
    )
}
