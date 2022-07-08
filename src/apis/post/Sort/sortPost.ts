import instance from '../../default';

export const SortPost = async(type: string, page: number) => {
  const Data = { sort : type, page : page };
  return instance.get('post/main',{params: Data}).then(data => data.data);
};
