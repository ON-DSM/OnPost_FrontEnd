import instance from '../default';
import { PostRequestType } from '../Interface';

const CreatePost = (PostRequest: PostRequestType) => {
  try {
    const array = ['title', 'context', 'profile', 'introduce', 'tags', 'email'];
    const formData = new FormData();
    array.map((key) => {
      if (PostRequest[key as keyof PostRequestType] !== '') {
        formData.set(key, PostRequest[key as keyof PostRequestType] as Blob);
      } else if (key === 'profile') {
        typeof PostRequest.profile !== 'string' &&
          formData.set(key, PostRequest.profile as Blob);
      }
    });
    instance.post('/post/create', formData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    });
  } catch (e) {
    throw e;
  }
};

export default CreatePost;
