/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { INCIDENT } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function (props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date_time: "",
    ongoing: undefined,
    Impact: "",
    Incident_type: "",
    by_you_or_third_party: undefined,
  };
  const [date_time, setDate_time] = React.useState(initialValues.date_time);
  const [ongoing, setOngoing] = React.useState(initialValues.ongoing);
  const [Impact, setImpact] = React.useState(initialValues.Impact);
  const [Incident_type, setIncident_type] = React.useState(
    initialValues.Incident_type
  );
  const [by_you_or_third_party, setBy_you_or_third_party] = React.useState(
    initialValues.by_you_or_third_party
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate_time(initialValues.date_time);
    setOngoing(initialValues.ongoing);
    setImpact(initialValues.Impact);
    setIncident_type(initialValues.Incident_type);
    setBy_you_or_third_party(initialValues.by_you_or_third_party);
    setErrors({});
  };
  const validations = {
    date_time: [{ type: "Required" }],
    ongoing: [{ type: "Required" }],
    Impact: [{ type: "Required" }],
    Incident_type: [{ type: "Required" }],
    by_you_or_third_party: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date_time,
          ongoing,
          Impact,
          Incident_type,
          by_you_or_third_party,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new INCIDENT(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "INCIDENT")}
      {...rest}
    >
      <TextField
        label="Date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={date_time && convertToLocal(new Date(date_time))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              date_time: value,
              ongoing,
              Impact,
              Incident_type,
              by_you_or_third_party,
            };
            const result = onChange(modelFields);
            value = result?.date_time ?? value;
          }
          if (errors.date_time?.hasError) {
            runValidationTasks("date_time", value);
          }
          setDate_time(value);
        }}
        onBlur={() => runValidationTasks("date_time", date_time)}
        errorMessage={errors.date_time?.errorMessage}
        hasError={errors.date_time?.hasError}
        {...getOverrideProps(overrides, "date_time")}
      ></TextField>
      <RadioGroupField
        label="Ongoing"
        name="ongoing"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              date_time,
              ongoing: value,
              Impact,
              Incident_type,
              by_you_or_third_party,
            };
            const result = onChange(modelFields);
            value = result?.ongoing ?? value;
          }
          if (errors.ongoing?.hasError) {
            runValidationTasks("ongoing", value);
          }
          setOngoing(value);
        }}
        onBlur={() => runValidationTasks("ongoing", ongoing)}
        errorMessage={errors.ongoing?.errorMessage}
        hasError={errors.ongoing?.hasError}
        {...getOverrideProps(overrides, "ongoing")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "ongoingRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "ongoingRadio1")}
        ></Radio>
      </RadioGroupField>
      <SelectField
        label="Impact on"
        placeholder="Please select an option"
        isDisabled={false}
        value={Impact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date_time,
              ongoing,
              Impact: value,
              Incident_type,
              by_you_or_third_party,
            };
            const result = onChange(modelFields);
            value = result?.Impact ?? value;
          }
          if (errors.Impact?.hasError) {
            runValidationTasks("Impact", value);
          }
          setImpact(value);
        }}
        onBlur={() => runValidationTasks("Impact", Impact)}
        errorMessage={errors.Impact?.errorMessage}
        hasError={errors.Impact?.hasError}
        {...getOverrideProps(overrides, "Impact")}
      >
        <option
          children="It systems"
          value="IT_SYSTEMS"
          {...getOverrideProps(overrides, "Impactoption0")}
        ></option>
        <option
          children="Operational systems"
          value="OPERATIONAL_SYSTEMS"
          {...getOverrideProps(overrides, "Impactoption1")}
        ></option>
        <option
          children="Customer data"
          value="CUSTOMER_DATA"
          {...getOverrideProps(overrides, "Impactoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Incident type"
        placeholder="Please select an option"
        isDisabled={false}
        value={Incident_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date_time,
              ongoing,
              Impact,
              Incident_type: value,
              by_you_or_third_party,
            };
            const result = onChange(modelFields);
            value = result?.Incident_type ?? value;
          }
          if (errors.Incident_type?.hasError) {
            runValidationTasks("Incident_type", value);
          }
          setIncident_type(value);
        }}
        onBlur={() => runValidationTasks("Incident_type", Incident_type)}
        errorMessage={errors.Incident_type?.errorMessage}
        hasError={errors.Incident_type?.hasError}
        {...getOverrideProps(overrides, "Incident_type")}
      >
        <option
          children="Scanning and reconnaissance"
          value="SCANNING_AND_RECONNAISSANCE"
          {...getOverrideProps(overrides, "Incident_typeoption0")}
        ></option>
        <option
          children="Unauthorized access to network or device"
          value="UNAUTHORIZED_ACCESS_TO_NETWORK_OR_DEVICE"
          {...getOverrideProps(overrides, "Incident_typeoption1")}
        ></option>
        <option
          children="Data exposure theft 0 r leak"
          value="DATA_EXPOSURE_THEFT_0R_LEAK"
          {...getOverrideProps(overrides, "Incident_typeoption2")}
        ></option>
        <option
          children="Malicious code malware"
          value="MALICIOUS_CODE_MALWARE"
          {...getOverrideProps(overrides, "Incident_typeoption3")}
        ></option>
      </SelectField>
      <RadioGroupField
        label="By you or third party"
        name="by_you_or_third_party"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              date_time,
              ongoing,
              Impact,
              Incident_type,
              by_you_or_third_party: value,
            };
            const result = onChange(modelFields);
            value = result?.by_you_or_third_party ?? value;
          }
          if (errors.by_you_or_third_party?.hasError) {
            runValidationTasks("by_you_or_third_party", value);
          }
          setBy_you_or_third_party(value);
        }}
        onBlur={() =>
          runValidationTasks("by_you_or_third_party", by_you_or_third_party)
        }
        errorMessage={errors.by_you_or_third_party?.errorMessage}
        hasError={errors.by_you_or_third_party?.hasError}
        {...getOverrideProps(overrides, "by_you_or_third_party")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "by_you_or_third_partyRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "by_you_or_third_partyRadio1")}
        ></Radio>
      </RadioGroupField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
