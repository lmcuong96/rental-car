import { Fragment } from "react";
import style from "./why-us.module.css";
export function WhyUs() {
    const array = [
        {
            id: 1,
            title: "Save money",
            description:
                "We have no setup or registration fees. You are only charged wen you rent a car. So get started for FREE!",
            i: "fa-regular fa-money-bill-1",
        },
        {
            id: 2,
            title: "Convenient",
            description:
                "We have a large sellection of privately owned cars to suit your needs throughout the country",
            i: "fa-solid fa-person ",
        },
        {
            id: 3,
            title: "Legal and insurance",
            description:
                "We fully coverr all rentals and even provide roadside assistance. Our rating system and extended member profile checks provide safety.",
            i: "fa-solid fa-hammer",
        },
        {
            id: 4,
            title: "24/7 support",
            description:
                "Our team is ready to support you all along the way with our 24/7 hotline and services.",
            i: "fa-solid fa-headphones",
        },
    ];
    return (
        <div className="mx-5">
            <h1>Why us?</h1>
            <div className="row gap-5 my-5">
                {array.map((item) => (
                    <div
                        key={item.id}
                        className={` card col d-flex flex-column align-items-center`}
                    >
                        <div
                            className={` ${style.card} d-flex justify-content-center align-items-center `}
                        >
                            <i
                                className={`${item.i} fs-1 border border-2 rounded-circle text-center d-flex justify-content-center align-items-center`}
                            ></i>
                        </div>
                        <div className="card-body text-start my-4">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
