import { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Banner.css';

const slides = [
    {
        image: 'https://i.ibb.co/6YjnK4S/EEE.jpg',
        title: 'The role of field engineers in shaping the future of field service',
        description: 'Field engineers play a pivotal role in shaping the future of field service by leveraging their expertise to enhance efficiency, address emerging challenges, and implement innovative technologies. Their strategic contributions contribute to the evolution and optimization of field service operations',
        button1: 'Our Services',
        button2: 'Contact Us',
    },
    {
        image: 'https://i.ibb.co/DwhHL8x/image.png',
        title: 'Connecting the World: The Impact of Telecommunication Engineers on Global Communication',
        description: 'Telecommunication engineers play a vital role in building and maintaining communication networks that connect people globally. Their skills in designing, implementing, and optimizing telecommunications systems are essential for shaping the future of seamless and efficient communication in the digital age.',
        button1: 'Services & Parts',
        button2: 'Projects',
    },
    {

        image: 'https://i.ibb.co/5nd38GN/image.png',
        title: 'Driving Innovation in Machinery: The Crucial Role of Mechanical Engineers',
        description: 'Mechanical engineers play a key role in advancing technology and industry by designing, analyzing, and improving mechanical systems. Their expertise contributes to the innovation and optimization of machinery, shaping the future of manufacturing and beyond.',
        button1: 'Join Our Forum',
        button2: 'About Us',
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 5) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full">
            <div
                className="h-3/4 relative overflow-hidden"
                style={{
                    backgroundImage: `url('https://i.ibb.co/PxV2GBn/image.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <TransitionGroup className="h-full">
                    <CSSTransition key={currentSlide} timeout={2000} classNames="fade">
                        <div
                            className="h-full flex items-center justify-center relative"
                            style={{
                                backgroundImage: `url(${slides[currentSlide].image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute left-0 lg:mx-28 px-2 text-white text-left">
                                <h1 className="lg:text-4xl md:text-4xl text-3xl lg:w-1/2 font-bold mb-4">
                                    {slides[currentSlide].title}
                                </h1>
                                <p className="text-lg lg:w-1/2 mb-6">
                                    {slides[currentSlide].description}
                                </p>
                                <div className="space-x-4">
                                    <button className="btn" onClick={() => goToSlide(0)}>
                                        {slides[currentSlide].button1}
                                    </button>
                                    <button className="btn" onClick={() => goToSlide(1)}>
                                        {slides[currentSlide].button2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Banner;
