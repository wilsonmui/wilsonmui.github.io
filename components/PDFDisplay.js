import React, {Component, useEffect} from 'react';
import ViewSDKClient from '../util/ViewSDKClient';
import styles from '../styles/PDFDisplay.module.css'

export const PDFDisplay = (props) => {

    useEffect(() => {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "SIZED_CONTAINER"
            });
        });
    })

    return (
        <div id="pdf-div" className={styles.container_div}/>
    )

}



export default PDFDisplay;