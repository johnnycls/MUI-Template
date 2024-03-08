# React + Redux + TypeScript + RTKQuery + MUI Template

### Set up Prettier in VS Code

1. Ctrl + shift + p
2. Select `Preference: Open User Settings (JSON)`
3. add the following 3 properties

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```

### Install Packages

`npm i`

### Run the App

`npm run dev`

### Notes

1. Slices should be split by features or by api endpoint
2. Only reusable components should be placed in `src/components`, page specific components should be placed in `src/pages/page`
3. New route should be added in `src/app/router.tsx` as children of the root route
4. Use RTK Query fo api slices and redux toolkit for local slices. (See `src/slices/sampleAPISlice.ts` and `src/slices/preferenceSlice.ts`)
5. `src/fixtures` can be used as fake data for testing before connecting to real backend api endpoints. They should not be used in final product
