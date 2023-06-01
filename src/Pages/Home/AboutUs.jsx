import about from '../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen mt-44">
            <div className="hero-content flex-col lg:flex-row">
                <img data-aos="fade-right" src={about} className="w-72 rounded-lg " />
                <div data-aos="fade-left">
                    <h1 className="text-5xl font-bold">About Us!</h1>
                    <p className="py-6">We are your one-stop destination for a wide array of animal-themed toys that bring joy and imagination to life. <br /> Our high-quality products are designed to provide endless hours of fun while promoting empathy and learning. <br /> With a passionate team and exceptional customer service, <br /> we are here to assist you in finding the perfect toy for animal lovers of all ages. <br /> Plus, your purchase contributes to wildlife conservation efforts, <br /> making your experience even more meaningful. Explore our enchanting world today!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;