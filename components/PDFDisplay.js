import React, {useEffect} from 'react';
import ViewSDKClient from '../util/ViewSDKClient';
import styles from '../styles/PDFDisplay.module.css'

export const PDFDisplay = (props) => {

    useEffect(() => {
        console.log("started")
        const viewSDKClient = new ViewSDKClient(props.url);
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            console.log("getting file preview")

            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "IN_LINE", showDownloadPDF: true
            });
        });
    })

    return (
        <>

            <div id="pdf-div" className='max-w-[800px] mb-20'/>

        </>
    )

}



//export default PDFDisplay;