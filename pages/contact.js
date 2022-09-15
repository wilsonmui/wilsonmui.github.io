import {Navbar} from "../components/Navbar";
import {Heading, Text} from "@chakra-ui/react";
import {PDFDisplay} from "../components/PDFDisplay";

export default function Contact() {
    return (
        <div className='grid grid-cols-1 place-items-center'>

            <Heading className='m-14 inline-block '>Contact</Heading>
            <Text fontSize='3xl' className='m-24'>You can reach me at my email: wimui@ucsc.edu</Text>

        </div>



    )
}