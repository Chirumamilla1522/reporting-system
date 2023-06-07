/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type INCIDENTInputValues = {
    date_time?: string;
    ongoing?: boolean;
    Impact?: string;
    Incident_type?: string;
    by_you_or_third_party?: boolean;
};
export declare type INCIDENTValidationValues = {
    date_time?: ValidationFunction<string>;
    ongoing?: ValidationFunction<boolean>;
    Impact?: ValidationFunction<string>;
    Incident_type?: ValidationFunction<string>;
    by_you_or_third_party?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type INCIDENTOverridesProps = {
    INCIDENTGrid?: PrimitiveOverrideProps<GridProps>;
    date_time?: PrimitiveOverrideProps<TextFieldProps>;
    ongoing?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Impact?: PrimitiveOverrideProps<SelectFieldProps>;
    Incident_type?: PrimitiveOverrideProps<SelectFieldProps>;
    by_you_or_third_party?: PrimitiveOverrideProps<RadioGroupFieldProps>;
} & EscapeHatchProps;
export declare type INCIDENTProps = React.PropsWithChildren<{
    overrides?: INCIDENTOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: INCIDENTInputValues) => INCIDENTInputValues;
    onSuccess?: (fields: INCIDENTInputValues) => void;
    onError?: (fields: INCIDENTInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: INCIDENTInputValues) => INCIDENTInputValues;
    onValidate?: INCIDENTValidationValues;
} & React.CSSProperties>;
export default function INCIDENT(props: INCIDENTProps): React.ReactElement;
