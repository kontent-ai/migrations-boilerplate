import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Enterprise Feature KK
 * Id: b3eb3c50-c012-49b5-9ce7-b74db91938d0
 * Codename: enterprise_feature_kk
 */
export type EnterpriseFeatureKkModel = IContentItem<{
  /**
   * Icon (asset)
   * Required: false
   * Id: a28c79d5-15f3-43a6-bbd3-5825554bd736
   * Codename: icon
   */
  icon: Elements.AssetsElement;

  /**
   * Name (text)
   * Required: false
   * Id: 6d01c3b9-2fa9-4bd8-bd46-6c1d5cec0423
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * URL (text)
   * Required: false
   * Id: 598c11a7-d77e-4d6f-8c53-380cb0df076e
   * Codename: url
   */
  url: Elements.TextElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: d9f105e0-927d-48e5-abb0-0529cd9311b6
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}>;