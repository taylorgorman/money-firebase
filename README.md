# Money

> A personal finance app and also me trying to figure out React + Firebase

[![dependencies Status](https://status.david-dm.org/gh/taylorgorman/money-firebase.svg)](https://david-dm.org/taylorgorman/money-firebase)
[![devDependencies Status](https://status.david-dm.org/gh/taylorgorman/money-firebase.svg?type=dev)](https://david-dm.org/taylorgorman/money-firebase?type=dev)
![Dependabot vulnerabilities](https://flat.badgen.net/dependabot/thepracticaldev/dev.to?icon=dependabot)
![Codecov](https://img.shields.io/codecov/c/github/taylorgorman/money-firebase)
[![Inline docs](http://inch-ci.org/github/taylorgorman/money-firebase.svg?branch=production)](http://inch-ci.org/github/taylorgorman/money-firebase)
![GitHub package.json version, production](https://img.shields.io/github/package-json/v/taylorgorman/money-firebase/production)
[![Build](https://github.com/taylorgorman/money-firebase/actions/workflows/build.yml/badge.svg?branch=production)](https://github.com/taylorgorman/money-firebase/actions/workflows/build.yml?query=branch:production)
[![Deploy to production](https://github.com/taylorgorman/money-firebase/actions/workflows/deploy-production.yml/badge.svg?branch=production)](https://github.com/taylorgorman/money-firebase/actions/workflows/deploy-production.yml?query=branch:production)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fmoney-firebase.web.app%2F)
![GitHub last commit](https://img.shields.io/github/last-commit/taylorgorman/money-firebase)

## Getting Started
1. `yarn`
1. `cd functions`
1. `yarn`
1. `cd ..`
1. `firebase emulators:start`
1. Open new terminal
1. `yarn start`

## Competitors
- [Mint](https://mint.intuit.com)
- [YNAB](https://www.youneedabudget.com)
- [Every Dollar](https://www.ramseysolutions.com/ramseyplus/everydollar)
- [Pocketsmith](https://www.pocketsmith.com)
- [Monarch](https://www.monarchmoney.com)
- [Truebill](https://www.truebill.com)

## To Do
- [ ] When update setting, if setting doesn't exist, create it. Currently getting Firebase error bc user can't update documents they don't own and when user is created, setting doesn't exist for them.
- [ ] Fetch settings app-wide, use live collection so changes reflect immediately, move settings updates to PageHeading
- [ ] Cache data fetching
- [ ] Tell user if can't fetch data
- [ ] Write function to populate database on start
- [ ] Create transactions (this is the whole thing I need rn to get data in)
- [ ] Update transactions
- [ ] Change favicon
- [ ] Dark mode
- [ ] Rename from money-firebase to sir-pigglesworth in Firebase and Github
- [ ] Migrate to Vercel for hosting and serverless functions
- [x] Get functions working in emulator - `yarn`
- [x] After signin, redirect to original landing page
- [x] Add functionality from fire-calculator
- [x] Add functionality from master-pigglesworth
- [x] Write firestore rules such that users can only see their own data

## Resources
1. _Super_ helpful video on using Firebase in React: https://www.youtube.com/watch?v=zQyrwxMPm88
