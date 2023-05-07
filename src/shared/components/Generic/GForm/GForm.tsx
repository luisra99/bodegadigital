import { GFormProps } from '@/shared/interfaces/form-control';

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
