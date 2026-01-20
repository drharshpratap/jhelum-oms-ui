
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("home page shows only global navbar", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("global-navbar")).toBeInTheDocument();
  expect(screen.queryByTestId("client-navbar")).toBeNull();
  expect(screen.getByTestId("home-page")).toBeInTheDocument();
});

test("client page shows global and client navbar", () => {
  render(
    <MemoryRouter initialEntries={["/clients"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("global-navbar")).toBeInTheDocument();
  expect(screen.getByTestId("client-navbar")).toBeInTheDocument();
});
