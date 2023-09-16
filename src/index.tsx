import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </QueryClientProvider>
);
