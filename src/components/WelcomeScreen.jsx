import ButtonAddItem from "./ButtonAddItem";
export default function WelcomeScreen({ setModal }) {
  return (
    <div className="welcome-screen">
      <h3>Welcome!</h3>
      <p>
        Your shopping list is empty right now. Start Adding items. Specify
        the name and the price of the new item. If the task is
        done Hit the checkbox.
      </p>
      <ButtonAddItem setModal={setModal} />
    </div>
  );
}
