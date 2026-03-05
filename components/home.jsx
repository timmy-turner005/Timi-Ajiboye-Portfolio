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
      <main className=" max-w-full flex flex-col items-center justify-center m-4 lg:m-0">
        <section className=" md:flex md:gap-6 md:items-center md:my-15">
          <div className="flex flex-col items-start  md:w-1/2 md:gap-4 lg:max-w-2xl lg:gap-3">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">
                I'm Timilehin
                {/* <span>
              <Image
                src="/wave-img.svg"
                alt="Waving hand"
                width={48}
                height={48}
                className="animate-wave origin-bottom-right"
              />
              </span> */}
                <br />
                Frontend Developer
              </h1>
            </div>
            <p className="mt-4 text-gray-600 md:text-lg lg:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              culpa facilis dolor sit eligendi eos saepe. Voluptatum aperiam
              animi veritatis ratione ad totam sunt eius consectetur. Minima
              dolorem facilis explicabo incidunt.
            </p>
          </div>
          <div className="my-4 relative w-full md:w-1/2">
            <Image
              src="/timmy DP.jpg"
              alt="Timilehin Ajiboye"
              width={800}
              height={600}
              priority
              className="aspect-square object-cover w-full"
            />
          </div>
        </section>

        <section className=" flex items-center gap-1 mt-4 flex-wrap justify-center cursor-pointer">
          <div className="flex items-center gap-2">
            <IoMdMail className="text-3xl md:text-4xl" />
            <span className="text-sm md:text-xl">timiajiboye005@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCall className="text-3xl md:text-4xl" />
            <span className="text-sm md:text-xl">+2347025380728</span>
          </div>
          <div className="flex items-center gap-2">
            <RiMailOpenFill className="text-3xl md:text-4xl" />
            <span className="text-sm md:text-xl">www.myportfolio.com</span>
          </div>
        </section>

        <section className="my-4 md:text-4xl md:gap-8 md:my-7 flex gap-5 text-3xl cursor-pointer">
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
