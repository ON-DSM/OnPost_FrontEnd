import instance from '../../default';

export const ShowComment = async(id: number) => {
  
  return await instance.get('/comment/show', {
      params: {id:id}
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.config);
    });
};
