import { Popover, PopoverTrigger, PopoverContent } from "./components/Popover";

const App = () => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f5f5f4",
        minHeight: "100vh",
      }}
    >
      <Popover>
        <PopoverTrigger>trigger</PopoverTrigger>
        <PopoverContent>content</PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
