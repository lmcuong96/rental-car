import styles from "./find-us.module.css";

export function FindUs() {
    const array = [
        {
            id: 1,
            city: "Hanoi",
            quantity: 10,
            image: "https://scontent.ccdn.cloud/image/vivitravels-en/bafa9061-1e02-4a73-ac93-410783f5b6df/maxw-960.jpg",
        },
        {
            id: 2,
            city: "Ho Chi Minh city",
            quantity: 100,
            image: "https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            city: "Da Nang - Hoi An",
            quantity: 90,
            image: "https://statics.vinwonders.com/da-nang-to-hoi-an-01_1669732079.jpg",
        },
        {
            id: 4,
            city: "Nha Trang",
            quantity: 50,
            image: "https://vietnamdiscovery.com/wp-content/uploads/2020/05/Hon-Tre-Island-in-Nha-Trang-agoda.net_.jpg",
        },
        {
            id: 5,
            city: "Da Lat",
            quantity: 80,
            image: "https://th.bing.com/th/id/R.6860dd430656fbf17503f8609ea68291?rik=N8SA4%2bPp3Y2s6A&riu=http%3a%2f%2ffarm6.staticflickr.com%2f5538%2f9260455196_ef23c16799_b.jpg&ehk=dqiV11b%2bB7iFJtJHfERbX9%2f85MH71DhQBEKjxanmcig%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 6,
            city: "Quang Ninh",
            quantity: 70,
            image: "https://th.bing.com/th/id/R.4961b76c0af052d9b00c695eb5a5b185?rik=%2fzwWFDSRgAuEHA&riu=http%3a%2f%2fvatlieuxaydung.org.vn%2fUpload%2f48%2fNam_2016%2fCongboGiaVLXD%2fVLXD.org_Gia_VLXD_Quang_Ninh.jpeg&ehk=5ZMoBxhLN%2b%2fjW6luzwGUXhT9G1r%2bh3q1lNq7T4YqFfg%3d&risl=&pid=ImgRaw&r=0",
        },
    ];

    return (
        <div className="m-4">
            <h1>Where to find us?</h1>
            <div className="row ">
                {array.map((item) => (
                    <div key={item.id} className="col-md-4 p-2">
                        <div className={styles.cardContainer}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={item.image}
                                    className={styles.imgThumbnail}
                                    alt={item.city}
                                />
                                <div className={styles.overlay}>
                                    <h5 className={styles.overlayText}>
                                        {item.city}
                                    </h5>
                                    <p className={styles.cardText}>
                                        {item.quantity} + cars
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
