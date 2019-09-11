import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchNote() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/note', config);
    yield put({ type: 'SET_NOTE', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* scottSaga() {
  yield takeLatest('FETCH_NOTE', fetchNote);
}

export default scottSaga;
