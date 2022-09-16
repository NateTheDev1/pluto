import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { valid_modals } from "../../constants/modal.config";
import { CurrentModalState } from "../../state/Modal.state";
import { ClickedDropdownItemEmitter } from "../../state/Titlebar.state";
import { AboutModal } from "./AboutModal.modal";
import { SettingsModal } from "./SettingsModal.modal";

export const ModalProvider = () => {
  const [currentModalState, setCurrentModalState] =
    useRecoilState(CurrentModalState);

  useEffect(() => {
    ClickedDropdownItemEmitter.on("ITEM_CLICKED", (data) => {
      if (valid_modals.includes(data.dropdownKey)) {
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
      {currentModalState === "settings" && (
        <SettingsModal onClose={onCloseModal} />
      )}
    </>
  );
};
