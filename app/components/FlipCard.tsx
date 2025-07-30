import React from 'react';

const FlipCard = ({ title, subtitle, icon }: { title: string; subtitle: string | undefined; icon: any }) => {
    return (
        <div className="relative font-semibold  w-72 h-96 overflow-visible group ">
            <div className="w-full h-full transition-transform duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-stone-300 shadow-stone-400 shadow-lg border-2 rounded-md bg-gradient-to-b from-white  to-blue-100">

                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-md overflow-hidden [transform:rotateY(180deg)]">
                    <div className='absolute'></div>
                    <div className="w-full h-full p-2 flex flex-col justify-between items-center">
                        <div className="w-full h-full p-2 flex justify-center items-center backdrop-blur-sm rounded-md">
                            <p className="w-3/4 h-full flex justify-center items-center text-center leading-tight">{subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="w-full h-full [backface-visibility:hidden] rounded-md flex items-center justify-center overflow-hidden">
                    <div className="h-full rounded-md flex pt-5 px-10 flex-col items-center justify-evenly">
                        <div className="flex items-center justify-center scale-400">{icon}</div>
                        <p className='text-2xl text-center'>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
