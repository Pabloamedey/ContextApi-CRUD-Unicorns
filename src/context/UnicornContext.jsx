import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UnicornContext = createContext();
const API_URL = "https://crudcrud.com/api/58be07aacc604520be32fb8fca8b0e7c/unicorns";

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const getUnicorns = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setUnicorns(data);
    } catch (error) {
      alert("Error al obtener unicornios");
      console.error(error);
    }
  };  

  const createUnicorn = async ({ name, color, age, power }) => {
    try {
      const { data } = await axios.post(API_URL, {
        name,
        data: { color, age: Number(age), power },
      });
      setUnicorns((prev) => [...prev, data]);
    } catch (error) {
      alert("Error al crear unicornio");
      console.error(error);
    }
  };
  

  const editUnicorn = async ({ id, name, color, age, power }) => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        name,
        data: { color, age: Number(age), power },
      });
      setUnicorns((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, name, data: { color, age, power } } : u
        )
      );
    } catch (error) {
      alert("Error al editar unicornio");
      console.error(error);
    }
  };  

  const deleteUnicorn = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUnicorns((prev) => prev.filter((u) => u._id !== id));
    } catch (error) {
      alert("Error al eliminar unicornio");
      console.error(error);
    }
  };
  

  useEffect(() => {
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider
      value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn, getUnicorns }}
    >
      {children}
    </UnicornContext.Provider>
  );
};

export const useUnicorns = () => useContext(UnicornContext);
