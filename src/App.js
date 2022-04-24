import PlayerContent from "./components/player/PlayerContent";
import Header from "./components/common/Header";

function App() {
    return (
        <div className="container mx-auto space-y-3 pt-4">
            <Header/>
            <div>
                <PlayerContent/>
            </div>
        </div>
    );
}

export default App;
