import { useRef, useState, useEffect } from "react";
import "./App.css";
import hogback from "./hogwartsClassroom.jpg";
import styles from "./styles.module.css";

function App() {
    //react doesnt support srcobject, need to use ref, ref not supported in functional components, need to use
    const StreamCam = () => {
        const playerRef = useRef();
        useEffect(() => {
            console.log("using effect");
            navigator.mediaDevices
                .getUserMedia({ video: { facingMode: "environment" } })
                .then(function (stream) {
                    playerRef.current.srcObject = stream;
                })
                .catch(function (err) {
                    console.log("Something went wrong!");
                });
        });
        return (
            <video autoplay="true" id="videoElement" ref={playerRef}></video>
        );
    };
    return (
        <div id="mainscreen">
            <img
                id="currentBackground"
                src={hogback}
                className={styles.mainBackgroundSetting}
            ></img>
            <span className={`${styles.circle1} ${styles.centre}`}></span>
            {/* <input type="file" accept="image/*" capture="capture"></input> */}
            {<StreamCam />}
        </div>
    );
}

export default App;
