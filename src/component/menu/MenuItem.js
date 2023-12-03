import React from 'react'

function MenuItem() {
    return (
        <div
        className='bg-gray-300 rounded-md
        p-4 text-center hover:bg-white
        hover:shadow-md hover:shadow-black/80 black transition-all'
        >
            <img
                src="/pizza.png"
                alt="image"
                className='max-h-auto max-w-auto'
            />
            <h4 className='font-semibold my-3'>Pepporoni Pizza</h4>
            <p className='text-gray-500 text-sm'>
                fsdfsd sgfn gfionren rfnefu sdnjjfsdfnfsd fdsfnsjkffsdi sfdffnjd
            </p>
            <button className='text-white bg-primary px-4 py-2 rounded-full my-3'>
                Add to cart $12
            </button>
        </div>
    )
}

export default MenuItem