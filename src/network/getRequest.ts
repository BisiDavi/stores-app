import {RootState} from '@/store/RootReducer';
import {useSelector} from 'react-redux';
import axiosInstance, {setClientToken} from './axiosInstance';

export default function useGetRequest() {
  const {token} = useSelector((state: RootState) => state.auth);

  setClientToken(token);

  async function getStoreCategoriesRequest() {
    return await axiosInstance.get('/api/store/get-store-categories');
  }

  async function getBanksRequest() {
    return await axiosInstance.get('/api/store/get-all-banks');
  }

  async function getAvailableState() {
    return await axiosInstance.get('/api/store/get-available-states');
  }

  async function getCatalogProductCategories() {
    return await axiosInstance.get(
      '/api/store/pull-catalog-product-categories',
    );
  }

  async function getStoreProfileRequest() {
    return await axiosInstance.get('/api/store/profile');
  }

  async function getAllStoreExtrasRequest() {
    return await axiosInstance.get('/api/store/all-store-extras');
  }

  async function getProductsCategories() {
    return await axiosInstance.get('/api/store/product-categories');
  }

  async function getStoreAnalytics() {
    return await axiosInstance.get('/api/store/get-store-analytics');
  }

  async function getWithdrawalTransaction() {
    return await axiosInstance.get('/api/store/get-withdrawals');
  }

  return {
    getStoreCategoriesRequest,
    getBanksRequest,
    getAvailableState,
    getCatalogProductCategories,
    getStoreProfileRequest,
    getAllStoreExtrasRequest,
    getProductsCategories,
    getStoreAnalytics,
    getWithdrawalTransaction,
  };
}
