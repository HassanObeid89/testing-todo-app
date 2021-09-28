import ModalForm from "./ModalForm";

export default function ButtonAddItem({ setModal }) {
  function openModal() {
    //set modal visible
    setModal(<ModalForm setModal={setModal} />);
  }
  return (
    <div>
      <button onClick={openModal}>Add Item</button>
    </div>
  );
}
