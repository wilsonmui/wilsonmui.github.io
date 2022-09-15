import {PDFDisplay} from "../components/PDFDisplay";

export default function Resume() {

    return (


        <div className='flex items-center justify-center'>

            <h1>Resume</h1>
            <PDFDisplay url='https://wilsonmui.github.io/resume.pdf'/>

        </div>



    )
}