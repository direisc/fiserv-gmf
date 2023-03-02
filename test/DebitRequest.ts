import {
  GMFMessageVariants,
  DebitRequestDetails,
  CommonGrp,
  CardGrp,
  AddtlAmtGrp,
  PINGrp,
} from '../xmlns/com/fiserv/Merchant/gmfV12.04'

import { document } from '../xmlns/xml-primitives'

import { REQUEST_TPPID, REQUEST_TERMID, REQUEST_MERCHID, REQUEST_GROUPID, REQUEST_DEBIT_TRACK2, REQUEST_DEBIT_PINDATA, REQUEST_DEBIT_KEYSERIALNUMDATA } from './Constants'

// DebitRequest
/* This class is generated from XSD file. */
const gmfmv = new GMFMessageVariants()
/* This class is generated from XSD file. It will create one Debit Request*/
const debitReqDtl = new DebitRequestDetails()

/* Assigning value to the objects
  * This class CommonGrp is generated from XSD file.
  * Transaction elements inside this common group will be present to all transactions.
/* Common Group */
const cmnGrp = new CommonGrp()
/* The payment type of the transaction. */
cmnGrp.PymtType = 'Debit'
/* The type of transaction being performed. */
cmnGrp.TxnType = 'Sale'
/* The local date and time in which the transaction was performed. */
cmnGrp.LocalDateTime = "20200128080808"
/* The transmission date and time of the transaction (in GMT/UCT). */
cmnGrp.TrnmsnDateTime = "20200128080808"
/* A number assigned by the merchant to uniquely reference the transaction.
      * This number must be unique within a day per Merchant ID per Terminal ID. */
cmnGrp.STAN = "100027"
/* A number assigned by the merchant to uniquely reference a set of transactions. */
cmnGrp.RefNum = "202001281234"
/* A number assigned by the merchant to uniquely reference a transaction order sequence. */
cmnGrp.OrderNum = "202001281234"
/* An ID assigned by Fiserv, for the Third Party Processor or
      * Software Vendor that generated the transaction. */
cmnGrp.TPPID = REQUEST_TPPID		//TPP ID value will be assigned by Fiserv

/* A unique ID assigned to a terminal. */
cmnGrp.TermID = REQUEST_TERMID	// Terminal ID value will be assigned by Fiserv

/* A unique ID assigned by Fiserv, to identify the Merchant. */
cmnGrp.MerchID = REQUEST_MERCHID		// Merchant ID value will be assigned by Fiserv

//cmnGrp.MerchID= ("XXXXX0000000000")		// Merchant ID value will be assigned by Fiserv
/* An identifier used to indicate the terminal�s account number entry mode
      * and authentication capability via the Point-of-Service. */
cmnGrp.POSEntryMode = "901"
/* An identifier used to indicate the authorization conditions at the Point-of-Service (POS). */
cmnGrp.POSCondCode = "00"
/* An identifier used to describe the type of terminal being used for the transaction. */
cmnGrp.TermCatCode = "01"
/* An identifier used to indicate the entry mode capability of the terminal. */
cmnGrp.TermEntryCapablt = "04"
/* The amount of the transaction. This may be an authorization amount,
      * adjustment amount or a reversal amount based on the type of transaction.
      * It is inclusive of all additional amounts.
      * It is submitted in the currency represented by the Transaction Currency field.
      * The field is overwritten in the response for a partial authorization. */
cmnGrp.TxnAmt = "1061"

/* The numeric currency of the Transaction Amount. */
cmnGrp.TxnCrncy = "840"
/* An indicator that describes the location of the terminal. */
cmnGrp.TermLocInd = "0"
/* Indicates whether or not the terminal has the capability to capture the card data. */
cmnGrp.CardCaptCap = "1"
/* Indicates Group ID. */
cmnGrp.GroupID = REQUEST_GROUPID //Group ID value will be assigned by Fiserv.

/*
  * Assign the Common Group object to the property of DebitSaleRequest
  * object
  */
debitReqDtl.CommonGrp = cmnGrp

/* This class is generated from UMF_Schema_V1.1.14.xsd.*/
/* Card Group */
/* Populate values for Card Group */
const cardGrp = new CardGrp()
/* The track-2 data of the card for which the transaction is being performed. */
cardGrp.Track2Data = REQUEST_DEBIT_TRACK2

/*
  * Assign the Card Group object to the property of DebitSaleRequest
  * object
  */
debitReqDtl.CardGrp = cardGrp

/* This class is generated from UMF_Schema_V1.1.14.xsd.*/
/* Addtl Amount Group */
/*  Populate values for Addtl Amount Group */
const addAmtGrp = new AddtlAmtGrp()
/* An identifier used to indicate whether or not the
      * terminal/software can support partial authorization approvals.  */
addAmtGrp.PartAuthrztnApprvlCapablt = ("1")

/*
  * Getting the reference object of the AddtlAmtGrp list and add the
  * AddtlAmtGrp object to the list
  */
const addtlAmtGr = debitReqDtl.AddtlAmtGrp?.[0]?._exists ? debitReqDtl.AddtlAmtGrp || [] : []
debitReqDtl.AddtlAmtGrp = [...addtlAmtGr, addAmtGrp]


/**/
// const offrgrp = new OfferGrp()
// offrgrp.POSOfferCap= ""
/**/

/* This class is generated from XSD file.*/
/* PIN Group */
/* Populate values for PIN Group */
const pinGrp = new PINGrp()
/* PIN data value*/
pinGrp.PINData = REQUEST_DEBIT_PINDATA

/*Serial Number data value*/
pinGrp.KeySerialNumData = REQUEST_DEBIT_KEYSERIALNUMDATA

/*
  * Assign the PIN Group object to the property of DebitSaleRequest
  * object
  */
debitReqDtl.PINGrp = pinGrp

/* Add the Debit request object to GMF message variant object */
gmfmv.DebitRequest = debitReqDtl

export const debitRequest = gmfmv
