/* eslint-disable @next/next/no-img-element */
export default function Banner() {
    return (
        <section className='toptop p-main py-[66.82px] flex gap-[72.39px] flex-row justify-between bg-silver items-center'>
            {/* section */}
            <div
                className='max-w-[457.32px] flex flex-col gap-[22.27px]'
                data-aos='fade-up'
            >
                <div className='flex gap-[11.14px] flex-col'>
                    <p className='p-0 text-[44.55px] leading-[52.9px] font-semibold'>
                        Lessions and insignts <span className='text-custom'>from 8 years</span>
                    </p>
                    <p className='p-0'>Lorem ipsum dolor sit amet consectetur elit.</p>
                </div>
                <div>
                    <button className='bg-main px-[22.27px] py-[9.74px] rounded-[2.78px] text-white hover:cursor-pointer'>Đăng ký ngay</button>
                </div>
            </div>
            {/* img */}
            <div>
                <img
                    data-aos='fade-up'
                    src='/Illustration.png'
                    alt='Banner img'
                    className='w-[272.16px] h-[283.3px]'
                />
            </div>
        </section>
    );
}
