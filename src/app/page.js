"use client"
import React ,{useEffect} from 'react'
import Home from "@/app/Home/page"
const Page = () => {
  useEffect(() => {
    document.title = "Interiormaata";
  }, []);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <div>
    <Home/>
    </div>
  )
}

export default Page