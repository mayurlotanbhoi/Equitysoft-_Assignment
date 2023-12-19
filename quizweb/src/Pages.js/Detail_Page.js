import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import medal from "../assets/medal.png"
import useFetch from '../Hooks/useFetch'
import { apikey, main_api, token } from '../constaint'

export default function Detail_Page() {
    const [activeIndex, setActiveIndex] = useState('')
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const greadId = searchParams.get('greadId');
    const { data, loading, error } = useFetch(`${main_api}/api/subject/subject_get?course_id=${greadId}&apikey=${apikey}&token=${token}`)
    console.log(data)




    return (
        <div className='detail_page d-flex flex-column justify-content-center align-items-center ' style={{ width: "100vw", height: "100%", }}>
            <div className='container  d-flex align-items-center justify-content-center w-100  ' style={{ height: "100vh" }}>
                <div className=' ' >
                    <h1 className='fw-bolder text-white mb-3' style={{ fontSize: "50px" }}>Engineering Courses</h1>
                    <p className=' text-white w-50'>kick start or accelerate your career our live boot camp. Create a series of studies and star new Learning during boot camp.</p>
                    <Link className='btn  Enroll' to={``} style={{ width: "100px" }}>Enroll now</Link>
                </div>

                <div className=' '>
                    <div className='detail-gread-card  d-flex align-items-center flex-column p-5 mt-5 '  >
                        <img src={medal} alt='medal img' style={{ width: "230px" }} />
                        <h1 className=' text-white fw-bold' >{data?.r[0].name.toUpperCase()}
                        </h1>
                    </div>
                </div>
            </div>

            <div className=' container w-100 h-100 mb-5'>

                {data?.r[0]?.subject.map((item, index) => {
                    return <>
                        <div className=' card  pt-3 pb-3 ps-5 pe-5 mt-3' onClick={() => setActiveIndex(index)}>
                            <div className=' d-flex'>
                                {activeIndex === index ? <i className="bi bi-caret-down-fill"></i> : <i class="bi bi-caret-left-fill"></i>}
                                <span className=' ms-4 bg-body-secondary text-center' src='#' style={{ width: "30px", height: "30px", borderRadius: "50%" }} >{item.subject_name.slice(0, 1)}</span>
                                <h5 className=' ms-2'>{item.subject_name}</h5>
                            </div>

                            <div className={` flex-column align-items-center justify-content-center ${activeIndex === index ? "d-flex" : "d-none"}`}>
                                <div className='  rounded-2 p-2 ' style={{ border: "1px solid black", width: "85%" }}>
                                    <div className='w-100'>
                                        {item.Topics.map((topic, indexx) => {
                                            console.log(topic)
                                            return <>
                                                <div className=' d-flex'>

                                                    <h5 className=' ms-2'>{topic.topic_name}</h5>
                                                </div>
                                                {topic.quizes?.map((quizes, quizesIndex) => {
                                                    console.log(quizes)
                                                    return <>
                                                        <div className='container  d-flex align-items-center justify-content-between mt-2' style={{ width: "85%" }}>
                                                            <div>

                                                                <i className="bi bi-caret-down-fill"></i>
                                                                <span className='ms-2'>{quizes.quiz_name}</span>
                                                            </div>
                                                            <Link to={`/test?quiz_id=${quizes?.id}`} className='btn start-btn d-flex align-items-center ps-3 pe-3'>
                                                                <i class="bi bi-caret-left-fill"></i>
                                                                <span>Start</span>
                                                            </Link>
                                                        </div>
                                                    </>
                                                })}
                                            </>
                                        })}
                                    </div>
                                </div>

                                <div className='mt-4  rounded-2 d-flex align-items-center p-2' style={{ border: "1px solid black", width: "85%", }}>
                                    <i className="bi bi-caret-down-fill "></i>
                                    <span className='ms-2 '>Weekly test</span>
                                </div>
                            </div>
                        </div>
                    </>

                }


                )}

            </div>

        </div>

    )
}
