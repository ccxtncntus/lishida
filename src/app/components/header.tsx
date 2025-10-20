import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
    return (
        <div className='px-[100.23px] py-[11.14px] sticky top-0 shadow w-full bg-[white]'>
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
                <div className='flex flex-row items-center gap-[22.27px]'>
                    <div className='flex gap-[16.17px]'>
                        <Link href={'#'}>Trang chủ</Link>
                        <Link href={'#'}>Đặc trưng</Link>
                        <Link href={'#'}>Cộng đồng</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Thêm</Link>
                    </div>
                    <button className='bg-main hover:cursor-pointer transition-colors text-white  rounded-[2.78px] px-[22.27px] py-[9.74px]'>
                        Khám phá ngay <GoArrowRight className='inline-block text-[24px]' />
                    </button>
                </div>
            </div>
        </div>
    );
};
