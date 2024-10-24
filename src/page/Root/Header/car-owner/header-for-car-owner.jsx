import style from "./header-for-car-owner.module.css";
export function HeaderForCarOwner() {
    const array = [
        {
            id: 1,
            i: <i className={`fa-solid fa-dollar-sign fs-2 `} />,
            title: "How the insurance works",
            description:
                "From the minute you hand the keys over till the second you get them back you are covered. Your private insurance is not affected",
        },
        {
            id: 2,
            i: <i className={`fa-solid fa-shield-halved fs-2 `} />,
            title: "It's completely free",
            description:
                "We offer both owners renters free sign ups. It's only once a vehicle is rented out that a share is deducted to cover admin and insurance",
        },
        {
            id: 3,
            i: <i className={`fa-regular fa-circle-check fs-2 `} />,
            title: "You decide the price",
            description:
                "When you list a cars you decide the price. We can help with recommendations as to price, but iltimately you decide!",
        },
        {
            id: 4,
            i: <i className={`fa-solid fa-car fs-2 ${style.icon} `} />,
            title: "Handling over your vehicle",
            description:
                "You arrange the time and location for the exchange of your vehicle with the renter. Both parties will need to agree and sign the gvehicle rental sheet before and after key handover.",
        },
        {
            id: 5,
            i: <i className={`fa-solid fa-triangle-exclamation fs-2 `} />,
            title: "You are in charge",
            description:
                "All renters are pre-screened by us to ensure safety and get your approval. If you do not feel comfortable with someone you are able to decline a booking",
        },
        {
            id: 6,
            i: <i className={`fa-regular fa-credit-card fs-2 `} />,
            title: "Set payment",
            description:
                "We pay you once a month and you can always view how much your cars has earned under your userr profile.",
        },
    ];
    return (
        <div className="bg-body-secondary my-1 px-4 pb-5">
            <h1 className="pt-5">
                Have a car for rent? Don't miss out of your benefit
            </h1>
            <div className="row row-cols-3 mt-3">
                {array.map((item) => (
                    <div
                        className=" text-center d-flex flex-column  bg-body-secondary "
                        key={item.id}
                    >
                        <div className="card-body text-start my-4">
                            <div className="d-flex mb-2">
                                <p className={` ${style[`card-icon`]}`}>
                                    {item.i}
                                </p>
                                <h4 className="card-title">{item.title}</h4>
                            </div>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
