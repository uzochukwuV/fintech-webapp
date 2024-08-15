import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { PersonIcon, GroupIcon } from "@radix-ui/react-icons";

export const About = () => {
  return (
    <section className="px-8 antialiased min-h-screen w-screen py-4 -50">
      <div>
        <div className="flex justify-center items-center flex-col gap-4 ">
          <h1 className="font-semibold  text-lg md:text-2xl lg:text-3xl leading-10 max-w-lg text-pretty text-gray-900 ">
            Our Clients
          </h1>
          <p className="text-pretty text-center text-sm text-muted-foreground">
            We have been working all over the world with estimated clients of
            over 500+
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center mb-10">
          <div>
            <Image
              src={"/forbes-seeklogo.svg"}
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div>
            <Image src={"/bancom.svg"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/cryto.svg"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/grow-logo.webp"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/next.svg"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image
              src={"/forbes-seeklogo.svg"}
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div>
            <Image src={"/bancom.svg"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/cryto.svg"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/grow-logo.webp"} alt="" height={100} width={100} />
          </div>
          <div>
            <Image src={"/next.svg"} alt="" height={100} width={100} />
          </div>
        </div>
        <div className="pt-4 flex justify-center items-center flex-col gap-4 ">
          <div>
            <h1 className=" text-base md:text-xl font-medium pb-2 leading-10 max-w-lg text-center text-gray-600">
              We are Trusted by Over 15 Million Users supporting One Click
              Cashout
            </h1>
            <p className="text-pretty text-center text-sm text-muted-foreground">
              We provide forex and crypto investment options to our customers
              all over the world
            </p>
          </div>
        </div>
        <div className="flex gap-16 flex-col md:flex-row items-center max-h-screen h-full h-screen my-12 md:my-0 justify-center mt-20">
            <Aboutcard />
            <Aboutcard />
            <Aboutcard />
        </div>
      </div>
    </section>
  );
};

export default function Aboutcard() {
  return (
    <div>
      <Card className="w-[250px] hover:border-b-2 hover:border-b-indigo-500 rounded-none border-0 shadow-none transition-all duration-100">
      <CardHeader>
        <CardTitle className="mx-auto">
            <PersonIcon className="text-indigo-500" scale={2} />
        </CardTitle>
        <CardTitle className="text-center mt-4 pt-3 text-xl ">Membership Organisation.</CardTitle>
      </CardHeader>
        <CardContent>
            <div className="text-center text-pretty text-sm text-muted-foreground">

            We are a passionate team of financial experts, analysts, and enthusiasts. Our collective experience spans decades, and we’ve weathered market ups and downs together.
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
