import {MiniNav} from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./add-car.scss"
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {cars} from "../../../../database/cars.js";

export function AddCar() {
    // const carItem = CarItems()
    const miniNav = [
        {content: "Home", link: "/cars"},
        {content: "My Car", link: "/my-cars"},
        {content: "Edit Details", link: "/edit-detail"}
    ]
    return (
        <>
            <div className={"mini-nav-23r"}>
                {miniNav.map(nav => <MiniNav key={nav.content} contents={nav.content} links={nav.link}/>)}
            </div>
            <h1>Edit car details</h1>
            {/*<div>*/}
            {/*    {carItem.render({*/}
            {/*        name: cars[0].name,*/}
            {/*        img1: cars[0].img1,*/}
            {/*        img2: cars[0].img2,*/}
            {/*        img3: cars[0].img3,*/}
            {/*        price: cars[0].price,*/}
            {/*        location: cars[0].location,*/}
            {/*        id: cars[0].id*/}
            {/*    })}*/}
            {/*</div>*/}
        </>
    )
}