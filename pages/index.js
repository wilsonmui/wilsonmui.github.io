import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Heading, Text} from "@chakra-ui/react";
import {PortfolioCard} from "../components/PortfolioCard";

export default function Home() {
    let urlPrefix = 'https://wilsonmui.github.io/pdf/'

    return (
        <div className={styles.container}>
            <Head>
                <title>Wilson Mui - Portfolio</title>
                <meta name="description" content="Wilson's portfolio" />
                <link rel="icon" href="/logo_main.svg" />
            </Head>

            <div className='place-items-center items-center grid grid-cols-1 lg:grid-cols-2 place-content-center'>
                <img src="/cat_drawing.png" alt="Really cool cat in barista apron" className='max-w-[800px] lg:-mr-10' style={{padding: 50}}/>
                <div className='max-w-prose lg:justify-self-start '>
                    <Text fontSize='5xl'>Hi, I'm Wilson</Text>
                    <Text fontSize='3xl' className='mb-4 mt-4'>I am a front-end developer with experience in UX design and user research. I build modern web apps with emphasis in usability and accessibility.
                    </Text>
                    <Text fontSize='3xl' className='mb-8'>In my free time, you’ll find me roasting coffee and brushing my cats :)</Text>

                    <a className=" bg-transparent font-semibold hover:text-white py-2 px-4 border border-black rounded"
                       href='https://wilsonmui.github.io/'>View this portfolio on Github</a>

                </div>
            </div>



            <Text fontSize='4xl' className='mt-16'>
                Design + Research
            </Text>
            <div className='m-8 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' >
                <PortfolioCard url={urlPrefix + 'resume.pdf'} image='/card-images/chatbot.png' name="Emotional Contagion from Chatbots" desc="Can a chatbot's exhibited feelings influence a human's emotions? Turns out it can."/>
            </div>


        </div>
    )
}
