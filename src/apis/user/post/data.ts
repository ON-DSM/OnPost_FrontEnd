import { DataInfoType } from '../../Interface';
import instance from '../../default';
import { customToast } from '../../../utils/toast';

const DataInfo = async (DataInfo: DataInfoType, ProImg: null | File | string) => {
  const formData = new FormData();
  console.log(ProImg);
  ['name', 'introduce', 'profile', 'email'].map((n) => {
    if (DataInfo[n as keyof DataInfoType] !== '') {
      if (n !== 'profile') {
        formData.append(n, DataInfo[n as keyof DataInfoType] as Blob);
      } else {
          typeof ProImg !== 'string' &&
            formData.append(n, ProImg as Blob);
      }
    }
  });

  return await instance
    .put<DataInfoType | null>('/member/edit', formData, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((data) => {
      customToast('계정 정보 변경이 완료되었습니다', 'Success');
      console.log(data.data, '성공');
      return data.data;
    })
    .catch(() => customToast('계정 정보가 너무 크거나 작습니다', 'Error'));
};

export default DataInfo;
