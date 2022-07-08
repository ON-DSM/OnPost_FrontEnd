import instance from "../../../default";

export const DeletePost = (id: number) =>{
    instance.delete('/post/delete', {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        params: {id},
    })
}