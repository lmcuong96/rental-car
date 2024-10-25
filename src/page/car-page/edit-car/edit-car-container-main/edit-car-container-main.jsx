import { useState } from "react";
import "./edit-car-container-main.scss";
import { Detail } from "./detail/detail.jsx";
import { Info } from "./info/info.jsx";
import { Pricing } from "./pricing/pricing.jsx";

export const EditCarContainerMain = () => {
    const [activeTab, setActiveTab] = useState('basicInfo');

    const renderContent = () => {
        switch (activeTab) {
            case 'basicInfo':
                return (
                    <div >
                        <Info />
                    </div>
                );
            case 'detail':
                return (
                    <div>
                        <Detail />
                    </div>
                );
            case 'pricing':
                return (
                    <div>
                        <Pricing />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={"edit-car-content-main"}>
            <div className={"edit-car-tabs"}>
                <button
                    className={activeTab === 'basicInfo' ? 'active' : ''}
                    onClick={() => setActiveTab('basicInfo')}
                >
                    Basic Information
                </button>
                <button
                    className={activeTab === 'detail' ? 'active' : ''}
                    onClick={() => setActiveTab('detail')}
                >
                    Detail
                </button>
                <button
                    className={activeTab === 'pricing' ? 'active' : ''}
                    onClick={() => setActiveTab('pricing')}
                >
                    Pricing
                </button>
            </div>
            {renderContent()}
        </div>
    );
};
