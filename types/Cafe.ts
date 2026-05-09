export type CafeCategory = {
  fsq_category_id: string;
  name: string;
  short_name: string;
  plural_name: string;
  icon: {
    prefix: string;
    suffix: string;
  };
};

export type CafeLocation = {
  address?: string;
  locality?: string;
  region?: string;
  postcode?: string;
  country?: string;
  formatted_address?: string;
};

export type Cafe = {
  id:string,
  fsq_place_id: string;
  name: string;
  location: CafeLocation;
  latitude: number;
  longitude: number;
  categories: CafeCategory[];
  tel?: string;
  social_media?: {
    twitter?: string;
    facebook_id?: string;
    instagram?: string;
  };
  date_refreshed?: string;
  related_places?: {
    parent?: {
      fsq_place_id: string;
      name: string;
      categories?: CafeCategory[];
    };
  };
};

// The mapped shape your component needs
export type CafeCardProps = {
  id: string;
  name: string;
  area: string;
  tags: string[];
};