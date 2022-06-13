import { DataInfoType } from '../../Interface';
import instance from '../../default';


const DataInfo = async (DataInfo: DataInfoType) => {
  try {
    const formData = new FormData();
    ['name','introduce','profile','email'].map(n => {
      if(DataInfo[n as keyof DataInfoType] !== ''){
        if(n !== 'profile'){
          formData.append(n,DataInfo[n as keyof DataInfoType] as Blob)
        } else {
            typeof DataInfo.profile !== 'string' && formData.append(n,DataInfo[n as keyof DataInfoType] as Blob)
        }
      }
    });
    
    return await instance.put<DataInfoType | null>('/member/edit', formData, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'multipart/form-data'
      },
    }).then(data => data.data);
  } catch (e) {
    throw e;
  }
};




export default DataInfo;
