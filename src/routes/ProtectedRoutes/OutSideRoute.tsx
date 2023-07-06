import { Navigate } from 'react-router-dom';

import { useSession } from '@/store/hotkeys';

const OutSideRoute = ({ children }: { children: any }) => {
  const [sessionState, ,] = useSession();
  return !sessionState ? children : <Navigate to="/inicio" />;
};
export default OutSideRoute;
