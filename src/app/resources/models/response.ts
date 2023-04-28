export interface TraktoAPI {
  id: string;
  firstname: string;
  email_verified: boolean;
  role: Role;
  app_reference: Reference;
  created_at: string;
  can_authenticate: boolean;
  products: string[];
  force_reset_password: boolean;
  approved_terms_use: boolean;
  email: string;
  password: string;
  customer_id: string;
  subscription_payment_status: string;
  subscription_reference: Reference;
  current_profile: Profile;
  subscription_status: string;
  profiles: Profile[];
  subscription_rules: Limits;
  subscription_plan_name: string;
  limits: Limits;
  current_locale: CurrentLocale;
  lastname: string;
  logo: Logo;
  firebase_token: string;
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface Reference {
  id: string
}

export interface CurrentLocale {
  fbvZngcBbaFZeUK8h0il: string
}

export interface Profile {
  product:        CurrentProfileProduct
  current_locale: string
  subscription:   Subscription
}

export interface CurrentProfileProduct {
  id:    string
  title: string
  type:  string
}

export interface Subscription {
  renew_at:           string
  product_subscribed: ProductSubscribed
  payment_status:     string
  active:             boolean
  created_at:         string
  id:                 string
  is_trial:           boolean
  gateway:            Gateway
  limits:             Limits
}

export interface Gateway {
  product:    GatewayProduct
  interval:   null
  gateway_id: string
}

export interface GatewayProduct {
  amount:     null
  usage_type: null
  product_id: null
  currency:   null
  title:      Descriptor
}

export interface Descriptor {
  "en-US": string
  "pt-BR": string
}

export interface Limits {
  export_pdf_low:             boolean
  image_upload:               boolean
  create_document:            boolean
  export_gif:                 boolean
  document_publish_online:    boolean
  export_pdf_medium:          boolean
  export_video:               boolean
  remove_bg:                  boolean
  export_gif_count:           number
  export_pdf_count:           number
  remove_bg_count:            number
  use_template_premium_count: number
  icon_stock:                 boolean
  export_png_medium:          boolean
  export_video_count:         number
  image_stock:                boolean
  export_png_high:            boolean
  export_with_watermark:      boolean
  export_png_low:             boolean
  export_pdf_high:            boolean
  font_premium:               boolean
  use_template_premium:       boolean
  shape_stock:                boolean
  upload_font:                boolean
  export_png_count:           number
  create_document_count:      number
}

export interface ProductSubscribed {
  metadata:            null
  app_reference:       Reference
  is_published:        boolean
  active:              boolean
  created_at:          AtedAt
  plan_reference:      Reference
  rules:               Limits
  hotmart_product_id:  null
  descriptor:          Descriptor
  titles:              Descriptor
  is_default:          boolean
  locale:              string[]
  gateway_product_id:  null
  is_deleted:          boolean
  payment_required:    boolean
  updated_at:          AtedAt
  sortment_descriptor: Descriptor
  is_free:             boolean
  team_members:        number
  id:                  string
  from_hotmart:        boolean
  gateway_name:        null
}

export interface AtedAt {
  seconds:     number
  nanoseconds: number
}

export interface Logo {
  folder:      null
  is_deleted:  boolean
  provider:    string
  format:      string
  isThumbnail: boolean
  created_at:  CreatedAt
  id:          string
  uuid:        string
  url:         URL
}

export interface CreatedAt {
}

export interface URL {
  high:   High
  low:    High
  raw:    High
  medium: High
}

export interface High {
  extension:  string
  provider:   string
  filename:   string
  size:       string
  bytes:      number
  secure_url: string
  directory:  string
  uuid:       string
  url:        string
  dimensions: Dimensions
}

export interface Dimensions {
  width:  number
  height: number
}

export interface Role {
  title: string
  value: string
}
