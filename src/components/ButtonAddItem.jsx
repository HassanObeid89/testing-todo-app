import ModalForm from "./ModalForm";

export default function ButtonAddItem({ setModal, list, setList }) {
  function openModal() {
    //set modal visible
    setModal(<ModalForm list={list} setList={setList} setModal={setModal} />);
  }
  return (
    <div>
      <button onClick={openModal}>Add Item</button>
    </div>
  );
}
