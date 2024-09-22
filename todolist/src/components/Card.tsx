import "../card.css";
import AddTask from "./AddTask";

const Card = () => {
  return (
    <div className="box">
      <h3 className="text-center text-white pt-3 pb-4">Get Things Done!</h3>
      <AddTask />
    </div>
  );
};

export default Card;
