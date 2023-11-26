import OneSignal from "react-onesignal";
import { appId } from "@/constants/onesignal";

export default async function runOneSignal() {
  await OneSignal.init({
    appId: appId,
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.Slidedown.promptPush();
}
