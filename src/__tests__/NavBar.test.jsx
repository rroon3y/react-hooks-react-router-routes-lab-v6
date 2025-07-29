import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  const a = screen.queryByText(/Home/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Actors <NavLink>", async () => {
  const a = screen.queryByText(/Actors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink>", async () => {
  const a = screen.queryByText(/Directors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});
test("renders a <nav> element", () => {
  const nav = container.querySelector("nav");
  expect(nav).toBeInTheDocument();
});

test("renders three NavLink elements", () => {
  const links = container.querySelectorAll("a");
  expect(links.length).toBe(3);
});

test('NavLink "Home" has correct "to" prop', () => {
  const homeLink = screen.getByText("Home");
  expect(homeLink.getAttribute("href")).toBe("/");
});

test('NavLink "Directors" has correct "to" prop', () => {
  const directorsLink = screen.getByText("Directors");
  expect(directorsLink.getAttribute("href")).toBe("/directors");
});

test('NavLink "Actors" has correct "to" prop', () => {
  const actorsLink = screen.getByText("Actors");
  expect(actorsLink.getAttribute("href")).toBe("/actors");
});