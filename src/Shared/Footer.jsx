import logo from '../assets/littlelamb.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-yellow-300 bg-opacity-80 text-base-content">
            <div>
                <img className='h-3/4 w-56' src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <a className="text-2xl"><FaFacebook></FaFacebook></a>
                <a className="text-2xl"><FaTwitter></FaTwitter></a>
                <a className="text-2xl"><FaInstagram></FaInstagram></a>
                <a className="text-2xl"><FaYoutube></FaYoutube></a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;