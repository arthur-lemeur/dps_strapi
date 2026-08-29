import type { Schema, Struct } from '@strapi/strapi';

export interface FactsFact extends Struct.ComponentSchema {
  collectionName: 'components_facts_facts';
  info: {
    displayName: 'fact';
    icon: 'bulletList';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ListsPerksList extends Struct.ComponentSchema {
  collectionName: 'components_lists_perks_lists';
  info: {
    displayName: 'perks list';
    icon: 'check';
  };
  attributes: {
    perk: Schema.Attribute.String;
  };
}

export interface LocationAround extends Struct.ComponentSchema {
  collectionName: 'components_location_arounds';
  info: {
    displayName: 'around';
    icon: 'cursor';
  };
  attributes: {
    featured: Schema.Attribute.Boolean;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    when: Schema.Attribute.Date;
  };
}

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
    title: Schema.Attribute.Enumeration<
      ['By air', 'By train & tram', 'Where to stay']
    >;
  };
}

export interface ProgrammeDayEntry extends Struct.ComponentSchema {
  collectionName: 'components_programme_day_entries';
  info: {
    displayName: 'day_entry';
    icon: 'bulletList';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    kind: Schema.Attribute.Enumeration<['talk', 'break']>;
    preview: Schema.Attribute.Boolean;
    speakers: Schema.Attribute.Relation<'oneToMany', 'api::speaker.speaker'>;
    time: Schema.Attribute.Time;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'facts.fact': FactsFact;
      'lists.perks-list': ListsPerksList;
      'location.around': LocationAround;
      'location.practical-infos': LocationPracticalInfos;
      'programme.day-entry': ProgrammeDayEntry;
    }
  }
}
