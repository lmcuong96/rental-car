import {MiniNav} from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./edit-car.scss"
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {bookingCar} from "../../../../database/booking-car.js";
import {EditCarContainerMain} from "./edit-car-container-main/edit-car-container-main.jsx";
import {useParams} from "react-router-dom";
import {consumeContext, cs, provideContext} from "cs-react";

export function EditCar() {
    const {id} = useParams()
    const car = bookingCar.find(c =>( c.id).toString() === id)
    console.log(car);
    const carItem = CarItems()
    const miniNav = [
        {content: "Home", link: "/car"},
        {content: "My Car", link: "/my-car"},
        {content: "Edit Details", link: "/edit-detail"}
    ]
    return cs(
        ({}, next) => provideContext("car", car, next), // Vẫn dùng context từ cs-react
        consumeContext("car"),
        ({car}) => (
            <>
                <div className={"edit-car-nav-23r "}>
                    {miniNav.map((nav, index) => <MiniNav key={nav.content} contents={nav.content} links={nav.link}
                                                          index={index} lastEl={miniNav.length - 1}/>)}
                </div>
                <div className={'edit-car-container-12s'}>
                    <h1>Edit car details</h1>
                    <div className={'edit-car-content-sa1'}>
                        <div className={"edit-car-content-slide-asd2"}>
                            {carItem.render({
                                ...car
                            })}
                        </div>
                        <EditCarContainerMain/>
                    </div>
                </div>
            </>
        )
    )
}