export interface Article {
  id: number;
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  url: string;
  media: Array<{
    'media-metadata': Array<{
      url: string;
      width: number;
    }>;
  }>;
}