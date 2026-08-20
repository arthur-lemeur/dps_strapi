import type { Schema, Struct } from '@strapi/strapi';

export interface LocationPracticalInfos extends Struct.ComponentSchema {
  collectionName: 'components_location_practical_infos';
  info: {
    displayName: 'practical infos';
    icon: 'plane';
  };
  attributes: {
    items: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::tags-input.tags',
        {
          separator: ',';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'By air'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'location.practical-infos': LocationPracticalInfos;
    }
  }
}
