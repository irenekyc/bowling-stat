import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import FormSubmissionConfirmationModal from "../../widgets/form-submission-confirmation-modal";

const NEW_TEAM = "NEW_TEAM";
const initFormData = {
  team_name: "",
  team_id: "",
  file: null,
  isWomen: true,
  event_name: "",
  location: "",
  season: "2021-2022",
  num_of_baker_games: 0,
  baker_match_play_distributions: [],
};

const UploadPage = () => {
  const [teams, setTeams] = useState([]);
  const [showTeamNameInput, setShowTeamNameInput] = useState(false);
  const [showBakerMPInput, setShowBakerMPInput] = useState(false);
  const [formData, setFormData] = useState({
    ...initFormData,
  });
  const [errorMessage, setErrorMessage] = useState({
    team_name: "",
    file: "",
    event_name: "",
    location: "",
    num_of_baker_games: "",
    baker_match_play_distributions: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const onCheckBakerMP = (e) => {
    setShowBakerMPInput(e.target.checked);
    if (e.target.checked) {
      setFormData({
        ...formData,
        baker_match_play_distributions: [0],
      });
    }
  };

  const uploadFile = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0] || null,
    });
    const error = validateField("file", e.target.files[0]);
    setErrorMessage({
      ...errorMessage,
      file: error,
    });
  };

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          "https://fierce-plateau-64816.herokuapp.com/teams"
        );
        setTeams(res.data.teams);
      } catch {}
    };
    fetchTeam();
  }, []);

  const validateFormData = () => {
    let error = {};
    Object.entries(formData).forEach(([key, value]) => {
      error = {
        ...error,
        [key]: validateField(key, value),
      };
    });

    setErrorMessage({
      ...errorMessage,
      ...error,
    });

    return Object.values(error).filter((value) => value !== "").length;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const num_of_errors = validateFormData();
    if (num_of_errors === 0) {
      console.log("Show modal to confirm");
      setShowConfirmation(true);
    }
  };

  const teamNameChange = (e) => {
    const selectedTeamName = e.target.value;

    if (selectedTeamName === NEW_TEAM) {
      setShowTeamNameInput(true);
      setFormData({
        ...formData,
        team_name: "",
        team_id: "",
      });
    } else {
      setShowTeamNameInput(false);
      const [team_id, team_name] = selectedTeamName.split("__");

      setFormData({
        ...formData,
        team_name,
        team_id,
      });
    }
  };
  const seasonChange = (e) => {
    const selectedSeason = e.target.value;
    setFormData({
      ...formData,
      season: selectedSeason,
    });
  };
  const validateField = (field, value) => {
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

      case "num_of_baker_games":
        if (value === 0) {
          return "Number cannot be zero";
        } else {
          return "";
        }

      case "baker_match_play_distributions":
        const zeroValues = value.filter((num) => num === 0);
        if (zeroValues.length > 0) {
          return "Number cannot be zero";
        } else {
          return "";
        }

      default:
        return "";
    }
  };

  const inputOnChangeHandler = (e) => {
    const field = e.target.id;
    let value;
    if (field === "isWomen") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    if (errorMessage[field] !== "") {
      const error = validateField(field, value);
      setErrorMessage({ ...errorMessage, [field]: error });
    }

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const resetForm = () => {
    setShowConfirmation(false);
    setFormData(initFormData);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Team Name</Form.Label>
          <Form.Select onChange={teamNameChange}>
            <option value="">Select team</option>
            {teams.map((team) => (
              <option
                value={team.team_id + "__" + team.team_name}
                key={team.team_id}
              >
                {team.team_name}
              </option>
            ))}
            <option value={NEW_TEAM}>Add my team</option>
          </Form.Select>

          {showTeamNameInput && (
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="Team Name E.g.QU Women / QU Men"
              value={formData.team_name}
              id="team_name"
              onChange={inputOnChangeHandler}
            />
          )}
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.team_name || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Flyer Classic"
            id="event_name"
            value={formData.event_name}
            onChange={inputOnChangeHandler}
          />
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.event_name || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="bd-form__iswomen-team-row">
            <span
              className={
                formData.isWomen
                  ? "bd-form__iswomen-team-row__label--active"
                  : ""
              }
            >
              Women's Team
            </span>
            <input
              type="checkbox"
              id="isWomen"
              className="bd-form__input-toggle__checkbox"
              onChange={inputOnChangeHandler}
            />
            <label
              htmlFor="isWomen"
              className={`bd-form__input-toggle__button ${
                formData.isWomen
                  ? "bd-form__input-toggle__button__inactive"
                  : "bd-form__input-toggle__button__active"
              }`}
            ></label>
            <span
              className={
                !formData.isWomen
                  ? "bd-form__iswomen-team-row__label--active"
                  : ""
              }
            >
              Men's Team
            </span>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Event Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Event Location E.g St Clair Bowl"
            id="location"
            value={formData.location}
            onChange={inputOnChangeHandler}
          />
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.location || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Season</Form.Label>
          <Form.Select onChange={seasonChange}>
            <option value="2021-2022" defaultChecked>
              2021-2022
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Baker Games</Form.Label>
          <Form.Control
            id="num_of_baker_games"
            type="number"
            placeholder="Number of Baker Games"
            onChange={inputOnChangeHandler}
            value={formData.num_of_baker_games}
          />
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.num_of_baker_games || ""}
            </span>
          }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="This Event has Baker Match Play"
            onChange={onCheckBakerMP}
          />
        </Form.Group>
        <div className="bd-form__bakermp-row">
          {showBakerMPInput &&
            formData.baker_match_play_distributions.map((_, index) => (
              <Form.Group
                className="bd-form__bakermp-row__input-group mb-3"
                key={`baker_mp_${index}`}
              >
                <Form.Label>Baker Match Play {index + 1}</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  value={formData.baker_match_play_distributions[index]}
                  onChange={(e) => {
                    const updatedValue = e.target.value;
                    const updateValueArr = [
                      ...formData.baker_match_play_distributions,
                    ];
                    updateValueArr[index] = updatedValue;
                    setFormData({
                      ...formData,
                      baker_match_play_distributions: updateValueArr,
                    });
                    setErrorMessage({
                      ...errorMessage,
                      baker_match_play_distributions: validateField(
                        "baker_match_play_distributions",
                        updateValueArr
                      ),
                    });
                  }}
                />
                {index ===
                  formData.baker_match_play_distributions.length - 1 && (
                  <button
                    className="bd-form__bakermp-row__add-row-button"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormData({
                        ...formData,
                        baker_match_play_distributions: [
                          ...formData.baker_match_play_distributions,
                          0,
                        ],
                      });
                    }}
                  >
                    +
                  </button>
                )}
                {index !== 0 &&
                  index ===
                    formData.baker_match_play_distributions.length - 1 && (
                    <button
                      className="bd-form__bakermp-row__remove-row-button"
                      onClick={(e) => {
                        e.preventDefault();
                        const newArr = [
                          ...formData.baker_match_play_distributions,
                        ];
                        newArr.pop();
                        setFormData({
                          ...formData,
                          baker_match_play_distributions: newArr,
                        });
                      }}
                    >
                      -
                    </button>
                  )}
              </Form.Group>
            ))}
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.baker_match_play_distributions || ""}
            </span>
          }
        </div>
        <div className="bd-form__input-file-group">
          <input type="file" onChange={uploadFile} accept=".csv" />
          <small>Only CSV file is accepted</small>
          {
            <span className={"bd-form__inputError"}>
              {errorMessage.file || ""}
            </span>
          }
        </div>

        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Form>

      <FormSubmissionConfirmationModal
        formData={formData}
        show={showConfirmation}
        backToForm={() => setShowConfirmation(false)}
        formSubmit={resetForm}
      />
    </>
  );
};

export default UploadPage;
