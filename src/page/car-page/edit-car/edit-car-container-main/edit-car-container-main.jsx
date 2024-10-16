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