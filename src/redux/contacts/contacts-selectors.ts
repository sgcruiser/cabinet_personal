import { createSelector } from '@reduxjs/toolkit'; // Импорт функции для мемоизации селектора

type Titems = {
  name: string;
  number: string;
};

type Tcontacts = {
  items: Array<Titems>;
  filter: string;
  loading: boolean;
  error: string;
};

interface IStateContacts {
  contacts: Tcontacts;
}

type TFngetContacts = (state: IStateContacts) => Array<Titems>;
type TFngetFilter = (state: IStateContacts) => string;
type TFngetLoading = (state: IStateContacts) => boolean;
type TFngetError = (state: IStateContacts) => string;

const getContacts: TFngetContacts = state => state.contacts.items;
const getFilter: TFngetFilter = state => state.contacts.filter;
const getLoading: TFngetLoading = state => state.contacts.loading;
const getError: TFngetError = state => state.contacts.error;

// Мемоизация функции фильтра контактов на базе композитного селектора
const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// eslint-disable-next-line
export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getfilteredContacts,
};
