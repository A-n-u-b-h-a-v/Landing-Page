'use client';
import React, { useState } from 'react';
import { countries } from '../contsant/constant';
import { UniversityData } from '../contsant/constant';

const UniversityPage = () => {
    const [country, setCountry] = useState('United Kingdom');

    return (
        <div className="mb-30 w-full px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white  via-blue-100 to-white ">
            <div className="text-3xl sm:text-4xl md:text-5xl capitalize font-extrabold mt-6 sm:mt-10">
                Top Universities to <span className="text-blue-900">Study Abroad</span>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 py-4 cursor-pointer">
                {countries.map((c) => (
                    <div
                        key={c.name}
                        className={`flex items-center gap-2 text-base sm:text-lg font-semibold transition-colors duration-200 p-2 ${
                            String(c.name) === String(country)
                                ? 'text-blue-900 border-b-2 border-blue-900 '
                                : 'text-gray-600 hover:text-blue-800'
                        }`}
                        onClick={() => setCountry(String(c.name))}
                    >
                        <img className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" src={c.flag} alt={c.name} />
                        {c.name}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
                {UniversityData.find((u) => u.country === country)?.universities.map((uni, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 py-4 flex flex-col sm:flex-row p-4 items-center gap-4 justify-between transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:border-gray-400 mt-6"
                    >
                        <div className="flex flex-col sm:flex-row justify-around w-full sm:w-3/4 items-center">
                            <div className="flex items-center justify-center text-center py-3 text-xs w-10 h-10 bg-stone-300 mb-2 sm:mb-0">
                                uni logo
                            </div>
                            <div className="w-full sm:w-[75%] text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-semibold">{uni.name}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">{uni.location}</p>
                            </div>
                        </div>
                        <div className="flex items-end h-full mt-2 sm:mt-0">
                            <div className="flex items-center text-end text-[2.5vw] sm:text-xs bg-amber-200 px-2 h-5 sm:h-6 font-semibold rounded-full whitespace-nowrap overflow-hidden text-ellipsis">
                                {uni.courses}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UniversityPage;
