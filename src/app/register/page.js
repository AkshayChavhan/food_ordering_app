import Image from 'next/image'
import React from 'react'

function RegisterUser() {
    return (
        <section className='text-center my-5'>
            <h1 className='p-3'>Register</h1>
            <form className='block max-w-sm mx-auto'>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button type='submit'>
                    Register
                </button>
                <div>
                    or login with other provider
                </div>
                <button
                className='flex justify-center gap-6 items-center'
                >
                    <Image
                    src={"/google-logo.png"}
                    alt="google logo"
                    width="36"
                    height="36"
                    />
                    Login with google
                </button>
            </form>
        </section>
    )
}

export default RegisterUser