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
            </Head>

            <div className='place-items-center items-center grid grid-cols-1 lg:grid-cols-2 place-content-center'>
                <img src="/cat_drawing.png" alt="Really cool cat in barista apron" className='max-w-[95%] lg:-mr-10' style={{padding: 50}}/>
                <div className='max-w-prose lg:justify-self-start '>
                    <Text fontSize='5xl'>Hi, I'm Wilson</Text>
                    <Text fontSize='3xl' className='mb-4 mt-4'>I'm a front-end developer with experience in UX design and user research. I build usable, accessible web apps.
                    </Text>
                    <Text fontSize='3xl' className='mb-8'>In my free time, you’ll find me roasting coffee and brushing my cats :)</Text>

                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <a className=" text-center my-4 lg:mr-6 bg-transparent font-semibold hover:text-white py-2 px-4 border border-black rounded"
                           href='https://github.com/wilsonmui/wilsonmui.github.io'>See portfolio in Github</a>
                        <a className=" text-center my-4 bg-transparent font-semibold hover:text-white py-2 px-4 border border-black rounded"
                           href='/resume'>Resume</a>
                    </div>


                </div>
            </div>



            <Text fontSize='4xl' className='mt-16 xl:ml-8'>
                Design + Research
            </Text>
            <div className='m-8 place-items-center grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 ' >
                <PortfolioCard url={urlPrefix + 'Thesis.pdf'} image='/card-images/thesis.png' name="Designing an Interface for ML Drawing Tools" desc="This project involves ideating a novel interface for ML drawing algorithms."/>
                <PortfolioCard url={urlPrefix + 'Emotional-Contagion-Paper.pdf'} image='/card-images/chatbot.png' name="Emotional Contagion from Chatbots" desc="Can a chatbot's exhibited feelings influence a human's emotions? Turns out it can."/>
                <PortfolioCard url={urlPrefix + 'Mitigating Breakdowns with Cute Behavior.pdf'} image='/card-images/relay_robot.png' name="Mitigating Breakdowns with Cute Behavior" desc="We explore the use of cute design aesthetics to improve human-robot interactions"/>
                <PortfolioCard url={urlPrefix + 'MuseVR_ EEG and Virtual Reality for Self-Therapy.pdf'} image='/card-images/museVR.png' name="MuseVR" desc="A project exploring the use of a VR environment with human-brain interaction for therapy."/>
                <PortfolioCard url={urlPrefix + 'Supporting Discord in Computational Media Courses.pdf'} image='/card-images/discord.png' name="Supporting Discord in Online Courses" desc="How can we support online education through the use of Discord communities?"/>

            </div>


        </div>
    )
}
