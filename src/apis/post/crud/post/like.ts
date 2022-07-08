import instance from '../../../default';

export const PostLike = (id: number, url: string) => {
  try{
  const Data = 
  {
    email: sessionStorage.getItem('email'),
    postId: id,
  }
  console.log(Data)
  instance.post(
    url,
    Data,
    {
      headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    }
  )
  console.log("Like성곡")
  }catch(e){
    console.log("Like오류")
  }
}
