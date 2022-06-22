import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const NEW_TEAM = "NEW_TEAM";

const UploadPage = () => {
  const [teams, setTeams] = useState([]);
  const [showTeamNameInput, setShowTeamNameInput] = useState(false);
  const [teamData, setTeamData] = useState({
    team_name: "",
    team_id: "",
  });
  const [newTeamName, setNewTeamName] = useState("");
  const [showBakerMPInput, setShowBakerMPInput] = useState(false);
  const [isWomen, setIsWomen] = useState(true);
  const [bakerMPDistribution, setBakerMPDistribution] = useState([]);
  const [eventName, setEventName] = useState("");
  const [numOfBakers, setNumOfBakers] = useState(0);
  const [eventLocation, setEventLocation] = useState("");
  const [eventSeason, setEventSeason] = useState("2021-2022");
  const [eventCSVFile, setEventCSVFile] = useState(null);
  const onCheckBakerMP = (e) => {
    setShowBakerMPInput(e.target.checked);
    if (e.target.checked) {
      setBakerMPDistribution([0]);
    }
  };

  const uploadFile = (e) => {
    setEventCSVFile(e.target.files[0]);
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
    let team_name,
      team_id,
      event_location,
      event_season,
      num_of_baker_games,
      baker_match_play_distributions,
      file,
      event_name;
    let error = {};
    if (showTeamNameInput) {
      team_name = newTeamName;
      team_id = `${newTeamName
        .toLowerCase()
        .split(" ")
        .join("-")}--(${eventSeason})`;
    } else {
      team_name = teamData.team_name;
      team_id = teamData.team_id;
    }
    if (team_name === "") {
      error = {
        ...error,
        team_name: "Please input your team name (e.g. QU Women)",
      };
    }
    event_name = eventName;

    if (event_name === "") {
      error = {
        ...error,
        event_name: "Please input event name (e.g. Flyer Classic)",
      };
    }

    event_location = eventLocation;
    if (event_location === "") {
      error = {
        ...error,
        event_location: "Please input the event location (e.g St Clair Bowl)",
      };
    }

    event_season = eventSeason;
    num_of_baker_games = numOfBakers;

    if (num_of_baker_games === 0) {
      error = {
        ...error,
        num_of_baker_games: "Baker game value cannot be zero",
      };
    }

    if (showBakerMPInput) {
      // check if baker MDDistribution has zero value
      const zeroValues = bakerMPDistribution.filter(
        (distribution) => distribution === 0
      );
      if (zeroValues.length > 0) {
        error = {
          ...error,
          baker_mp_distribution: "Please enter valid baker game number",
        };
      }
    }
    baker_match_play_distributions = bakerMPDistribution;
    file = eventCSVFile;
    if (!file) {
      error = {
        ...error,
        file: "Please upload event CSV file",
      };
    }

    const formData = {
      team_name,
      team_id,
      event_location,
      event_name,
      file,
      baker_match_play_distributions,
    };
    console.log(error);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit form");

    // if (showTeamNameInput) {

    //   formData = {
    //     ...formData,
    //     teamName: newTeamName,
    //     teamId:
    //   };
    //   // check if new team has string
    // } else {
    //   formData = {
    //     ...formData,
    //     ...teamData,
    //   };
    // }

    validateFormData();
  };

  const teamNameChange = (e) => {
    const selectedTeamName = e.target.value;

    if (selectedTeamName === NEW_TEAM) {
      setShowTeamNameInput(true);
    } else {
      setShowTeamNameInput(false);
      const [team_id, team_name] = selectedTeamName.split("__");
      setNewTeamName("");
      setTeamData({
        team_name,
        team_id,
      });
    }
  };
  const seasonChange = (e) => {
    const selectedSeason = e.target.value;
    setEventSeason(selectedSeason);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="teamname">
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
          <option value={NEW_TEAM}>We are new team</option>
        </Form.Select>

        {showTeamNameInput && (
          <Form.Control
            className="mt-2"
            type="text"
            placeholder="Team Name E.g.QU Women / QU Men"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
          />
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventname">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g. Flyer Classic"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="isWomen">
        <div className="bd-form__iswomen-team-row">
          <span
            className={
              isWomen ? "bd-form__iswomen-team-row__label--active" : ""
            }
          >
            Women's Team
          </span>
          <input
            type="checkbox"
            id="toggle-for-is-women-team"
            className="bd-form__input-toggle__checkbox"
            onChange={(e) => setIsWomen(e.target.checked)}
          />
          <label
            htmlFor="toggle-for-is-women-team"
            className={`bd-form__input-toggle__button ${
              isWomen
                ? "bd-form__input-toggle__button__inactive"
                : "bd-form__input-toggle__button__active"
            }`}
          ></label>
          <span
            className={
              !isWomen ? "bd-form__iswomen-team-row__label--active" : ""
            }
          >
            Men's Team
          </span>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Event Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Event Location E.g St Clair Bowl"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="season">
        <Form.Label> Season</Form.Label>
        <Form.Select onChange={seasonChange}>
          <option value="2021-2022" defaultChecked>
            2021-2022
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="num_of_baker_games">
        <Form.Label>Number of Baker Games</Form.Label>
        <Form.Control
          type="number"
          placeholder="Number of Baker Games"
          onChange={(e) => setNumOfBakers(e.target.value)}
          value={numOfBakers}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="has_baker_match_play">
        <Form.Check
          type="checkbox"
          label="This Event has Baker Match Play"
          onChange={onCheckBakerMP}
        />
      </Form.Group>
      <div classNam="bd-form__bakermp-row">
        {showBakerMPInput &&
          bakerMPDistribution.map((_, index) => (
            <Form.Group
              className="bd-form__bakermp-row__input-group mb-3"
              controlId="baker_mp_distributions"
              key={`baker_mp_${index}`}
            >
              <Form.Label>Baker Match Play {index + 1}</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={bakerMPDistribution[index]}
                onChange={(e) => {
                  const updatedValue = e.target.value;
                  const updateValueArr = [...bakerMPDistribution];
                  updateValueArr[index] = updatedValue;
                  setBakerMPDistribution(updateValueArr);
                }}
              />
              {index === bakerMPDistribution.length - 1 && (
                <button
                  className="bd-form__bakermp-row__add-row-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setBakerMPDistribution([...bakerMPDistribution, 0]);
                  }}
                >
                  +
                </button>
              )}
              {index !== 0 && index === bakerMPDistribution.length - 1 && (
                <button
                  className="bd-form__bakermp-row__remove-row-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const newArr = [...bakerMPDistribution];
                    newArr.pop();
                    setBakerMPDistribution(newArr);
                  }}
                >
                  -
                </button>
              )}
            </Form.Group>
          ))}
      </div>
      <div className="bd-form__input-file-group">
        <input type="file" onChange={uploadFile} accept=".csv" />
        <small>Only CSV file is accepted</small>
      </div>

      <Button variant="primary" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
  );
};

export default UploadPage;
