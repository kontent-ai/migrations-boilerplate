import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Popup Sticky Banner Component
 * Id: 91d022c7-323e-4643-87af-6665af6bd4b8
 * Codename: popup_sticky_banner_component
 */
export type PopupStickyBannerComponentModel = IContentItem<{
  /**
   * Image (asset)
   * Required: false
   * Id: 87d264c1-bbc9-4f30-9730-8478513248ce
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Image 2x (asset)
   * Required: false
   * Id: 810700a7-ed4b-463d-a022-4a9d97a064e2
   * Codename: image_2x
   */
  image2x: Elements.AssetsElement;

  /**
   * Subtitle (text)
   * Required: false
   * Id: 5b4ce7cc-ae45-474f-93ff-895af68ae0b0
   * Codename: subtitle
   */
  subtitle: Elements.TextElement;

  /**
   * Title (text)
   * Required: false
   * Id: 89dcecf1-c67f-4769-9c21-f7e1220b34ce
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: da02ee03-769a-4924-92f8-a7df308b8320
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Close Button Tracking Code (text)
   * Required: false
   * Id: 91096cf1-8f2f-4511-b4da-5a50df2126a4
   * Codename: close_button_tracking_code
   */
  closeButtonTrackingCode: Elements.TextElement;
}>;
