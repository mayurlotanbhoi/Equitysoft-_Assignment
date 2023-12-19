import React from 'react';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <span className='the fs-3 fw-bolder ' >The </span>
                        <span className='Learning fs-3 fw-bolder'>Learning </span>
                        <span className='Umbrella fs-3 fw-bolder'>Umbrella</span>.
                        <small className=' fs-6 d-block'>Power House Of Learning</small>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">

                                </a>
                            </li>

                        </ul>
                        <span className="navbar-text">
                            <button className='btn Registration rounded-pill me-4'>
                                <span className='me-2 ms-2'><i className="bi bi-bag-check-fill  me-2"></i> Registration</span>
                            </button>

                            <button className='btn Login fw-bolder rounded-pill ps-4 pe-4'>
                                <span > Login</span>
                            </button>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}
