import React, { useState } from 'react';
import apitoria from '../../assets/apitoria.png';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import "../../index.css"

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    
    return (
        <div>
            <header className=' custom-gradient  w-full'>
                <nav className='container mx-auto p-4 flex justify-end items-center'>
                    <ul className="hidden md:flex space-x-1 text-white text-[10px]">
                        <li><a href="#who-we-are" className="hover:underline">Quick Quote</a></li>
                        <li>|</li>
                        <li><a href="#our-business" className="hover:underline">Government Contracting</a></li>
                        <li>|</li>
                        <li><a href="#products" className="hover:underline">News</a></li>
                    </ul>
                </nav>
            </header>
            <header className="bg-white shadow">
                <div className="container mx-auto p-4 py-6 flex justify-between items-center">
                    <img src={apitoria} className="w-[5em]" alt="Apitoria logo" />
                    <nav className='hidden md:flex text-gray-700'>
                        <ul className="flex space-x-4 text-[14px]">
                            <li><a href="#who-we-are" className="hover:underline">Who We Are</a></li>
                            <li><a href="#our-business" className="hover:underline">Our Business</a></li>
                            <li><a href="#products" className="hover:underline">Our Products</a></li>
                            <li><a href="#sustainability" className="hover:underline">Sustainability</a></li>
                        </ul>
                    </nav>
                    <nav className='hidden md:flex text-sm'>
                        <ul className="flex space-x-1 items-center">
                            <li><a href="#who-we-are" className="hover:underline">Careers</a></li>
                            <li>|</li>
                            <li><a href="#our-business" className="hover:underline">Contact Us</a></li>
                            <li className='cursor-pointer ml-4'><IoSearchOutline /></li>
                        </ul>
                    </nav>
                    <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
                {isMobileMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col items-start space-y-1 p-4 ">
                        <li className=" p-2 rounded"><a href="#quick-quote" className="hover:underline">Quick Quote</a></li>
                        <li className=" p-2 rounded"><a href="#government-contracting" className="hover:underline">Government Contracting</a></li>
                        <li className=" p-2 rounded"><a href="#news" className="hover:underline">News</a></li>
                        <li className=" p-2 rounded"><a href="#who-we-are" className="hover:underline">Who We Are</a></li>
                        <li className=" p-2 rounded"><a href="#our-business" className="hover:underline">Our Business</a></li>
                        <li className=" p-2 rounded"><a href="#our-products" className="hover:underline">Our Products</a></li>
                        <li className=" p-2 rounded"><a href="#sustainability" className="hover:underline">Sustainability</a></li>
                        <li className=" p-2 rounded"><a href="#careers" className="hover:underline">Careers</a></li>
                        <li className=" p-2 rounded"><a href="#contact" className="hover:underline">Contact Us</a></li>
                        <li className=" p-2 rounded"><IoSearchOutline size={20} /></li>
                    </ul>
                </nav>
            )}

            </header>
        </div>
    );
};

export default Header;
