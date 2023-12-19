import React from 'react'
import medal from "../assets/medal.png"
import { Link } from 'react-router-dom'

export default function GreadCard({ cardData, }) {
    return (
        <div className=' d-flex justify-content-around flex-wrap' >
        
            {cardData?.r.slice(0, 7).map((items, index) => (
                <div className='gread-card  d-flex align-items-center flex-column p-5 mt-5 ' key={index} >
                    <img src={medal} alt='medal img' style={{ width: "180px" }} />
                    <h5 >{items?.name.toUpperCase()
                    }</h5>
                    <Link className='btn  Enroll' to={`/gread?greadId=${items?.id}`} style={{ width: "100px" }}>Enroll now</Link>
                </div>
            ))}



        </div>

    )
}
