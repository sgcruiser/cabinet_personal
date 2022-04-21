import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import { authSelectors } from '../redux/auth';

// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на указанный роут

// Компонент приватного роута

interface IPrivateRoute {
  redirectTo: string;
  children?: React.ReactNode;
  path: string;
}

const PrivateRoute = ({
  redirectTo,
  children,
  ...routeProps
}: IPrivateRoute) => {
  const isLoggedIn = useAppSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
