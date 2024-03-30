
import Blog from "@/components/home/blog";
import Footer from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { MenuBar } from "@/components/home/menu-bar";
import NewsLetter from "@/components/home/newsletter";
import  Plans  from "@/components/home/plans";
import { SideBar } from "@/components/home/side-bar";
// import { getUser } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {  cookies } from "next/headers";
import { decrypt, updateSession } from "@/lib/auth";
import Service from "@/components/home/services";
import SubComponent from "@/components/home/sub";

export default async function Home() {
  
 
  console.log("Heloo dear");
  const cookie = cookies().get('session')?.value
  console.log(cookie);

  let user;
  if(cookie){
     user =  await decrypt(cookie!);
  }
  console.log(user);
  
  
  
  return (
    <section className="absolute top-0 left-0 right-0">
    <header className={cn("")}>
      <MenuBar params={{id:user}} />
    </header>
    <Hero />
    <Plans />
    <Service />
    <SubComponent />

    </section>
  );
}
