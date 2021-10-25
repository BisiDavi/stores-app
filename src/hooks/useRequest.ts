import {useSelector} from 'react-redux';
import {RootState} from '@/store/RootReducer';
import usePostRequest from '@/network/postRequest';
import useGetRequest from '@/network/getRequest';

export default function useRequest() {
  const {
    getAllProductsRequest,
    getCompletedOrdersRequest,
    getPendingOrdersRequest,
  } = usePostRequest();

  const {
    getAllStoreExtrasRequest,
    getStoreAnalytics,
    getStoreProfileRequest,
    getWithdrawalTransaction,
    getAvailableState,
    getStoreCategoriesRequest,
  } = useGetRequest();

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

  async function fetchWithdrawals() {
    const {data} = await getWithdrawalTransaction();
    return data;
  }

  async function fetchStoreCategories() {
    const {data} = await getStoreCategoriesRequest();
    const result = data.data;
    return result;
  }

  async function fetchStoreProfile() {
    const {data} = await getStoreProfileRequest();
    return data.data;
  }

  async function fetchAvailableState() {
    const {data} = await getAvailableState();
    const result = data.data;
    return result;
  }

  return {
    fetchPendingOrders,
    fetchAllProducts,
    fetchAllStoreExtras,
    fetchCompletedOrders,
    fetchStoreCategories,
    fetchAnalytics,
    fetchAvailableState,
    fetchWithdrawals,
    fetchStoreProfile,
  };
}
