import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import i18n from "./i18n";
import { getCapabilityLayout } from "./utils/capabilityLayout";

beforeEach(async () => {
  await i18n.changeLanguage("en");
});

test("presents the evidence-led hero and primary actions", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /Matias Benitez Full-Stack Engineer/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /View selected work/i }),
  ).toHaveAttribute("href", "#selected-work");
  const resumeLinks = screen.getAllByRole("link", { name: /Download CV/i });
  expect(resumeLinks).toHaveLength(2);
  resumeLinks.forEach((link) =>
    expect(link).toHaveAttribute(
      "href",
      "/Matias_Benitez_NZ_Full_Stack_AI_Engineer_CV_2026_Auckland.pdf",
    ),
  );
  expect(screen.getByText("New Zealand")).toBeInTheDocument();
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
      name: /Matias Benitez Ingeniero Full-Stack/i,
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

test.each([
  [
    "Safari",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
    "safari",
  ],
  [
    "Chrome",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    "chromium",
  ],
  [
    "Chrome on iOS",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/140.0.0.0 Mobile/15E148 Safari/604.1",
    "chromium",
  ],
])("selects the %s capabilities layout", (_, userAgent, expectedLayout) => {
  expect(getCapabilityLayout(userAgent)).toBe(expectedLayout);
});
