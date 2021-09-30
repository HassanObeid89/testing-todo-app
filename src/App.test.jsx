import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "./App";

describe('App component',()=>{
  it("Show welcome screen when the list is empty", () => {
    const fakeData = [];
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));
  
    const {getByTestId}=render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  
    const divElement = getByTestId('welcomeScreen');
  
    expect(divElement).toBeTruthy();
  });
})

  it("Show normal screen when the list have at least one item", () => {
    const fakeData = [
      {
        id: 1,
        name: "Sofa",
        price: 999,
        acquired: false,
      },
    ];
  
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));
  
    const {getByTestId}=render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  
    const divElement = getByTestId('normalScreen');
  
    expect(divElement).toBeTruthy();
  });


