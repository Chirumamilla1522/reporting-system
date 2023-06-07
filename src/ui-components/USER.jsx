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
  Heading,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { USER } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function (props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    verify_email: "",
    phonenumber: "",
    organisationname: "",
    organisationaddress: "",
    websiteaddress: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [lastname, setLastname] = React.useState(initialValues.lastname);
  const [email, setEmail] = React.useState(initialValues.email);
  const [verify_email, setVerify_email] = React.useState(
    initialValues.verify_email
  );
  const [phonenumber, setPhonenumber] = React.useState(
    initialValues.phonenumber
  );
  const [organisationname, setOrganisationname] = React.useState(
    initialValues.organisationname
  );
  const [organisationaddress, setOrganisationaddress] = React.useState(
    initialValues.organisationaddress
  );
  const [websiteaddress, setWebsiteaddress] = React.useState(
    initialValues.websiteaddress
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstname(initialValues.firstname);
    setLastname(initialValues.lastname);
    setEmail(initialValues.email);
    setVerify_email(initialValues.verify_email);
    setPhonenumber(initialValues.phonenumber);
    setOrganisationname(initialValues.organisationname);
    setOrganisationaddress(initialValues.organisationaddress);
    setWebsiteaddress(initialValues.websiteaddress);
    setErrors({});
  };
  const validations = {
    firstname: [{ type: "Required" }],
    lastname: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    verify_email: [{ type: "Required" }, { type: "Email" }],
    phonenumber: [{ type: "Required" }, { type: "Phone" }],
    organisationname: [{ type: "Required" }],
    organisationaddress: [],
    websiteaddress: [{ type: "URL" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap={tokens.space.medium.value}
      padding={tokens.space.xl.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstname,
          lastname,
          email,
          verify_email,
          phonenumber,
          organisationname,
          organisationaddress,
          websiteaddress,
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
          await DataStore.save(new USER(modelFields));
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
      {...getOverrideProps(overrides, "USER")}
      {...rest}
    >
      <Heading
        level={6}
        children="User details"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              lastname,
              email,
              verify_email,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname: value,
              email,
              verify_email,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.lastname ?? value;
          }
          if (errors.lastname?.hasError) {
            runValidationTasks("lastname", value);
          }
          setLastname(value);
        }}
        onBlur={() => runValidationTasks("lastname", lastname)}
        errorMessage={errors.lastname?.errorMessage}
        hasError={errors.lastname?.hasError}
        {...getOverrideProps(overrides, "lastname")}
      ></TextField>
      <TextField
        label="Email address"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email: value,
              verify_email,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="verify email address"
        isRequired={true}
        isReadOnly={false}
        value={verify_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              verify_email: value,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.verify_email ?? value;
          }
          if (errors.verify_email?.hasError) {
            runValidationTasks("verify_email", value);
          }
          setVerify_email(value);
        }}
        onBlur={() => runValidationTasks("verify_email", verify_email)}
        errorMessage={errors.verify_email?.errorMessage}
        hasError={errors.verify_email?.hasError}
        {...getOverrideProps(overrides, "verify_email")}
      ></TextField>
      <TextField
        label="Contact number"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phonenumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              verify_email,
              phonenumber: value,
              organisationname,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.phonenumber ?? value;
          }
          if (errors.phonenumber?.hasError) {
            runValidationTasks("phonenumber", value);
          }
          setPhonenumber(value);
        }}
        onBlur={() => runValidationTasks("phonenumber", phonenumber)}
        errorMessage={errors.phonenumber?.errorMessage}
        hasError={errors.phonenumber?.hasError}
        {...getOverrideProps(overrides, "phonenumber")}
      ></TextField>
      <Heading
        children="Organisation details"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="Organisation name"
        isRequired={true}
        isReadOnly={false}
        value={organisationname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              verify_email,
              phonenumber,
              organisationname: value,
              organisationaddress,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.organisationname ?? value;
          }
          if (errors.organisationname?.hasError) {
            runValidationTasks("organisationname", value);
          }
          setOrganisationname(value);
        }}
        onBlur={() => runValidationTasks("organisationname", organisationname)}
        errorMessage={errors.organisationname?.errorMessage}
        hasError={errors.organisationname?.hasError}
        {...getOverrideProps(overrides, "organisationname")}
      ></TextField>
      <TextField
        label=" Address"
        isRequired={false}
        isReadOnly={false}
        value={organisationaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              verify_email,
              phonenumber,
              organisationname,
              organisationaddress: value,
              websiteaddress,
            };
            const result = onChange(modelFields);
            value = result?.organisationaddress ?? value;
          }
          if (errors.organisationaddress?.hasError) {
            runValidationTasks("organisationaddress", value);
          }
          setOrganisationaddress(value);
        }}
        onBlur={() =>
          runValidationTasks("organisationaddress", organisationaddress)
        }
        errorMessage={errors.organisationaddress?.errorMessage}
        hasError={errors.organisationaddress?.hasError}
        {...getOverrideProps(overrides, "organisationaddress")}
      ></TextField>
      <TextField
        label="website address"
        isRequired={false}
        isReadOnly={false}
        value={websiteaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              verify_email,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress: value,
            };
            const result = onChange(modelFields);
            value = result?.websiteaddress ?? value;
          }
          if (errors.websiteaddress?.hasError) {
            runValidationTasks("websiteaddress", value);
          }
          setWebsiteaddress(value);
        }}
        onBlur={() => runValidationTasks("websiteaddress", websiteaddress)}
        errorMessage={errors.websiteaddress?.errorMessage}
        hasError={errors.websiteaddress?.hasError}
        {...getOverrideProps(overrides, "websiteaddress")}
      ></TextField>
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
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
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

