import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [state, handleSubmit] = useForm("xanynlvq");
    if (state.succeeded) {
        return <div className='fixed h-full w-full flex flex-col bg-black text-white items-center justify-center'>
            <p className='my-12 text-2xl'>Thanks for joining!</p>
            <div className="hover:text-gray-200">
                        <Link to="/">
                            <button className="flex flex-row gap-2"> Back to Home</button>
                        </Link>
                    </div>
        </div>;
    }
    return (
        <div className="fixed w-full h-full bg-black font-mono text-white flex flex-col justify-center items-center px-12 py-12 ">
            <div className='sm:w-[30%] sm:h-full'>
                <form className="flex flex-col h-full justify-evenly" onSubmit={handleSubmit}>
                    <label htmlFor="name" className='pb-4'>
                        Name
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        className='h-24 text-black'
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <label htmlFor="email" className='pb-4 pt-4'>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className='h-24 text-black'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message" className='pb-4 pt-4'>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className='h-full text-black'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    {state.errors && <div class="text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span class="block sm:inline">Please enter the field values</span>
                    </div>}
                    <button type="submit" className='my-12 py-4 w-[45%] ml-[30%] rounded-12 bg-white text-black' disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}