import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { AuthorModel } from './AuthorModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Horizons - Speakers
 * Id: 8ca1850a-30c8-462f-b22e-a412273fb584
 * Codename: horizons___speakers
 */
export type HorizonsSpeakersModel = IContentItem<{
  /**
   * Section alias (text)
   * Required: true
   * Id: 5853713d-1777-450a-9a97-0409fc0f76d1
   * Codename: section_alias
   *
   * e.g. "About", "Flashback" or "Sponsors" - will be used to dynamically create navigation
   */
  sectionAlias: Elements.TextElement;

  /**
   * URL anchor (text)
   * Required: true
   * Id: 276b43df-b7cd-4f8d-8e9c-ddef8f6344e0
   * Codename: url_anchor
   *
   * Section ID which will be visible in the URL upon clicking the nav link. E.g. "sponsors" will resolve to https://kontent.ai/horizons/#sponsors
   */
  urlAnchor: Elements.TextElement;

  /**
   * Heading (text)
   * Required: true
   * Id: 809396d4-8660-48f9-a4fb-d656a54f1e31
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Speakers (modular_content)
   * Required: true
   * Id: d738f81d-3467-47a6-b796-1438b60911c4
   * Codename: speakers
   */
  speakers: Elements.LinkedItemsElement<AuthorModel>;
}>;