import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { TimeZoneModel } from './TimeZoneModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Webinar Date
 * Id: 95647961-3ad9-4eae-87a2-82a64f261c46
 * Codename: webinar_date
 */
export type WebinarDateModel = IContentItem<{
  /**
   * Pardot URL (text)
   * Required: false
   * Id: 1dc69fca-42a2-4bc5-b99e-4d15c8e5fb5f
   * Codename: pardot_url
   *
   * Pardot iframe URL, ie. https://tracker.kontent.ai/l/849473/2020-03-04/2knyDISCLAIMER:If the field is empty, the website will assume this is an Attending Webinar (meaning no dedicated landing page and registration will be handled by a 3rd party website e.g. one of our partners). In that case, please fill out the Registration URL in the Webinar content type (parent of Webinar date). Leaving both fields empty will lead to unexpected/undesired behavior.
   */
  pardotUrl: Elements.TextElement;

  /**
   * Start Date and Time (date_time)
   * Required: true
   * Id: fd62c01b-ce81-4936-a524-f88960e8d0e6
   * Codename: start_date_and_time
   */
  startDateAndTime: Elements.DateTimeElement;

  /**
   * End Date and Time (date_time)
   * Required: true
   * Id: 10cff282-edd2-4cdb-80ea-37f6fc65e40f
   * Codename: end_date_and_time
   */
  endDateAndTime: Elements.DateTimeElement;

  /**
   * Timezone (modular_content)
   * Required: true
   * Id: 903449dc-cb6d-47fd-b9e9-c4f6d2be348e
   * Codename: timezone
   */
  timezone: Elements.LinkedItemsElement<TimeZoneModel>;

  /**
   * Show insurance video (multiple_choice)
   * Required: false
   * Id: 7d8e3952-d7ab-4fd7-a9bc-926bc139202d
   * Codename: show_insurance_video
   */
  showInsuranceVideo: Elements.MultipleChoiceElement;

  /**
   * Registration open (multiple_choice)
   * Required: false
   * Id: 0a7f6558-e606-408d-abd5-9c94467b151a
   * Codename: registration_open
   */
  registrationOpen: Elements.MultipleChoiceElement;
}>;