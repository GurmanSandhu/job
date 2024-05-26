import React from 'react'
import { FaEnvelopeOpen, FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"


const NewsLetter = () => {
  return (
    <div>
        <div >
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText/>
            Email me for jobs</h3>
            <p className='text-primary/75 text-base mb-4'>Get all recent updates for jobs and intenships</p>
            <div className='w-full space-y-4'>
                <input type="email" name='email' id='email' placeholder='name@mail.com' className='w-full vlock py-2 pl-3 border focus-outline-none' />
                <input type="submit" value={"Subscribe"} className='w-full vlock py-2 pl-3 border focus-outline-none bg-blue rounded-sm text-wide cursor-pointer font-semibold text-white'/>
            </div>
        </div>

        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket/>
            Get noticed faster</h3>
            <p className='text-primary/75 text-base mb-4'>Tell us more about yourself</p>
            <div className='w-full space-y-4'>
                <input type="submit" value={"Upload your resume"} className='w-full vlock py-2 pl-3 border focus-outline-none bg-blue rounded-sm text-wide cursor-pointer font-semibold text-white'/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter