import React from 'react'
import LoginForm from './LoginForm'
import Tickersvg from '@/public/svg/Tickersvg'

const FormPage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-gradient-to-b from-white via-blue-100 to-white "
        >
            <div className="  w-full ps-10 md:w-1/2 py-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-5 text-blue-900 leading-tight">
                    Study Abroad 
                    Consultants in Delhi
                </h2>
                <div className="flex items-center text-base sm:text-lg md:text-xl gap-1 mb-1">
                    <Tickersvg />
                    Courses starting from <span className="font-semibold">₹8 Lakhs*</span>
                </div>
                <div className="flex items-center text-base sm:text-lg md:text-xl gap-1 mb-1">
                    <Tickersvg />
                    Scholarship worth <span className="font-semibold">₹10,00,000*</span>
                </div>
                <div className="flex items-center text-base sm:text-lg md:text-xl gap-1 mb-1">
                    <Tickersvg />
                    Offer letter in less than <span className="font-semibold">48 hours*</span>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-20">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default FormPage
