declare global {
	interface Window {
		dataLayer: Array<{
			event: string;
			[key: string]: string | number | boolean;
		  }>;
		analyticsQueue: Array<{
			event: string;
			params: Record<string, string | number | boolean>;
		}>;
	}
  }
  
type EventParams = Record<string, string | number | boolean>;

type PaymentMethod = 'foreign' | 'russian';
type Currency = 'USD' | 'RUB';

interface DonationParams {
  action: string;
  label: string;
  formId: string;
  donationAmount?: number;
  paymentMethod?: PaymentMethod;
  currency?: Currency;
  timestamp?: string;
}

class Analytics {
  private queue: Array<{ event: string; params: EventParams }> = [];
  private isInitialized = false;
  private maxRetries = 3;
  private retryDelay = 1000;

  constructor() {
    if (typeof window !== 'undefined') {
      window.analyticsQueue = this.queue;
      this.initializeWhenReady();
    }
  }

  private initializeWhenReady() {
    if (document.readyState === 'complete') {
      this.processQueue();
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => this.processQueue(), 2000);
      });
    }
  }

  private processQueue() {
    this.isInitialized = true;
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      if (item) {
        this.pushToDataLayer(item.event, item.params);
      }
    }
  }

  private getPageTitle(): string {
    if (typeof window === 'undefined') return '';
    return 'Насилию.нет | Помогите женщинам, страдающим от домашнего насилия';
  }

  private pushToDataLayer(event: string, params: EventParams, retryCount = 0) {
    if (!this.isInitialized) {
      this.queue.push({ event, params });
      return;
    }

    if (typeof window === 'undefined' || !window.dataLayer) {
      return;
    }

    try {
      window.dataLayer.push({
        event,
        page_title: this.getPageTitle(),
        ...params,
      });
    } catch (error) {
      console.warn(`Analytics push failed:`, error);
      if (retryCount < this.maxRetries) {
        setTimeout(() => {
          this.pushToDataLayer(event, params, retryCount + 1);
        }, this.retryDelay * Math.pow(2, retryCount));
      }
    }
  }

  /**
   * Tracks a custom event by pushing it to the dataLayer.
   */
  trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    additionalParams?: EventParams
  ) {
    try {
      const eventParams: EventParams = {
        event_category: category,
        event_action: action,
        event_label: label ?? '',
      };

      if (typeof value === 'number' && !isNaN(value) && value > 0) {
        eventParams.event_value = value;
      }

      if (additionalParams) {
        Object.entries(additionalParams).forEach(([key, value]) => {
          if (value !== undefined) {
            eventParams[key] = value;
          }
        });
      }

      this.pushToDataLayer('custom_event', eventParams);
    } catch (error) {
      console.warn('Failed to track event:', { category, action, error });
    }
  }

  /**
   * Tracks navigation events.
   */
  trackNavigation(action: string, label: string) {
    this.trackEvent('Navigation', action, label);
  }

  /**
   * Tracks interactions with the hero section.
   */
  trackHero(action: string) {
    // Clearly distinguish navigation events from donation events
    const eventAction = action === 'Donate Button Click' 
      ? 'Donation Form Navigation' 
      : action;
    
    this.trackEvent('Hero', eventAction);
  }

  /**
   * Tracks interactions with the donation form.
   */
  trackDonationForm({
    action,
    label,
    formId,
    donationAmount,
    paymentMethod,
    currency
  }: DonationParams) {
    try {
      // Distinguish between different donation form events
      const eventAction = action === 'Donate Button Click'
        ? 'Donation Initiate'
        : action;

      const value = typeof donationAmount === 'number' && !isNaN(donationAmount) && donationAmount > 0
        ? donationAmount
        : undefined;

      const additionalParams: EventParams = {
        form_id: formId,
        ...(paymentMethod && { payment_method: paymentMethod }),
        ...(currency && { currency: currency }),
        ...(value && { donation_amount: value }),
      };

      this.trackEvent('Donation Form', eventAction, label, value, additionalParams);
    } catch (error) {
      console.warn('Failed to track donation form event:', error);
    }
  }

  /**
   * Tracks donation initiation specifically
   */
  trackDonationInitiation(params: DonationParams) {
    const {
      label,
      formId,
      donationAmount,
      paymentMethod,
      currency
    } = params;

    const eventParams: EventParams = {
      form_id: formId,
      event_timestamp: this.getUTCTimestamp(),
      ...(paymentMethod && { payment_method: paymentMethod }),
      ...(currency && { currency: currency }),
    };

    if (typeof donationAmount === 'number' && !isNaN(donationAmount) && donationAmount > 0) {
      eventParams.donation_amount = donationAmount;
    }

    this.trackEvent('Donation Form', 'Donation Initiate', label, donationAmount, eventParams);
  }

  /**
   * Tracks successful donations
   */
  trackDonationSuccess(amount: number, formId: string, paymentMethod: PaymentMethod) {
    try {
      const eventParams: EventParams = {
        form_id: formId,
        payment_method: paymentMethod,
        donation_amount: amount,
        currency: paymentMethod === 'foreign' ? 'USD' : 'RUB'
      };

      this.trackEvent(
        'Donation Form',
        'Donation Success',
        paymentMethod,
        amount,
        eventParams
      );
    } catch (error) {
      console.warn('Failed to track donation success:', error);
    }
  }

  /**
   * Tracks footer interactions.
   */
  trackFooter(action: string, label: string) {
    this.trackEvent('Footer', action, label);
  }

  /**
   * Tracks virtual page views.
   */
  trackPageView(path: string) {
    this.pushToDataLayer('virtual_page_view', { page_path: path });
  }

  private getUTCTimestamp(): string {
    return new Date().toISOString();
  }
}

export const analytics = new Analytics();
