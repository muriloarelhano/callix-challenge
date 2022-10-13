import { Box, VStack, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import React from "react";
import { SpaceXApiResponse } from "../interfaces";

interface LaunchCardProps {
  launchData: SpaceXApiResponse;
  title: string;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  launchData,
  title,
}) => {
  return (
    <VStack align={"start"}>
      <Text fontWeight={"semibold"} fontSize={"lg"}>
        {title}
      </Text>
      <Box border={"1px solid gray"} borderRadius={"md"} p={"5"} width={"100%"}>
        <Text>{launchData.name}</Text>
        <Text>
          {DateTime.fromISO(launchData.date_local || "").toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </Text>
      </Box>
    </VStack>
  );
};
