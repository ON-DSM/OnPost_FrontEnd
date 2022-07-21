import instance from '../../../default';
import { PostRequestType } from '../../../Interface';

const CreatePost = (PostRequest: PostRequestType,id: string  | undefined) => {

    const array = ['title', 'content', 'profile', 'introduce', 'tags', 'email'];
    const formData = new FormData();
    array.map((key) => {
      if (key === 'profile') {
        typeof PostRequest.profile !== 'string' && 
          formData.set(key, PostRequest.profile as Blob);
        } else if (PostRequest[key as keyof PostRequestType] !== '') {
        formData.set(key, PostRequest[key as keyof PostRequestType] as Blob);
        console.log(PostRequest[key as keyof PostRequestType])
      } 
    });
    id !== '0' && formData.set('id',id as string)
    return instance[id === '0' ? 'post' : 'put'](`/post/${id === '0' ? 'create' : 'edit'}`, formData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    });
};

export default CreatePost;
