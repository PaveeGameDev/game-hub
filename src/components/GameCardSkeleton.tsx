import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => (
  <Card borderRadius={10} overflow="hidden" width="300px">
    <Skeleton height="200px" />
    <CardBody>
      <SkeletonText />
    </CardBody>
  </Card>
);
