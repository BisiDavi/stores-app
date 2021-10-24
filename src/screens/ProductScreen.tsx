import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {ListItem, Switch, Image} from 'react-native-elements';
import {useQuery} from 'react-query';

import {DrawerStackParamList} from '@/customTypes/.';
import {colors, showToast} from '@/utils/.';
import Fab from '@/components/Fab';
import displayAsset from '@/utils/displayAsset';
import {toggleSpecificationStatusRequest} from '@/network/postRequest';
import ProductLoader from '@/components/Loader/ProductLoader';
import {styles} from '@/styles/ProductScreen.style';
import useRequest from '@/hooks/useRequest';

type ProductScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'ProductScreen'
>;

type ProductScreenRouteProps = RouteProp<DrawerStackParamList, 'ProductScreen'>;

type Props = {
  route: ProductScreenRouteProps;
  navigation: ProductScreenNavigationProps;
};

interface productType {
  products: [] | null;
  navigation: any;
}

function ListView({item, navigation}: any) {
  const [toggle, setToggle] = useState(false);

  function postSpecificationStatus() {
    toggleSpecificationStatusRequest({
      specificationId: item._id,
      status: toggle,
    })
      .then(response => {
        showToast(`${item.name}, ${response.data.message}`);
      })
      .catch(error => {
        if (error.response) {
          showToast(error.response.data.message);
        } else if (error.request) {
          showToast('Oops, unable to update, due to poor network');
        }
      });
  }

  function editHandler() {
    navigation.navigate('EditProductScreen');
  }

  return (
    <ListItem bottomDivider style={styles.listItem}>
      <ListItem.Content>
        <View style={styles.listViewContent}>
          <Text style={styles.meal}>{item.name}</Text>
          <TouchableOpacity onPress={editHandler}>
            <Text style={styles.edit}>
              <Image
                source={displayAsset('editIcon')}
                style={styles.editIcon}
              />
            </Text>
          </TouchableOpacity>
          <Switch
            value={toggle}
            onValueChange={() => {
              setToggle(!toggle);
              postSpecificationStatus();
            }}
            style={styles.switch}
            color={colors.cloudOrange5}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

function ProductListView({products, navigation}: productType) {
  return (
    <>
      {products?.map((item: any) => (
        <ListView navigation={navigation} item={item} key={item._id} />
      ))}
    </>
  );
}

export default function ProductScreen({navigation}: Props) {
  const {fetchAllProducts} = useRequest();

  const {
    status,
    data: storeProducts,
    error,
  }: any = useQuery('allProducts', fetchAllProducts);

  console.log('storeProducts', storeProducts);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.productView}>
          {status === 'error' ? (
            <Text style={styles.error}>{error.message}</Text>
          ) : status === 'loading' ? (
            <ProductLoader />
          ) : storeProducts.length > 0 ? (
            <ProductListView navigation={navigation} products={storeProducts} />
          ) : (
            <Text style={styles.indicator}>
              No Product available, you can add products, by clicking on the
              plus button
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.fabView}>
        <Fab onPress={() => navigation.navigate('AddProductScreenMethod')} />
      </View>
    </View>
  );
}
