import { useState, useEffect } from 'react';

import { GetProfileConfiguration } from '@/services/user/user.services';
import { ProfileContent } from '@/shared/interfaces/common';

export const useProfileData = () => {
  const [profile, setProfile] = useState<ProfileContent>({
    profile: {
      nombre: 'Nombre del usuario',
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
      result && setProfileData(result);
    });
  }, []);
  function setProfileData(profile: any) {
    setProfile(profile);
  }
  return profile;
};
