/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    return (
        <div className='px-2 md:px-20 sticky top-0 shadow w-full'>
            <div className='bg-white p-2 relative '>
                <div
                    data-aos='fade-up'
                    className=' absolute top-1/2 left-[5%] md:left-[10%] transform -translate-y-1/2 max-w-[60%] md:max-w-[40%]'
                >
                    <h2 className=' text-white text-[16px] md:text-4xl '>Nâng cao kỹ năng để phát triển sự nghiệp</h2>
                    <p className='p-0 my-2 md:my-10 text-white text-[12px] md:text-[16px]'>Tham gia cộng đồng học viện hàng đầu Việt Nam</p>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                        <button className='bg-white hover:cursor-pointer transition-colors text-[black]  rounded md:px-10   md:py-4 py-2 text-[12px] md:text-[16px]'>Tham gia miễn phí</button>
                        <button className='border-2 bg-transparent hover:cursor-pointer transition-colors text-white  rounded md:px-10    md:py-4 py-2 text-[12px] md:text-[16px]'>Xem khóa học</button>
                    </div>
                </div>
                <img
                    src='/banner.jpg'
                    alt='banner'
                    className='w-full '
                />
            </div>
        </div>
    );
}
