import { retailItems } from "../constants/foodAndRetail";

const RetailSelection = () => {
    const renderRetailItems = () => {
        return retailItems.map((shop, index) => (
        <div key={index} className="flex flex-col gap-4">
            <div className="options-text md:text-xl">{shop.category}</div>
            <div className="heading-text md:text-4xl text-2xl">{shop.name}</div>
        </div>
        ));
    };

    return (
        <div className="lg:grid grid-cols-3 flex flex-col md:gap-24 gap-8 lg:mt-26 lg:mb-26 mb-18 mt-18">
        {renderRetailItems()}
        </div>
    );
    };

export default RetailSelection;
