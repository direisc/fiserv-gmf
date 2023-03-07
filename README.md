# fiserv GMF

Work with XML and XSD on Node.js are not easy, and integrate with fiserv require XML messages.

To work with XML and XSD files I founded a helpful library called [cxsd](https://www.npmjs.com/package/cxsd) and decided to create on library to be help with generated requests like using languages with classes.

## How generate new classes

The library cxsd require xsd from a server, and we have local files to work.

For solve this we need to provider schemas we need to parser on `schema` folder and run `pnpm schema` to server this static files.

To generate one builded version we can run:

`pnpm cxsd http://127.0.0.1:8080/gmfV12.04.xsd`

After that we need to provide correct information on `recommended.d.ts` and on `exports` inside the package.json

## Example

```typescript
import {
  GMFMessageVariants,
  CreditRequestDetails,
  CommonGrp,
  CardGrp,
  AddtlAmtGrp,
  EcommGrp,
  CustInfoGrp,

  // utils
  cleanUpInterface,
  mountResponse,
} from 'fiserv-gmf'
import { REQUEST_TPPID, REQUEST_TERMID, REQUEST_MERCHID, REQUEST_GROUPID } from './Constants'

import { XMLBuilder } from 'fast-xml-parser'

// CreditRequest
export const creditRequest: GMFMessageVariants = {
  CreditRequest: {
    /* Assigning value to the objects
     * This class CommonGrp is generated from XSD file.
     * Transaction elements inside this common group will be present to all transactions.
     * Assign the Common Group object to the property of CreditSaleRequest
     * object
     */
    /* Common Group */
    CommonGrp: {
      /* The payment type of the transaction. */
      PymtType: 'Credit',
      /* The type of transaction being performed. */
      TxnType: 'Authorization',
      /* The local date and time in which the transaction was performed. */
      LocalDateTime: "20200128070707",
      /* The transmission date and time of the transaction (in GMT/UCT). */
      TrnmsnDateTime: "20200128070707",
      /* A number assigned by the merchant to uniquely reference the transaction.
       * This number must be unique within a day per Merchant ID per Terminal ID. */
      STAN: "100002",
      /* A number assigned by the merchant to uniquely reference a set of transactions. */
      RefNum: "20200101012",
      /* A number assigned by the merchant to uniquely reference a transaction order sequence. */
      OrderNum: '12345678',
      /* An ID assigned by Fiserv, for the Third Party Processor or
       * Software Vendor that generated the transaction. */
      TPPID: REQUEST_TPPID,

      /* A unique ID assigned to a terminal. */
      TermID: REQUEST_TERMID,

      /* A unique ID assigned by Fiserv, to identify the Merchant. */
      MerchID: REQUEST_MERCHID,

      /* An identifier used to indicate the terminal�s account number entry mode 
       * and authentication capability via the Point-of-Service. */
      POSEntryMode: "011",
      /* An identifier used to indicate the authorization conditions at the Point-of-Service (POS). */
      POSCondCode: "59",
      /* An identifier used to describe the type of terminal being used for the transaction. */
      TermCatCode: "00",
      /* An identifier used to indicate the entry mode capability of the terminal. */
      TermEntryCapablt: "04",
      /* The amount of the transaction. This may be an authorization amount, 
       * adjustment amount or a reversal amount based on the type of transaction. 
       * It is inclusive of all additional amounts. 
       * It is submitted in the currency represented by the Transaction Currency field.  
       * The field is overwritten in the response for a partial authorization. */
      TxnAmt: "0000000868",
      /* The numeric currency of the Transaction Amount. */
      TxnCrncy: "840",
      /* An indicator that describes the location of the terminal. */
      TermLocInd: "0",
      /* Indicates whether or not the terminal has the capability to capture the card data. */
      CardCaptCap: "1",
      /* Indicates Group ID. */
      GroupID: REQUEST_GROUPID,
    },
    /* This class is generated from XSD file */
    /* Card Group */
    /* Populate values for Card Group */
    CardGrp: {
      /* The account number of the card for which the transaction is being performed. */
      AcctNum: "36185900055556",
      /* The expiration date of the card being used for the transaction. */
      CardExpiryDate: "20160430",
      /* An identifier used to indicate the card type. */
      CardType: 'Discover',
      CCVInd: 'Prvded',
      CCVData: "123",
    },
    /*
     * Getting the reference object of the AddtlAmtGrp list and add the
     * AddtlAmtGrp object to the list
     */
    AddtlAmtGrp: [
      {
        /* An identifier used to indicate whether or not the
         * terminal/software can support partial authorization approvals.
         */
        PartAuthrztnApprvlCapablt: "1",
      }
    ],
    // VisaGrp: {
    //   /* ACI Type value*/
    //   ACI: "Y",
    //   /*Visa BID value*/
    //   VisaBID: ["12365"],
    //   /*Visa AUAR value*/
    //   VisaAUAR: ["000000000000"],
    //   /*Visa TAX Amount capability indicator value*/
    //   TaxAmtCapablt: "1",
    // },
    EcommGrp: {
      /*ECommerce Transaction Indicator capability indicator value*/
      EcommTxnInd: "01",
    },
    CustInfoGrp: {
      /*Billing address of the card holder*/
      AVSBillingAddr: "1307 Walt Whitman road",
      /*Postal ZIP Code of the card holder*/
      AVSBillingPostalCode: "11747",
    },
  }
}

// builder xml
const builder = new XMLBuilder({
  format: true,
})

const creditRequestXML = builder.build(cleanUpInterface(creditRequest))

console.log(`\n\n===========\nCredit Request:\n===========\n${mountResponse(creditRequestXML)}`)
```