import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";

const ScoreCard = () => {
    const score = useSelector((state: IGlobalState) => state.score);
    return (
        <Heading as="h2" size="md" mt={5} mb={5}>Current Score: {score}</Heading>
    );
}

export default ScoreCard;