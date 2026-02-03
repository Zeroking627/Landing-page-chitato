import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import ChitatoliteNoriSeaweed from '../assets/CHITATO-LITE-NORI.png'
import ChitatoliteBeefBarbecue from '../assets/CHITATO-LITE-BBQ.png'
import ChitatoliteSourCreamOnion from '../assets/CHITATO-LITE-SOUR-CREAM-ONION.png'
import ChitatoliteSalmonTeriyaki from '../assets/CHITATO-LITE-SALMON-TERIYAKI.png'

function BestSeller({ Open }) {

    const Product = [
        {name : "Chitato Lite Nori Seaweed", price : "Rp 12.500", img : ChitatoliteNoriSeaweed},
        {name : "Chitato Lite Beef Barbecue", price : "Rp 10.500", img : ChitatoliteBeefBarbecue},
        {name : "Chitato Lite Sour Cream & Onion", price : "Rp 11.500", img : ChitatoliteSourCreamOnion}

    ];
    return (
       <section id="best-seller" className={`best-seller ${Open ? "Open" : ""}`}>
        <div className="section-header">
            <h2>Best Sellers.</h2>
            <a href="#">Shop all <FontAwesomeIcon icon={faCircleChevronRight} /></a>
        </div>

        <div className="product-grid">

            {Product.map((item, index) => (
                <div key={index} className="product-card">
                    <img src={item.img} alt={item.name} />
                    <div className="rating">
                        {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                    </div>
                    <h3>{item.name}</h3>
                    <p className="pack">Pack of 6</p>
                    <p className="price">{item.price}</p>
                </div>
            ))}

            <div className="special-card">
                <img src={ChitatoliteSalmonTeriyaki} alt="SALMON TERIYAKI" className="SALMON-TERIYAKI-IMG0" />
                <div className="special-content">
                    <h3>Chitato Lite Salmon Teriyaki</h3>
                    <p>Explore all of our best sellers Flavors</p>
                    <button className="explore-button">Get Started <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
       </section>
    );

}

export default BestSeller;