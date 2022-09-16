import Modal from "react-modal";

export const AboutModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal isOpen={true}>
      <h2>About Pluto</h2>
    </Modal>
  );
};
