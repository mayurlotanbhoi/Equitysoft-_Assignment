import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cloudData = [
    { paddingTop: "20rem", content: "AI DRIVEN LEARNING PLATFORM" },
    { paddingTop: "5rem", content: "AI DRIVEN LEARNING PLATFORM" },
    { paddingTop: "20rem", content: "COMPETITIVE EXAM" },
    { paddingTop: "5rem", content: "EVERY DAY PRACTICE" },
    { paddingTop: "20rem", content: "EVERY DAY PRACTICE" },
];

const Cloud = () => {
    return (
        <div className=" d-flex flex-wrap justify-content-center">
            {cloudData.map((item, index) => (
                <div
                    key={index}
                    className="d-flex flex-column align-items-center m-3 "
                    style={{ paddingTop: `${item.paddingTop}` }}
                >
                    <i className="bi bi-cloud-fill cloud" style={{ fontSize: "15rem" }}></i>
                    <span className="cloud-text fw-bolder" style={{ fontSize: "20px", maxWidth: "12rem", textAlign: "center", marginTop: "-13rem" }}>
                        {item.content}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Cloud;
