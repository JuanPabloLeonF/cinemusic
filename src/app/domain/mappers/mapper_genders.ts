import { Gender } from "../models/music/gender";

export class GenderMapper {

  public static fromJsonToGender(json: any): Gender {
    return {
      id: json.id,
      name: json.name,
      image: json.image,
      numberPerson: json.numberPerson
    };
  }

  public static fromJsonArrayToGenders(body: unknown): Gender[] {
    if (Array.isArray(body)) {
      return body.map(jsonItem => this.fromJsonToGender(jsonItem));
    }
    return [];
  }
}