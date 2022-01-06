export interface BikeShop {
  id: number;
  name: string;
  slug: string;
  address: string;
  area: string;
  phone: string;
  monday_opening: string;
  monday_closing: string;
  tuesday_opening: string;
  tuesday_closing: string;
  wednesday_opening: string;
  wednesday_closing: string;
  thursday_opening: string;
  thursday_closing: string;
  friday_opening: string;
  friday_closing: string;
  saturday_opening: string;
  saturday_closing: string;
  sunday_opening: string;
  sunday_closing: string;
  owner: string;
  owner_blurb: string;
}

export interface BikeShopData {
  shops: BikeShop[];
}

