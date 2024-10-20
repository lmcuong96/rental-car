import {BasicInfo} from "./basic-info/basic-info.jsx";
import {BasicInfoDoc} from "./basic-info-doc/basic-info-doc.jsx";

export const EditCarContainerMain = () => {
    return (
        <div className={"edit-car-content-main"}>
            <div className={"edit-car-tabs"}>
                <button>Basic Infomation</button>
                <button>Detail</button>
                <button>Pricing</button>
            </div>
            <div className={"basic-info-xzc"}>
                <BasicInfo />
            </div>
            <div className={"basic-info-doc-zxc"}>
               <BasicInfoDoc/>
            </div>
        </div>

    )
}
// import { cs, useContext } from "cs-react";
//
// export function EditCarContainerMain() {
//     return cs({
//         render: () => {
//             const car = useContext("carContext"); // Lấy dữ liệu car từ context
//             return (
//                 <div>
//                     <h2>Edit Details for: {car.name}</h2>
//                     <p>Model: {car.model}</p>
//                     <p>Year: {car.year}</p>
//                     {/* Các trường khác */}
//                 </div>
//             );
//         }
//     });
// }
