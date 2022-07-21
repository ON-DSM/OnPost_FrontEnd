import instance from '../../default';

export const CreateComment = (sub: boolean,content: string, id: string | number | undefined) => {
  const Id = id ? id : 0;
  return instance.post(
    sub ? '/comment/leave/sub' : '/comment/leave',
    {
      content: content,
      email: sessionStorage.getItem('email'),
      parentId: typeof Id === 'string' ? parseInt(Id) :Id,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    }
  ).then(data => data.data);
};
