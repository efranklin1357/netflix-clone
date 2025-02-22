import { createCheckoutSession, getStripePayments } from '@stripe/firestore-stripe-payments';
import { getFunctions, httpsCallable } from '@firebase/functions';
import app from '../firebase';

const payments = getStripePayments(app, {
  productsCollection: 'products',
  customersCollection: 'customers',
});

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message));
};

const goToBillingPortal = async () => {
  const instance = getFunctions(app, 'us-central1');
  const functionRef = httpsCallable(instance, 'ext-firestore-stripe-payments-createPortalLink');
  const { data } = await functionRef({ returnUrl: window.location.origin }) as { data: { url: string } };

  window.location.assign(data.url);
};

export { payments, loadCheckout, goToBillingPortal };
export default payments;