const SAFARI_PATTERN = /Safari/i;
const NON_SAFARI_PATTERN =
  /Chrome|Chromium|CriOS|Edg|EdgiOS|OPR|OPiOS|FxiOS|Android/i;

export const getCapabilityLayout = (userAgent = "") =>
  SAFARI_PATTERN.test(userAgent) && !NON_SAFARI_PATTERN.test(userAgent)
    ? "safari"
    : "chromium";

export const applyCapabilityLayout = (documentElement, userAgent) => {
  const layout = getCapabilityLayout(userAgent);
  documentElement.dataset.capabilityLayout = layout;
  return layout;
};
