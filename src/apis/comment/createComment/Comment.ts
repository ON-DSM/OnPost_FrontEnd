import instance from '../../default';

export const CreateComment = (sub: boolean,content: string, id: string | undefined) => {
  const Id = id
  instance.post(
    sub ? '/comment/leave/sub' : '/comment/leave',
    {
      content: content,
      email: sessionStorage.getItem('email'),
      parentId: parseInt(Id!),
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    }
  );
};
