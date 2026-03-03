// import React from "react";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="border flex space-x-4 justify-between items-center p-2 bg-white shadow-md">
//       <Image
//         src="/Timmy DP.jpg"
//         alt="Timi Ajiboye"
//         width={40}
//         height={40}
//         className="rounded-full ml-6"
//       />
//       <ul className="flex space-x-12">
//         <li>
//           <a href="#about" className="text-gray-600 hover:text-gray-900">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#experience" className="text-gray-600 hover:text-gray-900">
//             Experience
//           </a>
//         </li>
//         <li>
//           <a href="#projects" className="text-gray-600 hover:text-gray-900">
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#education" className="text-gray-600 hover:text-gray-900">
//             Education and Skills
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="text-gray-600 hover:text-gray-900">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">TA</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/About" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/Experience" className="hover:text-gray-300">
              Experience
            </Link>
            <Link href="/Education" className="hover:text-gray-300">
              Education
            </Link>
            <Link href="/Project" className="hover:text-gray-300">
              Project
            </Link>
            <Link href="/Contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span> // close icon
            ) : (
              <span className="text-2xl">&#9776;</span> // hamburger
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link href="/About" className="block hover:text-gray-300">
            About
          </Link>
          <Link href="/Experience" className="block hover:text-gray-300">
            Experience
          </Link>
          <Link href="/Education" className="block hover:text-gray-300">
            Education
          </Link>
          <Link href="/Project" className="block hover:text-gray-300">
            Project
          </Link>
          <Link href="/Contact" className="block hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

