## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical roles map 1:1 to label strings: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: root `CONTEXT.md` + `docs/adr/`. See `docs/agents/domain.md`.

## Development

When starting the dev server, prefer background mode if your agent tooling supports it.

```bash
npm run dev
```

Full Astro docs: https://docs.astro.build

### Content locations

- Diary: `src/content/diary/`
- Products: `src/content/products/`
- Resources: `src/content/resources/`
- Schemas: `src/content.config.ts`
