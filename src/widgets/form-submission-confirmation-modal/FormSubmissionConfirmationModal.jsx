import Modal from "react-bootstrap/Modal";
import axios from "axios";

const FormSubmissionConfirmationModal = ({
  formData,
  backToForm,
  show,
  formSubmit,
}) => {
  const submitForm = async () => {
    let team_id = `${formData.team_name.toLowerCase().split(" ").join("-")}`;

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "team_id") {
        if (key === "baker_match_play_distributions") {
          form.append("baker_match_play_distributions", value.join(","));
        } else {
          form.append(key, value);
        }
      }
    });
    try {
      await axios({
        method: "post",
        url: `https://fierce-plateau-64816.herokuapp.com/teams/${team_id}/upload`,
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      });
      // redirect to the event page
    } catch (error) {
      // error
    }
  };
  return (
    <Modal show={show}>
      <Modal.Header>File Upload Confirmation</Modal.Header>
      <Modal.Body>
        <ul>
          <li>Team Name: {formData.team_name}</li>
          <li>Event Name: {formData.event_name}</li>
          <li> Event Location: {formData.location}</li>
          <li>{formData.isWomen ? "Women Team" : "Men Team"}</li>
          <li>There are {formData.num_of_baker_games} Bakers Game</li>
          {formData.baker_match_play_distributions.length === 0
            ? "There are no baker match play"
            : formData.baker_match_play_distributions.map((num, index) => (
                <li key={`${index}-${num}`}>
                  <span>Baker Match Play{index + 1}: </span>
                  <span>
                    <strong>{num}</strong> games
                  </span>
                </li>
              ))}
          <li>File: {formData.file ? formData.file.name : ""}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={backToForm}>Back</button>
        <button onClick={submitForm}>Confirm</button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormSubmissionConfirmationModal;
