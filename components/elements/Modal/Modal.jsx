import { React, useState } from "react";
import AddNewReminderModal from "./AddNewReminderModal";
import ModalLayout from "./ModalLayout";
import NotificationModal from "./NotificationModal";

export default function Modal({ show, handleClose }) {
  // show add reminder state
  const [showAddReminder, setShowAddReminder] = useState(true);

  // show anotification state
  const [showNotification, setShowNotification] = useState(false);

  // handleShowNotification
  const handleShowNotification = () => {
    setShowAddReminder(false);
    setShowNotification(true);
  };

  //  handleAddNewReminderFromNotification
  const handleAddNewReminderFromNotification = () => {
    setShowAddReminder(true);
    setShowNotification(false);
  };

  return (
    <ModalLayout show={show}>
      <AddNewReminderModal
        handleClose={handleClose}
        show={show && showAddReminder}
        showNotification={handleShowNotification}
      />

      {showNotification && (
        <NotificationModal
          hideModal={handleClose}
          showModal={handleAddNewReminderFromNotification}
          show={showNotification}
        />
      )}
    </ModalLayout>
  );
}
