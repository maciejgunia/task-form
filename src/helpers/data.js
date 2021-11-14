import { useEffect, useState } from "react";

export const useData = (initialState) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        setData(JSON.parse(sessionStorage.getItem("data")));
    }, []);

    useEffect(() => {
        sessionStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    return [data, setData];
};
