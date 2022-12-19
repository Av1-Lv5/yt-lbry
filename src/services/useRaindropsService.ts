import { useState, useEffect } from "react";

// types
import Raindrop from "../types/Raindrop";
import { RaindropService } from "../types/RaindropService";

// --------------- Custom Hook --------------

// fetches data from service and returns the status: loading|loaded and new data after a sucessful fetch

function useRaindropsService(
    collectionID: number,
    perPage: number,
    pageNum: number
) {
    const [raindrops, setRaindrops] = useState<RaindropService<Raindrop[]>>({
        status: "init",
        payload: [],
    });
    console.log(pageNum);
    useEffect(() => {
        setRaindrops((prevRaindrops) => {
            return {
                status: "loading",
                payload: prevRaindrops.payload,
            };
        });

        fetch(
            `/.netlify/functions/fetchRaindrops?collectionID=${collectionID}?perpage=${perPage}&pageNum=${pageNum}`
        )
            .then((res) => res.json())
            .then((data) => {
                setRaindrops((prevRaindrops) => {
                    console.log(data.items);
                    return {
                        status: "loaded",
                        payload: [...prevRaindrops.payload, ...data.items],
                    };
                });
            })
            .catch((error) => {
                setRaindrops((prevRaindrops) => {
                    return {
                        status: "error",
                        error: error,
                        payload: prevRaindrops.payload,
                    };
                });
            });
    }, [pageNum]);

    return raindrops;
}

export default useRaindropsService;
