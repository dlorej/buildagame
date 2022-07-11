import logo from "./logo.svg";
import "./App.css";
import hogback from "./hogwartsClassroom.jpg";
import styles from "./styles.module.css";

function App() {
    const openCamera = () => (
        <input type="file" accept="image/*" capture="capture"></input>
    );

    return (
        <div id="mainscreen">
            <img
                id="currentBackground"
                src={hogback}
                className={styles.mainBackgroundSetting}
            ></img>
            <span className={`${styles.circle1} ${styles.centre}`}></span>
            {openCamera}
        </div>
    );
}

export default App;
