export class Product {

    id: number;
    brand: string;
    created_on: Date;
    description: string;
    name: string;
    price: number;
    return_product: boolean;
    reviews_average: number;
    stock: number | undefined;
    used_product: boolean;
    shipping_id: boolean | undefined;
    sub_category_id: boolean | undefined;
    related_info: string;
    city_id: number | undefined;

    constructor(
      id: number,
      brand: string,
      created_on: Date,
      description: string,
      name: string,
      price: number,
      return_product: boolean,
      reviews_average: number,
      stock: number | undefined,
      used_product: boolean,
      shipping_id: boolean | undefined,
      sub_category_id: boolean | undefined,
      related_info: string,
      city_id: number | undefined


      ){
        this.id = id;
        this.brand = brand;
        this.created_on = created_on;
        this.description = description;
        this.name = name;
        this.price = price;
        this.return_product = return_product;
        this.reviews_average = reviews_average;
        this.stock = stock;
        this.used_product = used_product;
        this.shipping_id = shipping_id;
        this.sub_category_id = sub_category_id;
        this.related_info = related_info;
        this.city_id = city_id;
    }

}
