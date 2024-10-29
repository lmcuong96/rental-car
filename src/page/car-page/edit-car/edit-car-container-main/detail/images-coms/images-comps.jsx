import FileItem from "../../../../common/file-item/file-item.jsx";
import "./images-coms.scss"
import {consumeContext, cs} from "cs-react";

export const ImagesComps = ({next}) => {
    return cs(
        consumeContext("car"),
        ["frontImg", ({car}, next) => FileItem({
            label: "Front",
            file: car.img1,
            next,
        }),],
        ["backImg", ({car}, next) => FileItem({
            label: "Back",
            file: car.img2,
            next,
        }),],
        ["leftImg", ({car}, next) => FileItem({
            label: "Left",
            file: car.img3,
            next,
        }),],
        ["rightImg", ({car}, next) => FileItem({
            label: "Right",
            file: car.img4,
            next,
        }),],
        ({
             frontImg, backImg, leftImg, rightImg
         }) => {
            console.log("frontImg:" + frontImg.value);
            console.log("backImg:" + backImg.value);
            console.log("leftImg:" + leftImg.value);
            console.log("rightImg:" + rightImg.value);

            return next({
                render: () => (
                    <>
                        <p className={"fs-5 fw-bold"}>Images:</p>
                        <div className={"image-sad1"}>
                            <div className={"img-container-123"}>
                                {frontImg.render()}
                            </div>
                            <div className={"img-container-123"}>
                                {backImg.render()}
                            </div>
                            <div className={"img-container-123"}>
                                {leftImg.render()}
                            </div>
                            <div className={"img-container-123"}>
                                {rightImg.render()}
                            </div>
                        </div>
                    </>
                ),
                value: {
                    frontImg: frontImg.value,
                    backImg: backImg.value,
                    leftImg: leftImg.value,
                    rightImg: rightImg.value
                }
            })
        }
    );
}
