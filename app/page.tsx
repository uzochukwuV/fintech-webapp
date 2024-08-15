import { Hero } from "@/components/home/hero";
import { MenuBar } from "@/components/home/menu-bar";

import Plans from "@/components/home/plans";

import { cn } from "@/lib/utils";

import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth";
import Service from "@/components/home/services";
import  { SubComponentOne } from "@/components/home/sub";
import Footer from "@/components/home/footer";
import Image from "next/image";
import { TradingViewWidget } from "./tradingview";


export default async function Home() {
  const cookie = cookies().get("session")?.value;

  let user;
  if (cookie) {
    user = await decrypt(cookie!);
  }


  

  return (
    <section className="absolute top-0 left-0 right-0">
      <div className='background-video fixed right-0 left-0 top-0 bottom-0 -z-10 blur-md'>
          <Image src="/svg/circuit-board.svg" alt='Hero Image' width={1000} height={1000} className='object-cover h-full w-full'></Image>
        </div>
      <header className={cn("")}>
        <MenuBar cookieId={user?.user._id} />
      </header>
      <Hero />
      <br />
      <TradingViewWidget />

<SubComponentOne />

      <Plans />
      <Service />
      
      <Footer />
    </section>
  );
}



