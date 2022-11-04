const validation = (data) => {
  let errors = {};
  if (data.firstName === "") {
    errors = { ...errors, firstnameError: "Please fill this field" };
  }
  if (data.lastName === "") {
    errors = { ...errors, lastNameError: "Please this field is required" };
  }
  if (data.email === "" || !data.email) {
    errors = { ...errors, emailError: "Plaese fill this field" };
  }
  if (data.message === "" || !data.message) {
    errors = { ...errors, message: "Please fill this field" };
  }

  return errors;
};

export default validation;
