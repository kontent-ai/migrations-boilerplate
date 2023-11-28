import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { PageType } from '../taxonomies/page_type';
import { SharedContentModel } from './SharedContentModel';
import { UmlpFooterDisclaimerModel } from './UmlpFooterDisclaimerModel';
import { UmlpElementKontentAiFeatureShowcaseModel } from './UmlpElementKontentAiFeatureShowcaseModel';
import { UmlpElementBasicTableModel } from './UmlpElementBasicTableModel';
import { UmlpElementPlainTextModel } from './UmlpElementPlainTextModel';
import { UmlpElementSupportFeatureModel } from './UmlpElementSupportFeatureModel';
import { UmlpElementLargeCardGridModel } from './UmlpElementLargeCardGridModel';
import { UmlpElementKontentAiFeaturesCardsModel } from './UmlpElementKontentAiFeaturesCardsModel';
import { SolutionsPageCustomerHighlightModel } from './SolutionsPageCustomerHighlightModel';
import { UmlpElementCompareTableModel } from './UmlpElementCompareTableModel';
import { UmlpElementLogoStripModel } from './UmlpElementLogoStripModel';
import { UmlpElementCompareWithCompetitorModel } from './UmlpElementCompareWithCompetitorModel';
import { UmlpElementTestimonialSliderModel } from './UmlpElementTestimonialSliderModel';
import { UmlpElementTextModel } from './UmlpElementTextModel';
import { UmlpElementSelectedCustomerSuccessStoriesModel } from './UmlpElementSelectedCustomerSuccessStoriesModel';
import { UmlpElementContentManagementAndDevRundownModel } from './UmlpElementContentManagementAndDevRundownModel';
import { UmlpElementOpenPositionsFilterModel } from './UmlpElementOpenPositionsFilterModel';
import { CareersOurValuesModel } from './CareersOurValuesModel';
import { UmlpElementTextBubblesBlockModel } from './UmlpElementTextBubblesBlockModel';
import { UmlpElementBreadcrumbsModel } from './UmlpElementBreadcrumbsModel';
import { ContentItemImageModel } from './ContentItemImageModel';
import { UmlpElementFeatureWithCodepenModel } from './UmlpElementFeatureWithCodepenModel';
import { UmlpElementAchievementsV2Model } from './UmlpElementAchievementsV2Model';
import { UmlpElementLeadModel } from './UmlpElementLeadModel';
import { UmlpElementTextImageBlockModel } from './UmlpElementTextImageBlockModel';
import { UmlpElementFullWidthImageModel } from './UmlpElementFullWidthImageModel';
import { HighlightedFeatureModel } from './HighlightedFeatureModel';
import { UmlpElementHeroModel } from './UmlpElementHeroModel';
import { UmlpElementPartnerSuccessStoriesShowcaseModel } from './UmlpElementPartnerSuccessStoriesShowcaseModel';
import { UmlpElementJamstackEnterpriseLandscapeModel } from './UmlpElementJamstackEnterpriseLandscapeModel';
import { SolutionsPageCustomProductCapabilityModel } from './SolutionsPageCustomProductCapabilityModel';
import { UmlpElementVideoModel } from './UmlpElementVideoModel';
import { SolutionsPageProductCapabilityModel } from './SolutionsPageProductCapabilityModel';
import { UmlpElementIntegrationsModel } from './UmlpElementIntegrationsModel';
import { UmlpElementG2BadgesModel } from './UmlpElementG2BadgesModel';
import { UmlpElementAchievementsModel } from './UmlpElementAchievementsModel';
import { UmlpElementStaticWebsiteGeneratorFeatureModel } from './UmlpElementStaticWebsiteGeneratorFeatureModel';
import { UmlpElementResourceTileGridModel } from './UmlpElementResourceTileGridModel';
import { UmlpElementSecurityFeatureModel } from './UmlpElementSecurityFeatureModel';
import { UmlpElementBoxSetModel } from './UmlpElementBoxSetModel';
import { UmlpElementFormSectionModel } from './UmlpElementFormSectionModel';
import { UmlpElementKontentOfficesModel } from './UmlpElementKontentOfficesModel';
import { UmlpElementTrialPageModel } from './UmlpElementTrialPageModel';
import { HorizonsHeroSectionModel } from './HorizonsHeroSectionModel';
import { UmlpElementSingleLogoComponentModel } from './UmlpElementSingleLogoComponentModel';
import { UmlpElementFeaturesModel } from './UmlpElementFeaturesModel';
import { HorizonsSocialFeedModel } from './HorizonsSocialFeedModel';
import { UmlpElementStandaloneTextModel } from './UmlpElementStandaloneTextModel';
import { UmlpElementJamstackVizualizationModel } from './UmlpElementJamstackVizualizationModel';
import { HorizonsSponsorsModel } from './HorizonsSponsorsModel';
import { UmlpElementPersonListModel } from './UmlpElementPersonListModel';
import { UmlpElementTechnologyModel } from './UmlpElementTechnologyModel';
import { HorizonsVideoSectionModel } from './HorizonsVideoSectionModel';
import { UmlpElementG2ReviewModel } from './UmlpElementG2ReviewModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { HorizonsSpeakersModel } from './HorizonsSpeakersModel';
import { UmlpElementLogosCustomModel } from './UmlpElementLogosCustomModel';
import { UmlpElementCtaBannerModel } from './UmlpElementCtaBannerModel';
import { UmlpElementStatisticsModel } from './UmlpElementStatisticsModel';
import { UmlpElementCaseStudiesModel } from './UmlpElementCaseStudiesModel';
import { HorizonsVenueSectionModel } from './HorizonsVenueSectionModel';
import { NewsletterSubscriptionModel } from './NewsletterSubscriptionModel';
import { UmlpElementTimelineSliderModel } from './UmlpElementTimelineSliderModel';
import { HorizonsRegisterModel } from './HorizonsRegisterModel';
import { UmlpElementInfographicsDeliverModel } from './UmlpElementInfographicsDeliverModel';
import { UmlpElementRelatedResourcesModel } from './UmlpElementRelatedResourcesModel';
import { HorizonsAgendaModel } from './HorizonsAgendaModel';
import { CareersHeroSectionModel } from './CareersHeroSectionModel';
import { UmlpElementHeroSimpleModel } from './UmlpElementHeroSimpleModel';
import { UmlpElementStatBubblesModel } from './UmlpElementStatBubblesModel';
import { UmlpElementPresentationalCardsSectionModel } from './UmlpElementPresentationalCardsSectionModel';
import { UmlpElementResourceCardsSectionModel } from './UmlpElementResourceCardsSectionModel';
import { UmlpElementContentBubblesGridModel } from './UmlpElementContentBubblesGridModel';
import { ContentItemYoutubeVideoModel } from './ContentItemYoutubeVideoModel';
import { UmlpElementProductRoadmapModel } from './UmlpElementProductRoadmapModel';
import { UmlpElementHighlightBoxModel } from './UmlpElementHighlightBoxModel';
import { RichTestimonialModel } from './RichTestimonialModel';
import { UmlpElementTwitterModel } from './UmlpElementTwitterModel';
import { UmlpElementCtaStripWithImageModel } from './UmlpElementCtaStripWithImageModel';
import { UmlpElementThreeTextPiecesModel } from './UmlpElementThreeTextPiecesModel';
import { UmlpElementLinkedinModel } from './UmlpElementLinkedinModel';
import { UmlpElementIntegrationsListingModel } from './UmlpElementIntegrationsListingModel';
import { UmlpElementHeroFormModel } from './UmlpElementHeroFormModel';
import { UmlpElementCardColumnsModel } from './UmlpElementCardColumnsModel';
import { UmlpElementPlainBubblesGridModel } from './UmlpElementPlainBubblesGridModel';
import { UmlpElementSupportVerboseFeatureModel } from './UmlpElementSupportVerboseFeatureModel';
import { UmlpElementContentBlockGridModel } from './UmlpElementContentBlockGridModel';
import { UmlpElementFeatureLinksListModel } from './UmlpElementFeatureLinksListModel';
import { UmlpElementVideoSectionModel } from './UmlpElementVideoSectionModel';
import { UmlpElementContentFlowInfographicModel } from './UmlpElementContentFlowInfographicModel';
import { UmlpElementDownloadModel } from './UmlpElementDownloadModel';
import { CareersJobOpportunitiesModel } from './CareersJobOpportunitiesModel';
import { UmlpElementDoubleTestimonialSectionModel } from './UmlpElementDoubleTestimonialSectionModel';
import { UmlpElementContactCardsModel } from './UmlpElementContactCardsModel';
import { UmlpElementLogosModel } from './UmlpElementLogosModel';
import { UmlpElementFeaturedCustomerSuccessStoriesModel } from './UmlpElementFeaturedCustomerSuccessStoriesModel';
import { UmlpElementOfficeLocationsInfoModel } from './UmlpElementOfficeLocationsInfoModel';
import { UmlpElementCardsModel } from './UmlpElementCardsModel';
import { UmlpElementIntegrationShowcaseModel } from './UmlpElementIntegrationShowcaseModel';
import { UmlpElementShiftedBubblesGridModel } from './UmlpElementShiftedBubblesGridModel';
import { HorizonsRecordingsModel } from './HorizonsRecordingsModel';
import { UmlpElementTcoCalculatorFormModel } from './UmlpElementTcoCalculatorFormModel';
import { UmlpElementHowItWorksSchemeModel } from './UmlpElementHowItWorksSchemeModel';
import { UmlpElementCustomTagModel } from './UmlpElementCustomTagModel';
import { UmlpElementFiveBubbleGridModel } from './UmlpElementFiveBubbleGridModel';
import { UmlpElementFaqModel } from './UmlpElementFaqModel';
import { UmlpElementColoredCardsModel } from './UmlpElementColoredCardsModel';
import { UmlpElementBubbleCardsModel } from './UmlpElementBubbleCardsModel';
import { NewsletterSectionModel } from './NewsletterSectionModel';
import { UmlpElementConsultingFeedbackHeroFormModel } from './UmlpElementConsultingFeedbackHeroFormModel';
import { UmlpElementSchemaOrgSnippetModel } from './UmlpElementSchemaOrgSnippetModel';
import { UmlpElementRocPillarsModel } from './UmlpElementRocPillarsModel';
import { UmlpElementRocTeiResultsModel } from './UmlpElementRocTeiResultsModel';
import { UmlpElementRocIntroSectionModel } from './UmlpElementRocIntroSectionModel';
import { UmlpElementRocPillarCustomerTestimonialsModel } from './UmlpElementRocPillarCustomerTestimonialsModel';
import { UmlpElementRocVendorYouCanTrustModel } from './UmlpElementRocVendorYouCanTrustModel';
import { UmlpElementRocDemoFormModel } from './UmlpElementRocDemoFormModel';
import { UmlpElementElementGroupsModel } from './UmlpElementElementGroupsModel';
import { UmlpElementGreenCardsModel } from './UmlpElementGreenCardsModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP
 * Id: b27a923e-727d-4a7d-af10-d2f7b6763ca2
 * Codename: umlp
 */
