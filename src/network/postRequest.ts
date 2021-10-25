import {useSelector} from 'react-redux';
import {
  addProductExtraRequestType,
  addProductMainExtraRequestType,
  addProductSpecificationType,
  addProductsRequestType,
  allProductType,
  toggleSpecificationStatusRequestType,
} from '@/customTypes/postRequestTypes';
import axiosInstance, {
  axiosImageInstance,
  setClientToken,
} from './axiosInstance';
import {RootState} from '@/store/RootReducer';

export default function usePostRequest() {
  const {token} = useSelector((state: RootState) => state.auth);

  setClientToken(token);

  async function postStoreDetailsRequest(data: any) {
    console.log('data', data);
    let openDays = JSON.stringify(data.openDays);
    data.openDays = openDays;
    const dataToPost = JSON.stringify(data);
    return await axiosInstance.post('/api/store/profile', dataToPost);
  }

  async function getAllProductsRequest(data: allProductType) {
    return await axiosInstance.post('/api/store/get-all-products', data);
  }

  async function getCompletedOrdersRequest(storeId: {storeId: string}) {
    return await axiosInstance.post('/api/store/get-completed-orders', storeId);
  }

  async function getPendingOrdersRequest(storeId: {storeId: string}) {
    return await axiosInstance.post('/api/store/get-pending-orders', storeId);
  }

  async function uploadStoreLogoRequest(logo: any) {
    return await axiosImageInstance.post('/api/store/upload-store-logo', logo);
  }

  async function uploadStoreBackgroundRequest(background: any) {
    return await axiosImageInstance.post(
      '/api/store/upload-store-background',
      background,
    );
  }

  async function uploadProductImageRequest(image: any) {
    return await axiosImageInstance.post('/api/store/add-product-image', image);
  }

  async function pullCatalogProductsWithCategoryIdRequest(categoryId: number) {
    return await axiosInstance.post(
      '/api/store/pull-catalog-products-with-category-id',
      categoryId,
    );
  }

  async function addProductsRequest(data: addProductsRequestType) {
    return await axiosInstance.post('/api/store/add-product', data);
  }

  async function toggleSpecificationStatusRequest(
    data: toggleSpecificationStatusRequestType,
  ) {
    return await axiosInstance.post(
      '/api/store/toggle-specification-status',
      data,
    );
  }

  async function addProductExtraRequest(data: addProductExtraRequestType) {
    return await axiosInstance.post('/api/store/add-product-extra', data);
  }

  async function addProductSpecificationRequest(
    data: addProductSpecificationType,
  ) {
    return await axiosInstance.post(
      '/api/store/add-product-specification',
      data,
    );
  }

  async function addProductMainExtraRequest(
    data: addProductMainExtraRequestType,
  ) {
    return await axiosInstance.post('/api/store/add-product-main-extra', data);
  }

  async function getProductMainExtra(productId: string) {
    return await axiosInstance.post(
      '/api/store/get-product-main-extras',
      productId,
    );
  }

  async function addExtrasRequest(extra: any) {
    return await axiosInstance.post('/api/store/add-extras', extra);
  }

  async function addProductsCategories(category: {name: string}) {
    return await axiosInstance.post(
      '/api/store/add-product-category',
      category,
    );
  }

  async function postScanResponse(result: any) {
    return await axiosInstance.post('/api/store/send-scan-response', result);
  }
  return {
    postStoreDetailsRequest,
    addProductExtraRequest,
    addProductSpecificationRequest,
    addProductMainExtraRequest,
    getProductMainExtra,
    addExtrasRequest,
    addProductsCategories,
    postScanResponse,
    getAllProductsRequest,
    getCompletedOrdersRequest,
    getPendingOrdersRequest,
    uploadStoreLogoRequest,
    uploadStoreBackgroundRequest,
    uploadProductImageRequest,
    pullCatalogProductsWithCategoryIdRequest,
    addProductsRequest,
    toggleSpecificationStatusRequest,
  };
}
