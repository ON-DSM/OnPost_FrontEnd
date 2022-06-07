import instance from '../../default';

interface DataInfoType {
  name: string;
  introduce: string;
  email: string;
  profile: File | null | string;
  con: boolean;
}

const DataInfo = async (DataInfo: DataInfoType) => {
  try {
    const formData = new FormData();
    console.log(DataInfo);
    ['name','introduce','profile','email'].map(n => {
      if(DataInfo[n as keyof DataInfoType] !== ''){
        if(n !== 'profile'){
          formData.append(n,DataInfo[n as keyof DataInfoType] as Blob)
        } else {
            typeof DataInfo.profile !== 'string' && formData.append(n,DataInfo[n as keyof DataInfoType] as Blob)
        }
      }
    });
    
    return await instance.put<DataInfoType>('/member/edit', formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'multipart/form-data'
      },
    }).then(data => {console.log(data);return data});
  } catch (e) {
    console.log(e)
  }
};




export default DataInfo;
