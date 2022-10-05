import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SolutionsPageCustomProductCapabilityModel } from '../content-types/SolutionsPageCustomProductCapabilityModel';
import { SolutionsPageCustomerHighlightModel } from '../content-types/SolutionsPageCustomerHighlightModel';
import { UmlpElementTestimonialSliderModel } from '../content-types/UmlpElementTestimonialSliderModel';
import { UmlpElementCardsModel } from '../content-types/UmlpElementCardsModel';
import { UmlpElementCaseStudiesModel } from '../content-types/UmlpElementCaseStudiesModel';
import { UmlpElementCompareTableModel } from '../content-types/UmlpElementCompareTableModel';
import { UmlpElementCtaBannerModel } from '../content-types/UmlpElementCtaBannerModel';
import { UmlpElementFeatureWithCodepenModel } from '../content-types/UmlpElementFeatureWithCodepenModel';
import { UmlpFooterDisclaimerModel } from '../content-types/UmlpFooterDisclaimerModel';
import { UmlpElementFeaturesModel } from '../content-types/UmlpElementFeaturesModel';
import { UmlpElementG2ReviewModel } from '../content-types/UmlpElementG2ReviewModel';
import { UmlpElementAchievementsModel } from '../content-types/UmlpElementAchievementsModel';
import { UmlpElementHeroModel } from '../content-types/UmlpElementHeroModel';
import { UmlpElementInfographicsDeliverModel } from '../content-types/UmlpElementInfographicsDeliverModel';
import { UmlpElementHeroFormModel } from '../content-types/UmlpElementHeroFormModel';
import { UmlpElementIntegrationsModel } from '../content-types/UmlpElementIntegrationsModel';
import { UmlpElementJamstackVizualizationModel } from '../content-types/UmlpElementJamstackVizualizationModel';
import { UmlpElementJamstackEnterpriseLandscapeModel } from '../content-types/UmlpElementJamstackEnterpriseLandscapeModel';
import { UmlpElementKontentOfficesModel } from '../content-types/UmlpElementKontentOfficesModel';
import { UmlpElementBoxSetModel } from '../content-types/UmlpElementBoxSetModel';
import { UmlpElementLeadModel } from '../content-types/UmlpElementLeadModel';
import { UmlpElementLogosModel } from '../content-types/UmlpElementLogosModel';
import { UmlpElementLogosCustomModel } from '../content-types/UmlpElementLogosCustomModel';
import { UmlpElementOpenPositionsFilterModel } from '../content-types/UmlpElementOpenPositionsFilterModel';
import { CareersOurValuesModel } from '../content-types/CareersOurValuesModel';
import { UmlpElementPersonListModel } from '../content-types/UmlpElementPersonListModel';
import { UmlpElementPlainTextModel } from '../content-types/UmlpElementPlainTextModel';
import { UmlpElementSecurityFeatureModel } from '../content-types/UmlpElementSecurityFeatureModel';
import { UmlpElementPresentationalCardsSectionModel } from '../content-types/UmlpElementPresentationalCardsSectionModel';
import { UmlpElementSingleLogoComponentModel } from '../content-types/UmlpElementSingleLogoComponentModel';
import { UmlpElementStandaloneTextModel } from '../content-types/UmlpElementStandaloneTextModel';
import { UmlpElementStaticWebsiteGeneratorFeatureModel } from '../content-types/UmlpElementStaticWebsiteGeneratorFeatureModel';
import { UmlpElementStatisticsModel } from '../content-types/UmlpElementStatisticsModel';
import { UmlpElementSupportFeatureModel } from '../content-types/UmlpElementSupportFeatureModel';
import { UmlpElementSupportVerboseFeatureModel } from '../content-types/UmlpElementSupportVerboseFeatureModel';
import { UmlpElementTechnologyModel } from '../content-types/UmlpElementTechnologyModel';
import { UmlpElementTextModel } from '../content-types/UmlpElementTextModel';
import { UmlpElementTextImageBlockModel } from '../content-types/UmlpElementTextImageBlockModel';
import { UmlpElementThreeTextPiecesModel } from '../content-types/UmlpElementThreeTextPiecesModel';
import { UmlpElementTimelineSliderModel } from '../content-types/UmlpElementTimelineSliderModel';
import { UmlpElementTrialPageModel } from '../content-types/UmlpElementTrialPageModel';
import { UmlpElementVideoSectionModel } from '../content-types/UmlpElementVideoSectionModel';
import { RichTestimonialModel } from '../content-types/RichTestimonialModel';
import { ContentItemYoutubeVideoModel } from '../content-types/ContentItemYoutubeVideoModel';
import { CareersHeroSectionModel } from '../content-types/CareersHeroSectionModel';
import { CareersJobOpportunitiesModel } from '../content-types/CareersJobOpportunitiesModel';
import { CtaBannerComponentModel } from '../content-types/CtaBannerComponentModel';
import { NewsletterSubscriptionModel } from '../content-types/NewsletterSubscriptionModel';
import { HighlightedFeatureModel } from '../content-types/HighlightedFeatureModel';
import { ContentItemImageModel } from '../content-types/ContentItemImageModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP content
 * Id: 4c6ebc3f-e3fd-4d27-984b-287a36b5e90d
 * Codename: umlp_content
 */
