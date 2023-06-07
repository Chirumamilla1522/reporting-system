// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Ctype = {
  "IT": "IT",
  "SERVICES": "SERVICES",
  "GOVERNMENT": "GOVERNMENT"
};

const Itype = {
  "SCANNING_AND_RECONNAISSANCE": "SCANNING_AND_RECONNAISSANCE",
  "UNAUTHORIZED_ACCESS_TO_NETWORK_OR_DEVICE": "UNAUTHORIZED_ACCESS_TO_NETWORK_OR_DEVICE",
  "DATA_EXPOSURE_THEFT_0_R_LEAK": "DATA_EXPOSURE_THEFT_0R_LEAK",
  "MALICIOUS_CODE_MALWARE": "MALICIOUS_CODE_MALWARE"
};

const Impact = {
  "IT_SYSTEMS": "IT_SYSTEMS",
  "OPERATIONAL_SYSTEMS": "OPERATIONAL_SYSTEMS",
  "CUSTOMER_DATA": "CUSTOMER_DATA"
};

const { COMPANY, INCIDENT, USER } = initSchema(schema);

export {
  COMPANY,
  INCIDENT,
  USER,
  Ctype,
  Itype,
  Impact
};