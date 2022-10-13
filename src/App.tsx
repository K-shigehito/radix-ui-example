import { Popover, PopoverTrigger, PopoverContent } from "./components/Popover";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  AccordionHeader,
} from "./components/Accordion/Accordion";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "16px",
        backgroundColor: "#f5f5f4",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2>Popover</h2>
        <Popover>
          <PopoverTrigger>trigger</PopoverTrigger>
          <PopoverContent>content</PopoverContent>
        </Popover>
      </div>

      <div>
        <h2>Accordion (CSS modules)</h2>
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionHeader>
              <AccordionTrigger>title-1</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>content-2</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger>title-2</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>content-2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default App;
