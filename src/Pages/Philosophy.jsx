import img1 from "../Images/farming.jpg";
import img2 from "../Images/roast.jpg";
import img3 from "../Images/brewed.jpg";

const Philosophy = () => {
    const philosophy = "Our Philosophy";
    return (
        <div className="philosophy">
            <div className="our-philosophy">{philosophy}</div>
            <div className="philosophy-row">
                <div className="philosophy-col">
                    <img src={img1} alt="" />
                    <p> - 100% Ecological Farming</p>
                </div>

                <div className="philosophy-col">
                    <img src={img2} alt="" />
                    <p> - Mild Roast Sweet Flavor</p>
                </div>

                <div className="philosophy-col">
                    <img src={img3} alt="" />
                    <p> - Always Freshly Brewed</p>
                </div>
            </div>
            <div className="philo-msg-bottom">
                <h2> Fresh Roasted Coffee </h2>
                <p>
                    We find amazing single-origin coffee beans, roast them to perfections
                    and deliver it to your door. We are fanatical about freshness and we
                    deliver beans the day they are roasted to get them to our customers as
                    soon as possible.
                </p>
            </div>

            <div className="philo-msg-bottom">
                <h2> Coffeeshop Quality Coffee </h2>
                <p>

                    We believe that the most important part of making the perfect cup of
                    coffee is the quality of the beans. They must be sourced from
                    high-quality growers and must be roasted with attention to their
                    unique characteristics.
                </p>
            </div>
        </div>
    );
};

export default Philosophy;
