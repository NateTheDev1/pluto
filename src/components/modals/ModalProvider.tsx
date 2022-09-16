import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CurrentModalState } from "../../state/Modal.state";
import { ClickedDropdownItemEmitter } from "../../state/Titlebar.state";
import { AboutModal } from "./AboutModal.modal";

export const ModalProvider = () => {
  const [currentModalState, setCurrentModalState] =
    useRecoilState(CurrentModalState);

  useEffect(() => {
    ClickedDropdownItemEmitter.on("ITEM_CLICKED", (data) => {
      console.log("data");
      if (data.dropdownKey === "help.about") {
        setCurrentModalState(data.dropdownKey);
      }
    });
  }, []);

  const onCloseModal = () => {
    setCurrentModalState(null);
  };

  return (
    <>
      {currentModalState === "help.about" && (
        <AboutModal onClose={onCloseModal} />
      )}
    </>
  );
};
