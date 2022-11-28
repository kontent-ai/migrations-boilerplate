import { ManagementClient } from '@kontent-ai/management-sdk';
import { taxonomies } from '../models';

export const addIndustryOptionToPageType = async (
  apiClient: ManagementClient
) => {
  try {
    await apiClient
      .modifyTaxonomy()
      .byTaxonomyCodename(taxonomies.page_type.codename)
      .withData([
        {
          op: 'addInto',
          value: {
            name: 'Industry',
            codename: 'industry',
            terms: [],
          },
        },
      ])
      .toPromise();
  } catch (error) {
    console.error(error);
  }
};

export const changePageTypeToIndustry = async (apiClient: ManagementClient) => {
  const CODENAMES = [
    'education_lp',
    'healthcare_lp',
    'banking_and_finance_lp',
    'insurance_lp',
    'retail_lp',
    'travel_and_tourism_lp',
    'food_and_beverage_lp',
    'software_and_technology_lp',
  ];

  for (const codename of CODENAMES) {
    try {
      // Create new version
      await apiClient
        .createNewVersionOfLanguageVariant()
        .byItemCodename(codename)
        .byLanguageCodename('default')
        .toPromise();

      // Changing the pageType
      await apiClient
        .upsertLanguageVariant()
        .byItemCodename(codename)
        .byLanguageCodename('default')
        .withData((builder) => [
          builder.taxonomyElement({
            element: {
              codename: 'page_type_659cc82',
            },
            value: [{ codename: 'industry' }],
          }),
        ])
        .toPromise();

      // Publishing the new version
      await apiClient
        .publishLanguageVariant()
        .byItemCodename(codename)
        .byLanguageCodename('default')
        .withoutData()
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }
};
