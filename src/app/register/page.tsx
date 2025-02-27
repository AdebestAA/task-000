"use client"

import Form from '@/components/RegisterComponents/Form'
import React from 'react'

const page = () => {
  return (
    <div className='text-[0.8rem] font-manrope flex sm:justify-center sm:items-center bg-lightBlue py-16 min-h-screen'>

<article className='bg-white w-full sm:w-[50%] xl:w-[40%] lg:w-[40%]  rounded-md px-6 py-8 '>
    {/* PROGRESS BAR */}
<section className='  flex justify-between  mb-8'>
    {Array(4).fill("").map((_,index)=>{

        return (
            <span key={index} className={`${index === 0 ? "bg-primary" :"bg-lightBlue"} w-[20%] h-[6px] rounded-lg`}></span>
        )
    })}
</section>

{/* YOUR EDUCATION */}
<section className='flex flex-col items-center mb-8 '>
<span className='font-bold text-[1.2rem]'>Your Education 🎓</span>
<span className='text-gray text-[0.7rem]'>Tell Us about your academic background</span>
<span className='text-primary text-sm font-semibold'>800 WESPoint remaining to unlock ESA</span>
</section>
{/* REWARD */}

<section className='bg-lightBlue flex items-center rounded-md px-4 py-[5px] mb-8 space-x-2'>
    <img src="/gift.svg" alt="gift" className='w-[0.85rem]' />
<span className='text-primary font-bold xs:text-[0.8rem] text-[0.7rem]'>Your Reward for this step is 200 WESPoints</span>
</section>
<Form/>


</article>
         
    </div> 
  )
}

export default page