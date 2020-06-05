/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */

const config = require('../lib/config')
const util = require('../lib/util')

let ninjaOpts = [
  '-C', config.outputDir, 'brave:audit_deps',
  ...config.extraNinjaOpts,
]

let options = config.defaultOptions
options.continueOnFail = false

util.run('ninja', ninjaOpts, options)
