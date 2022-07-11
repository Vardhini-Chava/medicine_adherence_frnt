import {spawn, takeEvery} from 'redux-saga/effects';
import Types from '../actions/Alltypes';
import caretakerSaga from './Caretakersaga';

function* getImagesagafunc(_medId: number) {
  yield spawn(caretakerSaga)
  
}

export default function* getimagesagawatcher() {
  yield takeEvery(Types.GET_IMAGES, getImagesagafunc);
}
