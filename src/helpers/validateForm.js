export const validateFormField = (field, value) => {
  switch (field) {
    case "team_name":
    case "event_name":
    case "location":
      if (value === "") {
        return `Please input ${field.split("_").join(" ")}`;
      } else {
        return "";
      }

    case "file":
      if (!value) {
        return "Please upload the event CSV";
      } else {
        return "";
      }
    default:
      return "";
  }
};

export const validateFormData = (formData) => {
  let errors = {};
  Object.entries(formData).forEach(([key, value]) => {
    errors = {
      ...errors,
      [key]: validateFormField(key, value),
    };
  });

  return {
    num_error: Object.values(errors).filter((value) => value !== "").length,
    errors,
  };
};
