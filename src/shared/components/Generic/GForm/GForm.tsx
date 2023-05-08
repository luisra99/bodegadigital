import { useEffect, useState, useRef } from 'react';

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

import * as Yup from 'yup';

import { ControlType } from '@/enums/form-enums';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useFormikContext,
  FormikProps,
} from '@/shared/customModules/formik';
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

export function GForm(props: GFormProps) {
  const {
    controls,
    id,
    endpoint,
    handleClose,
    load,
    buttons = { apply: 'Aplicar', icons: true },
  } = props;
  const formikRef = useRef<FormikProps<any>>(null);
  const [formSchema, setFormSchema] = useState<any>({});
  const [formSource, setFormDataSource] = useState<any>({});
  const [validationSchema, setValidationSchema] = useState<any>({});
  const [formReady, setFormReady] = useState<boolean>(false);
  const [dataReady, setDataReady] = useState<boolean>(false);
  const [componentReady, setComponentReady] = useState<boolean>(false);

  useEffect(() => {
    initForm(controls);
  }, []);
  useEffect(() => {
    setFormReady(true);
  }, [formSchema]);
  useEffect(() => {
    if (Object.keys(formSource)?.length != 0) {
      setDataReady(true);
    }
  }, [formSource]);
  useEffect(() => {
    setComponentReady(dataReady && formReady);
  }, [dataReady, formReady]);

  const typeValidationMap: DictionaryValidationBasic = {
    number: Yup.number(),
    text: Yup.string(),
    'text-area': Yup.string(),
    email: Yup.string().matches(
      /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      'El correo debe tener el formato xxxx@xxx.xxx',
    ),
    select: Yup.string().notOneOf(['-1'], 'Debe seleccionar un valor'),
    checkbox: Yup.boolean(),
    radioGroup: Yup.string().notOneOf([''], 'Debe seleccionar un valor'),
    date: Yup.date(),
    'datetime-local': Yup.date(),
  };
  const validationFunctions: DictionaryValidationFunctions = {
    required: (schema, { message }) => schema.required(message),
    length: (schema, { message, value }) => schema.length(value, `${message} ${value}`),
    min: (schema, { message, value }) => schema.min(value, `${message} ${value}`),
    max: (schema, { message, value }) => schema.max(value, `${message} ${value}`),
    moreThan: (schema, { message, value }) => schema.moreThan(value, message),
    lessThan: (schema, { message, value }) => schema.lessThan(value, message),
    integer: (schema, { message }) => schema.integer(message),
    positive: (schema, { message }) => schema.positive(message),
    negative: (schema, { message }) => schema.negative(message),
    regular_expression: (schema, { message, value }) => schema.matches(value, message),
    email: (schema, { message }) => schema.email(message),
    url: (schema, { message }) => schema.url(message),
    oneOf: (schema, { message, value }) => schema.oneOf(value, message),
  };
  const typeComponentMap: MyObject = {
    text: GenericTextField,
    email: GenericTextField,
    select: GenericSelectField,
    checkbox: GenericCheckBox,
    radioGroup: GenericRadioButtonGroup,
    date: GenericDateTime,
    number: GenericTextField,
    'datetime-local': GenericDateTime,
  };

  function GenericTextField(props: GControlProps) {
    const { errors, label, name, values, pattern, type, placeHolder, touched } = props;
    return (
      <FormControl fullWidth>
        <Field
          as={TextField}
          className="form-control"
          type={type}
          label={label}
          name={name}
          id={name}
          value={values?.[name] ?? ''}
          error={!!touched[name] && !!errors[name]}
          helperText={touched[name] && errors[name]}
          placeholder={placeHolder || ''}
          onKeyPress={(event: any) => {
            if (!pattern.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      </FormControl>
    );
  }
  function GenericDateTime(props: GControlProps) {
    const { errors, label, name, touched, type, values } = props;
    const handleChange = (event: any) => {
      formikRef?.current?.setFieldValue(name, event.target.value);
    };
    const hasError = !!touched[name] && !!errors[name];
    return (
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor={name} sx={{ paddingTop: '3px' }}>
          {label}
        </InputLabel>
        <Input
          className="form-control"
          type={type}
          id={name}
          startAdornment={<InputAdornment position="start" />}
          name={name}
          value={values?.[name] ?? ''}
          error={hasError}
          onChange={handleChange}
          sx={{ paddingTop: '7px' }}
        />
        {hasError && (
          <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
        )}
      </FormControl>
    );
  }
  function GenericCheckBox(props: GControlProps) {
    const { errors, label, name, values } = props;
    const handleChange = (event: any) => {
      formikRef?.current?.setFieldValue(name, event.target.checked);
    };
    return (
      <>
        <Field name={name}>
          <FormControlLabel
            control={
              <Checkbox
                name={name}
                value={values?.[name]}
                checked={values?.[name] ?? false}
                onChange={handleChange}
              />
            }
            label={label}
          />
        </Field>
        <ErrorMessage
          name={name}
          render={(msg) => (
            <p
              style={{
                fontWeight: '400',
                fontSize: '0.8rem',
                lineHeight: '1.66',
                letterSpacing: '0.03333em',
                textAlign: 'left',
                marginTop: '3px',
                marginRight: '14px',
                marginBottom: 0,
                marginLeft: '14px',
                color: '#d32f2f',
              }}
            >
              {msg}
            </p>
          )}
        />
      </>
    );
  }
  function GenericRadioButtonGroup(props: GControlProps) {
    const { name, label, options } = props;
    return (
      <FormControl>
        {label && <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>}
        <RadioGroup row sx={{ display: 'flex', justifyContent: 'center' }}>
          {options?.map((option, index) => (
            <FormControlLabel
              key={option.value}
              control={
                <Field as={Radio} type="radio" name={name} value={option.value} size="small" />
              }
              label={option.label || option.value}
            />
          ))}
        </RadioGroup>
        <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
      </FormControl>
    );
  }
  function GenericSelectField(props: GControlProps) {
    const { name, label, sons, touched, errors, values } = props;
    const handleChange = (event: any) => {
      formikRef?.current?.setFieldValue(name, event.target.value);
      //   childHandler(event.target, sons);
    };

    return (
      <FormControl fullWidth>
        <InputLabel id={name}>{label}</InputLabel>
        <Field
          as={Select}
          labelId={name}
          label={label}
          id={name}
          name={name}
          value={values?.[name] ?? '-1'}
          defaultValue={-1}
          error={!!touched[name] && !!errors[name]}
          onChange={handleChange}
        >
          <MenuItem value="-1">{!formSource[name] ? 'Cargando' : 'Escojer'}...</MenuItem>
          {formSource[name]?.length &&
            formSource[name].map((item: any) => {
              return (
                <MenuItem key={item.value || item.id} value={item.value || item.id}>
                  {item.label || item.nombre || item.elemento}
                </MenuItem>
              );
            })}
        </Field>
        <ErrorMessage
          name={name}
          render={(msg) => <FormHelperText style={{ color: 'red' }}>{msg}</FormHelperText>}
        />
      </FormControl>
    );
  }
  function SubmitButton(props: any) {
    const { disabled, handleSubmit, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    const { cancel, apply, icons } = buttons;
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        {cancel && (
          <Button
            size="medium"
            variant="outlined"
            type="submit"
            {...rest}
            disabled={isSubmitting}
            onClick={() => {
              handleClose?.();
              load?.();
            }}
          >
            Cancelar
          </Button>
        )}
        <Button
          size="medium"
          fullWidth={!cancel}
          variant="contained"
          type="submit"
          name="aceptar"
          {...rest}
          disabled={isSubmitting || disabled}
          endIcon={icons ? id ? <SaveAsIcon /> : <SaveRoundedIcon /> : ''}
        >
          {isSubmitting ? 'Espere...' : id ? 'Actualizar' : `${apply}`}
        </Button>
      </Grid>
    );
  }

  const setDataSource = async (origin: string, options: Option[], father: string) => {
    if (father) return [];
    if (options?.length) return options;
    if (origin) {
      ({ data: options } = await axios.get(origin, { params: { limite: 1000, inicio: 0 } }));
    }
    return options;
  };
  const initForm = async (controls: GFormControl[]) => {
    const initialFormData: MyObject = {};
    const validationSchema: MyObject = {};
    const formDataSource: MyObject = {};

    await Promise.all(
      controls.map(async ({ name, type, validators, url, options, father }: GFormControl) => {
        if (!name) return;
        initialFormData[name] = '';
        validationSchema[name] = typeValidationMap[type];
        if (type === ControlType.select) {
          let dataSource = options;
          if (!dataSource?.length && url && options && father) {
            dataSource = await setDataSource(url, options, father);
          }
          formDataSource[name] = dataSource;
        }

        validators &&
          Object.keys(validators).forEach((validatorKey) => {
            const key = validatorKey as keyof ValidatorsSchema;
            const validator = validationFunctions[validatorKey];
            const validatorArgs = validators[key];
            if (validator && validatorArgs) {
              validationSchema[name] = validator(validationSchema[name], validatorArgs);
            }
          });
      }),
    ).then(() => {
      setFormSchema(initialFormData);
      setFormDataSource(formDataSource);
      setValidationSchema(Yup.object().shape({ ...validationSchema }));
      // !!id && SetEditValues(id);
    });
  };

  function FormElement(props: any) {
    const { controls, formikProps } = props;
    const { errors, touched, values } = formikProps;

    return controls.map(
      ({ name, label, options, placeHolder, style, url, type, sons, pattern }: GFormControl) => {
        if (!name) return null;
        const Component = typeComponentMap[type];

        if (!Component) return null;
        const length = controls.length > 2 ? 6 : 12;
        const { xs, sm, md, lg, xl } = style || {
          xs: 12,
          sm: 12,
          md: length,
          lg: length,
          xl: length,
        };
        const GControlProps = {
          name,
          label,
          options,
          placeHolder,
          style,
          url,
          sons,
          pattern,
          errors,
          touched,
          type,
          values,
        };
        return (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} key={name}>
            <Component {...GControlProps} />
          </Grid>
        );
      },
    );
  }

  return (
    <Formik
      initialValues={formSchema}
      innerRef={formikRef}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={(values, { setSubmitting }) => {
        console.log('valoressssss', values);
        // const button = target.name;
        if (id) {
          // MakeRequest(wso2EndPoint, nextEndPoint, 'put', values, {}).then((response) => {
          //   response && setSubmitting(false) && load();
          //   setNotification(response);
          // });
        } else {
          // MakeRequest(wso2EndPoint, nextEndPoint, 'post', values, {}).then((response) => {
          //   response && setSubmitting(false) && load();
          //   // if(!response.message)
          //   setNotification(response);
          //   resetForm();
          // });
        }
      }}
    >
      {(props: FormikProps<any>) => {
        const { values, isValid } = props;
        // console.log(props);
        return (
          <Form>
            <Box>
              <Grid container direction="row" justifyContent="space-evenly" spacing={2} padding={2}>
                <FormElement controls={controls} formikProps={props} />
                <SubmitButton disabled={!isValid} values={values} />
              </Grid>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}
