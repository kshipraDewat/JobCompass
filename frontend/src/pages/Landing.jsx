import React from 'react'
import logo from '../assets/abc.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import companies from '../data/companies.json'
import faq from '../data/faq.json'
import banner from '../assets/banner.webp'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Accordion from '@/components/Accordion'


const Landing = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20  px-10 py-10 sm:py-20 '>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold md:text-6xl lg:text-8xl tracking-tighter py-4 font-sans'>
          Discover Career Paths <br />
          <div className='flex items-center justify-center '> with Job C<img src={logo} alt="" className='size-6 mt-3 md:mt-5 md:size-10 lg:mt-7 lg:ms-1 lg:size-16' /><span className=''>mpass</span> </div>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-lg lg:text-2xl'>
          Explore thousands of jobs or Find the perfect candiadate.
        </p>
      </section>
      <div className=' flex  items-center gap-3 lg:gap-6 justify-center '>
        <Link to='/jobs'>
          <Button variant='blue' size='xl' >Find Jobs</Button>
        </Link>
        <Link to='/postjobs'>
          <Button variant='destructive' size='xl'>Post Jobs</Button>
        </Link>
      </div>

      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10 ">
        <CarouselContent className="flex gap-5 md:gap-10 lg:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                <img src={path} alt={name} className='h-10 sm:h-14 object-contain' />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>

     

      <section className=' grid grid-cols-2 gap-5 md:gap-10 md:p-5 lg:p-10'>
        <Card className="border-white">
          <CardHeader>
            <CardTitle className='font-bold text-xl'>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>

        </Card>
        <Card className="border-white">
          <CardHeader>
            <CardTitle className='font-bold text-xl'>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications , and find the best candidates </p>
          </CardContent>

        </Card>
      </section>
       <img src={banner} alt="" className=' md:p-5 lg:p-10' />

       <div className='flex flex-col  gap-5 md:p-5 lg:p-10'>
      <Accordion
             question= "What is Job Compass?"
               answer= "Job Compass is a Job Portal Application allows companies to post job listings and users to search and apply for jobs. It provides features for both job seekers and employers, with user-friendly interfaces and secure authentication."
          />
        <Accordion 
               question = "How do I post a job?"
               answer ="As an employer, you can post a job by navigating to the 'Post Job' section after logging in. Fill in the job details and submit the form to create a new job listing."
        />
        <Accordion
                question = "How do I apply for a job?"
                answer ="To apply for a job, click on the job listing and follow the application instructions provided. You may need to upload your resume and provide additional information."
        /> 
        <Accordion
          question = "How can I search for jobs?"
          answer = "Job seekers can search for jobs by keywords, location, category, and other filters using the search bar on the homepage or the dedicated job search page."
        /> 
        </div>
    </main>
  )
}

export default Landing
