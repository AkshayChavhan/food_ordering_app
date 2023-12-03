import React from 'react'

function SectionHeader({ subheader , mainheader}) {
    return (
        <div>
            <h3 className='text-gray-500 text-xl'>{subheader}</h3>
            <h2 className='text-primary text-4xl py-3'>{mainheader}</h2>
        </div>
    )
}

export default SectionHeader