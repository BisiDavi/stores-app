import axiosInstance from './axiosInstance';

export async function getStoreCategoriesRequest() {
  return await axiosInstance.get('/api/store/get-store-categories');
}

export async function getBanksRequest() {
  return await axiosInstance.get('/api/store/get-all-banks');
}

export async function getAvailableState() {
  return await axiosInstance.get('/api/store/get-available-states');
}

export async function getCatalogProductCategories() {
  return await axiosInstance.get('/api/store/pull-catalog-product-categories');
}

export async function getStoreProfileRequest() {
  return await axiosInstance.get('/api/store/profile');
}

export async function getAllStoreExtrasRequest() {
  return await axiosInstance.get('/api/store/all-store-extras');
}

export async function getProductsCategories() {
  return await axiosInstance.get('/api/store/product-categories');
}

export async function getStoreAnalytics() {
  return await axiosInstance.get('/api/store/get-store-analytics');
}

export async function getWithdrawalTransaction() {
  return await axiosInstance.get('/api/store/get-withdrawals');
}
