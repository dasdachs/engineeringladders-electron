import NavigationBar from "./components/app-bar/AppBar";
import { Settings, Stats, TeamDetailsContainer, TeamsList } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useInitDb } from "./hooks";
import { Alert } from "@mui/material";
import { DatabaseContext } from "./contexts";
import { Circular } from "./components";

export default function App() {
    const { isLoading, error, dbService } = useInitDb()

    if (isLoading) {
        return (
            <Circular />
        )
    }

    return (
      <DatabaseContext.Provider value={dbService}>
        {error && <Alert severity="error">{error.message}</Alert>}
        <NavigationBar />
        <Routes>
            <Route path="/" element={<Stats />} />
            <Route path="teams">
                <Route path=":teamId/*" element={<TeamDetailsContainer />} />
                <Route path="new/*" element={<TeamDetailsContainer isNew />} />
                <Route index element={<TeamsList />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
        </Routes>
      </DatabaseContext.Provider>
  );
}