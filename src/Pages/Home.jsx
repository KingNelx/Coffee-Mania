import img1 from '../Images/coffee-1.jpg'
import img2 from '../Images/coffee-2.jpg'
import img3 from '../Images/coffee-3.jpg'
import img4 from '../Images/coffee-4.jpg'

const Home = () => {

    const coffeeQoutes = "I don't need an Inspirational qoute, I need Coffee."
    return (
        <>
            <div className="coffee-bg">
                <h2 className="home-h2">
                    Start your Day with a perfect Coffee.
                </h2>
            </div>
            <div className="coffee-qoutes">
                {coffeeQoutes}
            </div>
            <div className="coffe-image-row">
                <div className="coffe-image-col">
                    <img src={img1} alt="coffe-1" />
                </div>

                <div className="coffe-image-col">
                    <img src={img2} alt="coffe-2" />
                </div>
            </div>

            <div className="coffe-image-row">
                <div className="coffe-image-col">
                    <img src={img3} alt="coffe-3" />
                </div>

                <div className="coffe-image-col">
                    <img src={img4} alt="coffe-4" />
                </div>
            </div>

           

        </>
    );
}

export default Home;