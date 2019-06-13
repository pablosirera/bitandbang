#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Pablo Sirera'),
  handle: chalk.hex('#1f8ed5')('(@pablosirera)'),
  work: chalk.white('Front-End Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.hex('#1f8ed5')('pablosirera'),
  github: chalk.gray('https://github.com/') + chalk.hex('#1f8ed5')('pablosirera'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.hex('#1f8ed5')('pablosirera'),
  web: chalk.hex('#1f8ed5')('https://pablosirera.github.io'),
  instagram: chalk.gray('https://instagram.com/') + chalk.hex('#1f8ed5')('pablodeveloper'),
  npx: chalk.gray('npx') + ' ' + chalk.white('pablosirera (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('👨🏼‍💻'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelInstagram: chalk.white.bold('  Instagram:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline +
               working + newline + newline +
               twittering + newline +
               githubing + newline +
               linkedining + newline +
               webing + newline +
               instagraming + newline + newline +
               carding

console.log(chalk.hex('#1f8ed5')(boxen(output, options)))
