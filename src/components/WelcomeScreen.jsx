import ButtonAddItem from "./ButtonAddItem";
export default function WelcomeScreen({ setModal }) {
  return (
    <div className="welcome-screen">
      <h3>Welcome!</h3>
      <p>
        Your shopping list is empty right now. Click Add item button. Specify
        the name and the price of the new item. Hit Add item. if the task is
        done Hit the checkbox.
      </p>
      <ButtonAddItem setModal={setModal} />
    </div>
  );
}
