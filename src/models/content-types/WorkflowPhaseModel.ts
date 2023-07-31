import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Workflow phase
 * Id: 2aa754d0-1311-4bcd-9927-1efe6f1493ac
 * Codename: workflow_phase
 */
export type WorkflowPhaseModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: 3f6b11e7-0a17-4d15-9851-5c9eda8edbb5
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Description (rich_text)
   * Required: false
   * Id: c2d8a887-4863-48f4-9f96-d1b25ce096e9
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: 37cb6952-49cb-463e-a157-1ba3435bf4e6
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}>;