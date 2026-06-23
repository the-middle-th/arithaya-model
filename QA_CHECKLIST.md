# ARITHAYA Model QA Checklist

## Build

- [ ] `npm install` completes
- [ ] `npm run build` completes
- [ ] `npm run dev` starts local server
- [ ] no TypeScript errors
- [ ] no missing dependency errors

## Pages

- [ ] `/`
- [ ] `/ecosystem`
- [ ] `/products`
- [ ] `/knowledge`
- [ ] `/enterprise`
- [ ] `/roadmap`
- [ ] `/contact`

## Navigation

- [ ] desktop navbar links work
- [ ] mobile menu opens and closes
- [ ] mobile menu links navigate correctly
- [ ] footer links work

## Forms

### Enterprise

- [ ] `/enterprise` form renders
- [ ] required validation works
- [ ] valid submission returns success
- [ ] Supabase insert works for `enterprise_leads`

### Contact

- [ ] `/contact` form renders
- [ ] required validation works
- [ ] valid submission returns success
- [ ] Supabase insert works for `contact_leads`

## Responsive

- [ ] mobile 375px width
- [ ] mobile 430px width
- [ ] tablet width
- [ ] desktop width
- [ ] no text overlap
- [ ] no horizontal scrolling
- [ ] hero remains premium and readable

## SEO

- [ ] default title exists
- [ ] page titles exist
- [ ] meta description exists
- [ ] Open Graph title exists
- [ ] Open Graph description exists
- [ ] production URL is correct in metadata

## Visual Direction

- [ ] premium
- [ ] executive
- [ ] calm
- [ ] futuristic
- [ ] human-centered
- [ ] trustworthy
- [ ] does not look like a hospital
- [ ] does not look like a wellness clinic
- [ ] feels like Human Intelligence Infrastructure for Thailand

## Performance

- [ ] first load feels fast
- [ ] no oversized unused assets
- [ ] no console errors
- [ ] no broken network requests

## Production Readiness

- [ ] GitHub repo is live
- [ ] Vercel deployment is live
- [ ] Supabase migration applied
- [ ] Vercel environment variables set
- [ ] all pages tested
- [ ] all forms tested
- [ ] mobile tested
- [ ] SEO checked
- [ ] performance checked
- [ ] Manus final QA report delivered
