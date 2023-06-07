/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { USER } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function USERUpdateForm(props) {
  const {
    id: idProp,
    uSER: uSERModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    organisationname: "",
    organisationaddress: "",
    websiteaddress: "",
    verify_email: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [lastname, setLastname] = React.useState(initialValues.lastname);
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
  const [verify_email, setVerify_email] = React.useState(
    initialValues.verify_email
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uSERRecord
      ? { ...initialValues, ...uSERRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setFirstname(cleanValues.firstname);
    setLastname(cleanValues.lastname);
    setPhonenumber(cleanValues.phonenumber);
    setOrganisationname(cleanValues.organisationname);
    setOrganisationaddress(cleanValues.organisationaddress);
    setWebsiteaddress(cleanValues.websiteaddress);
    setVerify_email(cleanValues.verify_email);
    setErrors({});
  };
  const [uSERRecord, setUSERRecord] = React.useState(uSERModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(USER, idProp)
        : uSERModelProp;
      setUSERRecord(record);
    };
    queryData();
  }, [idProp, uSERModelProp]);
  React.useEffect(resetStateValues, [uSERRecord]);
  const validations = {
    email: [{ type: "Required" }, { type: "Email" }],
    firstname: [{ type: "Required" }],
    lastname: [{ type: "Required" }],
    phonenumber: [{ type: "Required" }, { type: "Phone" }],
    organisationname: [],
    organisationaddress: [],
    websiteaddress: [{ type: "URL" }],
    verify_email: [{ type: "Required" }, { type: "Email" }],
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
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          firstname,
          lastname,
          phonenumber,
          organisationname,
          organisationaddress,
          websiteaddress,
          verify_email,
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
          await DataStore.save(
            USER.copyOf(uSERRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "USERUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              firstname,
              lastname,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
              verify_email,
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
        label="Firstname"
        isRequired={true}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname: value,
              lastname,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
              verify_email,
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
        label="Lastname"
        isRequired={true}
        isReadOnly={false}
        value={lastname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname: value,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
              verify_email,
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
        label="Phonenumber"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phonenumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname,
              phonenumber: value,
              organisationname,
              organisationaddress,
              websiteaddress,
              verify_email,
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
      <TextField
        label="Organisationname"
        isRequired={false}
        isReadOnly={false}
        value={organisationname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname,
              phonenumber,
              organisationname: value,
              organisationaddress,
              websiteaddress,
              verify_email,
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
        label="Organisationaddress"
        isRequired={false}
        isReadOnly={false}
        value={organisationaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname,
              phonenumber,
              organisationname,
              organisationaddress: value,
              websiteaddress,
              verify_email,
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
        label="Websiteaddress"
        isRequired={false}
        isReadOnly={false}
        value={websiteaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress: value,
              verify_email,
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
      <TextField
        label="Verify email"
        isRequired={true}
        isReadOnly={false}
        value={verify_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstname,
              lastname,
              phonenumber,
              organisationname,
              organisationaddress,
              websiteaddress,
              verify_email: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uSERModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uSERModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
