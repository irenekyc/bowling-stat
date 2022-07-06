import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormSubmissionConfirmationModal = ({
  formData,
  backToForm,
  show,
  formSubmit,
}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(null);
  const submitForm = async () => {
    let team_id = `${formData.team_name.toLowerCase().split(" ").join("-")}`;

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "team_id") {
        form.append(key, value);
      }
    });
    try {
      const res = await axios({
        method: "post",
        url: `https://fierce-plateau-64816.herokuapp.com/teams/${team_id}/upload`,
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setShowSuccessMessage({
        event_id: res.data.event_id,
        team_id: res.data.team_id,
      });
      // redirect to the event page
    } catch (error) {
      // error
    }
  };
  return (
    <Modal show={show}>
      {showSuccessMessage ? (
        <>
          <Modal.Header>Upload Success</Modal.Header>
          <Modal.Body>
            <button>
              <Link
                to={{
                  pathname: `/teams/${showSuccessMessage.team_id}/events/${showSuccessMessage.event_id}`,
                }}
              >
                Look at event data
              </Link>
            </button>
            <button
              onClick={() => {
                setShowSuccessMessage(null);
                formSubmit();
              }}
            >
              Upload another event
            </button>
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header>File Upload Confirmation</Modal.Header>
          <Modal.Body>
            <ul>
              <li>Team Name: {formData.team_name}</li>
              <li>Event Name: {formData.event_name}</li>
              <li> Event Location: {formData.location}</li>
              <li>{formData.isWomen ? "Women Team" : "Men Team"}</li>
              <li>
                There are {formData.num_of_team_games} Traditional Team Games
              </li>
              <li>There are {formData.num_of_baker_games} Baker Game Blocks</li>
              <li>
                Each Baker Block has {formData.num_of_baker_games_per_block}{" "}
                games
              </li>
              {/* {formData.baker_match_play_distributions.length === 0
                ? "There are no baker match play"
                : formData.baker_match_play_distributions.map((num, index) => (
                    <li key={`${index}-${num}`}>
                      <span>Baker Match Play{index + 1}: </span>
                      <span>
                        <strong>{num}</strong> games
                      </span>
                    </li>
                  ))} */}
              <li>File: {formData.file ? formData.file.name : ""}</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={backToForm}>Back</button>
            <button onClick={submitForm}>Confirm</button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default FormSubmissionConfirmationModal;
