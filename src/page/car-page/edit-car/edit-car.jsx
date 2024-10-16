import {MiniNav} from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./edit-car.scss"
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {bookingCar} from "../../../../database/booking-car.js";
import {EditCarContainerMain} from "./edit-car-container-main/edit-car-container-main.jsx";

export function EditCar() {
    const carItem = CarItems()
    const miniNav = [
        {content: "Home", link: "/car"},
        {content: "My Car", link: "/my-car"},
        {content: "Edit Details", link: "/edit-detail"}
    ]
    return (
        <>
            <div className={"edit-car-nav-23r "}>
                {miniNav.map(nav => <MiniNav key={nav.content} contents={nav.content} links={nav.link}/>)}
            </div>
            <div className={'edit-car-container-12s'}>
                <h1>Edit car details</h1>
                <div className={'edit-car-content-sa1'}>
                    <div className={"edit-car-content-slide-asd2"}>
                        {carItem.render({
                            name: bookingCar[0].name,
                            img1: bookingCar[0].img1,
                            img2: bookingCar[0].img2,
                            img3: bookingCar[0].img3,
                            price: bookingCar[0].price,
                            location: bookingCar[0].location,
                            id: bookingCar[0].id
                        })}
                    </div>
                    <EditCarContainerMain/>
                </div>
            </div>
        </>
    )
}