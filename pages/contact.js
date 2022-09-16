import {Heading, Text} from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import Head from "next/head";

function NextLink(props) {
    return null;
}

export default function Contact() {
    return (
        <div className='grid grid-cols-1 place-items-center'>
            <Head>
                <title>Contact</title>
                <meta name="description" content="contact" />
            </Head>

            <Heading className='m-14 inline-block '>Contact</Heading>
            <Text fontSize='3xl' className='m-24'>You can reach me at my email: wimui@ucsc.edu</Text>

            <Text fontSize='3xl' className='mb-24 underline'>
                <Link href='https://www.linkedin.com/in/wilson-mui-338b52148/'>LinkedIn</Link>

            </Text>

        </div>



    )
}