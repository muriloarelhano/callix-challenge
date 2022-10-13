import { Box, VStack, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import React from "react";
import { SpaceXApiResponse } from "../interfaces";

interface LaunchCardListProps {
  launchesData: SpaceXApiResponse[];
  title: string;
}

export const LaunchListCard: React.FC<LaunchCardListProps> = ({
  launchesData,
  title,
}) => {
  return (
    <VStack justify={"start"} align={"start"} maxH={"80vh"} overflow={"auto"}>
      <Text
        fontWeight={"semibold"}
        fontSize={"lg"}
        position={"fixed"}
        bg={"white"}
        w={"100%"}
        pb={"0.5"}
      >
        {title}
      </Text>
      <Box p={"2"}> </Box>
      {launchesData.map((launch, index) => (
        <Box
          key={index}
          border={"1px solid gray"}
          borderRadius={"md"}
          p={"5"}
          width={"100%"}
        >
          <Text>{launch.name}</Text>
          <Text>
            {DateTime.fromISO(launch.date_local || "").toLocaleString(
              DateTime.DATETIME_SHORT
            )}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};
