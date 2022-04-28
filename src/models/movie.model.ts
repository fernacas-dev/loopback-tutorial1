import {Entity, model, property} from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'array',
    itemType: 'number',
  })
  stars?: number[];

  @property({
    type: 'number',
  })
  year?: number;

  @property({
    type: 'number',
  })
  review?: number;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
