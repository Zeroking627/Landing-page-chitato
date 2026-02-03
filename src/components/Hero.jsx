import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Chip1 from '../assets/Chip-1.png'
import chip2 from '../assets/Chip-2.png'
import chip3 from '../assets/Chip-3.png'
import chip4 from '../assets/Chip-4.png'
import ChitatoBBQ from '../assets/CHITATO-LITE-BBQ.png'
import ChitatoNori from '../assets/CHITATO-LITE-NORI.png'
import { useEffect, useRef } from 'react';

// const chips = [Chip1, chip2, chip3, chip4];

const Chip_count = 20;

const chip =  Array.from({ length: Chip_count }, (_, i) => {
    const chipImages = [Chip1, chip2, chip3, chip4];
    return chipImages[i % chipImages.length];
});
function Hero({Open, setOpen}) {
    const chipRefs = useRef([]);

    useEffect(() => {
        chipRefs.current.forEach((chip) => {
            if(!chip) return;

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;

            let dx = (Math.random() - 0.5) * 0.15;
            let dy = (Math.random() - 0.5) * 0.15;

            const animate = () => {
                x += dx;
                y += dy;

                if (x < 0 || x>window.innerWidth - 60) dx *= -1;
                if (y < 0 || y>window.innerHeight - 60) dy *= -1;

                chip.style.transform = `translate(${x}px, ${y}px) rotate(${x / 20}deg)`;
                requestAnimationFrame(animate);
            };

            animate();
        });
    }, []);
    
    const handleToggleAndScroll = () => {
        if (!Open) {
        setOpen(true);

        setTimeout(() => {
        const bestSellerSection = document.getElementById('best-seller');
        if(bestSellerSection) {
            bestSellerSection.scrollIntoView({ behavior: 'smooth' , block: 'start' } );
        }
    }
    , 150);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            setOpen(false);
        }, 500);
    }
}
    
    return (
        <section className="hero">
            {chip.map((chip, index) => (
                <img
                    key={index}
                    src={chip}
                    ref={(el) => (chipRefs.current[index] = el)}
                    className="chip"
                    alt="chip"
                />
            ))}

            {/* <img src={Chip1} className='chip chip-1' alt="" />
            <img src={chip2} className='chip chip-2' alt="" />
            <img src={chip3} className='chip chip-3' alt="" />
            <img src={chip4} className='chip chip-4' alt="" /> */}

            <div className="hero-container">

                <div className="hero-text">
                    <h1>
                        The Best<br />
                        Snack For You
                    </h1>
                    <p>
                        Potato Chips are the most eaten and popular crispy snack items.
                        Demand for potato chips
                    </p>
                    <button className="hero-btn">
                        Shop Now
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="hero-image">
                    <img src={ChitatoBBQ} className='Product BBQ' alt="CHITATO LITE BBQ" />
                    <img src={ChitatoNori} className='Product Nori' alt="CHITATO LITE NORI" />

                </div>
                <div className="scroll-indicator" onClick={handleToggleAndScroll}> 
                    <FontAwesomeIcon  className="scroll-icon" icon={Open ? faArrowUpRightFromSquare : faArrowUp} />
                </div>

            </div>
        </section>
    )
}

export default Hero;
