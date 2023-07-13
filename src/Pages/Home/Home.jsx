import useTitle from "../../hooks/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CountDown from "./CountDown";
import Gallary from "./Gallary";
import Partners from "./Partners";
import ToyTabs from "./ToyTabs";
import WhatsNew from "./WhatsNew";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToyTabs></ToyTabs>
            <WhatsNew></WhatsNew>
            
            <CountDown></CountDown>
            <AboutUs></AboutUs>
            <Gallary></Gallary>
            <Partners></Partners>
        </div>
    );
};

export default Home;