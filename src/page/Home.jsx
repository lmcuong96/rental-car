import { PeopleSay } from "../component/HomePage/PeopleSay/PeopleSay";
import { WhyUs } from "../component/HomePage/WhyUs/WhyUs";
import { FindUs } from "../component/HomePage/FindUs/FindUs";

export function Home() {
    return (
        <div className="my-4">
            <div>
                <WhyUs />
                <PeopleSay />
                <FindUs />
            </div>
        </div>
    );
}
