// Validatie + versturen voor elk aanvraagformulier op de pagina (Web3Forms).
import { site, whatsappHref } from '../data/site';

const tests: Record<string, (v: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  text: (v) => v.trim().length > 1,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
};

function setInvalid(field: Element, invalid: boolean) {
  field.classList.toggle('invalid', invalid);
  field.querySelector<HTMLElement>('.error')!.hidden = !invalid;
  field.querySelectorAll('input').forEach((i) => i.setAttribute('aria-invalid', String(invalid)));
}

function validate(form: HTMLFormElement): HTMLElement | null {
  let firstBad: HTMLElement | null = null;
  form.querySelectorAll<HTMLInputElement>('input[data-check]').forEach((input) => {
    const bad = !tests[input.dataset.check!](input.value);
    setInvalid(input.closest('.field')!, bad);
    if (bad && !firstBad) firstBad = input;
  });
  form.querySelectorAll<HTMLElement>('fieldset[data-check="radio"]').forEach((fs) => {
    const radios = fs.querySelectorAll<HTMLInputElement>('input[type="radio"]');
    const bad = ![...radios].some((r) => r.checked);
    setInvalid(fs, bad);
    if (bad && !firstBad) firstBad = radios[0];
  });
  return firstBad;
}

document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
  if (form.dataset.bound) return;
  form.dataset.bound = '1';
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const btn = form.querySelector<HTMLButtonElement>('.submit')!;
  const label = btn.querySelector<HTMLElement>('.label')!;

  // Na een eerste fout: live opnieuw controleren terwijl iemand typt.
  form.addEventListener('input', () => { if (form.querySelector('.invalid')) validate(form); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const bad = validate(form);
    if (bad) { bad.focus(); return; }

    btn.disabled = true;
    btn.classList.add('loading');
    label.textContent = 'Versturen…';
    status.className = 'status';
    status.innerHTML = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || 'Versturen mislukt');
      form.reset();
      status.className = 'status ok';
      status.innerHTML = `<strong>Top, je aanvraag is binnen!</strong>Je hoort binnen ${site.responseTime.replace(/[\[\]]/g, '')} van me. Check ook even je spammap.`;
    } catch {
      status.className = 'status err';
      status.innerHTML = `<strong>Dat ging niet goed.</strong>Je aanvraag is niet verstuurd. Probeer het nog eens, of <a href="${whatsappHref}" target="_blank" rel="noopener">stuur me een WhatsApp</a>.`;
    } finally {
      btn.disabled = false;
      btn.classList.remove('loading');
      label.textContent = btn.dataset.label || site.cta;
    }
  });
});
