# KnappTimeFarm
This repository is the source of the Knapp Time Farm website source code.

**This must be a public repository, do not put any sensitive info on it**

## Notes
- When code is pushed to the main branch it will be deployed by gitlab pages for website
- Images should be less the 50MB to avoid failures of loading
- DNS is through cloudfare and directs visitors of site to github pages deployment

## Code
- This is a static site so you must rely on html, css, and javascript
- Components are aspects that are needed accross multiple pages where html is rendered uses javascript
- When updating a component, rename otherwise github pages will not notice the change
- Contact Forms use a third party API. This allows us to not include any sensitive info for spammers to use
