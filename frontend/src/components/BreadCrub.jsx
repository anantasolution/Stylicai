import React from 'react'
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function BreadCrub() {

    const location = useLocation()

    const getPathName = ()=>{
        const pathname = location.pathname
        return pathname.slice(1,pathname.length)
    }


  return (
    <div className='flex justify-center bg-navyblue md:pt-40 md:py-28 pt-28 py-20 items-center'>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-white text-5xl font-semibold'>{getPathName().toUpperCase()}</h1>
            <div className='flex items-center gap-2'>
                <span className='text-white font-semibold'>Home</span>
                <span className='text-golden'><ChevronRight></ChevronRight></span>
                <span className='text-gray-200 font-semibold'>{getPathName().charAt(0).toUpperCase() + getPathName().slice(1)}</span>
            </div>
        </div>
    </div>
  )
}

export default BreadCrub