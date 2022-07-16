import { useRef, useState, useEffect, Component } from "react";
import "./App.css";
import hogback from "./hogwartsClassroom.jpg";
import styles from "./styles.module.css";
import jsQR from "jsqr";

function App() {
    //react doesnt support srcobject, need to use ref, ref not supported in functional components, need to use
    const StreamCam = () => {
        const [decodedData, setDecodedData] = useState("empty");
        const playerRef = useRef();
        const canvasRef = useRef();
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
        useEffect(() => {
            setInterval(() => {
                var context = canvasRef.current.getContext("2d");
                context.drawImage(
                    playerRef.current,
                    0,
                    0,
                    playerRef.current.width,
                    playerRef.current.height
                );
                var imageData = context.getImageData(
                    0,
                    0,
                    playerRef.current.width,
                    playerRef.current.height
                );
                var decodedDataVar = jsQR(
                    imageData.data,
                    playerRef.current.width,
                    playerRef.current.height
                );
                if (decodedDataVar) {
                    setDecodedData(decodedDataVar.data);
                }
            }, 500);
        });
        return (
            <div>
                <video
                    autoplay="true"
                    id="videoElement"
                    ref={playerRef}
                    width="640"
                    height="480"
                ></video>
                <canvas
                    className={styles.hidden}
                    ref={canvasRef}
                    width="640"
                    height="480"
                ></canvas>
                <p>{decodedData}</p>
            </div>
        );
    };
    return (
        <div id="mainscreen">
            <p id="reflectStatus">{"BarcodeDetector" in window}</p>
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