export type UMLPContent = IContentItem<{
  /**
   * Content (modular_content)
   * Required: true
   * Id: 824c4867-e4db-4062-b4cc-b721076b1ada
   * Codename: umlp_content__content
   */
  umlpContentContent: Elements.LinkedItemsElement<
    | SolutionsPageCustomProductCapabilityModel
    | SolutionsPageCustomerHighlightModel
    | UmlpElementTestimonialSliderModel
    | UmlpElementCardsModel
    | UmlpElementCaseStudiesModel
    | UmlpElementCompareTableModel
    | UmlpElementCtaBannerModel
    | UmlpElementFeatureWithCodepenModel
    | UmlpFooterDisclaimerModel
    | UmlpElementFeaturesModel
    | UmlpElementG2ReviewModel
    | UmlpElementAchievementsModel
    | UmlpElementHeroModel
    | UmlpElementInfographicsDeliverModel
    | UmlpElementHeroFormModel
    | UmlpElementIntegrationsModel
    | UmlpElementJamstackVizualizationModel
    | UmlpElementJamstackEnterpriseLandscapeModel
    | UmlpElementKontentOfficesModel
    | UmlpElementBoxSetModel
    | UmlpElementLeadModel
    | UmlpElementLogosModel
    | UmlpElementLogosCustomModel
    | UmlpElementOpenPositionsFilterModel
    | CareersOurValuesModel
    | UmlpElementPersonListModel
    | UmlpElementPlainTextModel
    | UmlpElementSecurityFeatureModel
    | UmlpElementPresentationalCardsSectionModel
    | UmlpElementSingleLogoComponentModel
    | UmlpElementStandaloneTextModel
    | UmlpElementStaticWebsiteGeneratorFeatureModel
    | UmlpElementStatisticsModel
    | UmlpElementSupportFeatureModel
    | UmlpElementSupportVerboseFeatureModel
    | UmlpElementTechnologyModel
    | UmlpElementTextModel
    | UmlpElementTextImageBlockModel
    | UmlpElementThreeTextPiecesModel
    | UmlpElementTimelineSliderModel
    | UmlpElementTrialPageModel
    | UmlpElementVideoSectionModel
    | RichTestimonialModel
    | ContentItemYoutubeVideoModel
    | CareersHeroSectionModel
    | CareersJobOpportunitiesModel
    | CtaBannerComponentModel
    | NewsletterSubscriptionModel
    | HighlightedFeatureModel
    | ContentItemImageModel
  >;
}>;
