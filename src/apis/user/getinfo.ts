import instance from '../default';

export const getinfo = () => {
  const a = {
    sername: '이름',
    introduce: '한줄소개',
    image: '이미지 경로',
    email: '이메일',
  };

  
    const Data =  instance
    .get('/member/info', {
      data: a,
      proxy:{
        host: "httml://localhost",
        port: 3000,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      withCredentials: false,
    })
    .then((res) => res.data)

    return Data;
};
