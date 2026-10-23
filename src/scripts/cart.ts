export type Cart = Record<string, number>;
const KEY = 'bh-cart';

export const read = (): Cart => {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; }
};
export const write = (cart: Cart) => {
  try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch {}
  renderCount(true);
};
export const count = (cart = read()) => Object.values(cart).reduce((a, b) => a + b, 0);

function renderCount(bump = false) {
  const n = count();
  document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
    if (bump) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
  });
}

const lang = document.body.dataset.lang === 'en' ? 'en' : 'uk';
const toastText = { uk: ['Додано', 'До кошика'], en: ['Added', 'View cart'] }[lang];
let toastTimer = 0;

function toast(name: string) {
  const el = document.querySelector<HTMLElement>('.toast');
  if (!el) return;
  el.replaceChildren();
  const msg = document.createElement('span');
  msg.textContent = `${toastText[0]}: ${name}`;
  const link = document.createElement('a');
  link.href = lang === 'uk' ? '/cart/' : '/en/cart/';
  link.textContent = toastText[1];
  el.append(msg, link);
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (el.hidden = true), 4000);
}

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-add]');
  if (!btn) return;
  const slug = btn.dataset.add!;
  const qtyInput = btn.dataset.qtyFrom ? document.querySelector<HTMLInputElement>(btn.dataset.qtyFrom) : null;
  const qty = Math.max(1, Math.min(99, Number(qtyInput?.value) || 1));
  const cart = read();
  cart[slug] = Math.min(99, (cart[slug] || 0) + qty);
  write(cart);
  btn.classList.add('is-added');
  setTimeout(() => btn.classList.remove('is-added'), 2400);
  toast(btn.dataset.name || slug);
});

renderCount();
addEventListener('storage', (e) => { if (e.key === KEY) renderCount(); });
