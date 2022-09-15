import {PDFDisplay} from "../components/PDFDisplay";
import {Heading} from "@chakra-ui/react";

export default function Resume() {

    return (


        <div className='grid grid-cols-1 place-items-center'>

            <Heading className='m-14 inline-block '>Resume</Heading>
            <PDFDisplay url='https://wilsonmui.github.io/pdf/resume.pdf'/>

        </div>



    )
}