import useTitle from "../../hooks/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CountDown from "./CountDown";
import Gallary from "./Gallary";
import ToyTabs from "./ToyTabs";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToyTabs></ToyTabs>
            
            <CountDown></CountDown>
            <AboutUs></AboutUs>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;