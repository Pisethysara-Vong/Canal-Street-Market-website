import { foodItems } from "../constants/food";

const FoodSelection = () => {
    const renderFoodItems = () => {
        return foodItems.map((food, index) => (
        <div key={index} className="flex flex-col gap-4">
            <div className="options-text md:text-xl">{food.option}</div>
            <div className="heading-text md:text-4xl text-2xl">{food.name}</div>
        </div>
        ));
    };

    return (
        <div className="lg:grid grid-cols-3 flex flex-col md:gap-12 gap-4 lg:mt-16 lg:mb-16 mb-8 mt-8">
        {renderFoodItems()}
        </div>
    );
    };

export default FoodSelection;
