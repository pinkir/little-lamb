import banner from '../../assets/banner2.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            
            <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60">
                <div className="max-w-md ">
                    <h1 className="mb-10 text-5xl font-bold  ">Welcome to Little  <span className='text-yellow-300 text-4xl'>LA</span>mb</h1>
                    <p className="mb-5 from-neutral-focus ">Unleash Your Imagination with Extraordinary Animal Toys: Dive into a World of Adventure, Creativity, and Fun! Experience boundless imagination with captivating animal toys! Embark on thrilling adventures and ignite endless creativity. These extraordinary companions inspire curiosity and playfulness, transporting you to a world of excitement. Unleash the fun and discover the magic of animal toys today!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;