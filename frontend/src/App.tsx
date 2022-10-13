import { Heading, Container, Grid, Text, VStack, Box } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { LaunchCard } from "./components/LaunchCard";
import { LaunchListCard } from "./components/LaunchCardList";
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
  const [nextLaunch, setNextLaunches] = useState<SpaceXApiResponse | null>(
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
      <Heading mb={"5"}>SpaceX Public Data </Heading>
      <Text>{isLoaded ? "Carregando..." : ""}</Text>
      <Text>{error ? "Ocorreu um erro inesperado" : ""}</Text>
      <Grid templateColumns={"300px 300px 300px 300px"} gap={"5"}>
        {nextLaunch ? (
          <LaunchCard launchData={nextLaunch} title={"Next Launch"} />
        ) : (
          ""
        )}

        {lastLaunch ? (
          <LaunchCard launchData={lastLaunch} title={"Last Launch"} />
        ) : (
          ""
        )}
        {upcomingLaunches ? (
          <LaunchListCard
            launchesData={upcomingLaunches}
            title={"Upcoming Launch"}
          />
        ) : (
          ""
        )}
        {pastLaunches ? (
          <LaunchListCard launchesData={pastLaunches} title={"Past Launch"} />
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
}

export default App;
