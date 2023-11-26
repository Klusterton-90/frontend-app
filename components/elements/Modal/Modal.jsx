import { React, useEffect, useState } from "react";
import AddNewReminderModal from "./AddNewReminderModal";
import ModalLayout from "./ModalLayout";
import NotificationModal from "./NotificationModal";
import ReminderModal from "./ReminderModal";

export default function Modal({
  show,
  handleClose,
  showReminder,
  handleReminderClose,
}) {
  // modal states

  // (for setting a reminder)
  // to add a reminder
  const [showModal1, setShowModal1] = useState(true);

  // when reminder is added
  const [showModal2, setShowModal2] = useState(false);

  // functions to handle state changes

  // when the add reminder button is clicked on modal 2
  const addFunctionality = () => {
    show == true ? null : handleOpen();
    setShowModal1((prev) => (prev = true));
    setShowModal2((prev) => (prev = false));
  };

  // when save button is clicked
  const saveFunctionality = () => {
    setShowModal2((prev) => (prev = true));
    setShowModal1((prev) => (prev = false));
  };

  //  when close button is clicked on modal 2
  const closeFunctionality = () => {
    handleClose();
    setShowModal1((prev) => (prev = true));
    setShowModal2((prev) => (prev = false));
  };

  // (for getting a reminder notification popup)
  // to remind the user
  const [showModal3, setShowModal3] = useState(true);

  // when medication is taken
  const [showModal4, setShowModal4] = useState(false);

  // functions to handle state changes

  // when taken button is clicked
  const medTaken = () => {
    setShowModal4((prev) => (prev = true));
    setShowModal3((prev) => (prev = false));
  };

  //  when close button is clicked on modal 4
  const closeReminder = () => {
    setShowModal3((prev) => (prev = false));
    handleReminderClose();
    // setShowModal4((prev) => (prev = false));
  };

  // to check states
  useEffect(() => {
    console.log([show, showModal1, showModal2]);
  }, [show, showModal1, showModal2]);

  return (
    <>
      <ModalLayout show={showReminder}>
        <ReminderModal
          hideModal={closeReminder}
          showModal={medTaken}
          show={showModal3}
        />
        {showModal4 && (
          <NotificationModal
            title={"Way to go!"}
            subtext={"You have successfully taken your meds"}
            medicationDetails={"Celotan, 1g 08:00AM Pill"}
            buttonTextLeft={"Back Home"}
            buttonTextRight={"Continue"}
            onClickLeft={closeReminder}
            onClickRight={closeReminder}
            show={showModal4}
          />
        )}
      </ModalLayout>
      <ModalLayout show={show}>
        <AddNewReminderModal
          handleClose={handleClose}
          show={showModal1}
          showNotification={saveFunctionality}
        />

        {showModal2 && (
          <NotificationModal
            title={"Successful!"}
            subtext={"You have successfully added a reminder for"}
            medicationDetails={"Celotan, 1g 08:00AM Pill"}
            buttonTextLeft={"Add New"}
            buttonTextRight={"Done"}
            onClickRight={closeFunctionality}
            onClickLeft={addFunctionality}
            show={showModal2}
          />
        )}
      </ModalLayout>
    </>
  );
}

{
  /* <ModalLayout show={reminder}>
<ReminderModal
hideModal={closeReminder}
showModal={medTaken}
show={showModal3}
/>
{reminder && showModal4 && (
  <NotificationModal
    title={"Way to go!"}
    subtext={"You have successfully taken your meds"}
    medicationDetails={"Celotan, 1g 08:00AM Pill"}
    buttonTextLeft={"Back Home"}
    buttonTextRight={"Continue"}
    onClickLeft={closeReminder}
    onClickRight={closeReminder}
    show={showModal4}
  />
)}
</ModalLayout> */
}
