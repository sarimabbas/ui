import { Italic } from "lucide-react";

import { Toggle } from "./toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}
