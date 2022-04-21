import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import { authSelectors } from '../redux/auth';

// - Если маршрут ограниченный, и пользователь залогинен, рендерит Redirect на указанный роут
// - В противном случае рендерит компонент

// Компонент публичного роута

interface IPublicRoute {
  children?: React.ReactNode;
  exact?: boolean;
  path?: string;
  restricted?: boolean;
  redirectTo?: string;
}

const PublicRoute = ({ redirectTo, children, ...routeProps }: IPublicRoute) => {
  const isLoggedIn = useAppSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted && redirectTo ? (
        <Redirect to={redirectTo} />
      ) : (
        // {redirect && redirectTo ? <Redirect to={redirectTo} /> : null}
        children
      )}
    </Route>
  );
};

export default PublicRoute;
