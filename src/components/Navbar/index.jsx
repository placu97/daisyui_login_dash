import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbarr() {
  return (
    <nav className="bg-redfirb py-2 rounded-b-3xl">
      <div className="container mx-auto px-4">
        {/* contiene Logo + Login/Register */}
        <div className="flex justify-between items-center">
          <Link to="/" className="w-[14%] md:w-[14%] sm:w-[19%]">
            <img src="/images/Logo.png" alt="Logo FirBuddy" className="" />
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="text-white hover:bg-white hover:text-redfirb p-3 rounded-3xl"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-white hover:bg-yellow-400 text-redfirb font-bold py-3 px-4 rounded-3xl"
              >
                Registrati
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
