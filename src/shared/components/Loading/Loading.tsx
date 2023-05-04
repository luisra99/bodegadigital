import CircularProgress from '@mui/material/CircularProgress';

import { FullSizeCenteredFlexBox } from '@/shared/components/styled';

function Loading() {
  return (
    <FullSizeCenteredFlexBox>
      <CircularProgress />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
