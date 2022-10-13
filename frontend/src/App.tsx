import { Heading, Container, Grid, Text, VStack, Box } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { SpaceXApiResponse } from "./interfaces";
import {
  getLastLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} from "./services/spaceXApiSerice";

function App() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextLaunches, setNextLaunches] = useState<SpaceXApiResponse | null>(
    null
  );
  const [lastLaunch, setLastLaunch] = useState<SpaceXApiResponse | null>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<SpaceXApiResponse[]>(
    []
  );
  const [pastLaunches, setPastLaunches] = useState<SpaceXApiResponse[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    getNextLaunch(setNextLaunches, setError, setIsLoaded);
    getLastLaunch(setLastLaunch, setError, setIsLoaded);
    getUpcomingLaunches(setUpcomingLaunches, setError, setIsLoaded);
    getPastLaunches(setPastLaunches, setError, setIsLoaded);
  }, []);

  return (
    <Container maxW={"container.lg"} mt={"10"}>
      <Heading>SpaceX Public Data</Heading>
      <Text>{isLoaded ? "Carregando..." : ""}</Text>
      <Text>{error ? "Ocorreu um erro inesperado" : ""}</Text>
      <Grid templateColumns={"300px 300px 300px 300px"} my={"10"}>
        <VStack>
          <Text>Next Launch</Text>
          <Box border={"1px solid gray"} borderRadius={"md"} p={"5"}>
            <Text>{nextLaunches?.name}</Text>
            <Text>
              {DateTime.fromISO(nextLaunches?.date_local || "").toLocaleString(
                DateTime.DATETIME_SHORT
              )}
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Text>Last Launch</Text>
          <Box border={"1px solid gray"} borderRadius={"md"} p={"5"}>
            <Text>{lastLaunch?.name}</Text>
            <Text>
              {DateTime.fromISO(lastLaunch?.date_local || "").toLocaleString(
                DateTime.DATETIME_SHORT
              )}
            </Text>
          </Box>
        </VStack>
        <VStack>
          <Text>Upcoming Launch</Text>
          {upcomingLaunches.map((launch, index) => (
            <Box
              key={index}
              border={"1px solid gray"}
              borderRadius={"md"}
              p={"5"}
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
        <VStack>
          <Text>Past Launch</Text>
          {pastLaunches.map((launch, index) => (
            <Box
              key={index}
              border={"1px solid gray"}
              borderRadius={"md"}
              p={"5"}
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
      </Grid>
    </Container>
  );
}

export default App;
