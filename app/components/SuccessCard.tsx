import React from 'react'

const SuccessCard = ({
    name,
    location,
    quote,
    program,
    university,
}: {
    name: string
    location: string
    quote: string
    program: string
    university: string
}) => {
    return (
        <div className="border p-4 mb-4 rounded min-h-52 shadow-md flex flex-col gap-2 sm:p-6 sm:min-h-60">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full object-cover bg-gray-300 flex items-center justify-center text-xs sm:w-12 sm:h-12">
                    pic
                </div>
                <div>
                    <p className="font-semibold text-base sm:text-lg">{name}</p>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base">{quote}</p>

            <div className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded w-fit sm:text-sm">
                {program}
            </div>

            <div className="flex items-center justify-end mt-auto">
                <p className="text-xs font-semibold sm:text-sm">{university}</p>
            </div>
        </div>
    )
}

export default SuccessCard
