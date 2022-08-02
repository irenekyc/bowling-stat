import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NORMAL_GAME } from "../../constants";

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
      console.error(error);
      // error
    }
  };

  // TODO: EVENT TYPE: Regular Game OR Championship
  return (
    <Modal show={show}>
      {showSuccessMessage ? (
        <>
          <Modal.Header data-testid="upload-success-modal-header">
            Upload Success
          </Modal.Header>
          <Modal.Body data-testid="upload-success-modal-body">
            <button data-testid="upload-success-modal-button-link">
              <Link
                to={{
                  pathname: `/${showSuccessMessage.team_id}/events/${showSuccessMessage.event_id}`,
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
              data-testid="upload-success-modal-button-upload-another"
            >
              Upload another event
            </button>
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header data-testid="file-upload-confirmation-modal-header">
            File Upload Confirmation
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li data-testid="file-upload-confirmation-modal-team-name">
                Team Name: {formData.team_name}
              </li>
              <li data-testid="file-upload-confirmation-modal-event-name">
                Event Name: {formData.event_name}
              </li>
              <li data-testid="file-upload-confirmation-modal-event-location">
                {" "}
                Event Location: {formData.location}
              </li>
              {formData.game_pattern === NORMAL_GAME ? (
                <>
                  <li data-testid="file-upload-confirmation-modal-normal-game-traditional-team-game">
                    There are {formData.num_of_team_games} Traditional Team
                    Games
                  </li>
                  <li data-testid="file-upload-confirmation-modal-normal-game-baker-game-blocks">
                    There are {formData.num_of_baker_games} Baker Game Blocks
                  </li>
                  <li data-testid="file-upload-confirmation-modal-normal-game-baker-number-per-block">
                    Each Baker Block has {formData.num_of_baker_games_per_block}{" "}
                    games
                  </li>
                  {/* TODO: Baker Match Play distributions */}
                </>
              ) : (
                <></>
              )}

              <li data-testid="file-upload-confirmation-modal-file">
                File: {formData.file ? formData.file.name : ""}
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={backToForm}
              data-testid="file-upload-confirmation-modal-button-back"
            >
              Back
            </button>
            <button
              onClick={submitForm}
              data-testid="file-upload-confirmation-modal-button-confirm"
            >
              Confirm
            </button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default FormSubmissionConfirmationModal;
