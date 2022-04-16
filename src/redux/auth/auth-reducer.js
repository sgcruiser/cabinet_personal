import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
  name: null,
  email: null,
};

// Редюсер для регистрации, авторизации и выхода из профиля
const setPayload = (_, { payload }) => payload;
const setPayloadUser = (_, { payload }) => payload.user;
const setPayloadToken = (_, { payload }) => payload.token;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: setPayloadUser,
  [authActions.loginSuccess]: setPayloadUser,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: setPayload,
});

// Редюсер для токенов
const token = createReducer(null, {
  [authActions.registerSuccess]: setPayloadToken,
  [authActions.loginSuccess]: setPayloadToken,
  [authActions.logoutSuccess]: () => null,
});

// Редюсер для индикации авторизации
const setTrue = () => true;
const setFalse = () => false;

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: setTrue,
  [authActions.loginSuccess]: setTrue,
  [authActions.getCurrentUserSuccess]: setTrue,

  [authActions.registerError]: setFalse,
  [authActions.loginError]: setFalse,
  [authActions.getCurrentUserError]: setFalse,

  [authActions.logoutSuccess]: setFalse,
});

// Создание редюсера для индикации авторизации

const loading = createReducer(false, {
  [authActions.registerRequest]: setTrue,
  [authActions.registerSuccess]: setFalse,
  [authActions.registerError]: setFalse,

  [authActions.loginRequest]: setTrue,
  [authActions.loginSuccess]: setFalse,
  [authActions.loginError]: setFalse,

  [authActions.logoutRequest]: setTrue,
  [authActions.logoutSuccess]: setFalse,
  [authActions.logoutError]: setFalse,

  [authActions.getCurrentUserRequest]: setTrue,
  [authActions.getCurrentUserSuccess]: setFalse,
  [authActions.getCurrentUserError]: setFalse,
});

// Редюсер для обработки ошибок
const error = createReducer(null, {
  [authActions.registerError]: setPayload,
  [authActions.loginError]: setPayload,
  [authActions.logoutError]: setPayload,
  [authActions.getCurrentUserError]: setPayload,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  loading,
  error,
});
