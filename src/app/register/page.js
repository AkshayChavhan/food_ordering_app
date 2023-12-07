"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

function RegisterUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [error, setError] = useState("");


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsUserCreated(false);
        setError("");
        setIsSubmiting(true);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': "application/json" }
        });

        if (response.ok) setIsUserCreated(true);
        else setError(`Error Occurs.  Please try again...`)
        setIsSubmiting(false);
    }


    return (
        <section className='text-center my-5' onSubmit={handleSubmitForm}>
            <h1 className='p-3'>Register</h1>
            {
                isUserCreated &&
                <div className='text-green-600'>
                    <p>User created successfully.{"  "}
                        <Link
                            href="/login"
                            className='underline'>Now you can login.</Link>
                    </p>
                </div>
            }
            {
                error && <p className='text-red-600'>{error}</p>
            }
            <form className='block max-w-sm mx-auto'>
                <input
                    type="text"
                    name="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmiting}
                />

                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmiting}
                />

                <button type='submit'
                    disabled={isSubmiting}>
                    Register
                </button>

                <div>
                    or login with other provider
                </div>
                <button
                    className='flex justify-center gap-6 items-center'
                    disabled={isSubmiting}
                >
                    <Image
                        src={"/google-logo.png"}
                        alt="google logo"
                        width="36"
                        height="36"
                    />
                    Login with google
                </button>
                <div className='py-3'>
                    Existing account.{" "}
                    <Link
                    className='underline'
                        href="/login">
                        Login here
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default RegisterUser