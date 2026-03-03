import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <>
    <div>
      <h1 className=" text-4xl font-semibold">
        I'm Timilehin
        <br />
        Frontend Developer
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa
        facilis dolor sit eligendi eos saepe. Voluptatum aperiam animi veritatis
        ratione ad totam sunt eius consectetur. Minima dolorem facilis explicabo
        incidunt.
      </p>
    </div>

     <Image
       src="/timmy DP.jpg"
      alt="Timilehin Ajiboye"
      width={200}
      height={200}
     />
    </>
  );
}
