import { Order } from "./order";
const img = require("../../images/car.jpg");

export const Orders = [
    new Order(
        "Night order",
        "California to New York.",
        "Volvo",
        "23.09.2022",
        400,
        img
    ),
    new Order(
        "Night order",
        "California to Nicopol.",
        "Oppel",
        "23.08.2022",
        450,
        img
    ),
    new Order(
        "Day order",
        "New York to California",
        "Polo",
        "24.09.2022",
        1000,
        img
    ),
    new Order(
        "Day order",
        "Kyiv to Lviv",
        "Polo",
        "24.09.2022",
        1000,
        img
    ),
  ];