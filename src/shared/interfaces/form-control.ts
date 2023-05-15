import { AnyObject } from 'yup';

import { ControlType } from '@/enums/form-enums';
import { FormikErrors, FormikTouched } from '@/shared/customModules/formik';
import { Actions } from '@/store/notifications/types';

export interface Option {
  label: string;
  value: number;
}
export interface GFormButtons {
  cancel?: boolean;
  accept?: string;
  apply: string;
  icons?: boolean;
}
interface ValidateArgs {
  value?: any;
  message: string;
}
export interface GFormControl {
  name: string;
  label: string;
  type: ControlType;
  pattern: RegExp;
  style?: ResponsiveValues;
  placeHolder?: string;
  visible?: boolean;
  url?: string;
  options?: Option[];
  sons?: string[];
  father?: string;
  validators?: ValidatorsSchema;
}
export interface ValidatorsSchema {
  required?: { message: string };
  integer?: { message: string };
  positive?: { message: string };
  negative?: { message: string };
  email?: { message: string };
  url?: { message: string };
  oneOf?: { value: any[]; message: string };
  length?: { value: number; message: string };
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  regular_expression?: { value: RegExp; message: string };
}
export type DictionaryProps = Record<string, unknown>;
export type DictionaryFunctions = Record<string, () => void>;
export type DictionaryValidationFunctions = Record<
  string,
  (schema: AnyObject, args: ValidateArgs) => AnyObject
>;
export type DictionaryValidationBasic = Record<ControlType, AnyObject>;
export interface GControlProps extends GFormControl, IFormikProps {}
export interface IFormikProps {
  values: any;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

export interface MyObject {
  [key: string]: any;
}
export interface ResponsiveValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export interface GFormProps {
  controls: GFormControl[];
  id?: string | number;
  post_service: (params: any) => any;
  put_service?: (params: any) => any;
  handleClose?: () => void;
  load?: () => void;
  buttons: GFormButtons;
  notificationStack: Actions;
  redirect?: string;
  serviceParams?: Record<string, any>;
}
