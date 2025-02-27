"use client"

const page = () => {
  return (
    <div className="font-manrope min-w-screen min-h-screen flex flex-col  justify-center items-center  text-[1rem]">
        <article className="w-full my-16 mds:w-[70%] sm:w-[60%] md:w-[50%] lg:w-[35%] mx-4 px-4">

<section className="w-full flex flex-col items-center">
    <img src="/wow.png" alt="wow" className="w-[50%] object-cover" />
    <span className="text-green font-bold text-[1.3rem] my-2">Congratulations</span>
    <span className="text-gray">You've earned 1000 WESPoints</span>
</section>

<section className="w-full flex flex-col items-center bg-lightBlue px-3 rounded-md mt-8 py-4 text-center">
    <span className="flex space-x-2">
        <img src="/gift.svg" alt="gift" />
        <span className="text-primary font-bold my-2">Your Rewards</span>
    </span>
    <span className="font-semibold text-primary my-2">2000 WESPoint Unlocked</span>
    <span className="text-primary my-2 text-[0.9rem]">Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!</span>
    
    <button className="bg-primary w-full text-center h-[38px] rounded-md text-white my-2">Take ESA</button>
</section>
        </article>


    </div>
  )
}

export default page