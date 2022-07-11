import Types from './Alltypes';

export function sendImageRequest(medId: number) {
  return {
    type: Types.GET_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess() {
  return null;
}

export function sendImageFailure() {
  return null;
}
