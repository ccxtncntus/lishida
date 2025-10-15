/* eslint-disable @next/next/no-img-element */
export const Header = () => {
    return (
        <div className='px-2 sm:px-20 py-2 sticky top-0 shadow w-full bg-[white]'>
            <div className='flex justify-between items-center'>
                {/* icon */}
                <div className='flex flex-row gap-1'>
                    <img
                        src='/logodone.png'
                        alt='logo'
                        className='h-[40px] rounded-full'
                    />
                    <p className='p-0 flex flex-col'>
                        <span className='size-5 font-bold'>Lishida</span>
                        <span>Uy tín tạo niềm tin</span>
                    </p>
                </div>
                {/* btn */}
                <div>
                    <button className=' hidden sm:inline-block  bg-blue-500 hover:cursor-pointer hover:bg-blue-700 transition-colors text-white  rounded px-10 py-2'>Khám phá ngay</button>
                </div>
            </div>
        </div>
    );
};
