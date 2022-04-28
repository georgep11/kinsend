import { createAction, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import _ from 'lodash'
import { call, put, takeLatest } from 'redux-saga/effects'
import { storage } from '../pages/hook/userLocalStorage'

export const createUserAsync = createAction('user/createUserAsync')
export const loginAsync = createAction('user/loginAsync')
export const patchUserAsync = createAction('user/patchUserAsync')
export const addPaymentMethodAsync = createAction('user/addPaymentMethodAsync')
export const STORAGE_AUTH_KEY = 'auth';

const authStorage = storage(STORAGE_AUTH_KEY);

const getAuthorization = () => {
  const headers = authStorage.get();
  return `Bearer ${_.get(headers, 'accesstoken')}`;
}
const getHeaders = (headers) => {
  return {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_API_KEY,
    Authorization: getAuthorization(),
    ...headers,
  }
}

const handleCallAPI = async (payload, headers) => {
  try {
    const result = await axios({
      method: 'post',
      headers: getHeaders(),
      ...payload,
    })
    console.log('result', result);
    return { response: _.get(result, 'data'), headers: _.get(result, 'headers') }
  } catch (e) {
    return {
      errors: _.get(e, 'response.data.message'),
    }
  }
}

export async function createUserAPI(data) {
  const payload = {
    url: `${process.env.REACT_APP_API_BASE_URL}/users`,
    data,
  }
  return handleCallAPI(payload)
}

export async function loginAPI(data) {
  const payload = {
    url: `${process.env.REACT_APP_API_BASE_URL}/auths`,
    data,
  }

  return handleCallAPI(payload)
}

export async function patchUserAPI(data) {
  const payload = {
    method: 'PATCH',
    url: `${process.env.REACT_APP_API_BASE_URL}/users`,
    data,
  }

  return handleCallAPI(payload)
}

export async function addPaymentMethodAPI(data) {
  const payload = {
    method: 'POST',
    url: `${process.env.REACT_APP_API_BASE_URL}/payments/credit-card`,
    data,
  }

  return handleCallAPI(payload)
}

// saga
export function* createUserSaga(action) {
  const { response, errors } = yield call(createUserAPI, action.payload)
  if (response) {
    yield put(createUser(response))
  } else {
    yield put(createUserFailed(errors))
  }
}

export function* loginSaga(action) {
  const { response, errors, headers } = yield call(loginAPI, action.payload);

  if (response) {
    console.log('here', headers);
    authStorage.set(headers);
    yield put(login(response))
  } else {
    yield put(failed(errors))
  }
}

export function* patchUserSaga(action) {
  const { response, errors } = yield call(patchUserAPI, action.payload)
  if (response) {
    yield put(updatedUser(response))
  } else {
    yield put(failed(errors))
  }
}

export function* addPaymentMethodSaga(action) {
  const { response, errors } = yield call(addPaymentMethodAPI, action.payload)
  if (response) {
    yield put(addPaymentSuccess(response))
  } else {
    yield put(failed(errors))
  }
}

export function* userSaga() {
  yield takeLatest(createUserAsync, createUserSaga)
}

export function* watchLoginSaga() {
  yield takeLatest(loginAsync, loginSaga)
}

export function* watchPatchUserSaga() {
  yield takeLatest(patchUserAsync, patchUserSaga)
}

export function* watchAddPaymentMethodSaga() {
  yield takeLatest(addPaymentMethodAsync, addPaymentMethodSaga)
}

const initialState = {
  isLoading: false,
  user: null,
  errors: [],
  auth: null,
  updatedUserSuccess: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    createUserFailed: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    },
    login: (state, action) => {
      state.isLoading = false
      state.user = action.payload
    },
    failed: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    },
    reset: (state, action) => {
      state = initialState;
    },
    updatedUser: (state, action) => {
      state.user = action.payload;
      state.updatedUserSuccess = true;
    },
    addPaymentSuccess: (state, action) => {
      state.addPaymentSuccess = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync, (state) => {
        state.isLoading = true
        state.errors = []
      })
      .addCase(loginAsync, (state) => {
        state.isLoading = true
        state.errors = []
      })
  },
})

export const {
  createUser,
  createUserFailed,
  login,
  failed,
  updatedUser,
  addPaymentSuccess,
} = userSlice.actions

export const selectUsers = (state) => {
  return {
    ...state.users,
  }
};
export const selectUserError = (state) => state.errors
export const selectUserLoading = (state) => state.isLoading
export const selectCreateUser = ({ users }) => {
  return {
    isLoading: users.isLoading,
    errors: users.errors,
    user: users.user,
  }
}
export const selectAuth = ({ users }) => {
  return {
    isLoading: users.isLoading,
    errors: users.errors,
    auth: users.auth,
  }
}
export const selectUpdatedUserSuccess = ({ users }) => {
  return {
    updatedUserSuccess: users.updatedUserSuccess,
  }
}

export const selectAddPaymentSuccess = ({ users }) => {
  return {
    addPaymentSuccess: users.addPaymentSuccess,
  }
}

export default userSlice.reducer
