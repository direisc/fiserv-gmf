import {
  GMFMessageVariants,
  CreditRequestDetails,
  CommonGrp,
  CardGrp,
  AddtlAmtGrp,
  EcommGrp,
  CustInfoGrp,
} from '../xmlns/com/fiserv/Merchant/gmfV12.04'
import { REQUEST_TPPID, REQUEST_TERMID, REQUEST_MERCHID, REQUEST_GROUPID } from './Constants'

// CreditRequest
const gmfmv = new GMFMessageVariants()
const creditReqDtl = new CreditRequestDetails()

/* Assigning value to the objects
     * This class CommonGrp is generated from XSD file.
     * Transaction elements inside this common group will be present to all transactions.
    /* Common Group */
const cmnGrp = new CommonGrp()
/* The payment type of the transaction. */
cmnGrp.PymtType = 'Credit'
/* The type of transaction being performed. */
cmnGrp.TxnType = 'Authorization'
/* The local date and time in which the transaction was performed. */
cmnGrp.LocalDateTime = "20200128070707"
/* The transmission date and time of the transaction (in GMT/UCT). */
cmnGrp.TrnmsnDateTime = "20200128070707"
/* A number assigned by the merchant to uniquely reference the transaction.
     * This number must be unique within a day per Merchant ID per Terminal ID. */
cmnGrp.STAN = "100002"
/* A number assigned by the merchant to uniquely reference a set of transactions. */
cmnGrp.RefNum = "20200101012"
/* A number assigned by the merchant to uniquely reference a transaction order sequence. */
cmnGrp.OrderNum = '12345678'
/* An ID assigned by Fiserv, for the Third Party Processor or
     * Software Vendor that generated the transaction. */
cmnGrp.TPPID = REQUEST_TPPID

/* A unique ID assigned to a terminal. */
cmnGrp.TermID = REQUEST_TERMID

/* A unique ID assigned by Fiserv, to identify the Merchant. */
cmnGrp.MerchID = REQUEST_MERCHID

/* An identifier used to indicate the terminal�s account number entry mode 
     * and authentication capability via the Point-of-Service. */
cmnGrp.POSEntryMode = "011"
/* An identifier used to indicate the authorization conditions at the Point-of-Service (POS). */
cmnGrp.POSCondCode = "59"
/* An identifier used to describe the type of terminal being used for the transaction. */
cmnGrp.TermCatCode = "00"
/* An identifier used to indicate the entry mode capability of the terminal. */
cmnGrp.TermEntryCapablt = "04"
/* The amount of the transaction. This may be an authorization amount, 
     * adjustment amount or a reversal amount based on the type of transaction. 
     * It is inclusive of all additional amounts. 
     * It is submitted in the currency represented by the Transaction Currency field.  
     * The field is overwritten in the response for a partial authorization. */
cmnGrp.TxnAmt = "0000000868"
/* The numeric currency of the Transaction Amount. */
cmnGrp.TxnCrncy = "840"
/* An indicator that describes the location of the terminal. */
cmnGrp.TermLocInd = "0"
/* Indicates whether or not the terminal has the capability to capture the card data. */
cmnGrp.CardCaptCap = "1"
/* Indicates Group ID. */
cmnGrp.GroupID = REQUEST_GROUPID

/*
 * Assign the Common Group object to the property of CreditSaleRequest
 * object
 */
creditReqDtl.CommonGrp = cmnGrp

/* This class is generated from XSD file */
/* Card Group */
/* Populate values for Card Group */
const cardGrp = new CardGrp()
/* The account number of the card for which the transaction is being performed. */
cardGrp.AcctNum = "36185900055556"
/* The expiration date of the card being used for the transaction. */
cardGrp.CardExpiryDate = "20160430"
/* An identifier used to indicate the card type. */
cardGrp.CardType = 'Discover'
cardGrp.CCVInd = 'Prvded'
cardGrp.CCVData = "123"
/*
 * Assign the Card Group object to the property of CreditSaleRequest
 * object
 */
creditReqDtl.CardGrp = cardGrp

/* This class is generated from XSD file.*/
/* Addtl Amount Group */
/*  Populate values for Addtl Amount Group */
const addAmtGrp = new AddtlAmtGrp()
/* An identifier used to indicate whether or not the
     * terminal/software can support partial authorization approvals.  */
addAmtGrp.PartAuthrztnApprvlCapablt = "1"

/*
 * Getting the reference object of the AddtlAmtGrp list and add the
 * AddtlAmtGrp object to the list
 */
const addtlAmtGr = creditReqDtl.AddtlAmtGrp?.[0]?._exists ? creditReqDtl.AddtlAmtGrp || [] : []
creditReqDtl.AddtlAmtGrp = [...addtlAmtGr, addAmtGrp]

// const visaGrp = new VisaGrp()
// /* ACI Type value*/
// visaGrp.ACI= "Y"
// /*Visa BID value*/
// visaGrp.VisaBID= "12365"
// /*Visa AUAR value*/
// visaGrp.VisaAUAR= "000000000000"
// /*Visa TAX Amount capability indicator value*/
// visaGrp.TaxAmtCapablt= "1"

// /*
//   * Assign the Visa Group object to the property of CreditSaleRequest
//   * object
//   */
// creditReqDtl.VisaGrp= visaGrp

/* This class is generated from XSD file */
/* ECommerce Group */
/* Populate values for ECommerce Group */
const ecommGrp = new EcommGrp()
/*ECommerce Transaction Indicator capability indicator value*/
ecommGrp.EcommTxnInd = "01"

/*
 * Assign the ECommerce Group object to the property of CreditSaleRequest
 * object
 */

creditReqDtl.EcommGrp = ecommGrp

/* This class is generated from XSD file.*/
/* CustInfoGrp Group */
/* Populate values for CustInfoGrp Group */
const custInfoGrp = new CustInfoGrp()
/*Billing address of the card holder*/
custInfoGrp.AVSBillingAddr = "1307 Walt Whitman road"
/*Postal ZIP Code of the card holder*/
custInfoGrp.AVSBillingPostalCode = "11747"

/*
 * Assign the CustInfoGrp Group object to the property of CreditSaleRequest
 * object
 */
creditReqDtl.CustInfoGrp = custInfoGrp
/* Add the credit request object to GMF message variant object */
gmfmv.CreditRequest = creditReqDtl

export const creditRequest = gmfmv
