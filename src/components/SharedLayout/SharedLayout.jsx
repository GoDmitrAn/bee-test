import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./SharedLayout.styled";
export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
