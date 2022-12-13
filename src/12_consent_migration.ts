import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';

const migration: MigrationModule = {
  order: 12,
  run: async (apiClient: ManagementClient) => {
    try {
      const becomeAPartnerPage = apiClient
        .modifyContentType()
        .byTypeCodename('become_a_partner_page')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const gartnerLp = apiClient
        .modifyContentType()
        .byTypeCodename('gartner_caas_lp')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const getAQuoteForm = apiClient
        .modifyContentType()
        .byTypeCodename('get_a_quote_form')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const getAQuotePage = apiClient
        .modifyContentType()
        .byTypeCodename('get_a_quote_page')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:form_consent_elements',
          },
        ])
        .toPromise();

      const headlessCmsEbook = apiClient
        .modifyContentType()
        .byTypeCodename('headless_cms_ebook_page')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const headlessSurvey = apiClient
        .modifyContentType()
        .byTypeCodename('headless_cms_survey_landing_page_b')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const requestDemo = apiClient
        .modifyContentType()
        .byTypeCodename('request_demo_page')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      const heroFormElement = apiClient
        .modifyContentType()
        .byTypeCodename('umlp_element___hero_form')
        .withData([
          {
            op: 'remove',
            path: '/elements/codename:consent_elements',
          },
        ])
        .toPromise();

      // Delete fields containing Consent elements
      await Promise.all([
        becomeAPartnerPage,
        gartnerLp,
        getAQuoteForm,
        getAQuotePage,
        headlessCmsEbook,
        headlessSurvey,
        requestDemo,
        heroFormElement,
      ]);

      // Delete all content items of Consent Element type
      const items = await apiClient
        .listLanguageVariantsOfContentType()
        .byTypeCodename('consent_element')
        .toAllPromise();

      for (const item of items.data.items) {
        try {
          await apiClient
            .deleteContentItem()
            .byItemId(item.item.id)
            .toPromise();
        } catch (error) {
          throw new Error(`Error in the loop: ${error.message}`);
        }
      }

      // Delete the content type
      await apiClient
        .deleteContentType()
        .byTypeCodename('consent_element')
        .toPromise();
    } catch (error) {
      throw new Error(`There's been an error: ${error.message}`);
    }
  },
};
export default migration;
