import logo from "./logo.svg";
import "./App.css";
import hogback from "./hogwartsClassroom.jpg";
import styles from "./styles.module.css";

function App() {
    const stream = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                return stream;
            });
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
            <video
                autoplay="true"
                id="videoElement"
                srcObject={stream()}
            ></video>
        </div>
    );
}

export default App;
