/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CompanyInputValues = {
    name?: string;
    type?: string;
};
export declare type CompanyValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyOverridesProps = {
    CompanyGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CompanyProps = React.PropsWithChildren<{
    overrides?: CompanyOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyInputValues) => CompanyInputValues;
    onSuccess?: (fields: CompanyInputValues) => void;
    onError?: (fields: CompanyInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyInputValues) => CompanyInputValues;
    onValidate?: CompanyValidationValues;
} & React.CSSProperties>;
export default function Company(props: CompanyProps): React.ReactElement;
