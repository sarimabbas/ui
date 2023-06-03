import type { GlobalProvider } from "@ladle/react";
import { Toaster } from "../src/components/toast";

import "../src/styles/globals.css";

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <>
    {children}
    <Toaster position="bottom-right" />
  </>
);
