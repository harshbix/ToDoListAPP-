import "../card.css";
import AddTask from "./AddTask";
import EditTask from "./EditTask";


const Card = () => {
  return (
    <div className="box">
      <h3 className="text-center text-white pt-3 pb-4">Get Things Done!</h3>
      <AddTask />
      <EditTask />
    </div>
  );
};

export default Card;
