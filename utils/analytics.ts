type EventParams = Record<string, string | number | boolean>;

class Analytics {
  private pushToDataLayer(event: string, params: EventParams) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event,
        ...params,
      });
    }
  }

  trackEvent(category: string, action: string, label?: string, value?: number, additionalParams?: EventParams) {
    this.pushToDataLayer('custom_event', {
      event_category: category,
      event_action: action,
      event_label: label ?? '',
      event_value: value ?? '',
      ...additionalParams,
    });
  }

  trackNavigation(action: string, label: string) {
    this.trackEvent('Navigation', action, label);
  }

  trackHero(action: string) {
    this.trackEvent('Hero', action);
  }

  trackDonationForm(action: string, label: string, formId: string, donationAmount?: number) {
    const value = typeof donationAmount === 'number' && !isNaN(donationAmount) ? donationAmount : 0;
    this.trackEvent('Donation Form', action, label, value, { formId, donationAmount: value });
  }

  trackFooter(action: string, label: string) {
    this.trackEvent('Footer', action, label);
  }

  trackPageView(path: string) {
    this.pushToDataLayer('virtual_page_view', { page_path: path });
  }

  trackDonation(amount: number, formId: string) {
    this.pushToDataLayer('donation', { donation_amount: amount, formId });
  }
}

export const analytics = new Analytics();
