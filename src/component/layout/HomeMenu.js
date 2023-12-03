import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeader from '../header/Section_header'

function HomeMenu() {
    return (
        <section>
            <div className='absolute left-0 right-0'>
                <div className='absolute left-0'>
                    <Image
                        src={"/sallad1.png"}
                        // layout='fill'
                        // objectFit='content'
                        alt='sallad1'
                        width={250}
                        height={250}
                    />
                </div>
                <div className='absolute right-0 -top-50'>
                    <Image
                        src={"/sallad2.png"}
                        // layout='fill'
                        // objectFit='content'
                        alt='sallad1'
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <div className='text-center'>
                <SectionHeader
                    subheader={"Check Out"}
                    mainheader={"Menu"}
                />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}

export default HomeMenu