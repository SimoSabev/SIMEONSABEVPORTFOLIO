import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="w-full h-fit bg-red-600">
            <nav>
                    <ul className="w-full flex justify-around items-center p-4">
                    <li className="w-16 flex justify-center items-center">LOGO
                    </li>
                    <div className="w-full flex justify-center items-center gap-10">
                        <li className="">About</li>
                        <li className="">Projects</li>
                        <li className="">Contact</li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;