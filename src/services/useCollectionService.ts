import { useState, useEffect } from "react";

// types
import Collection from "../types/Collection";
import { CollectionService } from "../types/CollectionService";

// --------------- Custom hook --------------

function useCollectionService(collectionID: number) {
    const [collection, setCollection] = useState<CollectionService<Collection>>(
        {
            status: "loading",
        }
    );

    useEffect(() => {
        fetch(
            `/.netlify/functions/fetchCollection?collectionID=${collectionID}`
        )
            .then((res) => res.json())
            .then((data) => {
                setCollection({
                    status: "loaded",
                    payload: data.item,
                });
            })
            .catch((error) => {
                setCollection({
                    status: "error",
                    error: error,
                });
            });
    }, []);

    return collection;
}

export default useCollectionService;
