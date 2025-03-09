import { Container, Typography } from "@mui/material";
import Header from "./components/Header";
import ToolContainer from "./components/ToolContainer";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <Container maxWidth="xs">
      <Header />
      <ToolContainer />
      <AboutSection />
    </Container>
  );
}

export default App;
