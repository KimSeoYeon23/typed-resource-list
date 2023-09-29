import { useDispatch } from 'react-redux';
import { SET_RESOURCE_ID, SET_URL, SET_IMAGE, SET_IMAGE_NAME } from '../../redux/ActionTypes';

const useDispatchResource = () => {
  const dispatch = useDispatch();

  const handleDispatchResource = (id: number, url: string, image: string, imageName: string) => {
    dispatch({ type: SET_RESOURCE_ID, payload: id });
    if (url) {
      dispatch({ type: SET_URL, payload: url });
      dispatch({ type: SET_IMAGE, payload: '' });
      dispatch({ type: SET_IMAGE_NAME, payload: '' });
    } else {
      dispatch({ type: SET_IMAGE, payload: image });
      dispatch({ type: SET_IMAGE_NAME, payload: imageName });
      dispatch({ type: SET_URL, payload: '' });
    }
  };

  return handleDispatchResource;
};

export default useDispatchResource;
