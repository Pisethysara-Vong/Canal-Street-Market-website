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
        <div className="lg:grid grid-cols-3 flex flex-col md:gap-12 gap-8 lg:mt-20 lg:mb-16 mb-8 mt-8">
        {renderRetailItems()}
        </div>
    );
    };

export default RetailSelection;
