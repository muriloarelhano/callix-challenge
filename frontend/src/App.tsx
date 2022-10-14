import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
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
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { useExperiment } from "./hooks/useExperiment";

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
  const { toggleColorMode, colorMode } = useColorMode();

  const variant = useExperiment(process.env.REACT_APP_OPTIMIZE_ID || "");

  useEffect(() => {
    setIsLoaded(true);
    getNextLaunch(setNextLaunches, setError, setIsLoaded);
    getLastLaunch(setLastLaunch, setError, setIsLoaded);
    getUpcomingLaunches(setUpcomingLaunches, setError, setIsLoaded);
    getPastLaunches(setPastLaunches, setError, setIsLoaded);
  }, []);

  const testABButton = (variant: string | null) => {
    switch (variant) {
      case "0":
        return (
          <Button onClick={toggleColorMode} w="fit-content">
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        );
      case "1":
        return (
          <Box>
            <FormLabel>Color Mode</FormLabel>
            <Switch
              id={"toggleColorMode"}
              size="lg"
              onChange={toggleColorMode}
            />
          </Box>
        );
      default:
        return <Text>...</Text>;
    }
  };

  return (
    <Container maxW={"container.xl"} mt={"10"}>
      <HStack mb={"5"} w={"100%"} align={"start"} justify={"space-between"}>
        <Heading>SpaceX Public Data </Heading> {testABButton(variant)}
      </HStack>
      <Text>{isLoaded ? "Carregando..." : ""}</Text>
      <Text>{error ? "Ocorreu um erro inesperado" : ""}</Text>
      <Grid templateColumns={"1fr 1fr 1fr 1fr"} gap={"5"}>
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
