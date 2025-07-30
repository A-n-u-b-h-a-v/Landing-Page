import React from 'react'

const LeverageCard = ({ title,subtitle, icon }: { title: string;subtitle:string|undefined; icon: any }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md min-h-32 cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transition-transform duration-300 hover:scale-105 ease-in-out">
            <div className="flex flex-col gap-6 items-center">
           <div className="relative text-center -mt-10 text-4xl sm:text-5xl md:text-6xl after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-15 after:h-3 after:rounded-[100%] after:bg-black/10  after:z-[-1] after:opacity-100">
  {icon}
</div>


                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">{title}</h3>
                </div>
                <div>
                    <p className="text-sm text-gray-500 text-center">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default LeverageCard
