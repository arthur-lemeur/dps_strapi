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

export interface SponsorshipSponsorshipPerks extends Struct.ComponentSchema {
  collectionName: 'components_sponsorship_sponsorship_perks';
  info: {
    displayName: 'sponsorship perks';
    icon: 'check';
  };
  attributes: {
    perk: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'location.practical-infos': LocationPracticalInfos;
      'programme.day-entry': ProgrammeDayEntry;
      'sponsorship.sponsorship-perks': SponsorshipSponsorshipPerks;
    }
  }
}
