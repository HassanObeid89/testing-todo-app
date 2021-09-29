import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";

test("Show welcome screen when the list is empty", () => {
  const fakeData = [];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  const textElement = screen.getByText(/welcome/i);

  expect(textElement).toBeInTheDocument();
});

test("Show normal screen when the list have at least one item", () => {
  const fakeData = [
    {
      id: 1,
      name: "Sofa",
      price: 999,
      acquired: false,
    },
  ];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  const textElement = screen.getByText(/your shopping list/i);

  expect(textElement).toBeInTheDocument();
});
