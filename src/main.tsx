import React from "react";
import App from "./App";
import "/src/styles/index.css";
import Layout from "/src/components/layout/layout";
import { ViteReactSSG } from "vite-react-ssg/single-page";

export const createRoot = ViteReactSSG(
  <Layout>
    <App />
  </Layout>
);
