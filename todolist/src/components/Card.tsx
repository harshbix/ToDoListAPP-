import "../card.css";
import AddTask from "./AddTask";

const Card = () => {
  return (
    <div className="box">
      <h1 className="text-center text-white">Get Things Done!</h1>
      <AddTask />
    </div>
  );
};

export default Card;
