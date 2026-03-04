import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { RiMailOpenFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function HomePage() {
  return (
    <>
      <main className="max-w-full flex flex-col items-center justify-center gap-6 m-4">
        <div className="">
          <h1 className=" text-4xl font-semibold ">
            I'm Timilehin
            <br />
            Frontend Developer
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa
            facilis dolor sit eligendi eos saepe. Voluptatum aperiam animi
            veritatis ratione ad totam sunt eius consectetur. Minima dolorem
            facilis explicabo incidunt.
          </p>
        </div>
        <div className="border relative w-full">
          <Image
            src="/timmy DP.jpg"
            alt="Timilehin Ajiboye"
            width={800}
            height={600}
            priority
            className="aspect-square object-cover w-full"
          />
        </div>

        <section className="flex items-center gap-1 mt-4 flex-wrap justify-center cursor-pointer">
          <div className="flex items-center gap-2 ">
            <IoMdMail className="text-3xl" />
            <span className="text-sm">timiajiboye005@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCall className="text-3xl" />
            <span className="text-sm">+2347025380728</span>
          </div>
          <div className="flex items-center gap-2">
            <RiMailOpenFill className="text-3xl" />
            <span className="text-sm">www.myportfolio.com</span>
          </div>
        </section>

        <section className="flex items-center gap-5 text-3xl justify-center cursor-pointer">
          <Link
            href="https://www.instagram.com/talented_005?igsh=ams2Zm9sNWs1anVr"
            target="_blank"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="https://www.linkedin.com/in/timilehin-ajiboye-ba631a233/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/talented005?s=21&t=LztIolZeGr4Xi_X5Ec9kPA"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </section>
      </main>
    </>
  );
}
