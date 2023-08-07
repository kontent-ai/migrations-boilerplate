import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SolutionHighlightModel } from './SolutionHighlightModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Highlight Box
 * Id: f9a2d768-5a7b-450b-a6a1-721da7f798f1
 * Codename: umlp_element___highlight_box
 */
export type UmlpElementHighlightBoxModel = IContentItem<{
  /**
   * Highlight (modular_content)
   * Required: true
   * Id: d8e7c5b6-ef7a-4f9a-87b3-a2485c5b2d44
   * Codename: highlight
   */
  highlight: Elements.LinkedItemsElement<SolutionHighlightModel>;

  /**
   * Theme (multiple_choice)
   * Required: true
   * Id: 8a429ca6-3e36-49ce-b226-266aa270eae8
   * Codename: theme
   *
   * We have 2 visuals available for this component. Have a look at our visual guide under *UMLP element - Highlight Box* and pick accordingly to your preference.Guide URL: https://kontent-ai.atlassian.net/wiki/spaces/KMT/pages/24871043/Kontent.ai+UMLP+Components+overview
   */
  theme: Elements.MultipleChoiceElement;
}>;