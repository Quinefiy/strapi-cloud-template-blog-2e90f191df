import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_us_heroes';
  info: {
    displayName: 'about us hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    benefit: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_shared_case_studies';
  info: {
    displayName: 'case studies';
  };
  attributes: {
    case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface SharedCases extends Struct.ComponentSchema {
  collectionName: 'components_shared_cases';
  info: {
    displayName: 'cases';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCeoData extends Struct.ComponentSchema {
  collectionName: 'components_shared_ceo_data';
  info: {
    displayName: 'ceo data';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    contactName: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Message: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_shared_get_in_touches';
  info: {
    displayName: 'Get In touch';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'shared.contact-info', true>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    aboutUsNavigateBtn: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    head: Schema.Attribute.String;
    headingFirstWord: Schema.Attribute.String;
    headingSecondPart: Schema.Attribute.String;
    subHead: Schema.Attribute.String;
  };
}

export interface SharedManageBusiness extends Struct.ComponentSchema {
  collectionName: 'components_shared_manage_businesses';
  info: {
    displayName: 'manage business';
  };
  attributes: {
    ceo: Schema.Attribute.Component<'shared.ceo-data', false>;
    heading: Schema.Attribute.String;
    vision: Schema.Attribute.Component<'shared.vision', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    link: Schema.Attribute.String;
  };
}

export interface SharedOurServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_services';
  info: {
    displayName: 'our services';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.services', true>;
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

export interface SharedOurUsers extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_users';
  info: {
    displayName: 'our users';
  };
  attributes: {
    heading: Schema.Attribute.String;
    usersQuotes: Schema.Attribute.Component<'shared.users-quotes', true>;
  };
}

export interface SharedPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedPricing extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    heading: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'shared.pricing-plans', true>;
  };
}

export interface SharedPricingPlans extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_plans';
  info: {
    displayName: 'pricing plans';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefits', true>;
    duration: Schema.Attribute.String;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

export interface SharedProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProjectsHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_projects_heroes';
  info: {
    displayName: 'projectsHero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
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
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    displayName: 'Project';
  };
  attributes: {
    companyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'ServiceItem';
  };
  attributes: {
    detailsSection: Schema.Attribute.Component<'shared.sections', false>;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedServicesHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_heroes';
  info: {
    displayName: 'servicesHero';
  };
  attributes: {
    btn: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
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

export interface SharedSoftwareProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_software_products';
  info: {
    displayName: 'software products';
  };
  attributes: {
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Component<'shared.products', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface SharedStartYourJourney extends Struct.ComponentSchema {
  collectionName: 'components_shared_start_your_journeys';
  info: {
    displayName: 'start your journey';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
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

export interface SharedTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_sections';
  info: {
    displayName: 'team section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    teamMemebers: Schema.Attribute.Component<'shared.our-team', true>;
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

export interface SharedVision extends Struct.ComponentSchema {
  collectionName: 'components_shared_visions';
  info: {
    displayName: 'vision';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-us-hero': SharedAboutUsHero;
      'shared.benefits': SharedBenefits;
      'shared.button': SharedButton;
      'shared.case-studies': SharedCaseStudies;
      'shared.cases': SharedCases;
      'shared.ceo-data': SharedCeoData;
      'shared.contact-info': SharedContactInfo;
      'shared.feature': SharedFeature;
      'shared.footer': SharedFooter;
      'shared.form': SharedForm;
      'shared.get-in-touch': SharedGetInTouch;
      'shared.hero': SharedHero;
      'shared.manage-business': SharedManageBusiness;
      'shared.media': SharedMedia;
      'shared.our-services': SharedOurServices;
      'shared.our-team': SharedOurTeam;
      'shared.our-users': SharedOurUsers;
      'shared.partners': SharedPartners;
      'shared.pricing': SharedPricing;
      'shared.pricing-plans': SharedPricingPlans;
      'shared.products': SharedProducts;
      'shared.projects-hero': SharedProjectsHero;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sections': SharedSections;
      'shared.seo': SharedSeo;
      'shared.service-and-project': SharedServiceAndProject;
      'shared.service-item': SharedServiceItem;
      'shared.services': SharedServices;
      'shared.services-hero': SharedServicesHero;
      'shared.slider': SharedSlider;
      'shared.software-products': SharedSoftwareProducts;
      'shared.start-your-journey': SharedStartYourJourney;
      'shared.team-highlight': SharedTeamHighlight;
      'shared.team-section': SharedTeamSection;
      'shared.users-quotes': SharedUsersQuotes;
      'shared.vision': SharedVision;
    }
  }
}
