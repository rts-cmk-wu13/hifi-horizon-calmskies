import React from 'react';
import { Link } from 'react-router';
import { FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaCcStripe, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
/**
 * Footer.jsx
 * Denne komponent viser en footer med flere kolonner, kontaktinfo,
 * so-me ikoner, betalings kort og generel info.
 * Placer <Footer /> i bunden af min App-komponent.
 */
 export default function Footer(){
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Nav i footer */}
        <div className="space-y-2 ">
          <Link to="/" className=".text-whiteblock font-normal hover:font-bold">
            Home
          </Link>
          <Link to="/list" className="block font-normal hover:font-bold">
            Shop
          </Link>
          <Link to="/about" className="block font-normal hover:font-bold">
            About Us
          </Link>
        </div>

        {/* Services &- er i tvivl om det virker og det er metoden.. Policies */}
        <div className="space-y-2">
          <Link to="/faq#returns" className="block font-normal hover:font-bold">
            Returns & Refunds
          </Link>
          <Link to="/faq#delivery" className="block font-normal hover:font-bold">
            Delivery
          </Link>
          <Link to="/faq#privacy" className="block font-normal hover:font-bold">
            Privacy Policy
          </Link>
          <Link to="/faq#terms" className="block font-normal hover:font-bold">
            Terms & Conditions
          </Link>
        </div>

        {/* Kontaktinformation bla bla */}
        <div className="space-y-4">
          <h3 className="font-normal hover:font-bold">Contact</h3>
          <div>
            <p className="flex items-center">
              <FaPhone className="mr-2" />0131 556 7901
            </p>
            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
          </div>
          <div>
            <p className="flex items-center">
              <FaPhone className="mr-2" />01324 629 011
            </p>
            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr className="  outline-neutral-300 " />

      {/* Bundtekst med betalingskort som er et IKON og firmanavn */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {/* <a href="#">Stripe<FaCcStripe /> </a> */}
         <FaCcStripe className="h-6 w-6" />
          <FaCcVisa className="h-6 w-6" />
          <FaCcMastercard className="h-6 w-6" />
        </div>
        <p>
          HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15
          2EU
        </p>
        <p className="mt-2 md:mt-0">Designed by WVU7 :)</p>
      </div>
    </footer>
  );
};


