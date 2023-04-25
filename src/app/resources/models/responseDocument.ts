export interface TraktoDocument {
  is_template:           boolean;
  app_reference:         Reference;
  products:              Product[];
  tags:                  string[];
  is_deleted:            boolean;
  is_premium:            boolean;
  user_reference:        Reference;
  is_renamed:            boolean;
  allow_preview:         boolean;
  theme_reference:       Reference;
  author:                Author;
  module:                null;
  created_at:            string;
  published:             boolean;
  page_format_reference: PageFormatReference;
  printable:             boolean;
  pages:                 Array<Page[]>;
  app_demo:              boolean;
  provider:              string;
  price:                 null;
  is_printable:          boolean;
  is_public:             boolean;
  published_at:          null;
  slug:                  null;
  is_featured:           boolean;
  cover:                 Cover;
  thumbs:                Cover;
  updated_at:            string;
  id:                    string;
  title:                 string;
}

export interface Reference {
  id: string;
}

export interface Author {
  name: null;
}

export interface Cover {
  raw:    string;
  medium: string;
  high:   string;
  low:    string;
}

export interface PageFormatReference {
}

export interface Page {
  page_index:     number;
  page_format_id: null;
}

export interface Product {
  app_product_reference: PageFormatReference;
  created_at:            PageFormatReference;
}
