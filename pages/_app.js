import '../styles/globals.css'
import {Navbar} from "../components/Navbar";
import Image from "next/image";
import {ChakraProvider, extendTheme, Text} from '@chakra-ui/react'
import React from "react";
import Script from "next/script";
import Head from "next/head";


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
        <div className='min-h-screen flex flex-col'>
            <ChakraProvider theme={theme} >
                <Navbar/>
                <Script
                    src="https://documentcloud.adobe.com/view-sdk/main.js"
                    strategy="beforeInteractive"></Script>
                <Component {...pageProps} />

                <footer  className=' w-full h-24 border-t-[1px] border-black p-5  bg-[#F2D388]'>
                    <Text className="flex items-center justify-center">Site built with Next.js / React, Tailwind CSS, and Chakra</Text>
                    <div className="flex items-center justify-center mt-4">
                        <Image src="/logo_main.svg" alt="cat_logo" width={72} height={16} />
                    </div>

                </footer>
            </ChakraProvider>
        </div>

    )
}

export default MyApp
