import { XMLBuilder } from 'fast-xml-parser'

import { debitRequest } from './DebitRequest'
import { creditRequest } from './CreditRequest'
import { cleanUpInterface, mountResponse } from '../utils'

const builder = new XMLBuilder({
  format: true,
})

const debitRequestXML = builder.build(cleanUpInterface(debitRequest))
const creditRequestXML = builder.build(cleanUpInterface(creditRequest))

console.log(`\n\n===========\nDebit Request:\n===========\n${mountResponse(debitRequestXML)}`)

console.log(`\n\n===========\nCredit Request:\n===========\n${mountResponse(creditRequestXML)}`)

process.exit()