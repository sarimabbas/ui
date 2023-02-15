import type { GlobalProvider } from "@ladle/react";

import "../src/styles/globals.css";

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => <>{children}</>;
