import { XMLBuilder } from 'fast-xml-parser'

import { debitRequest } from './DebitRequest'
import { creditRequest } from './CreditRequest'
import { mountResponse } from './Constants'

const builder = new XMLBuilder({
  format: true,
})

const cleanUpInterface = (obj: any) => JSON.parse(JSON.stringify(obj))

const debitRequestXML = builder.build(cleanUpInterface(debitRequest))
const creditRequestXML = builder.build(cleanUpInterface(creditRequest))

console.log(`\n\n===========\nDebit Request:\n===========\n${mountResponse(debitRequestXML)}`)

console.log(`\n\n===========\nCredit Request:\n===========\n${mountResponse(creditRequestXML)}`)

process.exit()