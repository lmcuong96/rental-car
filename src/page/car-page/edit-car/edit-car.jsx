import {consumeContext, cs, provideContext} from 'cs-react';
import MiniNav from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./edit-car.scss";
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {useParams} from "react-router-dom";
import {EditCarContainerMain} from "./edit-car-container-main/edit-car-container-main.jsx";
import {useGetCar} from "../common/get-car/get-car.jsx";

const EditCar = () => {
    const {listCar, loading} = useGetCar();

    const {id} = useParams();
    const car = listCar.find(c => (c.id).toString() === id);
    const carItem = CarItems();
    const miniNav = [
        {content: "Home", link: "/cars"},
        {content: "My Car", link: "/my-cars"},
        {content: "Edit Details", link: "/edit-car/" + id}
    ];

    return cs(
        (_, next) => provideContext("car", car, next),
        consumeContext("car"),
        ({car}) => (
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
                        {loading && <p>Loading...</p>}
                        {!loading && (
                            <>
                                <div className={"edit-cars-content-slide-asd2"}>
                                    {carItem.render({car})}
                                </div>
                                <EditCarContainerMain/>
                            </>
                        )}
                    </div>
                </div>
            </>
        )
    )
}

export default EditCar;