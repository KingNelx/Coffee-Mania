import { useState } from 'react'
import menu1 from '../Images/coffee-menu.jpg'
import menu2 from '../Images/croissant-menu.jpg'
import menu3 from '../Images/dessert-menu.jpg'
import menu4 from '../Images/cookie-menu.jpg'
const Menu = () => {
    const ourMenu = "Our Menu"

    const [coffePrice] = useState([
        { Coffee: "Cafe Creme Small", Price: "$2.50" },
        { Coffee: "Cafe Creme Large ", Price: "$3.50" },
        { Coffee: "Cafe Espresso ", Price: "$4.50" },
    ])

    const [CroissantPrice] = useState([
        { Croissant: "Croissant Plain", Price: "$3.00" },
        { Croissant: "Croissant Cheese", Price: "$4.20" },
        { Croissant: "Croissant Ham", Price: "$5.90" },
    ])

    const [DessertPrice] = useState([
        { Dessert: "Chocolate Cake", Price: "$5.99" },
        { Dessert: "Strawberry Cake", Price: "$6.50" },
        { Dessert: "Cheese Cake", Price: "$7.85" },
    ])


    const [CookiePrice] = useState([
        { Cookie: "Macaroon Cookies", Price: "$1.80" },
        { Cookie: "Oatmeal Raisin Cookies", Price: "$2.50" },
        { Cookie: "Chocolate Chip Cookies", Price: "$3.80" },
    ])



    return (
        <div className="menu-preview">
            <div className="our-menu">
                <div className="menu">
                    {ourMenu}
                </div>
                <h4>
                    Whether its the first coffee in the Morning or a refresher in the afternoon,<br></br>
                    our menu offers the best coffee and homemade snacks
                </h4>
            </div>
            <div className="menu-row">

                <div className="menu-col">
                    <img src={menu1} alt="menu1" />
                </div>

                <div className="menu-col">
                    <img src={menu2} alt="menu2" />
                </div>
            </div>

            <div className="menu-row">

                <div className="menu-col">
                    <img src={menu3} alt="menu3" />
                </div>

                <div className="menu-col">
                    <img src={menu4} alt="menu4" />
                </div>
            </div>

            <div className="menu-bottom-bg">
            </div>
            <div className="menu-title">
            <h1> Have a Look !</h1>
            </div>
            <div className="menu-price">
                <div className="menu-price-col">
                    <div className="coffe-price">
                        <h1>  Coffee </h1>
                        <div>
                            {coffePrice.map((coffeP) => (
                                <div className="coffee-price-preview">
                                    <p> {coffeP.Coffee} </p>
                                    <p> {coffeP.Price} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="menu-price-col">
                    <div className="croissant -price">
                        <h1>  Croissant </h1>
                        <div>
                            {CroissantPrice.map((croissantP) => (
                                <div className="croissant-price-preview">
                                    <p> {croissantP.Croissant} </p>
                                    <p> {croissantP.Price} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-price">
                <div className="menu-price-col">
                    <div className="dessert-price">
                        <h1>  Dessert </h1>
                        <div>
                            {DessertPrice.map((dessertP) => (
                                <div className="croissant-price-preview">
                                    <p> {dessertP.Dessert} </p>
                                    <p> {dessertP.Price} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="menu-price-col">
                    <div className="cookie -price">
                        <h1>  Cookie </h1>
                        <div>
                            {CookiePrice.map((cookieP) => (
                                <div className="croissant-price-preview">
                                    <p> {cookieP.Cookie} </p>
                                    <p> {cookieP.Price} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}



export default Menu;