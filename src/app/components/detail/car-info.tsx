"use client";

import { Car } from "@/app/types";
import { FaHeart, FaStar } from "react-icons/fa";
import RentButton from "./rent-button";

interface Props {
    car: Car;
}

const CarInfo = ({ car }: Props) => {

    const arr = [
        {
            title: "Araç Tipi",
            value: car.type,
        },
        {
            title: "Kapasite",
            value: car.capacity,
        },
        {
            title: "Şanzıman",
            value: car.transmission,
        },
        {
            title: "Yakıt",
            value: car.fuelType,
        },
        {
            title: "Renk",
            value: car.color,
        },
        {
            title: "Çekiş",
            value: car.drive,
        },
        {
            title: "Yıl",
            value: car.year,
        },
        {
            title: "Yakıt Kapasite",
            value: car.gasoline || "?",
        },
    ];

    return (
        <div>CarInfo</div>
    )
}

export default CarInfo