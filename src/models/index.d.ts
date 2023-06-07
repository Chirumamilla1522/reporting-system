import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Ctype {
  IT = "IT",
  SERVICES = "SERVICES",
  GOVERNMENT = "GOVERNMENT"
}

export enum Itype {
  SCANNING_AND_RECONNAISSANCE = "SCANNING_AND_RECONNAISSANCE",
  UNAUTHORIZED_ACCESS_TO_NETWORK_OR_DEVICE = "UNAUTHORIZED_ACCESS_TO_NETWORK_OR_DEVICE",
  DATA_EXPOSURE_THEFT_0_R_LEAK = "DATA_EXPOSURE_THEFT_0R_LEAK",
  MALICIOUS_CODE_MALWARE = "MALICIOUS_CODE_MALWARE"
}

export enum Impact {
  IT_SYSTEMS = "IT_SYSTEMS",
  OPERATIONAL_SYSTEMS = "OPERATIONAL_SYSTEMS",
  CUSTOMER_DATA = "CUSTOMER_DATA"
}



type EagerCOMPANY = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<COMPANY, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: Ctype | keyof typeof Ctype;
  readonly INFORM?: INCIDENT[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCOMPANY = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<COMPANY, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: Ctype | keyof typeof Ctype;
  readonly INFORM: AsyncCollection<INCIDENT>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type COMPANY = LazyLoading extends LazyLoadingDisabled ? EagerCOMPANY : LazyCOMPANY

export declare const COMPANY: (new (init: ModelInit<COMPANY>) => COMPANY) & {
  copyOf(source: COMPANY, mutator: (draft: MutableModel<COMPANY>) => MutableModel<COMPANY> | void): COMPANY;
}

type EagerINCIDENT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INCIDENT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date_time: string;
  readonly ongoing: boolean;
  readonly Impact: Impact | keyof typeof Impact;
  readonly Incident_type: Itype | keyof typeof Itype;
  readonly by_you_or_third_party: boolean;
  readonly userID: string;
  readonly companyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyINCIDENT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<INCIDENT, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date_time: string;
  readonly ongoing: boolean;
  readonly Impact: Impact | keyof typeof Impact;
  readonly Incident_type: Itype | keyof typeof Itype;
  readonly by_you_or_third_party: boolean;
  readonly userID: string;
  readonly companyID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type INCIDENT = LazyLoading extends LazyLoadingDisabled ? EagerINCIDENT : LazyINCIDENT

export declare const INCIDENT: (new (init: ModelInit<INCIDENT>) => INCIDENT) & {
  copyOf(source: INCIDENT, mutator: (draft: MutableModel<INCIDENT>) => MutableModel<INCIDENT> | void): INCIDENT;
}

type EagerUSER = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<USER, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly REPORT?: (INCIDENT | null)[] | null;
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly phonenumber: string;
  readonly organisationname?: string | null;
  readonly organisationaddress?: string | null;
  readonly websiteaddress?: string | null;
  readonly verify_email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUSER = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<USER, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly REPORT: AsyncCollection<INCIDENT>;
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly phonenumber: string;
  readonly organisationname?: string | null;
  readonly organisationaddress?: string | null;
  readonly websiteaddress?: string | null;
  readonly verify_email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type USER = LazyLoading extends LazyLoadingDisabled ? EagerUSER : LazyUSER

export declare const USER: (new (init: ModelInit<USER>) => USER) & {
  copyOf(source: USER, mutator: (draft: MutableModel<USER>) => MutableModel<USER> | void): USER;
}