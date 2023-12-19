import React from 'react'
import GreadCard from './GreadCard'
import useFetch from '../Hooks/useFetch'
import { main_api, token, apikey } from '../constaint'
import Gread_Placeholder from '../PlaceHolders.js/Gread_Placeholder'
export default function Gread() {
    // https://api-learningumbrella.equitysofttechnologies.com/api/course/course_get?apikey=c7d4b74bac218a69c1445c7a0889ced468553829&token=46f2ab1d0beb4c99523181d887b5250222405f07
    const { data, loading, error } = useFetch(`${main_api}/api/course/course_get?apikey=${apikey}&token=${token}`)

    const render = () => {
        if (loading) {
            return <Gread_Placeholder copy={3} />;
        } else if (data?.m === 'Success') {
            return <GreadCard cardData={data} />;
        } else if (error) {
            return <h1>Somthing is Wrong</h1>;
        } else {
            return null;
        }
    };


    return (
        <div className=' container' style={{ marginTop: "20rem" }}>
            <div className='our-vision text-center'>
                <h5 className=''>OUR VISION</h5>
                <h1 className=' fw-bolder'>We'e making learning Quiz</h1>
                <h1 className=' fw-bolder'>and enjoyable</h1>
            </div>

            {render()}
        </div>
    )
}
