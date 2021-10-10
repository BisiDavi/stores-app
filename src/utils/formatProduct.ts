type productsType = {
  _id: string;
  note: string;
  quantity: number;
  name: string;
  kg: string;
  specifications: [];
  description: string;
  image: string;
  product: string;
  amount: number;
  takeAwayPrice: number;
  extras: {
    quantity: number;
    extra: string;
    price: number;
  }[];
}[];
type ordersTypes = {
  _id: string;
  note: string;
  order_status: string;
  amount: string;
  delivery_time: string;
  product: string;
  extras: any[];
}[];

type extraType = {
  name: string;
  _id: string;
  isAvailable: boolean;
  isCompulsory: boolean;
}[];

function getProductItem(products: productsType, id: string) {
  const product = products.filter(p => p._id === id);
  const result =
    product.length > 0
      ? {
          name: product[0].name,
          image: product[0].image,
          kg: product[0].kg,
          description: product[0].description,
          specifications: product[0].specifications,
          takeAwayPrice: product[0].takeAwayPrice,
        }
      : null;
  return result;
}

function getExtraItem(extras: extraType, id: string) {
  const extra = extras.filter(p => p._id === id);
  const result =
    extra.length > 0
      ? {
          name: extra[0]?.name,
          isAvailable: extra[0]?.isAvailable,
          isCompulsory: extra[0]?.isCompulsory,
        }
      : null;
  return result;
}

export function formatOrders(
  products: productsType,
  orders: ordersTypes,
  extras: extraType,
) {
  let formatOrdersObj: any;
  return orders.map(order => {
    formatOrdersObj = {
      ...formatOrdersObj,
      id: order._id,
      note: order.note,
      status: order.order_status,
      price: order.amount,
      deliveryTime: order.delivery_time,
      product: getProductItem(products, order.product),
      extras: order.extras.map((extraItem: {extra: string}) => ({
        ...extraItem,
        extra: getExtraItem(extras, extraItem.extra),
      })),
    };
    return formatOrders;
  });
}
