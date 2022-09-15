import '../styles/globals.css'
import {Navbar} from "../components/Navbar";
import Image from "next/image";
import {ChakraProvider, extendTheme, Text} from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {

    const theme = extendTheme({
        styles: {
            global: () => ({
                body: {
                    bg: "",
                },
            }),
        },
    });


    return (
        <ChakraProvider theme={theme} className='min-h-screen'>
            <Navbar/>
            <Component {...pageProps} />
            <footer  className='border-t-[1px] border-black p-10  inset-x-0 bottom-0'>
                <Text className="flex items-center justify-center">Site built with Next.js / React, Tailwind CSS, and Chakra</Text>
                <div className="flex items-center justify-center mt-4">
                    <Image src="/logo_main.svg" alt="cat_logo" width={72} height={16} />
                </div>

            </footer>
        </ChakraProvider>
    )
}

export default MyApp
