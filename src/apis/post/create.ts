import instance from "../default";

export interface PostRequestType {
  title: string;
  context: string;
  id: string;
  images: string;
  introduce: string;
}

const CreatePost = (PostRequest: PostRequestType) => {
  const formData = new FormData();
  formData.append("title", PostRequest.title);
  formData.append("context", PostRequest.context);
  formData.append("id", PostRequest.id);
  formData.append("images", PostRequest.images);
  formData.append("introduce", PostRequest.introduce);
  return instance.post("/post/create", formData);
};

export default CreatePost;