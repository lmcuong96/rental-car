import {consumeContext, cs, provideContext} from 'cs-react';
import MiniNav from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./edit-car.scss";
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {cars} from "../../../../database/cars.js";
import {useParams} from "react-router-dom";
import {EditCarContainerMain} from "./edit-car-container-main/edit-car-container-main.jsx";
import {useState} from "react";

const EditCar = () => {
    const {id} = useParams();
    const carData = cars.find(c => (c.id).toString() === id);
    const [car, setCar] = useState(carData); // Sử dụng useState để tạo state cho car
    const carItem = CarItems();
    const miniNav = [
        {content: "Home", link: "/cars"},
        {content: "My Car", link: "/my-cars"},
        {content: "Edit Details", link: "/edit-detail"}
    ];

    return cs(
        ({}, next) => provideContext("car", { car, setCar }, next), // Cung cấp cả car và setCar
        consumeContext("car"),
        ({ car }) => (
            <>
                <div className={"edit-car-nav-23r"}>
                    {miniNav.map((nav, index) => (
                        <MiniNav key={nav.content} contents={nav.content} links={nav.link} index={index}
                                 lastElement={miniNav.length - 1}/>
                    ))}
                </div>
                <div className={'edit-car-container-12s'}>
                    <h1>Edit car details</h1>
                    <div className={'edit-car-content-sa1'}>
                        <div className={"edit-cars-content-slide-asd2"}>
                            {carItem.render({
                                ...car
                            })}
                        </div>
                        <EditCarContainerMain />
                    </div>
                </div>
            </>
        )
    )
}

export default EditCar;