import "./App.css";

import CollectionShelf from "./components/CollectionShelf";
import Header from "./components/Header";

function App() {
    const collectionIDsList = [25813259, 24007650, 23913585];
    const collections = collectionIDsList.map((collectionID, index) => {
        return <CollectionShelf collectionID={collectionID} key={index} />;
    });
    return (
        <>
            <Header />
            {collections}
        </>
    );
}

export default App;
