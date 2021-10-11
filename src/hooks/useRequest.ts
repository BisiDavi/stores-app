import {useSelector} from 'react-redux';
import {RootState} from '@/store/RootReducer';
import {
  getAllProductsRequest,
  getCompletedOrdersRequest,
  getPendingOrdersRequest,
} from '@/network/postRequest';
import {
  getAllStoreExtrasRequest,
  getStoreAnalytics,
} from '@/network/getRequest';

export default function useRequest() {
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );

  async function fetchPendingOrders() {
    const {data} = await getPendingOrdersRequest({storeId: storeProfile.id});
    const result = data.data;
    return result;
  }

  async function fetchCompletedOrders() {
    const {data} = await getCompletedOrdersRequest({storeId: storeProfile.id});
    const result = data.data;
    return result;
  }

  async function fetchAllProducts() {
    const {data} = await getAllProductsRequest({storeId: storeProfile.id});
    const result = data.data.products;
    return result;
  }

  async function fetchAllStoreExtras() {
    const {data} = await getAllStoreExtrasRequest();
    const extras = data.data;
    return extras;
  }

  async function fetchAnalytics() {
    const {data} = await getStoreAnalytics();
    return data;
  }

  return {
    fetchPendingOrders,
    fetchAllProducts,
    fetchAllStoreExtras,
    fetchCompletedOrders,
    fetchAnalytics,
  };
}
