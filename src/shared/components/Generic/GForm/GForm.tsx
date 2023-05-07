import { useEffect, useState } from 'react';

import SaveAsIcon from '@mui/icons-material/SaveAs';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import {  useFormikContext  } from 'formik';
// import { ErrorMessage } from 'formik';
import { Field } from 'formik';
// import { Form,} from 'formik';
// import {  Formik} from 'formik';
import * as Yup from 'yup';

import { ControlType } from '@/enums/form-enums';
import {
  DictionaryValidationBasic,
  DictionaryValidationFunctions,
  GControlProps,
  GFormControl,
  MyObject,
  Option,
  IFormikProps,
  ValidatorsSchema,
  GFormButtons,
  GFormProps,
} from '@/shared/interfaces/form-control';

import axios from 'axios';

export default function GForm(props: GFormProps) {
  const {
    controls,
    id,
    endpoint,
    handleClose,
    load,
    buttons = { apply: 'Aplicar', icons: true },
  } = props;

  return <></>;
}
