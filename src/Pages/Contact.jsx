import img1 from '../Images/location.jpg'
import img2 from '../Images/clock.jpg'
import img3 from '../Images/contact.jpg'
const Contact = () => {
    return (
        <div className="contact">
            <div className="findus-msg">
                <h2> Find Us </h2>
                <p> Let us spoil you with the best Coffee and Snacks. </p>
            </div>
            <div className="contact-preview">
                <div className="contact-col">
                    <img src={img1} alt="" />
                    <p> East 57th,</p>
                    <p> Manhattan, New York City </p>
                </div>

                <div className="contact-col">
                    <img src={img2} alt="" />
                    <p> Mo - Fr: 7am - 6pm</p>
                    <p> Sat: 8am - 7pm</p>
                </div>

                <div className="contact-col">
                    <img src={img3} alt="" />
                    <p> 09071205892 </p>
                    <p> KingNelx@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;