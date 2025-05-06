import { useState, useEffect } from "react";
import UnicornsView from "./UnicornsView";

const API_URL = "https://crudcrud.com/api/58be07aacc604520be32fb8fca8b0e7c/unicorns";

const UnicornsContainer = () => {
    const [unicorns, setUnicorns] = useState([]);

    useEffect(() => {
        handleGetUnicorns();
    }, []);

    const handleGetUnicorns = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setUnicorns(data))
            .catch((error) => {
                console.error("Error al obtener unicornios", error);
                alert("Error al obtener los unicornios.");
            });
    };

    const handleAddUnicorn = ({ name, color, age, power }) => {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                data: {
                    color,
                    age: Number(age),
                    power,
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setUnicorns([...unicorns, data]);
            })
            .catch((error) => {
                console.error("Error al añadir el unicornio", error);
                alert("Error al añadir el unicornio.");
            });
    };

    const handleEditUnicorn = ({ id, name, color, age, power }) => {
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                data: {
                    color,
                    age: Number(age),
                    power,
                },
            }),
        })
            .then(() => {
                const updated = unicorns.map((unic) =>
                    unic._id === id
                        ? { ...unic, name, data: { color, age, power } }
                        : unic
                );
                setUnicorns(updated);
            })
            .catch((error) => {
                console.error("Error al editar el unicornio", error);
                alert("Error al editar el unicornio.");
            });
    };

    const handleDeleteUnicorn = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setUnicorns(unicorns.filter((unic) => unic._id !== id));
            })
            .catch((error) => {
                console.error("Error al eliminar el unicornio", error);
                alert("Error al eliminar el unicornio.");
            });
    };

    return (
        <UnicornsView
            unicorns={unicorns}
            handleAddUnicorn={handleAddUnicorn}
            handleEditUnicorn={handleEditUnicorn}
            handleDeleteUnicorn={handleDeleteUnicorn}
            handleGetUnicorns={handleGetUnicorns}
        />
    );
};

export default UnicornsContainer;
