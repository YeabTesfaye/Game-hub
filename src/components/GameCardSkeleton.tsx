import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="240px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
