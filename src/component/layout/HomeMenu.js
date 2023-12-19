"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeader from '../header/Section_header'

function HomeMenu() {

    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setBestSellers(menuItems.slice(-3));
            });
        });
    }, []);

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
            <div className="text-center mb-4">
                <SectionHeader
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {bestSellers?.length > 0 && bestSellers.map(item => (
                    <MenuItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default HomeMenu