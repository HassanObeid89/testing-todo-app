import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import ModalForm from "./ModalForm";
import NormalScreen from "./NormalScreen";
import addNewItem from "../scripts/addNewItem";

jest.mock("../scripts/addNewItem");

describe("ModalForm component", () => {
  it("Should create new item when submit the form", () => {
    render(
      <RecoilRoot>
        <ModalForm />
        <NormalScreen />
      </RecoilRoot>
    );

    addNewItem.mockReturnValue({
      id: 0,
      name: "Sofa",
      price: 999,
      acquired: false,
    });

    const buttonElement = screen.getByText(/submit/i);
    const name = /Sofa/i;
    const price = /999/i;
    fireEvent.click(buttonElement);

    expect(addNewItem).toHaveBeenCalled();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
  });

  it("modal shows when click add item button", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <ModalForm setModal={true} />
      </RecoilRoot>
    );
    const div = getByTestId("modalForm");
    expect(div).toBeTruthy();
  });

  it("modal don't shows if don't click add item button", () => {
    const { queryByTestId } = render(
      <RecoilRoot>
        <ModalForm setModal={false} />
      </RecoilRoot>
    );
    const div = queryByTestId("modalForm");
    expect(div).toBeTruthy();
  });
});

