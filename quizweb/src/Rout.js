import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components.js/Header';
import Home_Page from './Pages.js/Home_Page';
import Detail_Page from './Pages.js/Detail_Page';
import Test_page from './Pages.js/Test_page';
import Test_complet_Page from './Pages.js/Test_complet_Page';



function Index() {
    return (
        <BrowserRouter basename="/">
            <div className="page-wraper">
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home_Page />} />
                    <Route path="/completed" exact element={<Test_complet_Page />} />
                    <Route path="/gread" element={<Detail_Page />} />
                    <Route path="/test" element={<Test_page />} />

                    <Route path="*" element={<Home_Page />} />
                </Routes>
                {/* <Footer /> */}

            </div>
        </BrowserRouter>
    );
}
export default Index;