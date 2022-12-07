export type Artwork = {
  id: number;
  image_id: string;
  title: string;
  artist_display: string;
  artwork_type_title: string;
  dimensions: string;
  date_end: string;
  medium_display: string;
  is_public_domain: string;
  is_on_view: string;
};

export interface PaginatedResponse<A> {
  data: Array<A>;
}
