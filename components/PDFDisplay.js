import React, {useEffect} from 'react';
import ViewSDKClient from '../util/ViewSDKClient';
import styles from '../styles/PDFDisplay.module.css'

export const PDFDisplay = (props) => {

    useEffect(() => {
        console.log("initialized")
        const viewSDKClient = new ViewSDKClient(props.url);
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "IN_LINE"
            });
        });
    })

    return (
        <>
            <script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>

            <div id="pdf-div" className={styles.container_div}/>

        </>
    )

}



//export default PDFDisplay;