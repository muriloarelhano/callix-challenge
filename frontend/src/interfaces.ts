export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign?: any;
  launch: string;
  media?: any;
  recovery?: any;
}

export interface Flickr {
  small: any[];
  original: any[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit?: any;
  webcast: string;
  youtube_id: string;
  article?: any;
  wikipedia: string;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export interface SpaceXApiResponse {
  fairings?: any;
  links: Links;
  static_fire_date_utc?: any;
  static_fire_date_unix?: any;
  net: boolean;
  window?: any;
  rocket: string;
  success: boolean;
  failures: any[];
  details?: any;
  crew: string[];
  ships: any[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}
