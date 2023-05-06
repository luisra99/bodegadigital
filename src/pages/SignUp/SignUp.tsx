import { useRef } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControl } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { ControlType } from '@/enums/form-enums';
import { GForm } from '@/shared/components/Generic/GForm/GForm';
import { FullSizeCenteredFlexBox } from '@/shared/components/styled';

export default function SignUp() {
  const formikRef = useRef();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('identification'),
      ci: data.get('carnet'),
      tomo: data.get('tomo'),
      folio: data.get('folio'),
      cell: data.get('cell'),
    });
  };
  function GenericTextField({
    errors,
    label,
    name,
    values,
    pattern,
    type,
    placeholder,
    touched,
  }: {
    errors: any;
    label: any;
    name: any;
    values: any;
    pattern: any;
    type: any;
    placeholder: any;
    touched: any;
  }) {
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
          placeholder={placeholder || ''}
          onKeyPress={(event: any) => {
            if (!/[0-9-a-z@.]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      </FormControl>
    );
  }
  const validationSchema = {
    email: Yup.string().email('El correo no es valido').required('Debe completar este campo'),
    ci: Yup.string()
      .required('Debe completar este campo')
      .matches(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        'El carnet de identidad no es valido',
      ),
    tomo: Yup.number().required('Debe completar este campo').max(9999, 'El tomo no es valido'),
    folio: Yup.number().required('Debe completar este campo').max(9999, 'El folio no es valido'),
    celular: Yup.string()
      .required('Debe completar este campo')
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        'El numero de telefono no es valido',
      ),
  };
  const formSchema = {
    email: '',
    ci: '',
    tomo: '',
    folio: '',
    celular: '',
  };
  return (
    <FullSizeCenteredFlexBox>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <h3 style={{ margin: '10px', textAlign: 'center' }}>Ya casi comenzamos..</h3>
          <h4 style={{ margin: '10px', textAlign: 'center' }}>
            Complete los siguientes campos para comenzar a disfrutar del servicio de bodega virtual
          </h4>

          <GForm
            buttons={{ apply: 'Comenzar', icons: false }}
            controls={[
              {
                label: 'Correo',
                name: 'email',
                type: ControlType.email,
                visible: true,
                pattern: /[a-z0-9.@]/,
                placeHolder: 'ejemplo@dominio.cu',
                validators: {
                  required: {
                    message: 'Requerido',
                  },
                  email: { message: 'Debe insertar un correo valido' },
                },
                style: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                },
              },
              {
                label: 'Carnet de identidad',
                name: 'ci',
                type: ControlType.text,
                visible: true,
                pattern: /[0-9]/,
                validators: {
                  required: {
                    message: 'Requerido',
                  },
                  length: {
                    value: 11,
                    message: 'El carnet debe tener una longitud de 11 caracteres',
                  },
                },
                style: {
                  xs: 6,
                  sm: 6,
                  md: 6,
                  lg: 6,
                  xl: 6,
                },
              },
              {
                label: 'Tomo',
                name: 'tomo',
                type: ControlType.text,
                visible: true,
                pattern: /[0-9]/,
                validators: {
                  required: {
                    message: 'Requerido',
                  },
                },
                style: {
                  xs: 3,
                  sm: 3,
                  md: 3,
                  lg: 3,
                  xl: 3,
                },
              },
              {
                label: 'Folio',
                name: 'folio',
                type: ControlType.text,
                visible: true,
                pattern: /[0-9]/,
                validators: {
                  required: {
                    message: 'Requerido',
                  },
                },
                style: {
                  xs: 3,
                  sm: 3,
                  md: 3,
                  lg: 3,
                  xl: 3,
                },
              },
              {
                label: 'Celular',
                name: 'phone',
                type: ControlType.text,
                visible: true,
                pattern: /[0-9]/,
                validators: {
                  required: {
                    message: 'Requerido',
                  },
                },
                style: {
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                },
              },
            ]}
            endpoint="asd"
          />
        </Box>
      </Container>
    </FullSizeCenteredFlexBox>
  );
}
