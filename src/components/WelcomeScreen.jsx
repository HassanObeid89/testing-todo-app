import ButtonAddItem from "./ButtonAddItem";
import cart from "../assets/images/cart.png";
export default function WelcomeScreen({ modal, setModal, list, setList }) {
  return (
    <div id="welcome-screen">
      <img src={cart} alt="" />
      <h1>Shopping List</h1>
      <h3>Welcome!</h3>
      <p>
        Your shopping list is empty right now. Click Add item button. Specify
        the name and the price of the new item. Hit Add item. if the task is
        done Hit the checkbox.
      </p>

      <ButtonAddItem
        setModal={setModal}
        modal={modal}
        list={list}
        setList={setList}
      />
    </div>
  );
}
