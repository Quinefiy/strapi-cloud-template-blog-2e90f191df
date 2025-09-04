import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    head: Schema.Attribute.String;
    subHead: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_teams';
  info: {
    displayName: 'OurTeam';
  };
  attributes: {
    fullName: Schema.Attribute.String;
    jobTitle: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceAndProject extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_and_projects';
  info: {
    displayName: 'Service&Project';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    richText: Schema.Attribute.Component<'shared.rich-text', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'ServiceItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTeamHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_highlights';
  info: {
    displayName: 'teamHighlight';
  };
  attributes: {
    ceoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ceoName: Schema.Attribute.String;
    ceoTitle: Schema.Attribute.String;
    highlight: Schema.Attribute.Component<'shared.rich-text', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedUsersQuotes extends Struct.ComponentSchema {
  collectionName: 'components_shared_users_quotes';
  info: {
    displayName: 'usersQuotes';
  };
  attributes: {
    fullName: Schema.Attribute.String;
    jobTitle: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.feature': SharedFeature;
      'shared.form': SharedForm;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.our-team': SharedOurTeam;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sections': SharedSections;
      'shared.seo': SharedSeo;
      'shared.service-and-project': SharedServiceAndProject;
      'shared.service-item': SharedServiceItem;
      'shared.slider': SharedSlider;
      'shared.team-highlight': SharedTeamHighlight;
      'shared.users-quotes': SharedUsersQuotes;
    }
  }
}
