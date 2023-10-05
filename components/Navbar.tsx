"use client"
import React from 'react'
import { ModeToggle } from './ModeToggle';

const Navbar = ({ }) => {
    return (
        <div className="flex justify-end p-2 border-b z-10">
            <ModeToggle />
        </div>
    );
}

export default Navbar;