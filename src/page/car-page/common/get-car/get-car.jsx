import {useEffect, useState} from "react";
import {cars} from "../../../../../database/cars.js";

export const useGetCar = () => {
    const [listCar, setListCar] = useState(cars);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:8080/api/cars/search?page=${page}`);
                const data = await res.json();
                console.log(data);

                setTotalPages(data.totalPages);

                if (!res.ok) {
                    setError(data.message);
                } else {
                    setListCar(data.content);
                }
            } catch {
                setError("Failed to fetch cars");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [page]);

    const handlePageChange = (direction) => {
        if (direction === "Previous" && page > 0) {
            setPage(page - 1);
        } else if (direction === "Next") {
            setPage((page) + 1);
        } else setPage(direction)
    };
    return {
        listCar,
        loading,
        error,
        handlePageChange,
        totalPages, page
    };
};
