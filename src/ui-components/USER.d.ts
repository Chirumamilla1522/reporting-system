/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type USERInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    verify_email?: string;
    phonenumber?: string;
    organisationname?: string;
    organisationaddress?: string;
    websiteaddress?: string;
};
export declare type USERValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    verify_email?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    organisationname?: ValidationFunction<string>;
    organisationaddress?: ValidationFunction<string>;
    websiteaddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type USEROverridesProps = {
    USERGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    verify_email?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    organisationname?: PrimitiveOverrideProps<TextFieldProps>;
    organisationaddress?: PrimitiveOverrideProps<TextFieldProps>;
    websiteaddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type USERProps = React.PropsWithChildren<{
    overrides?: USEROverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: USERInputValues) => USERInputValues;
    onSuccess?: (fields: USERInputValues) => void;
    onError?: (fields: USERInputValues, errorMessage: string) => void;
    onChange?: (fields: USERInputValues) => USERInputValues;
    onValidate?: USERValidationValues;
} & React.CSSProperties>;
export default function USER(props: USERProps): React.ReactElement;
verridesProps | undefined | null;
}>;
export default function USER(props: USERProps): React.ReactElement;
