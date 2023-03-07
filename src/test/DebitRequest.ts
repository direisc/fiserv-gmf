import {
  GMFMessageVariants,
} from '../gmfV12.04'

import { REQUEST_TPPID, REQUEST_TERMID, REQUEST_MERCHID, REQUEST_GROUPID, REQUEST_DEBIT_TRACK2, REQUEST_DEBIT_PINDATA, REQUEST_DEBIT_KEYSERIALNUMDATA } from './Constants'

// DebitRequest
/* This class is generated from XSD file. */
export const debitRequest: GMFMessageVariants = {
  DebitRequest: {
    CommonGrp: {
      /* The payment type of the transaction. */
      PymtType: 'Debit',
      /* The type of transaction being performed. */
      TxnType: 'Sale',
      /* The local date and time in which the transaction was performed. */
      LocalDateTime: "20200128080808",
      /* The transmission date and time of the transaction (in GMT/UCT). */
      TrnmsnDateTime: "20200128080808",
      /* A number assigned by the merchant to uniquely reference the transaction.
            * This number must be unique within a day per Merchant ID per Terminal ID. */
      STAN: "100027",
      /* A number assigned by the merchant to uniquely reference a set of transactions. */
      RefNum: "202001281234",
      /* A number assigned by the merchant to uniquely reference a transaction order sequence. */
      OrderNum: "202001281234",
      /* An ID assigned by Fiserv, for the Third Party Processor or
      * Software Vendor that generated the transaction. */
      TPPID: REQUEST_TPPID,		//,TPP ID value will be assigned by Fiserv

      /* A unique ID assigned to a terminal. */
      TermID: REQUEST_TERMID,	//, Terminal ID value will be assigned by Fiserv

      /* A unique ID assigned by Fiserv, to identify the Merchant. */
      MerchID: REQUEST_MERCHID,		//, Merchant ID value will be assigned by Fiserv

      //      MerchID:("XXXXX0000000000,")		// Merchant ID value will be assigned by Fiserv
      /* An identifier used to indicate the terminal�s account number entry mode
      * and authentication capability via the Point-of-Service. */
      POSEntryMode: "901",
      /* An identifier used to indicate the authorization conditions at the Point-of-Service (POS). */
      POSCondCode: "00",
      /* An identifier used to describe the type of terminal being used for the transaction. */
      TermCatCode: "01",
      /* An identifier used to indicate the entry mode capability of the terminal. */
      TermEntryCapablt: "04",
      /* The amount of the transaction. This may be an authorization amount,
      * adjustment amount or a reversal amount based on the type of transaction.
      * It is inclusive of all additional amounts.
      * It is submitted in the currency represented by the Transaction Currency field.
      * The field is overwritten in the response for a partial authorization. */
      TxnAmt: "1061",

      /* The numeric currency of the Transaction Amount. */
      TxnCrncy: "840",
      /* An indicator that describes the location of the terminal. */
      TermLocInd: "0",
      /* Indicates whether or not the terminal has the capability to capture the card data. */
      CardCaptCap: "1",
      /* Indicates Group ID. */
      GroupID: REQUEST_GROUPID, //,Group ID value will be assigned by Fiserv.
    },
    CardGrp: {
      /* The track-2 data of the card for which the transaction is being performed. */
      Track2Data: REQUEST_DEBIT_TRACK2,
    },
    AddtlAmtGrp: [
      {
        PartAuthrztnApprvlCapablt: '1',
      }
    ],
    PINGrp: {
      /* PIN data value*/
      PINData: REQUEST_DEBIT_PINDATA,

      /*Serial Number data value*/
      KeySerialNumData: REQUEST_DEBIT_KEYSERIALNUMDATA,
    }
  }
}
