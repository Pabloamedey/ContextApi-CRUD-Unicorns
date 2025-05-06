import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UnicornContext = createContext();
const API_URL = "https://crudcrud.com/api/88692d7ba89d4008b5f44ad1751eb499/unicorns";

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

  const createUnicorn = async ({ name, color, age, power, status }) => {
    try {
      const { data } = await axios.post(API_URL, {
        name,
        data: { color, age: Number(age), power, status },
      });
      setUnicorns((prev) => [...prev, data]);
    } catch (error) {
      alert("Error al crear unicornio");
      console.error(error);
    }
  };  

  const editUnicorn = async ({ id, name, color, age, power, status }) => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        name,
        data: { color, age: Number(age), power, status },
      });
      setUnicorns((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, name, data: { color, age, power, status } } : u
        )
      );
    } catch (error) {
      alert("Error al editar unicornio");
      console.error(error);
    }
  };  

  const deleteUnicorn = async (id) => {
    try {
      const unicorn = unicorns.find((u) => u._id === id);
      if (!unicorn) return;
  
      await axios.put(`${API_URL}/${id}`, {
        name: unicorn.name,
        data: {
          ...unicorn.data,
          status: "Inactivo",
        },
      });
  
      setUnicorns((prev) =>
        prev.map((u) =>
          u._id === id
            ? { ...u, data: { ...u.data, status: "Inactivo" } }
            : u
        )
      );
    } catch (error) {
      alert("Error al marcar unicornio como inactivo");
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
