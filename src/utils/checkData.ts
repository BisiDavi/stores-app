export function isDataObjectFilled(objectName: {}) {
  const fillStatus = Object.values(objectName).every((f: any) => f.length > 0);
  return fillStatus;
}
