# @tailwindcss/upgrade rewrites strings that are not classes

Minimal Tailwind CSS v3 project for a bug in the v3 -> v4 upgrade tool.

```sh
npm install
npx @tailwindcss/upgrade@4.3.5 --force
git diff
```

Expected: only the real class strings change (`src/index.html`, and the last block of `src/fx.ts`).

Actual: the tool also renames strings that are not classes in `src/fx.ts`, for example `kind: 'ring'` becomes
`kind: 'ring-3'`, `case 'ring':` becomes `case 'ring-3':`, `type Shape = 'ring' | 'blur'` becomes
`'ring-3' | 'blur-sm'`, and the word `outline` in a sentence becomes `outline-solid`.
