import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border flex space-x-4 justify-between items-center p-2 bg-white shadow-md">
      <Image
        src="/timi-ajiboye.jpg"
        alt="Timi Ajiboye"
        width={40}
        height={40}
        className="rounded-full ml-6"
      />
      <ul className="flex space-x-12">
        <li>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" className="text-gray-600 hover:text-gray-900">
            Education and Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
