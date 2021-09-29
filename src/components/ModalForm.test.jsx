import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import ModalForm from "./ModalForm";
import NormalScreen from './NormalScreen'
import addNewItem from "../scripts/addNewItem";
jest.mock('../scripts/addNewItem')

test('Should create new item when submit the form',()=>{
    render(
        <RecoilRoot>
            <ModalForm />
            <NormalScreen/>
        </RecoilRoot>
    )

    addNewItem.mockReturnValue({
        id:0,
        name:'Sofa',
        price:999,
        acquired: false
    })

    const buttonElement = screen.getByText(/submit/i)
    const name=/Sofa/i
    const price=/999/i
    fireEvent.click(buttonElement)
    
    expect(addNewItem).toHaveBeenCalled();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
})