import { styled } from "@stitches/react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
  padding: "8px 16px",
  backgroundColor: "#4338ca",
  border: "none",
  borderRadius: "9999px",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  letterSpacing: "0.05rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#3730a3",
  },
});
export const PopoverContent = styled(PopoverPrimitive.Content, {
  marginTop: "16px",
  padding: "8px 16px",
  borderRadius: "8px",
  backgroundColor: "#c7d2fe",
});
