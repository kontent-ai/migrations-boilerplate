import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { MainMenuItemModel } from './MainMenuItemModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Main menu
 * Id: facf699d-0682-437e-b487-00cecc24c73e
 * Codename: main_menu
 */
export type MainMenuModel = IContentItem<{
  /**
   * #1 section title (text)
   * Required: false
   * Id: cb9c03a6-03c3-9c43-a0e3-b33298b28210
   * Codename: _1_section_title
   *
   * Product section title
   */
  _1SectionTitle: Elements.TextElement;

  /**
   * #1 section tracking code (text)
   * Required: false
   * Id: 8795c822-cebc-2545-8be8-2a8d179ae170
   * Codename: _1_section_tracking_code
   *
   * Tracking (onclick) code for Google Ananlytics when a user opens the submenu.
   */
  _1SectionTrackingCode: Elements.TextElement;

  /**
   * #1 section items (modular_content)
   * Required: false
   * Id: 27c6afe1-3f5d-6340-23e0-9bf45fd89104
   * Codename: _1_section_items
   *
   * Product items
   */
  _1SectionItems: Elements.LinkedItemsElement<MainMenuItemModel>;

  /**
   * #2 section title (text)
   * Required: false
   * Id: 8610da12-c559-fb2d-d7e1-ee64bf266d22
   * Codename: _2_section_title
   *
   * Pricing title
   */
  _2SectionTitle: Elements.TextElement;

  /**
   * #2 section URL (text)
   * Required: false
   * Id: 7a96bfc9-96c0-2243-edb6-f56504da645a
   * Codename: _2_section_url
   *
   * Pricing URL
   */
  _2SectionUrl: Elements.TextElement;

  /**
   * #2 section tracking code (text)
   * Required: false
   * Id: c09d7661-237a-6911-0cb0-0430ba82ae5e
   * Codename: _2_section_tracking_code
   *
   * Tracking (onclick) code for Google Ananlytics when a user clicks on the menu item.
   */
  _2SectionTrackingCode: Elements.TextElement;

  /**
   * #3 section title (text)
   * Required: false
   * Id: 134b363b-a4c4-b63a-ab2f-544b28befa3c
   * Codename: _3_section_title
   *
   * Resources section tile
   */
  _3SectionTitle: Elements.TextElement;

  /**
   * #3 section tracking code (text)
   * Required: false
   * Id: 2dbf84f9-7d90-25ed-3ce5-8821ceb453e5
   * Codename: _3_section_tracking_code
   *
   * Tracking (onclick) code for Google Ananlytics when a user opens the submenu.
   */
  _3SectionTrackingCode: Elements.TextElement;

  /**
   * #3 section items (modular_content)
   * Required: false
   * Id: 07bd49f3-73d8-fd98-6dd4-edaf5ddc2544
   * Codename: _3_section_items
   *
   * Resources items
   */
  _3SectionItems: Elements.LinkedItemsElement<MainMenuItemModel>;

  /**
   * #4 section title (text)
   * Required: false
   * Id: bf350204-9c79-48b2-ba69-f66a4d78c6b1
   * Codename: _4_section_title
   */
  _4SectionTitle: Elements.TextElement;

  /**
   * #4 section URL (text)
   * Required: false
   * Id: ca69b6a3-564b-4e7b-9e53-345fbdc4ec4b
   * Codename: _4_section_url
   */
  _4SectionUrl: Elements.TextElement;

  /**
   * #4 section tracking code (text)
   * Required: false
   * Id: 128b9d5b-aecc-40a5-8a92-aaf8d7c67153
   * Codename: _4_section_tracking_code
   *
   * Tracking (onclick) code for Google Ananlytics when a user opens the submenu.
   */
  _4SectionTrackingCode: Elements.TextElement;

  /**
   * Log in button (modular_content)
   * Required: false
   * Id: 0cd4eef2-45b6-8dea-d13a-47ac2aa3e1bd
   * Codename: log_in_button
   */
  logInButton: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Trial button - mobile version (modular_content)
   * Required: false
   * Id: c53e5069-762f-3bf9-b147-a9f579084c71
   * Codename: trial_button___mobile_version
   *
   * E.g. "Free Trial". incl. tracking code and url.
   */
  trialButtonMobileVersion: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Trial button - extra text for desktop (text)
   * Required: false
   * Id: 590f5a95-2b0c-2b70-151c-b179cd4d5445
   * Codename: trial_button___extra_text_for_desktop
   *
   * E.g. "Start Your" - extend the mobile version of text by this extra snippet for desktops.
   */
  trialButtonExtraTextForDesktop: Elements.TextElement;
}>;
