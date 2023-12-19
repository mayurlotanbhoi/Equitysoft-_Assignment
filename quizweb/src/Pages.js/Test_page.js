import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { apikey, main_api, token } from '../constaint';

export default function Test_page() {
    const [numQue, setNumQue] = useState(1)
    const [ans, setAns] = useState([])
    const nav = useNavigate();

    const [currentQue, setCurrentQue] = useState(0);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const quizId = searchParams.get('quiz_id');
    const { data, loading, error } = useFetch(`${main_api}/api/queoption/que_option_get?quiz_id=${quizId}&apikey=${apikey}&token=${token}`)
    const { quiz_name, name, } = data?.r[0] || {}

    const previusHandeler = () => {
        if (currentQue > 0) setCurrentQue(prev => prev - 1)
    }
    const nextHandeler = () => {
        if (currentQue < data?.r?.length - 1) setCurrentQue(prev => prev + 1)
    }


    useEffect(() => {
        const lengthOFQuetions = data?.r?.length

        const quetionComplited = {
            ans: "",
            id: "",
            selectedAns: "",
            isMarked: false
        }
        setAns([])
        for (let i = 0; i < lengthOFQuetions; i++) {
            setAns(prev => [...prev, quetionComplited])
        }
        setNumQue(lengthOFQuetions)
    }, [data])
    if (loading) {
        return <div className=' test_Page ' style={{ height: "100vh" }}></div>
    }

    const quixeSubmithandeler = () => {
        alert("test Sumited Seccesfully")
        nav("/completed")
    }

    const ansSelectHandler = (id, index, selectedAns) => {
        const updatedAnswers = ans.map((ansItem, currIndex) => {
            if (index === currIndex) {
                return { ...ansItem, isMarked: true, id: index, ans: selectedAns };
            } else {
                return ansItem;
            }
        });
        setAns(updatedAnswers);
    };


    return (
        <div className=' test_Page pe-3 pb-3'>
            <div className='ms-3 pe-3' style={{ paddingTop: "8rem" }}>
                <Link to="/" className='text-white '>HOME</Link><span className='text-white '> / </span>
                <Link to="/" className='text-white '>TEST</Link>
                <div className='mt-5'>
                    <span className='me-3  fw-bold backgroundColorPrimary'><i className="bi bi-journal-text"></i> No. of Questions {numQue}</span>
                    <span className=' text-white fw-bold '> time {numQue} minutes</span>
                </div>
                <div className='mt-4 d-flex fs-1 fw-bolder'>
                    <p className='me-2 name'>{name}</p>
                    <p className='quiz_name'>: {quiz_name}</p>
                </div>
                <div className='w-100 d-flex  rounded-3 h-25 p-2 text-center' style={{ border: "2px solid white" }}>
                    {ans?.map((item, index) => (
                        <span
                            key={index}
                            className={`rounded-5 d-flex justify-content-center align-items-center ms-3 ${currentQue === index ? "currentQue" : ""
                                } ${item.isMarked ? "que-bg-yellow text-white" : "bg-white text-black"}`}
                            style={{ width: "30px", height: "30px" }}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
                <div className='mt-3 fw-bold fs-5 d-flex  justify-content-between'>
                    <div><span className='backgroundColorPrimary'>Quetions ? </span> <span className='text-white'> {currentQue + 1} OF {numQue}</span></div>
                    <div>    <i className="backgroundColorPrimary bi bi-stopwatch-fill"></i> <span className='text-white'>Time left ? </span>
                        <ReverseCountdownTimer minutes={data?.r?.length} />
                    </div>
                </div>
                <div className='mt-3 card w-100 h-100 p-4 '>
                    {data?.r.slice(currentQue, currentQue + 1).map((options, index) => {
                        return <>
                            <div>
                                <span className=' fw-bold fs-5'>{currentQue + 1}.</span>
                                <span className=' fs-5 fw-bold'>{options.que}</span>
                            </div>

                            <div className='p-5 d-flex w-100'>
                                <div className=' w-100 mt-2'>
                                    <div className={`${ans[currentQue]?.ans === options.option[0].option ? "selectedOptions" : ""} cursor-pointer options w-75 d-flex p-2 rounded-2 m-2 `} onClick={() => ansSelectHandler(options.option[0].id, currentQue, options.option[0].option)} >
                                        <span className='me-2 que-bg-yellow text-white rounded-5 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px" }}>A</span>
                                        <span>{options.option[0].option}</span>
                                    </div>
                                    <div className={`${ans[currentQue]?.ans === options.option[1].option ? "selectedOptions" : ""} cursor-pointer options w-75 d-flex p-2 rounded-2 m-2 `} onClick={() => ansSelectHandler(options.option[1].id, currentQue, options.option[1].option)}>
                                        <span className='me-2 que-bg-yellow text-white rounded-5 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px" }}>B</span>
                                        <span>{options.option[1].option}</span>
                                    </div>
                                </div>

                                <div className=' w-100  mt-2'>
                                    <div className={`${ans[currentQue]?.ans === options.option[2].option ? "selectedOptions" : ""} cursor-pointer options w-75 d-flex p-2 rounded-2 m-2 `} onClick={() => ansSelectHandler(options.option[2].id, currentQue, options.option[2].option)}>
                                        <span className='me-2 que-bg-yellow text-white rounded-5 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px" }}>C</span>
                                        <span>{options.option[2].option}</span>
                                    </div>
                                    <div className={`${ans[currentQue]?.ans === options.option[3].option ? "selectedOptions" : ""} cursor-pointer options w-75 d-flex p-2 rounded-2 m-2 `} onClick={() => ansSelectHandler(options.option[3].id, currentQue, options.option[3].option)}>
                                        <span className='me-2 que-bg-yellow text-white rounded-5 d-flex justify-content-center align-items-center' style={{ width: "30px", height: "30px" }}>D</span>
                                        <span>{options.option[3].option}</span>
                                    </div>

                                </div>

                            </div>
                        </>
                    })}

                    <div className=' d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            {currentQue !== 0 &&
                                <button className='btn card ps-2 pe-2 me-2' onClick={previusHandeler}>
                                    <i className="bi bi-arrow-left-short"><span>Prev</span></i>
                                </button>
                            }
                            {currentQue + 1 !== numQue &&
                                <button className='btn card ps-2 pe-2 me-2 d-flex ' onClick={nextHandeler}>
                                    <span>Next<i className="bi bi-arrow-right-short"> </i></span>
                                </button>
                            }
                        </div>
                        <div>
                            <button className='submit-btn rounded-3 ps-5 pe-5 pt-2 pb-2 text-white border-0' onClick={quixeSubmithandeler}>submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}





function ReverseCountdownTimer({ minutes }) {
    const nav = useNavigate();
    const [seconds, setSeconds] = useState(minutes * 60);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        return () => clearInterval(timerId);
    }, [seconds, minutes, nav]);

    const padLeft = (value) => value.toString().padStart(2, '0');
    const minutesDisplay = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;

    if (minutesDisplay === 0 && secondsDisplay === 0) {
        alert("Time Over");
        nav("/completed");
    }

    return (
        <span className='backgroundColorPrimary'>{`${padLeft(minutesDisplay)}:${padLeft(secondsDisplay)}`}</span>
    );
}



