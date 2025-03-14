import { Car, Order } from "../types";

const API_URL = process.env.API_URL;

type GetCarsReturn = {
    cars: Car[];
};

export const getCars = async (): Promise<GetCarsReturn> => {
    const res = await fetch(`${API_URL}/api/cars`);
    return res.json();
};

type GetCarReturn = {
    car: Car;
};