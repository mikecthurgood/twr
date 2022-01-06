export interface Product {
  brand_name: string;
  product_name: string;
  merchant_product_id: string;
  aw_deep_link: string;
  aw_product_id: number;
  description: string;
  display_price: string;
  search_price: number;
  aw_image_url: string;
  colour: string;
  merchant_image_url: string;
  merchant_thumb_url: string;
  large_image: string;
  alternate_image: string;
  aw_thumb_url: string;
  alternate_image_two: string;
  alternate_image_three: string;
  alternate_image_four: string;
  reviews: string;
  average_rating: string;
  rating: string;
  number_available: string;
  merchant_category: string;
  merchant_product_category_path: string;
  merchant_product_second_category: string;
  merchant_product_third_category: string;
}

export interface Brands {
  [key: string]: any
}

export interface Categories {
  [key: string]: any
}

export interface Bikes {
  [key: string]: any
}

export interface Clothing {
  [key: string]: any
}

export interface Accessories {
  [key: string]: any
}

export interface Miscellaneous {
  [key: string]: any
}

export interface Parts {
  [key: string]: any
}

export interface ShopData {
  products: Product[]
}
