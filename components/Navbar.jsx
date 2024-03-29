import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap  p-3 border-b-[1px] border-black'>
                <a href='/'>
                    <img src='/logo_main.svg' className={styles.icon}/>
                </a>
                <button
                    className=' inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-white'>
                                Home
                            </a>
                        </Link>
                        <Link href='/resume'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blackitems-center justify-center hover:text-white'>
                                Resume
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-white'>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
