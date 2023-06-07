/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { USER } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type USERUpdateFormInputValues = {
    email?: string;
    firstname?: string;
    lastname?: string;
    phonenumber?: string;
    organisationname?: string;
    organisationaddress?: string;
    websiteaddress?: string;
    verify_email?: string;
};
export declare type USERUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    organisationname?: ValidationFunction<string>;
    organisationaddress?: ValidationFunction<string>;
    websiteaddress?: ValidationFunction<string>;
    verify_email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type USERUpdateFormOverridesProps = {
    USERUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    organisationname?: PrimitiveOverrideProps<TextFieldProps>;
    organisationaddress?: PrimitiveOverrideProps<TextFieldProps>;
    websiteaddress?: PrimitiveOverrideProps<TextFieldProps>;
    verify_email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type USERUpdateFormProps = React.PropsWithChildren<{
    overrides?: USERUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uSER?: USER;
    onSubmit?: (fields: USERUpdateFormInputValues) => USERUpdateFormInputValues;
    onSuccess?: (fields: USERUpdateFormInputValues) => void;
    onError?: (fields: USERUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: USERUpdateFormInputValues) => USERUpdateFormInputValues;
    onValidate?: USERUpdateFormValidationValues;
} & React.CSSProperties>;
export default function USERUpdateForm(props: USERUpdateFormProps): React.ReactElement;
