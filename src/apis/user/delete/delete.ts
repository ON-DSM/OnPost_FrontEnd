import instance from '../../default';

export const DeleteUser = () => {
  instance.delete('/member/delete', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });
};
