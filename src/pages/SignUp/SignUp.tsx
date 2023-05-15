import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ControlType } from '@/enums/form-enums';
import { SetProfileConfiguration } from '@/services/user/user.services';
import { GForm } from '@/shared/components/Generic/GForm/GForm';
import { FullSizeCenteredFlexBox } from '@/shared/components/styled';
import useNotifications from '@/store/notifications';

export default function SignUp() {
  const [, notificationsActions] = useNotifications();

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
                    message: 'El carnet debe tener un tamaño especifico ',
                  },
                  regular_expression: {
                    value: /^(\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{5})$/g,
                    message: 'El carnet no es valido',
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
            post_service={SetProfileConfiguration}
            notificationStack={notificationsActions}
            redirect="/profile"
          />
        </Box>
      </Container>
    </FullSizeCenteredFlexBox>
  );
}
