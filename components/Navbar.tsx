"use client"
import React from 'react'
import { ModeToggle } from './ModeToggle';

const Navbar = ({ }) => {
    return (
        <div className="flex justify-end p-2 z-10">
            <ModeToggle />
        </div>
    );
}

export default Navbar;