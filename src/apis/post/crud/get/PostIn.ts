import instance from '../../../default';

export const GetterPostIn = (id: string | undefined) => {
  return instance.get('/post/show', {
    params: { id: id, email: sessionStorage.getItem('email') },
  });
};
