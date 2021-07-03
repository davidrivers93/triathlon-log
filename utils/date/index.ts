export const convertFirebaseDate = (dateField: any) => {
  const firebaseDate = dateField.toDate();

  var d = firebaseDate.toString();
  return d.substr(0, 21);
};
