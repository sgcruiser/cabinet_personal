type TUser = {
  id?: string;
  name?: string;
  email: string;
  password: string;
};

type TAuth = {
  isAuthenticated: boolean;
  user: TUser;
  loading: boolean;
};

interface IStateAuth {
  auth: TAuth;
}

type IFnGetIsAuthenticated = (state: IStateAuth) => boolean;
type IFnGetUserEmail = (state: IStateAuth) => string;
type IFnGetLoading = (state: IStateAuth) => boolean;

const getIsAuthenticated: IFnGetIsAuthenticated = state =>
  state.auth.isAuthenticated;

const getUserEmail: IFnGetUserEmail = state => state.auth.user.email;

const getLoading: IFnGetLoading = state => state.auth.loading;

// eslint-disable-next-line
export default { getIsAuthenticated, getUserEmail, getLoading };
