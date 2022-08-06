import Form from "react-bootstrap/Form";
import { InfoIcon } from "../../components/icons";

const FormGroup = ({ label, errorMessage, children }) => {
  return (
    <Form.Group className="my-3">
      <Form.Label className="bd-page--upload__input-title">
        <span data-testid="form-group-label">{label.label}</span>
        <InfoIcon withTooltip={label.tooltip} />
      </Form.Label>
      {children}
      {
        <span
          data-testid={`input-error-message`}
          className={"bd-form__inputError"}
        >
          {errorMessage || ""}
        </span>
      }
    </Form.Group>
  );
};
export default FormGroup;
