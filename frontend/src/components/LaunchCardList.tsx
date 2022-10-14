import { Box, VStack, Text, useColorMode } from "@chakra-ui/react";
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
  const { colorMode } = useColorMode();

  return (
    <VStack justify={"start"} align={"start"}>
      <Text
        fontWeight={"semibold"}
        fontSize={"lg"}
        backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
        w={"100%"}
        pb={1}
      >
        {title}
      </Text>

      <VStack
        w={"100%"}
        justify={"start"}
        align={"start"}
        maxH={"80vh"}
        overflow={"auto"}
      >
        {launchesData.map((launch, index) => (
          <Box
            key={index}
            border={"1px solid gray"}
            borderRadius={"md"}
            boxShadow={"base"}
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
    </VStack>
  );
};
