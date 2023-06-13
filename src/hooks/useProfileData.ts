import { useState, useEffect } from 'react';

import { useAuthContext } from '@asgardeo/auth-react';

import { GetProfileConfiguration, SetProfileConfiguration } from '@/services/user/user.services';
import { ProfileContent } from '@/shared/interfaces/common';

export const useProfileData = () => {
  const { state, signIn, signOut } = useAuthContext();
  const [profile, setProfile] = useState<ProfileContent>({
    profile: {
      nombre: '',
      primer_apellido: 'Primer apellido del usuario',
      segundo_apellido: 'Segundo apellido del usuario',
      ci: 'CI del usuario',
      edad: 0,
      fecha_n: '0000-00-00',
      sex: 'M',
      foto: 'none',
      tomo: 'El tomo del CI',
      folio: 'El folio del CI',
      direccion: '',
      celular: 'Teléfono del usuario',
      email: 'Email del usuario',
      persona_id: 'ID del IDP',
    },
  });
  useEffect(() => {
    GetProfileConfiguration().then((result) => {
      // result ? setProfileData(result) : SetProfileConfiguration();
      // SetProfileConfiguration();
    });
  }, []);
  function setProfileData(profile: any) {
    setProfile(profile);
  }
  function LOG(): any {
    signIn();
  }
  return { profile, LOG, state };
};
