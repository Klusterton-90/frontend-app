import {React, useState} from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import DashboardButton from "../DashboardButton/DashboardButton";
import AddNewReminderModal from "./AddNewReminderModal";

export default function NotificationModal({ show,  showModal, hideModal }) {
  // show or hide modal
  const [showNewReminder, setShowNewReminder] = useState(false);

  // // show modal
  // const showModal = () => {
  //   handleClose() && setShowNewReminder(true);
  // };

  // // hide modal
  // const hideModal = () => {
  //   setShowNewReminder(false);
  // };

  
  return (
   
          <div className={styles.notificationContainer}>
            <Image
              src={"/images/successful.svg"}
              alt="success"
              width={200}
              height={200}
            />
            <div>
              <h3>Successful!</h3>
              <h4>You have successfully added a reminder for</h4>
            </div>
            <h3>Celotan, 1g 08:00AM Pill</h3>
            <div className={styles.buttonRow}>
              <DashboardButton
                buttonText={"Add New"}
                outline={true}
                onClick={showModal}
              />
              <DashboardButton
                buttonText={"Done"}
                outline={false}
                onClick={hideModal}
              />
            </div>
          </div>
       
  );
}
