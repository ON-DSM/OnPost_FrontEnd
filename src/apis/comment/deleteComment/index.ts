import instance from '../../default';

export const DeleteComment = async (id: number) => {
  console.log(id)
  await instance.delete('/comment/delete', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
    params: { id: id },
  });
};
