import {
  addProductExtraRequestType,
  addProductMainExtraRequestType,
  addProductSpecificationType,
  addProductsRequestType,
  allProductType,
  toggleSpecificationStatusRequestType,
} from '@/customTypes/postRequestTypes';
import axiosInstance, {axiosImageInstance} from './axiosInstance';

export async function postStoreDetailsRequest(data: any) {
  console.log('data', data);
  let openDays = JSON.stringify(data.openDays);
  data.openDays = openDays;
  const dataToPost = JSON.stringify(data);
  return await axiosInstance.post('/api/store/profile', dataToPost);
}

export async function getAllProductsRequest(data: allProductType) {
  return await axiosInstance.post('/api/store/get-all-products', data);
}

export async function getCompletedOrdersRequest(storeId: {storeId: string}) {
  return await axiosInstance.post('/api/store/get-completed-orders', storeId);
}

export async function getPendingOrdersRequest(storeId: {storeId: string}) {
  return await axiosInstance.post('/api/store/get-pending-orders', storeId);
}

export async function uploadStoreLogoRequest(logo: any) {
  return await axiosImageInstance.post('/api/store/upload-store-logo', logo);
}

export async function uploadStoreBackgroundRequest(background: any) {
  return await axiosImageInstance.post(
    '/api/store/upload-store-background',
    background,
  );
}

export async function uploadProductImageRequest(image: any) {
  return await axiosImageInstance.post('/api/store/add-product-image', image);
}

export async function pullCatalogProductsWithCategoryIdRequest(
  categoryId: number,
) {
  return await axiosInstance.post(
    '/api/store/pull-catalog-products-with-category-id',
    categoryId,
  );
}

export async function addProductsRequest(data: addProductsRequestType) {
  return await axiosInstance.post('/api/store/add-product', data);
}

export async function toggleSpecificationStatusRequest(
  data: toggleSpecificationStatusRequestType,
) {
  return await axiosInstance.post(
    '/api/store/toggle-specification-status',
    data,
  );
}

export async function addProductExtraRequest(data: addProductExtraRequestType) {
  return await axiosInstance.post('/api/store/add-product-extra', data);
}

export async function addProductSpecificationRequest(
  data: addProductSpecificationType,
) {
  return await axiosInstance.post('/api/store/add-product-specification', data);
}

export async function addProductMainExtraRequest(
  data: addProductMainExtraRequestType,
) {
  return await axiosInstance.post('/api/store/add-product-main-extra', data);
}

export async function getProductMainExtra(productId: string) {
  return await axiosInstance.post(
    '/api/store/get-product-main-extras',
    productId,
  );
}

export async function addExtrasRequest(extra: any) {
  return await axiosInstance.post('/api/store/add-extras', extra);
}

export async function addProductsCategories(category: {name: string}) {
  return await axiosInstance.post('/api/store/add-product-category', category);
}

export async function postScanResponse(result: any) {
  return await axiosInstance.post('/api/store/send-scan-response', result);
}