export type UmlpModel = IContentItem<{
  /**
   * Page type (taxonomy)
   * Required: true
   * Id: bfc655db-f767-43d5-a76d-7452f38dcf70
   * Codename: page_type_659cc82
   */
  pageType659cc82: Elements.TaxonomyElement<PageType>;

  /**
   * Header CTA (modular_content)
   * Required: false
   * Id: 2c5f7342-6ea4-437b-a57a-0700c255890f
   * Codename: header_cta
   *
   * CTA to be shown in the navigation header.
   */
  headerCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Content (modular_content)
   * Required: false
   * Id: 3d47aeaa-871f-48a2-81e0-23d1999604cd
   * Codename: content
   */
  content: Elements.LinkedItemsElement<
    | UmlpFooterDisclaimerModel
    | UmlpElementKontentAiFeatureShowcaseModel
    | UmlpElementBasicTableModel
    | UmlpElementPlainTextModel
    | UmlpElementSupportFeatureModel
    | UmlpElementLargeCardGridModel
    | UmlpElementKontentAiFeaturesCardsModel
    | SolutionsPageCustomerHighlightModel
    | UmlpElementCompareTableModel
    | UmlpElementLogoStripModel
    | UmlpElementCompareWithCompetitorModel
    | UmlpElementTestimonialSliderModel
    | UmlpElementTextModel
    | UmlpElementSelectedCustomerSuccessStoriesModel
    | UmlpElementContentManagementAndDevRundownModel
    | UmlpElementOpenPositionsFilterModel
    | CareersOurValuesModel
    | UmlpElementTextBubblesBlockModel
    | UmlpElementBreadcrumbsModel
    | ContentItemImageModel
    | UmlpElementFeatureWithCodepenModel
    | UmlpElementAchievementsV2Model
    | UmlpElementLeadModel
    | UmlpElementTextImageBlockModel
    | UmlpElementFullWidthImageModel
    | HighlightedFeatureModel
    | UmlpElementHeroModel
    | UmlpElementPartnerSuccessStoriesShowcaseModel
    | UmlpElementJamstackEnterpriseLandscapeModel
    | SolutionsPageCustomProductCapabilityModel
    | UmlpElementVideoModel
    | SolutionsPageProductCapabilityModel
    | UmlpElementIntegrationsModel
    | UmlpElementG2BadgesModel
    | UmlpElementAchievementsModel
    | UmlpElementStaticWebsiteGeneratorFeatureModel
    | UmlpElementResourceTileGridModel
    | UmlpElementSecurityFeatureModel
    | UmlpElementBoxSetModel
    | UmlpElementFormSectionModel
    | UmlpElementKontentOfficesModel
    | UmlpElementTrialPageModel
    | HorizonsHeroSectionModel
    | UmlpElementSingleLogoComponentModel
    | UmlpElementFeaturesModel
    | HorizonsSocialFeedModel
    | UmlpElementStandaloneTextModel
    | UmlpElementJamstackVizualizationModel
    | HorizonsSponsorsModel
    | UmlpElementPersonListModel
    | UmlpElementTechnologyModel
    | HorizonsVideoSectionModel
    | UmlpElementG2ReviewModel
    | CtaBannerComponentModel
    | HorizonsSpeakersModel
    | UmlpElementLogosCustomModel
    | UmlpElementCtaBannerModel
    | UmlpElementStatisticsModel
    | UmlpElementCaseStudiesModel
    | HorizonsVenueSectionModel
    | NewsletterSubscriptionModel
    | UmlpElementTimelineSliderModel
    | HorizonsRegisterModel
    | UmlpElementInfographicsDeliverModel
    | UmlpElementRelatedResourcesModel
    | HorizonsAgendaModel
    | CareersHeroSectionModel
    | UmlpElementHeroSimpleModel
    | UmlpElementStatBubblesModel
    | UmlpElementPresentationalCardsSectionModel
    | UmlpElementResourceCardsSectionModel
    | UmlpElementContentBubblesGridModel
    | ContentItemYoutubeVideoModel
    | UmlpElementProductRoadmapModel
    | UmlpElementHighlightBoxModel
    | RichTestimonialModel
    | UmlpElementTwitterModel
    | UmlpElementCtaStripWithImageModel
    | UmlpElementThreeTextPiecesModel
    | UmlpElementLinkedinModel
    | UmlpElementIntegrationsListingModel
    | UmlpElementHeroFormModel
    | UmlpElementCardColumnsModel
    | UmlpElementPlainBubblesGridModel
    | UmlpElementSupportVerboseFeatureModel
    | UmlpElementContentBlockGridModel
    | UmlpElementFeatureLinksListModel
    | UmlpElementVideoSectionModel
    | UmlpElementContentFlowInfographicModel
    | UmlpElementDownloadModel
    | CareersJobOpportunitiesModel
    | UmlpElementDoubleTestimonialSectionModel
    | UmlpElementContactCardsModel
    | UmlpElementLogosModel
    | UmlpElementFeaturedCustomerSuccessStoriesModel
    | UmlpElementOfficeLocationsInfoModel
    | UmlpElementCardsModel
    | UmlpElementIntegrationShowcaseModel
    | UmlpElementShiftedBubblesGridModel
    | HorizonsRecordingsModel
    | UmlpElementTcoCalculatorFormModel
    | UmlpElementHowItWorksSchemeModel
    | UmlpElementCustomTagModel
    | UmlpElementFiveBubbleGridModel
    | UmlpElementFaqModel
    | UmlpElementColoredCardsModel
    | UmlpElementBubbleCardsModel
    | NewsletterSectionModel
    | UmlpElementConsultingFeedbackHeroFormModel
    | UmlpElementSchemaOrgSnippetModel
    | UmlpElementRocPillarsModel
    | UmlpElementRocTeiResultsModel
    | UmlpElementRocIntroSectionModel
    | UmlpElementRocPillarCustomerTestimonialsModel
    | UmlpElementRocVendorYouCanTrustModel
    | UmlpElementRocDemoFormModel
    | UmlpElementElementGroupsModel
    | UmlpElementGreenCardsModel
  >;

  /**
   * Page name (text)
   * Required: false
   * Id: 536462b2-b4fa-4548-baef-3f7c20bf313b
   * Codename: url_slug_source
   */
  urlSlugSource: Elements.TextElement;

  /**
   * URL slug (url_slug)
   * Required: true
   * Id: ba0c9abf-5a0a-4dd7-b43c-dd4dba8cea17
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;

  /**
   * Previously used URL slugs (custom)
   * Required: false
   * Id: 1685fe91-dd83-499e-89df-edff39b73ff7
   * Codename: url_slug_history
   */
  urlSlugHistory: Elements.CustomElement;
}> &
  Metadata &
  SitemapMetadata;
