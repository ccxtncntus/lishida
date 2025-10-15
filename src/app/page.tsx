'use client';
// import Image from 'next/image';
import Banner from './components/banner';
import { Header } from './components/header';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default function Home() {
    AOS.init();
    return (
        <div className='bg-[#f5f7fa]'>
            <Header />
            <Banner />
        </div>
    );
}
