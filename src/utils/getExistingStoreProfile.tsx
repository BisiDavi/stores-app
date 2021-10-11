import {getStoreDetailsRequest} from '@/network/getRequest';
import {QueryClient} from 'react-query';

export default async function getExistingStoreProfile(
  queryClient: QueryClient,
) {
  return await getStoreDetailsRequest()
    .then(response => {
      const {data} = response.data;
      const isBankRegisted = Object.keys(data).includes('bank');
      if (isBankRegisted) {
        queryClient.setQueryData('storeProfile', data);
        queryClient.setQueryDefaults('storeProfile', {
          staleTime: Infinity,
        });
      }
      return {bank: isBankRegisted, name: data.name, id: data._id};
    })
    .catch(() => {
      return null;
    });
}
