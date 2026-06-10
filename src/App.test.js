import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import i18n from "./i18n";

beforeEach(async () => {
  await i18n.changeLanguage("en");
});

test("presents the evidence-led hero and primary actions", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /Matias Benitez Front-End Developer/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /View selected work/i }),
  ).toHaveAttribute("href", "#selected-work");
  expect(screen.getAllByRole("link", { name: /Download CV/i })).toHaveLength(2);
});

test("includes every section in the navigation menu", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: /Open navigation menu/i }),
  );
  const menu = screen.getByRole("navigation", {
    name: "Navigation and actions",
  });

  expect(menu.querySelector('a[href="#selected-work"]')).toHaveTextContent(
    "Selected work",
  );
  expect(menu.querySelector('a[href="#selected-work"]')).toHaveAttribute(
    "href",
    "#selected-work",
  );
  expect(menu.querySelector('a[href="#capabilities"]')).toHaveAttribute(
    "href",
    "#capabilities",
  );
  expect(menu.querySelector('a[href="#contact"]')).toHaveAttribute(
    "href",
    "#contact",
  );
});

test("switches the portfolio to Spanish", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: /Open navigation menu/i }),
  );
  fireEvent.click(screen.getByRole("button", { name: "Español" }));

  expect(
    screen.getByRole("heading", {
      name: /Matias Benitez Desarrollador Front-End/i,
    }),
  ).toBeInTheDocument();
});

test("uses labeled live and source links for featured projects", () => {
  render(<App />);

  expect(
    screen.getByRole("link", { name: /View live: BSAS Travel/i }),
  ).toHaveAttribute("href", "https://bsas-travel.netlify.app/");
  expect(
    screen.getByRole("link", { name: /View source: Learn Languages Online/i }),
  ).toHaveAttribute("href", "https://github.com/fatso1000/learn-languages");
});
