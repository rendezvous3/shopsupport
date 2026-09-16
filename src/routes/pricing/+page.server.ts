import { redirect } from '@sveltejs/kit';

/** Pricing is scoped per store now; the old page is gone, old links land on contact. */
export function load() {
  redirect(301, '/contact');
}
