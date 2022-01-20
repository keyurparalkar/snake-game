import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";

const ScoreCard = () => {
    const score = useSelector((state: IGlobalState) => state.score);
    return (
        <h4>Current Score: {score}</h4>
    );
}

export default ScoreCard;