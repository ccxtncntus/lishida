'use client';
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { MdGroups } from 'react-icons/md';
import { RiBarChartGroupedFill } from 'react-icons/ri';
import { MdOutlineGroupWork } from 'react-icons/md';
import { FaArrowRightLong, FaFacebook, FaTelegram, FaUserGroup } from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';
import Image from 'next/image';

export default function Lishida() {
    const L = ['l1.png', 'l2.png', 'l3.png', 'l4.png', 'l5.png', 'l6.png', 'l7.png'];
    return (
        <>
            {/* header */}
            <section className='z-10 px-[100.23px] py-[11.14px] sticky top-0 shadow w-full bg-[white] overflow-hidden'>
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
                            <span>Giá trị từ lòng đất</span>
                        </p>
                    </div>
                    {/* btn */}
                    <div className='flex flex-row items-center gap-[22.27px]'>
                        <div className='flex gap-[16.17px]'>
                            <Link href={'#'}>Trang chủ</Link>
                            <Link href={'#'}>Sản phẩm</Link>
                            <Link href={'#'}>Về chúng tôi</Link>
                            <Link href={'#'}>Tin tức</Link>
                            <Link href={'#'}>Liên hệ</Link>
                        </div>
                        <button className='bg-main hover:cursor-pointer transition-colors text-white  rounded-[2.78px] px-[22.27px] py-[9.74px]'>
                            Khám phá ngay <GoArrowRight className='inline-block text-[24px]' />
                        </button>
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section className='toptop p-main py-[66.82px] flex gap-[72.39px] flex-row justify-between bg-silver items-center'>
                <div
                    className='max-w-[40%] flex flex-col gap-[22.27px]'
                    data-aos='fade-up'
                >
                    <div className='flex gap-[11.14px] flex-col'>
                        <p className='p-0 text-[44.55px] leading-[52.9px] font-semibold'>
                            Giải pháp <span className='text-custom'>than bùn hữu cơ</span> cho nông nghiệp bền vững
                        </p>
                        <p className='p-0'>Mang đến nguồn dinh dưỡng tự nhiên, thân thiện với môi trường và nâng cao chất lượng đất trồng.</p>
                    </div>
                    <div>
                        <button className='bg-main px-[22.27px] py-[9.74px] rounded-[2.78px] text-white hover:cursor-pointer'>Tìm hiểu thêm</button>
                    </div>
                </div>
                <div>
                    <img
                        data-aos='fade-up'
                        src='https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
                        alt='Banner img'
                        className='w-full h-[400px]'
                    />
                </div>
            </section>

            {/* Out client */}
            <section
                data-aos='fade-up'
                className='p-main py-[40px] '
            >
                <div className='flex gap-[5.57px] flex-col text-center'>
                    <h3 className='text-[25.06px] font-semibold leading-[30.6px]'>Đối tác của Lishida</h3>
                    <p className='text-[11.14px] text-[#89939E]'>Chúng tôi đồng hành cùng nhiều doanh nghiệp và nông trại trên toàn quốc</p>
                </div>
                <div className='flex justify-between h-[68.21px] items-center'>
                    <Image
                        alt='vip'
                        src={'/l1.png'}
                        width={34}
                        height={34}
                    />
                    {L.map((item, index) => (
                        <img
                            className='w-[33.41px] h-[33.41px] rounded-[5.57px]'
                            key={index}
                            src={process.env.PUBLIC_URL + item || ''}
                            alt={item}
                        />
                    ))}
                </div>
            </section>

            {/* Community */}
            <section
                data-aos='fade-up'
                className='p-main flex flex-col gap-[11.14px] py-[40px] '
            >
                <div className='flex gap-[5.57px] flex-col text-center'>
                    <h3 className='text-[25.06px] font-semibold leading-[30.6px] max-w-[400px] m-auto'>Giải pháp cho mọi mô hình sản xuất nông nghiệp</h3>
                    <p className='text-[11.14px] text-[#89939E]'>Lishida dành cho ai?</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='max-w-[240px] px-[22.27px] py-[16.71px] flex flex-col gap-1.5 text-center'>
                        <p className='flex justify-center'>
                            <MdGroups className='text-[28px] text-main' />
                        </p>
                        <h4 className='font-bold text-[19.49px] leading-[25.1px]'>Nông dân & hợp tác xã</h4>
                        <p>Hỗ trợ cải tạo đất, tăng năng suất cây trồng bằng sản phẩm than bùn chất lượng cao.</p>
                    </div>
                    <div className='max-w-[240px] px-[22.27px] py-[16.71px] flex flex-col gap-1.5 text-center'>
                        <p className='flex justify-center'>
                            <RiBarChartGroupedFill className='text-[28px] text-main' />
                        </p>
                        <h4 className='font-bold text-[19.49px] leading-[25.1px]'>Doanh nghiệp sản xuất</h4>
                        <p>Cung cấp nguồn nguyên liệu ổn định, phục vụ chế biến phân bón và cải tạo môi trường.</p>
                    </div>
                    <div className='max-w-[240px] px-[22.27px] py-[16.71px] flex flex-col gap-1.5 text-center'>
                        <p className='flex justify-center'>
                            <MdOutlineGroupWork className='text-[28px] text-main' />
                        </p>
                        <h4 className='font-bold text-[19.49px] leading-[25.1px]'>Đơn vị nghiên cứu</h4>
                        <p>Cung cấp mẫu than bùn chuẩn hóa, phục vụ thử nghiệm và phát triển công nghệ mới.</p>
                    </div>
                </div>
            </section>

            {/* Unlock */}
            <section
                data-aos='fade-up'
                className='toptop p-main flex flex-row'
            >
                <div className='basis-[37%]'>
                    <img
                        src='https://dongachem.vn/upload/Images/tin%20t%E1%BB%A9c%20%C4%91%C3%B4ng%20%C3%A1%202024/than%20b%C3%B9n%20l%C3%A0%20g%C3%AC/than-bun-la-gi-1.jpg'
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='flex gap-[22.27px] flex-col basis-[63%] items-start justify-center ms-8'>
                    <h3 className='font-semibold text-[25.06px] leading-[30.6px]'>Khám phá sức mạnh của than bùn tự nhiên</h3>
                    <p>Than bùn Lishida được khai thác và xử lý theo quy trình khép kín, đảm bảo giữ trọn các khoáng chất hữu cơ giúp đất tơi xốp, cải thiện độ ẩm và cân bằng hệ sinh thái đất.</p>
                    <button className='bg-main text-white px-[22.27px] py-[9.74px] rounded-[2.78px]'>Tìm hiểu thêm</button>
                </div>
            </section>

            {/* Helping */}
            <section
                data-aos='fade-up'
                className='p-main py-[44.55px] flex flex-row justify-center items-center'
            >
                <div className='basis-1/2'>
                    <p className='font-semibold text-[25.06px] leading-[30.6px] '>Đồng hành cùng nhà nông</p>
                    <p className='font-semibold text-[25.06px] leading-[30.6px] text-main'>xây dựng nông nghiệp xanh</p>
                    <p className='text-[11.14px] text-gray-900 mt-1.5'>Thành tựu đạt được nhờ sự tin tưởng và nỗ lực không ngừng</p>
                </div>
                <div className='basis-1/2'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div>
                            <FaUserGroup className='text-main text-2xl' />
                            <p className='text-3xl font-semibold'>2,245+</p>
                            <p className='text-gray-900 text-[12px]'>Khách hàng</p>
                        </div>
                        <div>
                            <FaUserGroup className='text-main text-2xl' />
                            <p className='text-3xl font-semibold'>50+</p>
                            <p className='text-gray-900 text-[12px]'>Đối tác chiến lược</p>
                        </div>
                        <div>
                            <FaUserGroup className='text-main text-2xl' />
                            <p className='text-3xl font-semibold'>100+</p>
                            <p className='text-gray-900 text-[12px]'>Dự án triển khai</p>
                        </div>
                        <div>
                            <FaUserGroup className='text-main text-2xl' />
                            <p className='text-3xl font-semibold'>10+</p>
                            <p className='text-gray-900 text-[12px]'>Tỉnh thành phủ sóng</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Setting */}
            <section
                data-aos='fade-up'
                className='toptop p-main flex flex-row'
            >
                <div className='basis-[37%]'>
                    <img
                        src='https://media.baoquangninh.vn/dataimages/202002/original/images1364094_say_than.jpg'
                        alt=''
                        className='w-full'
                    />
                </div>
                <div className='flex gap-[22.27px] flex-col basis-[63%] items-start justify-center ms-8'>
                    <h3 className='font-semibold text-[25.06px] leading-[30.6px]'>Công nghệ sản xuất thân thiện môi trường</h3>
                    <p>Lishida sử dụng dây chuyền sản xuất hiện đại, không gây ô nhiễm và đảm bảo chất lượng sản phẩm cao nhất. Chúng tôi hướng đến nền nông nghiệp tuần hoàn và bền vững.</p>
                    <button className='bg-main text-white px-[22.27px] py-[9.74px] rounded-[2.78px]'>Xem chi tiết</button>
                </div>
            </section>

            {/* Tim */}
            <section
                data-aos='fade-up'
                className='toptop p-main flex flex-row bg-silver gap-5 py-6'
            >
                <div className='basis-[37%]'>
                    <img
                        src='/company.jpg'
                        alt=''
                        className='aspect-square object-cover w-full'
                    />
                </div>
                <div className='flex gap-[22.27px] flex-col basis-[63%] items-start justify-end'>
                    <p>“Chúng tôi rất ấn tượng với chất lượng than bùn của Lishida. Sản phẩm giúp đất giữ ẩm tốt hơn và cây trồng phát triển ổn định trong điều kiện khô hạn.”</p>
                    <div>
                        <p className='text-2xl text-main font-bold'>Nguyễn Văn Hòa</p>
                        <span className='text-gray-900'>Giám đốc Hợp tác xã Nông nghiệp Xanh</span>
                    </div>
                    <div className='flex justify-between h-[68.21px] items-center align-middle w-full'>
                        {L.map((item, index) => (
                            <img
                                className='w-[33.41px] h-[33.41px] rounded-[5.57px]'
                                key={index}
                                src={item}
                                alt={item}
                            />
                        ))}
                        <Link
                            href={'#'}
                            className='text-main flex flex-row justify-center items-center gap-1'
                        >
                            Xem thêm đối tác <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Caring */}
            <section
                data-aos='fade-up'
                className='p-main py-8'
            >
                <div className='flex gap-[5.57px] flex-col text-center'>
                    <h3 className='text-[25.06px] font-semibold leading-[30.6px]'>Các lĩnh vực khác</h3>
                    <p className='text-[11.14px] text-[#89939E]'>Ngoài than bùn Lishida đã và đang mở rộng khai thác và sản xuất các loại chất đốt khác</p>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-4'>
                    <div className='relative'>
                        <img
                            src='https://i.pinimg.com/1200x/67/ec/b7/67ecb7b4c8e58e1b8936e1bd07152584.jpg'
                            alt='img'
                            className='w-full aspect-square rounded-[8px]'
                        />
                        <div className='w-[80%] text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-40%] bg-gray-200 rounded-2xl shadow p-4'>
                            <p>Viên nén gỗ là nguồn nhiên liệu sạch, giúp tạo nhiệt ổn định và tiết kiệm năng lượng</p>
                            <Link
                                href={'#'}
                                className='text-main flex flex-row justify-center items-center gap-1 mt-2'
                            >
                                Tìm hiểu thêm <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <img
                            src='https://i.pinimg.com/736x/54/78/e4/5478e45427cb6420e627c5a1d6987881.jpg'
                            alt='img'
                            className='w-full aspect-square rounded-[8px]'
                        />
                        <div className='w-[80%] text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-40%] bg-gray-200 rounded-2xl shadow p-4'>
                            <p>Than củi dùng làm nhiên liệu đốt, tạo nhiệt mạnh và thân thiện với môi trường</p>
                            <Link
                                href={'#'}
                                className='text-main flex flex-row justify-center items-center gap-1 mt-2'
                            >
                                Tìm hiểu thêm <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <img
                            src='https://thorakao.com/wp-content/uploads/2021/07/than.jpg'
                            alt='img'
                            className='w-full aspect-square rounded-[8px]'
                        />
                        <div className='w-[80%] text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-40%] bg-gray-200 rounded-2xl shadow p-4'>
                            <p>Than tre cháy lâu, ít khói, thân thiện môi trường, dùng trong nấu nướng và lọc không khí.</p>
                            <Link
                                href={'#'}
                                className='text-main flex flex-row justify-center items-center gap-1 mt-2'
                            >
                                Tìm hiểu thêm <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orther */}
            <section className='toptop p-main text-center py-8 mt-8 bg-silver'>
                <div className='flex gap-[22.27px] flex-col'>
                    <h3 className='font-semibold m-auto text-[40px] max-w-[40%] leading-[50px]'>Lishida – Đồng hành cùng nông nghiệp Việt Nam</h3>
                    <div>
                        <Link
                            href={'#'}
                            className='bg-main text-white px-[22.27px] py-[9.74px] rounded-[2.78px]'
                        >
                            Liên hệ ngay <FaArrowRightLong className='inline-block ms-2 mb-1' />
                        </Link>
                    </div>
                </div>
            </section>
            {/* bottom */}
            <section className='p-main py-8 bg-gray-900 text-white'>
                <div className='grid grid-cols-7'>
                    <div className='col-span-3'>
                        <div className='flex flex-row gap-1 mb-4'>
                            <img
                                src='/logodone.png'
                                alt='logo'
                                className='h-[40px] rounded-full'
                            />
                            <p className='p-0 flex flex-col'>
                                <span className='size-5 font-bold'>Lishida</span>
                                <span>Giá trị từ lòng đất</span>
                            </p>
                        </div>
                        <p className='mb-2'>© 2025 Lishida Việt Nam</p>
                        <p className='mb-4'>Tất cả các quyền được bảo lưu</p>
                        <div className='flex flex-row gap-4'>
                            <FaTelegram className='text-[20px]' />
                            <FaFacebook className='text-[20px]' />
                            <SiZalo className='text-[20px]' />
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-[20px] mb-4'>Công ty</p>
                        <ul>
                            <li className='mb-2'>Giới thiệu</li>
                            <li className='mb-2'>Tin tức</li>
                            <li className='mb-2'>Liên hệ</li>
                            <li className='mb-2'>Tuyển dụng</li>
                            <li className='mb-2'>Hợp tác</li>
                        </ul>
                    </div>

                    <div className='col-span-1'>
                        <p className='text-[20px] mb-4'>Hỗ trợ</p>
                        <ul>
                            <li className='mb-2'>Trung tâm trợ giúp</li>
                            <li className='mb-2'>Chính sách bảo mật</li>
                            <li className='mb-2'>Điều khoản sử dụng</li>
                            <li className='mb-2'>Báo cáo vi phạm</li>
                        </ul>
                    </div>

                    <div className='col-span-2'>
                        <p className='text-[20px] mb-4'>Đăng ký nhận tin</p>
                        <form>
                            <div className='relative'>
                                <input
                                    type='search'
                                    id='search'
                                    className='block w-full p-4 ps-8 text-sm text-white border border-gray-600 rounded-lg bg-[#717171]'
                                    placeholder='Nhập email của bạn'
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
