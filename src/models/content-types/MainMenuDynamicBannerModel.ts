import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Main menu Dynamic banner
 * Id: ffa0ce98-dfc0-4c18-b1f1-408cb152a2d4
 * Codename: main_menu_dynamic_banner
 */
export type MainMenuDynamicBannerModel = IContentItem<{
  /**
   * Image (asset)
   * Required: false
   * Id: 03ec1263-5fcb-4883-84d5-3309edf60fa5
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Title (text)
   * Required: false
   * Id: b8a1b736-9d64-491f-9d03-9367fc2437e3
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Text (text)
   * Required: false
   * Id: 63510709-601f-4c44-9b85-d98e10aec5c0
   * Codename: text
   */
  text: Elements.TextElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: c9117d30-e5da-47d2-a4a5-14dd17ddb947
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Modifier class name (text)
   * Required: false
   * Id: ed046321-b247-4191-b313-e624c7ca559a
   * Codename: modifier_class_name
   */
  modifierClassName: Elements.TextElement;
}>;
