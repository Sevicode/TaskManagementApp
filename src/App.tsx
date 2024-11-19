import { Container } from "@mui/material";
import "./App.css";
import TaskItem from "./Components/TaskItem/TaskItem";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Container sx={{ height: "100%" }}>
      <Header />
      <TaskItem />
      <Footer />
    </Container>
  );
}

export default App;
