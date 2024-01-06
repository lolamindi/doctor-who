import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DoctorList from "../app/doctores/page";
import ContactPage from "../app/contacto/page";
import Button from "./components/Button/Button";

test("The page 'Doctores' should have the title Doctores", () => {
  render(<DoctorList />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Doctores" })
  ).toBeDefined();
});

test("The page 'Contacto' should include a message section in the form that says Mensaje*", () => {
  render(<ContactPage />);

  const formElement = screen.getByPlaceholderText("Mensaje*");
  expect(formElement).toBeDefined();
});

test("The app renders the Button component without crashing", () => {
  render(<Button />);
});
