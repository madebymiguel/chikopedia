import { LIVING_DEX_STATUS_KEY } from "../variables/globalVariables";

export function getLivingDexStatus() {
  const serializedLivingDexStatus = sessionStorage.getItem(
    LIVING_DEX_STATUS_KEY
  );

  const livingDexStatus =
    serializedLivingDexStatus === null
      ? false
      : JSON.parse(serializedLivingDexStatus);

  return livingDexStatus;
}
