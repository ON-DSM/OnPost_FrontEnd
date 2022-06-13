import instance from '../../default';


export const getinfo = async () => {
  const a = {
    sername: '이름',
    introduce: '한줄소개',
    image: '이미지 경로',
    email: '이메일',
  };
  const Data = await instance
    .get('/member/info', {
      data: a,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      withCredentials: false,
    })
    .then((res) => res.data)
  return Data;
};
