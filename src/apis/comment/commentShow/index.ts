import instance from '../../default';
import { example } from './example';

export const comment = () => {
  instance.get('/comment/show', {
      params: {
        example,
      }
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
