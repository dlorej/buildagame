import logo from "./logo.svg";
import "./App.css";
import hogback from "./hogwartsClassroom.jpg";
import styles from "./styles.module.css";

function App() {
    return (
        <div id="mainscreen">
            <img
                id="currentBackground"
                src={hogback}
                classname={styles.mainBackgroundSetting}
            ></img>
        </div>
    );
}

export default App;
