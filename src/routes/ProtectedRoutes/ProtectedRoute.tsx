import { Navigate } from 'react-router-dom';

import { useSession } from '@/store/hotkeys';

const PrivateRoute = ({ component: Component }: { component: React.FC }) => {
  const [sessionState, ,] = useSession();
  return sessionState ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;
