import { LIVING_DEX_STATUS_KEY } from "../variables/globalVariables";

export default function getLivingDexStatusFromSessionStorage() {
  const serializedLivingDexStatus = sessionStorage.getItem(
    LIVING_DEX_STATUS_KEY
  );

  const livingDexStatus: boolean =
    serializedLivingDexStatus === null
      ? false
      : JSON.parse(serializedLivingDexStatus);

  return livingDexStatus;
}
