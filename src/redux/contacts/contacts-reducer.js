import { combineReducers } from '@reduxjs/toolkit'; // Импорт функции комбайна редюсеров
import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions'; // Импорт экшенов из контактов в редюсеры

// Создание редюсера для массива items в контактах (фетч всех контактов, добавление и удаление, обновление контакта)

const sortId = payload => payload.sort((a, b) => a.name.localeCompare(b.name));
const filterId = (state, payload) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => sortId(payload),
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) => filterId(state, payload),
});

// Создание редюсера для фильтра в контактах

const setPayload = (_, { payload }) => payload;

const filter = createReducer('', {
  [changeFilter]: setPayload,
});

// Создание редюсера для индикации загрузки контактов

const setTrue = () => true;
const setFalse = () => false;

const loading = createReducer(false, {
  [fetchContactsRequest]: setTrue,
  [fetchContactsSuccess]: setFalse,
  [fetchContactsError]: setFalse,

  [addContactRequest]: setTrue,
  [addContactSuccess]: setFalse,
  [addContactError]: setFalse,

  [deleteContactRequest]: setTrue,
  [deleteContactSuccess]: setFalse,
  [deleteContactError]: setFalse,
});

// Создание редюсера обработки ошибок в контактах

const setNull = () => null;

const error = createReducer(null, {
  [fetchContactsError]: setPayload,
  [addContactError]: setPayload,
  [deleteContactError]: setPayload,

  [fetchContactsRequest]: setNull,
  [fetchContactsSuccess]: setNull,

  [addContactRequest]: setNull,
  [addContactSuccess]: setNull,

  [deleteContactRequest]: setNull,
  [deleteContactSuccess]: setNull,
});

export default combineReducers({ items, filter, loading, error });
