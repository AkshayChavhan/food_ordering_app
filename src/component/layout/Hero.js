import Image from 'next/image'
import React from 'react'
import Rightarrow from '../icons/right_arrow'

function Hero() {
    return (
        <section className='hero py-8'>
            <div className='col-span-1'>
                <h1 className='text-6xl font-bold py-5'>Everything <br/> better with <br/>
                <span className='text-red-500 font-extrabold'>Desi Pizza</span></h1>
                <p className='text-2xl text-gray-600 py-5'>
                    Piza is missing place that make the every day
                    complete , simple yet delicious joy in life.
                </p>
                <div className='flex gap-5 py-5'>
                    <button className='text-white uppercase font-semibold flex gap-2 bg-primary px-4 py-2 rounded-full'>
                        Order Now
                        <Rightarrow />
                    </button>
                    <button className='text-primary font-semibold flex gap-2 px-4 py-2'>
                        Learn more
                        <Rightarrow />
                    </button>
                </div>
            </div>
            <div className='relative col-span-1'>
                <Image
                width={400}
                height={400}
                    objectFit='content'
                    alt='pizza'
                    src={'/pizza.png'} 
                    />
            </div>
        </section>
    )
}

export default Hero