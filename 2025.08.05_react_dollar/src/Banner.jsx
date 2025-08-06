import './Banner.css'

function Banner() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/public/dollar1.jpg" className="d-block dollar" />
                    </div>
                    <div className="carousel-item">
                        <img src="/public/dollar2.jpg" className="d-block dollar" />
                    </div>
                    <div className="carousel-item">
                        <img src="/public/dollar3.jpg" className="d-block dollar" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner

