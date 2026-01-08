import { Series } from '../../models/series/series';

export class SeriesMapper {

  public static fromJsonToSeries(json: any): Series {
    return {
      id: json.id,
      name: json.name,
      image: json.image,
      description: json.description,
      year: json.year,
      gender: json.gender,
      rating: json.rating,
    };
  }

  public static fromJsonArrayToSeries(body: unknown): Series[] {
    if (Array.isArray(body)) {
      return body.map(jsonItem => this.fromJsonToSeries(jsonItem));
    }
    return [];
  }
}