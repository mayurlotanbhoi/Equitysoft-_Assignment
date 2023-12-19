import React from 'react'

export default function Gread_Placeholder({ copy }) {
    return (
        <div className=' d-flex justify-content-around flex-wrap' >
            {Array.from(Array(copy)).map(() => (
                <div class="card gread-card" aria-hidden="true" style={{ minWidth: "300px" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
            ))

            }
        </div>
    )
}
