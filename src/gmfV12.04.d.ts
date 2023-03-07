export type AcctTypeType = ("Debit" | "Credit");

export type AcctUpdReqIndType = ("Yes" | "Info");

export type AddAmtTypeType = ("Cashback" | "Surchrg" | "Hltcare" | "Transit" | "RX" | "Vision" | "Clinical" | "Dental" | "Copay" | "FirstAuthAmt" | "PreAuthAmt" | "TotalAuthAmt" | "Tax" | "Fee" | "BegBal" | "EndingBal" | "AvailBal" | "LedgerBal" | "HoldBal" | "OrigReqAmt" | "OpenToBuy" | "Fuel" | "Service" | "eWICDiscount" | "TranFee" | "OTCReqAmt" | "FdReqAmt" | "AggDisAmt" | "OtherAmt" | "OTCApvAmt" | "FdApvAmt" | "TipAmt");

export type AddChgIndType = "Y";

export type AddTknRespInfoType = "1";

interface AddtlAmtGrp {
	AddAmt?: string;
	AddAmtAcctType?: string;
	AddAmtCrncy?: string;
	AddAmtType?: AddAmtTypeType;
	HoldInfo?: string;
	PartAuthrztnApprvlCapablt?: PartAuthrztnApprvlCapabltType;
}

interface AdminRequestDetails {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	HostTotDetGrp?: HostTotDetGrp[];
	HostTotGrp?: HostTotGrp;
	PINGrp?: PINGrp;
	TAGrp?: TAGrp;
}

interface AdminResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	HostDiscDetGrp?: HostDiscDetGrp[];
	HostTotDetGrp?: HostTotDetGrp[];
	HostTotGrp?: HostTotGrp;
	PINGrp?: PINGrp;
	RctTxtDetGrp?: RctTxtDetGrp[];
	RespGrp?: RespGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
	TLGrp?: TLGrp[];
}

interface AltCNPRequestDetails {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	FraudMitGrp?: FraudMitGrp;
	ShipGrp?: ShipGrp;
	TAGrp?: TAGrp;
}

interface AltCNPResponseDetails {
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

interface AltMerchNameAndAddrGrp {
	MerchAddr?: string;
	MerchCity?: string;
	MerchCnty?: string;
	MerchCtry?: string;
	MerchEmail?: string;
	MerchName?: string;
	MerchPostalCode?: string;
	MerchState?: string;
}

export type AmexAuthIndType = "CrdOnFile";

interface AmexGrp {
	AmexAuthInd?: AmexAuthIndType;
	AmExPOSData?: string;
	AmExTranID?: string;
	GdSoldCd?: GdSoldCdType;
	ReAuthInd?: ReAuthIndType;
	StoredCrdInd?: StoredCrdIndType;
}

interface AuthOptGrp {
	AuthOptReasonCode?: string;
	DfrdAuthTranID?: string;
	MerchInitAcctUpdReqInd?: Max3ANYes;
	OverrideInd?: Max3ANYesNo;
}

export type AutoNoShowType = "1";

interface AutoRentalGrp {
	AmtExtraChrgs?: string;
	AutoAgreeNum?: string;
	AutoNoShow?: AutoNoShowType;
	DelChrgInd?: DelChrgIndType;
	RentalCity?: string;
	RentalClsID?: string;
	RentalCtry?: string;
	RentalDate?: string;
	RentalDuration?: string;
	RentalExtraChrgs?: string;
	RentalState?: string;
	RentalTaxInd?: RentalTaxIndType;
	RentalTime?: string;
	RenterName?: string;
	ReturnCity?: string;
	ReturnCtry?: string;
	ReturnDate?: string;
	ReturnState?: string;
	ReturnTime?: string;
}

export type BatchCtType = number;

interface BatchGrp {
	BatchAmt?: string;
	BatchCt?: number;
	BatchID?: string;
	BatchL3Cnt?: string;
	BatchProdCd?: string;
	BatchSeqNum?: number;
	BatchTktNum?: string;
	InstSeqCt?: number;
	InstSeqNum?: number;
	PrintInd?: PrintIndType;
	RPS?: RPSType;
	SettleTxnType?: SettleTxnTypeType;
}

interface BatchRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	AmexGrp?: AmexGrp;
	AutoRentalGrp?: AutoRentalGrp;
	BatchGrp?: BatchGrp;
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DCCGrp?: DCCGrp;
	DSGrp?: DSGrp;
	EbtGrp?: EbtGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	InstallPaySvcGrp?: InstallPaySvcGrp;
	LodgingGrp?: LodgingGrp;
	MCGrp?: MCGrp;
	OrderGrp?: OrderGrp;
	OrigAuthGrp?: OrigAuthGrp;
	PurchCardlvl2Grp?: PurchCardlvl2Grp;
	PurchCardlvl3Grp?: PurchCardlvl3Grp[];
	SAGrp?: SAGrp;
	SecrTxnGrp?: SecrTxnGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	TransitGrp?: TransitGrp;
	VisaGrp?: VisaGrp;
}

interface BatchResponseDetails {
	BatchGrp?: BatchGrp;
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

export type BatchSeqNumType = number;

interface BillPayGrp {
	BillPymtTxnInd?: BillPymtTxnIndType;
	InstallInvNum?: string;
	InstallmentType?: InstallmentTypeType;
	InstallPymntDesc?: string;
	MerchAdviceCode?: string;
	MITAmt?: string;
	MITAmtType?: MITAmtTypeType;
	MITFreq?: MITFreqType;
	MITPymtCrncy?: string;
	MITPymtType?: MITPymtTypeType;
	MITRegRefNum?: string;
	MITSeqInd?: string;
	MITTotPymtAmt?: string;
	MITTotPymtCt?: string;
	MITUniqueID?: string;
	MITValFlag?: MITValFlagType;
	MITValRef?: string;
}

export type BillPymtTxnIndType = ("Single" | "Recurring" | "Installment" | "Deferred");

export type BusPymtTypeType = ("ConsrBillPay" | "InstallRepay");

interface CanDebitGrp {
	CanDebitTransCode?: CanDebitTransCodeType;
	CANKeySerialNumData?: string;
	CanNetRespCode?: string;
	MAC?: string;
	MACWrkKey?: string;
	MARespCode?: string;
	MAWrkKeyChkDgts?: string;
	MsgEncrptWrkKey?: string;
	PINEncrptWrkKey?: string;
}

export type CanDebitTransCodeType = ("KeyRequest" | "Saving" | "Checking" | "RefundSaving" | "RefundChecking" | "AdjRefundSaving" | "AdjRefundChecking" | "AdjSaving" | "AdjChecking");

export type CardCaptCapType = ("0" | "1");

interface CardGrp {
	AcctNum?: string;
	ALMProdClass?: string;
	ALMProdCode?: string;
	ALMRateType?: string;
	ALMSvcCode?: string;
	AVSResultCode?: string;
	CardActivDate?: string;
	CardExpiryDate?: string;
	CardType?: CardTypeType;
	CCVData?: string;
	CCVInd?: CCVIndType;
	CCVResultCode?: CCVResultCodeType;
	FndAcctNum?: string;
	InfoReqInd?: InfoReqIndType;
	MVVMAID?: string;
	PymtAcctRef?: string;
	PymtAcctRefReqInd?: Max3ANYes;
	Track1Data?: string;
	Track2Data?: string;
}

interface CardInfoRespGrp {
	CardBrnd?: string;
	CardInd?: string;
	DetProdID?: string;
	IssBank?: string;
	IssCtryCode?: string;
}

export type CardSeqNumType = string;

export type CardTagType = ("CC" | "TE" | "DS" | "AO" | "DB" | "FL" | "CS" | "PR" | "CK" | "EF" | "EC" | "SV1" | "SV2" | "SV3" | "SV4" | "ECA" | "WIC" | "EK" | "MC" | "VS" | "AMX" | "DIS" | "DBC" | "PPD" | "PP1" | "PP3" | "PP4" | "SP" | "HD");

export type CardTypeType = ("Amex" | "Diners" | "Discover" | "JCB" | "MaestroInt" | "MasterCard" | "Visa" | "GiftCard" | "PPayCL" | "CarCareOne" | "CostPlus" | "Dicks" | "Exxon" | "GenProp" | "Gulf" | "Shell" | "Sinclair" | "SpeedPass" | "Sunoco" | "ValeroUCC" | "Mexican" | "BPBusiness" | "EssoFleet" | "ExxonFleet" | "FleetCor" | "FleetOne" | "MCFleet" | "UnionPay" | "ValeroFlt" | "VisaFleet" | "Voyager" | "Wex" | "Paypal" | "NGFC" | "WexOTR" | "Comdata");

export type CCVErrorCodeType = "Y";

export type CCVIndType = ("Ntprvd" | "Prvded" | "Illegible" | "NtOnCrd");

export type CCVResultCodeType = ("Match" | "NoMtch" | "NotPrc" | "NotPrv" | "NotPrt" | "Unknwn");

interface CheckGrp {
	ChkEntryMethod?: ChkEntryMethodType;
	ChkSvcPvdr?: ChkSvcPvdrType;
	DLDateOfBirth?: string;
	DrvLic?: string;
	MICR?: string;
	StateCode?: string;
}

export type CheckoutIndType = "Y";

interface CheckRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	BillPayGrp?: BillPayGrp;
	CheckGrp?: CheckGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	EnhdFltGrp?: EnhdFltGrp;
	EnhdFltPromptGrp?: EnhdFltPromptGrp[];
	FraudMitGrp?: FraudMitGrp;
	OrigAuthGrp?: OrigAuthGrp;
	OTRProdDetGrp?: OTRProdDetGrp[];
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	ShipGrp?: ShipGrp;
	TAGrp?: TAGrp;
	TCNFTFGrp?: TCNFTFGrp;
	TeleCheckECAGrp?: TeleCheckECAGrp;
	WexOTRGrp?: WexOTRGrp;
}

interface CheckResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CommonGrp?: CommonGrp;
	EnhdFltGrp?: EnhdFltGrp;
	FileDLGrp?: FileDLGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
	TCNFTFGrp?: TCNFTFGrp;
	TeleCheckECAGrp?: TeleCheckECAGrp;
	WexOTRGrp?: WexOTRGrp;
}

export type CHFullNmResType = ("M" | "F" | "L" | "N" | "W" | "U" | "P" | "K" | "B" | "A" | "R" | "O" | "S");

export type CHIDMethodType = ("MOTO" | "PIN" | "QuickServ" | "Signature" | "Unknwn");

export type ChkEntryMethodType = ("1" | "2" | "3" | "4" | "5");

export type ChkSvcPvdrType = ("TeleCheck" | "TeleCheckECA" | "TeleCheckICA" | "TeleCheckCBP" | "TeleCheckPPD" | "Certegy" | "MoneyCode" | "ExpressCode" | "ComCheck");

export type ChkTypeType = ("P" | "C");

export type CITMITFrameIndType = ("C101" | "C102" | "C103" | "C104" | "M101" | "M102" | "M103" | "M104" | "M205" | "M206" | "M207" | "M208");

export type CofSchdIndType = ("Scheduled" | "Unscheduled");

export type CofSchedIndType = ("Scheduled" | "Unscheduled");

export type CofSchIndType = ("Scheduled" | "Unscheduled");

export type ComCardTypeType = ("01" | "02" | "03" | "04");

interface CommonGrp {
	AgreementID?: string;
	AltMerchID?: string;
	BusPymtType?: BusPymtTypeType;
	CardCaptCap?: CardCaptCapType;
	CashAdvSerNum?: string;
	ClerkID?: string;
	CustomerId?: string;
	DelChargeInd?: DelChargeIndType;
	DevBatchID?: string;
	DfrdAuthInd?: Max3ANYes;
	DigWltInd?: DigWltIndType;
	DigWltProgType?: DigWltProgTypeType;
	DupATCInd?: Max3ANYes;
	Future?: string;
	GroupID?: string;
	LocalDateTime?: string;
	MerchCatCode?: string;
	MerchCtryOfOrigin?: string;
	MerchCustom1?: string;
	MerchEcho?: string;
	MerchID?: string;
	MobileInd?: MobileIndType;
	NetAccInd?: NetAccIndType;
	NonUSMerch?: NonUSMerchType;
	NoShowInd?: NoShowIndType;
	OrderNum?: string;
	PlanRegSysId?: string;
	PLPOSDebitFlg?: PLPOSDebitFlgType;
	POSCondCode?: POSCondCodeType;
	POSEntryMode?: string;
	POSID?: string;
	ProgramID?: ProgramIDType;
	PymntSvc?: PymntSvcType;
	PymtType?: PymtTypeType;
	RefNum?: string;
	RefundType?: RefundTypeType;
	ReloadType?: ReloadTypeType;
	ReversalInd?: ReversalIndType;
	RtFallbackInd?: RtFallbackIndType;
	SecSubIntegratorID?: string;
	SENum?: string;
	SettleInd?: SettleIndType;
	SingleTapInd?: Max3ANYes;
	SSC?: string;
	STAN?: string;
	SubIntegratorID?: string;
	SupID?: string;
	TermCatCode?: TermCatCodeType;
	TermClassCode?: TermClassCodeType;
	TermEntryCapablt?: TermEntryCapabltType;
	TermID?: string;
	TermLocInd?: TermLocIndType;
	TipPercent?: string;
	TPPID?: string;
	TranInit?: TranInitType;
	TrnmsnDateTime?: string;
	TxnAmt?: string;
	TxnCrncy?: string;
	TxnType?: TxnTypeType;
	UPC?: string;
	UUID?: string;
	WltID?: string;
}

interface CreditRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	AmexGrp?: AmexGrp;
	AuthOptGrp?: AuthOptGrp;
	AutoRentalGrp?: AutoRentalGrp;
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DCCGrp?: DCCGrp;
	DebtRepayGrp?: DebtRepayGrp;
	DSGrp?: DSGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	FraudMitGrp?: FraudMitGrp;
	InstallPaySvcGrp?: InstallPaySvcGrp;
	LodgingGrp?: LodgingGrp;
	MCGrp?: MCGrp;
	MEXCardGrp?: MEXCardGrp;
	OrderGrp?: OrderGrp;
	OrigAuthGrp?: OrigAuthGrp;
	PFGrp?: PFGrp;
	PINGrp?: PINGrp;
	PreNetRtGrp?: PreNetRtGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	PrvLblGrp?: PrvLblGrp;
	PurchCardlvl2Grp?: PurchCardlvl2Grp;
	PurchCardlvl3Grp?: PurchCardlvl3Grp[];
	RealTimeAcctUpdGrp?: RealTimeAcctUpdGrp;
	RestGrp?: RestGrp;
	SAGrp?: SAGrp;
	SecrTxnGrp?: SecrTxnGrp;
	ShipGrp?: ShipGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	TransitGrp?: TransitGrp;
	UnionPayGrp?: UnionPayGrp;
	VisaGrp?: VisaGrp;
}

interface CreditResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AmexGrp?: AmexGrp;
	AuthOptGrp?: AuthOptGrp;
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CardInfoRespGrp?: CardInfoRespGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DSGrp?: DSGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	FileDLGrp?: FileDLGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	InstallPaySvcGrp?: InstallPaySvcGrp;
	MCGrp?: MCGrp;
	MEXCardGrp?: MEXCardGrp;
	OrigAuthGrp?: OrigAuthGrp;
	RealTimeAcctUpdGrp?: RealTimeAcctUpdGrp;
	RespGrp?: RespGrp;
	SAGrp?: SAGrp;
	SecrTxnGrp?: SecrTxnGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	TransitGrp?: TransitGrp;
	UnionPayGrp?: UnionPayGrp;
	VisaGrp?: VisaGrp;
}

interface CustInfoGrp {
	AVSBillingAddr?: string;
	AVSBillingPostalCode?: string;
	BillingAddr2?: string;
	BillingCity?: string;
	BillingCtry?: string;
	BillingState?: string;
	CHFirstNm?: string;
	CHFullNmRes?: CHFullNmResType;
	CHLastNm?: string;
	CHMidNm?: string;
	CustANI?: string;
	CustANIII?: string;
	CustBrwsrName?: string;
	CustEmailAddr?: string;
	CustHostName?: string;
	CustIPAddr?: string;
	CustTelNum?: string;
	CustTelType?: CustTelTypeType;
	DateOfBirth?: string;
	GiftEmailAddr?: string;
}

export type CustMatIndType = "Y";

export type CustTelTypeType = ("D" | "H" | "N" | "W");

export type DbAuthIndType = "CrdOnFile";

export type DbStoredCrdnIndType = ("Initial" | "Subsequent");

interface DCCGrp {
	DCCAmt?: string;
	DCCCrncy?: string;
	DCCInd?: DCCIndType;
	DCCRate?: string;
	DCCTimeZn?: string;
}

export type DCCIndType = ("1" | "2" | "3");

export type DCCTimeZnType = string;

interface DebitGrp {
	BillingInd?: string;
	DbAuthInd?: DbAuthIndType;
	DbProdCd?: string;
	DbStoredCrdnInd?: DbStoredCrdnIndType;
	FPI?: string;
	PartRefundInd?: Max3ANYes;
	PayeeAcctNum?: string;
	PayeeID?: string;
	PayeePhoneNum?: string;
	PymtTranID?: string;
}

interface DebitRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	BillPayGrp?: BillPayGrp;
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DebitGrp?: DebitGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	OrigAuthGrp?: OrigAuthGrp;
	PFGrp?: PFGrp;
	PINGrp?: PINGrp;
	PreNetRtGrp?: PreNetRtGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	RestGrp?: RestGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	UnionPayGrp?: UnionPayGrp;
}

interface DebitResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	DebitGrp?: DebitGrp;
	EMVGrp?: EMVGrp;
	FileDLGrp?: FileDLGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
}

interface DebtRepayGrp {
	RcptAcctNum?: string;
	RcptDateOfBirth?: string;
	RcptLastNm?: string;
	RcptPostalCode?: string;
}

export type DelChargeIndType = "DelChrg";

export type DelChrgIndType = "DelChrg";

export type DelivTypeType = ("CNC" | "DIG" | "PHY" | "SVC" | "TBD");

export type DfrdPymtMonthsType = number;

export type DfrdPymtPlanType = ("NoInterest" | "Interest" | "PayLater");

export type DigWltIndType = ("Staged" | "Passthru");

export type DigWltProgTypeType = ("AndroidPay" | "ApplePay" | "MerchToken" | "PayButton" | "SamsungPay" | "ClickToPay");

export type DiscACIType = "I";

export type DiscAuthIndType = ("ReAuth" | "CrdOnFile" | "ReSubmit" | "TraAgg");

export type DiscAuthTypeType = ("1" | "2" | "3");

interface DSGrp {
	CofSchInd?: CofSchIndType;
	DiscACI?: DiscACIType;
	DiscAuthInd?: DiscAuthIndType;
	DiscNRID?: string;
	DiscPOSData?: string;
	DiscPOSEntry?: string;
	DiscProcCode?: string;
	DiscRespCode?: string;
	DiscSTAN?: string;
	DiscTransQualifier?: string;
	MOTOInd?: MOTOIndType;
	NRIDReqInd?: Max3ANYes;
	PartShipInd?: PartShipIndType;
	RegUserDate?: string;
	RegUserInd?: RegUserIndType;
	StoredCrdnInd?: StoredCrdnIndType;
}

interface EbtGrp {
	EBTCardSeqNum?: string;
	EBTCaseNum?: string;
	EBTType?: EBTTypeType;
	MerchFNSNum?: string;
	VoucherNum?: string;
}

interface EBTRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	EbtGrp?: EbtGrp;
	EcommGrp?: EcommGrp;
	EWICDetGrp?: EWICDetGrp[];
	OrigAuthGrp?: OrigAuthGrp;
	PINGrp?: PINGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	ShipGrp?: ShipGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
}

interface EBTResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	EbtGrp?: EbtGrp;
	EWICBalInfoGrp?: EWICBalInfoGrp[];
	EWICDetGrp?: EWICDetGrp[];
	EWICGrp?: EWICGrp;
	FileDLGrp?: FileDLGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

export type EBTTypeType = ("EBTCash" | "SNAP" | "eWIC");

export type ECAStatusType = ("0" | "1");

interface EcommGrp {
	CustSvcPhoneNumber?: string;
	EcommTxnInd?: string;
	EcommURL?: string;
	MCSC?: string;
	MCSN?: string;
	MOTOIndicator?: MOTOIndicatorType;
}

interface EMVGrp {
	AppExpDate?: string;
	CARC?: string;
	CardSeqNum?: string;
	EMVData?: string;
	FinAmtInd?: FinAmtIndType;
	ProcInd?: string;
	ProcInfo?: string;
	ServCode?: string;
	XCodeResp?: string;
}

export type EncrptTrgtType = ("Track1" | "Track2" | "BothTracks" | "PAN");

export type EncrptTypeType = ("RSA" | "Verifone" | "VSP" | "3DES" | "Onguard" | "AESDUKPT");

interface EnhdFltGrp {
	EnhdFltAuthNum?: string;
	EnhdFltChkCode?: string;
	EnhdFltChkNum?: string;
	EnhdFltCustAcctCode?: string;
	EnhdFltCustCity?: string;
	EnhdFltCustName?: string;
	EnhdFltCustState?: string;
	EnhdFltDrivMsg?: string;
	EnhdFltPayeeName?: string;
	EnhdFltSetInd?: string;
}

interface EnhdFltProdLimitGrp {
	EnhdFltAmtLimit?: string;
	EnhdFltProdCode?: string;
}

interface EnhdFltPromptGrp {
	EnhdFltPromptFormat?: string;
	EnhdFltPromptName?: EnhdFltPromptNameType;
	EnhdFltPromptValue?: string;
}

export type EnhdFltPromptNameType = ("BDAY" | "BLID" | "DLIC" | "DLST" | "DRID" | "HBRD" | "HRRD" | "INVC" | "PONB" | "TRHB" | "TRIP" | "TRLR" | "UNIT" | "XNID" | "AD1" | "AD2" | "DRI" | "EMP" | "GEN" | "ODM" | "TRL" | "VHI" | "WON");

export type EschtblTxnType = ("No" | "Yes");

interface EWICBalInfoGrp {
	PBCatCd?: string;
	PBQty?: string;
	PBSubCatCd?: string;
}

interface EWICDetGrp {
	ActionCd?: string;
	OrigPrice?: string;
	OrigQty?: string;
	UPCPLUData?: string;
	UPCPLUInd?: UPCPLUIndType;
	UPCPrice?: string;
	UPCQty?: string;
}

interface EWICGrp {
	EBenExDt?: string;
}

export type ExistingDebtIndType = "1";

export type ExtraChrgsType = string;

export type FBSeqType = string;

interface FileDLGrp {
	CurrFileCreationDt?: string;
	DBINTblVer?: string;
	DMTblVer?: string;
	DPdTblVer?: string;
	DPrTblVer?: string;
	DReTblVer?: string;
	DRuTblVer?: string;
	DSAFTblVer?: string;
	FBData?: string;
	FBSeq?: string;
	FileCRC16?: string;
	FileSize?: string;
	FileType?: FileTypeType;
	FunCode?: FunCodeType;
	FWVer?: string;
	HBINTblVer?: string;
	HMTblVer?: string;
	HPdTblVer?: string;
	HPrTblVer?: string;
	HReTblVer?: string;
	HRuTblVer?: string;
	HSAFTblVer?: string;
	HWVer?: string;
	LdCtrlKey?: string;
	LdSeqNum?: string;
	NextFileDLOffset?: string;
	PenFileType?: string;
	RctTxtEndDt?: string;
	RctTxtStrDt?: string;
	ReqFBMaxSize?: string;
	ReqFileOffset?: string;
	SubFileType?: SubFileTypeType;
	SWVer?: string;
	TLMerchAddr?: string;
	TLMerchCity?: string;
	TLMerchName?: string;
	TLMerchPostalCode?: string;
	TLMerchState?: string;
	TLSAFBlk?: string;
	TLStNum?: string;
	TLTermType?: string;
	TTCutTime?: string;
	TTDateTime?: string;
	TTDay?: string;
	TTPassword?: string;
}

export type FileTypeType = ("EMV2KEY" | "MAIL" | "CARDTABLE" | "DYNCRDTBL" | "SITECFG" | "FUELRPT" | "HOSTDISC" | "RECTXT" | "TABLE" | "TERMAIL" | "MEXLOCBIN" | "MEXPVLBIN" | "JAMLOCBIN" | "BHSLOCBIN" | "BRBLOCBIN" | "ECBNLOCBIN" | "FUELPRICE");

export type FinAmtIndType = "1";

export type FinAuthIndType = ("0" | "1");

interface FleetRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	EnhdFltPromptGrp?: EnhdFltPromptGrp[];
	FltGrp?: FltGrp;
	MCGrp?: MCGrp;
	OrigAuthGrp?: OrigAuthGrp;
	OTRProdDetGrp?: OTRProdDetGrp[];
	OTRPromptGrp?: OTRPromptGrp[];
	PINGrp?: PINGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	PrvLblGrp?: PrvLblGrp;
	TAGrp?: TAGrp;
	VisaGrp?: VisaGrp;
	WexOTRGrp?: WexOTRGrp;
}

interface FleetResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	EMVGrp?: EMVGrp;
	EnhdFltGrp?: EnhdFltGrp;
	EnhdFltProdLimitGrp?: EnhdFltProdLimitGrp[];
	EnhdFltPromptGrp?: EnhdFltPromptGrp[];
	FileDLGrp?: FileDLGrp;
	FltGrp?: FltGrp;
	MCGrp?: MCGrp;
	OTRFuelLimitGrp?: OTRFuelLimitGrp[];
	OTRProdDetGrp?: OTRProdDetGrp[];
	OTRPromptGrp?: OTRPromptGrp[];
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
	VisaGrp?: VisaGrp;
	WexOTRGrp?: WexOTRGrp;
}

interface FltGrp {
	AvailProdFleetInfo?: string;
	AvailProdsInd?: Max3ANYes;
	CustData?: string;
	DeptNum?: string;
	DrvLicState?: StateCodeType;
	DrvNum?: string;
	ExtDrvID?: string;
	FleetID?: string;
	FltEmpNum?: string;
	Hubometer?: string;
	JobID?: string;
	JobNum?: string;
	LicNum?: string;
	MaintenanceID?: string;
	Odo?: string;
	PurchaseOrder?: string;
	ReeferHr?: string;
	ServResCd?: string;
	TrailerID?: string;
	TrailerLic?: string;
	TrailerLicState?: StateCodeType;
	TripNumber?: string;
	UnitID?: string;
	UserID?: string;
	VehIDNum?: string;
	VehLicState?: StateCodeType;
	VehNum?: string;
	VoyagerData?: string;
}

export type FndSrcType = ("Credit" | "Debit" | "Prepaid" | "DepAcct" | "Cash");

interface FraudMitGrp {
	AddChgInd?: AddChgIndType;
	CustID?: string;
	CustMatInd?: CustMatIndType;
	CustStartDate?: string;
	FrdPacket?: string;
	FrdScoreInd?: FrdScoreIndType;
	FrdTxt?: string;
	LoyID?: string;
	LoyStartDate?: string;
	MembInd?: MembIndType;
	NumAttempts?: number;
}

interface FraudMitRespGrp {
	AddrChg?: string;
	EmailMtch?: string;
	NmMtch?: string;
	RevAt?: string;
	Score?: string;
	ScoreRes?: string;
	StrMtch?: string;
	TeleMtch?: string;
	ZipMtch?: string;
}

export type FrdScoreIndType = "Y";

export type FunCodeType = ("R" | "D" | "F" | "U" | "N" | "C" | "L" | "E" | "M" | "P" | "X");

export type GdSoldCdType = "1000";

interface GenPrepaidRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	OrigAuthGrp?: OrigAuthGrp;
	OTCGrp?: OTCGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	TAGrp?: TAGrp;
}

interface GenPrepaidResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	OTCGrp?: OTCGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

interface GMFMessageVariants {
	AdminRequest?: AdminRequestDetails;
	AdminResponse?: AdminResponseDetails;
	AltCNPRequest?: AltCNPRequestDetails;
	AltCNPResponse?: AltCNPResponseDetails;
	BatchRequest?: BatchRequestDetails;
	BatchResponse?: BatchResponseDetails;
	CheckRequest?: CheckRequestDetails;
	CheckResponse?: CheckResponseDetails;
	CreditRequest?: CreditRequestDetails;
	CreditResponse?: CreditResponseDetails;
	DebitRequest?: DebitRequestDetails;
	DebitResponse?: DebitResponseDetails;
	EBTRequest?: EBTRequestDetails;
	EBTResponse?: EBTResponseDetails;
	FleetRequest?: FleetRequestDetails;
	FleetResponse?: FleetResponseDetails;
	GenPrepaidRequest?: GenPrepaidRequestDetails;
	GenPrepaidResponse?: GenPrepaidResponseDetails;
	MTRequest?: MTRequestDetails;
	MTResponse?: MTResponseDetails;
	PinlessDebitRequest?: PinlessDebitRequestDetails;
	PinlessDebitResponse?: PinlessDebitResponseDetails;
	PrepaidRequest?: PrepaidRequestDetails;
	PrepaidResponse?: PrepaidResponseDetails;
	PrivateLabelRequest?: PrivateLabelRequestDetails;
	PrivateLabelResponse?: PrivateLabelResponseDetails;
	RejectResponse?: RejectResponseDetails;
	ReversalRequest?: VoidTOReversalRequestDetails;
	ReversalResponse?: VoidTOReversalResponseDetails;
	TransArmorRequest?: TARequestDetails;
	TransArmorResponse?: TAResponseDetails;
}

interface HostDiscDetGrp {
	HDBINBeg?: string;
	HDBINEnd?: string;
	HDCardType?: string;
	HDDiscType?: string;
	HDEndDt?: string;
	HDProdCd?: string;
	HDProdDiscAmt?: string;
	HDProgDesc?: string;
	HDQtyLt?: string;
	HDStrDt?: string;
}

interface HostTotDetGrp {
	CardTag?: CardTagType;
	CardTxnAmt?: string;
	SumPymtTypeTag?: string;
	TxnCt?: string;
}

interface HostTotGrp {
	FeeAmt?: string;
	HTSettleDate?: string;
	NetSettleAmt?: string;
	Password?: string;
	TotReqDate?: TotReqDateType;
}

export type HotelNoShowType = "1";

export type InfoReqIndType = "Y";

export type InstallmentTypeType = ("Merchant" | "ThirdParty" | "Issuer");

interface InstallPaySvcGrp {
	FirstInstallAmt?: string;
	InstallAPR?: string;
	InstallFee?: string;
	InstallIntRate?: string;
	InstallPymtOptions?: InstallPymtOptionsType;
	InstallType?: InstallTypeType;
	NoOfInstall?: string;
	SubInstallAmt?: string;
	TotInstallAmtDue?: string;
}

export type InstallPymtOptionsType = ("I" | "F" | "B");

export type InstallTypeType = ("20" | "21" | "22" | "23" | "24");

export type InstSeqCtType = number;

export type InstSeqNumType = number;

export type L3DbCrIndType = ("D" | "C");

export type L3ItemQtyExpType = ("0" | "1" | "2" | "3" | "4" | "5");

export type L3LineItmDtlIndType = ("0" | "1");

export type L3TaxIndType = ("0" | "1" | "2");

export type L3TaxRtExpType = ("0" | "1" | "2" | "3" | "4" | "5");

export type L3TaxTypeIdType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13");

export type Len10AN = string;

export type Len10ANS = string;

export type Len10Num = string;

export type Len11ANS = string;

export type Len12AN = string;

export type Len12HexString = string;

export type Len12Num = string;

export type Len13AN = string;

export type Len14AN = string;

export type Len14Num = string;

export type Len16AN = string;

export type Len16HexString = string;

export type Len19AN = string;

export type Len1Alpha = string;

export type Len1AN = string;

export type Len1Num = string;

export type Len20AN = string;

export type Len20ANS = string;

export type Len20Num = string;

export type Len28_56Base64String = string;

export type Len28Base64String = string;

export type Len2AN = string;

export type Len2ANS = string;

export type Len2Num = string;

export type Len35AN = string;

export type Len3Alpha = string;

export type Len3AN = string;

export type Len3ANS = string;

export type Len3Num = string;

export type Len40HexString = string;

export type Len41ANS = string;

export type Len4AN = string;

export type Len4ANS = string;

export type Len4HexString = string;

export type Len4Num = string;

export type Len5AN = string;

export type Len5ANS = string;

export type Len5Num = string;

export type Len60ANS = string;

export type Len6AN = string;

export type Len6Num = string;

export type Len7AN = string;

export type Len8AN = string;

export type Len8ANS = string;

export type Len8Num = string;

export type Len9AN = string;

export type Len9ANS = string;

export type Len9Num = string;

export type LodChargeTypeType = ("Lodging" | "Restaurant" | "GiftShop");

interface LodgingGrp {
	ArvDate?: string;
	ArvTime?: string;
	CHName?: string;
	DepDate?: string;
	DepTime?: string;
	Duration?: string;
	ExtraChrgs?: string;
	FolioNum?: string;
	HotelNoShow?: HotelNoShowType;
	LodChargeType?: LodChargeTypeType;
	LodPhnNum?: string;
	LodRefNum?: string;
	ProgramInd?: ProgramIndType;
	RmTax?: string;
	RoomNum?: string;
	RoomRt?: string;
}

export type Max10_20AN = string;

export type Max100ANS = string;

export type Max10AN = string;

export type Max10ANB = string;

export type Max10ANS = string;

export type Max10Num = string;

export type Max113ANS = string;

export type Max11AN = string;

export type Max11ANS = string;

export type Max128ANS = string;

export type Max12AmountType = string;

export type Max12AN = string;

export type Max12ANS = string;

export type Max12Num = string;

export type Max13AmountSignType = string;

export type Max13AN = string;

export type Max13ANS = string;

export type Max14AN = string;

export type Max14ANS = string;

export type Max14Num = string;

export type Max15AN = string;

export type Max15ANB = string;

export type Max15ANS = string;

export type Max15Num = string;

export type Max16AN = string;

export type Max16ANS = string;

export type Max16Num = string;

export type Max17AmountSignType = string;

export type Max17AN = string;

export type Max17ANS = string;

export type Max18AN = string;

export type Max18ANS = string;

export type Max19AN = string;

export type Max19ANS = string;

export type Max19Num = string;

export type Max2_9Num = string;

export type Max200ANS = string;

export type Max20AN = string;

export type Max20ANS = string;

export type Max20Num = string;

export type Max21AN = string;

export type Max22AN = string;

export type Max22ANS = string;

export type Max2300ANS = string;

export type Max23AN = string;

export type Max23Num = string;

export type Max24ANS = string;

export type Max24Num = string;

export type Max255ANS = string;

export type Max25AN = string;

export type Max25ANS = string;

export type Max25Num = string;

export type Max260ANS = string;

export type Max26ANS = string;

export type Max27AN = string;

export type Max28_32ANS = string;

export type Max28AN = string;

export type Max28ANS = string;

export type Max28Base64String = string;

export type Max2964AN = string;

export type Max29AN = string;

export type Max2AN = string;

export type Max2ANS = string;

export type Max2Num = string;

export type Max3_4AN = string;

export type Max3_9Num = string;

export type Max30ANS = string;

export type Max32ANS = string;

export type Max33ANS = string;

export type Max35ANS = string;

export type Max3600ANS = string;

export type Max36ANS = string;

export type Max36HexString = string;

export type Max37ANS = string;

export type Max38ANS = string;

export type Max3Alpha = string;

export type Max3AmountSignType = string;

export type Max3AN = string;

export type Max3ANS = string;

export type Max3ANYes = "Yes";

export type Max3ANYesNo = ("Yes" | "No");

export type Max3Num = string;

export type Max4_12Num = string;

export type Max4_8AN = string;

export type Max4095Base64String = string;

export type Max40AN = string;

export type Max40ANS = string;

export type Max45AN = string;

export type Max45ANS = string;

export type Max4AN = string;

export type Max4ANS = string;

export type Max4Num = string;

export type Max5_13AN = string;

export type Max50AN = string;

export type Max50ANS = string;

export type Max512ANS = string;

export type Max5AN = string;

export type Max5Num = string;

export type Max6_8Num = string;

export type Max60ANS = string;

export type Max65ANS = string;

export type Max65Num = string;

export type Max6AmountSignType = string;

export type Max6AN = string;

export type Max6ANS = string;

export type Max6Num = string;

export type Max70ANS = string;

export type Max76ANS = string;

export type Max7AN = string;

export type Max7ANS = string;

export type Max7Num = string;

export type Max80AN = string;

export type Max80ANS = string;

export type Max8AN = string;

export type Max8ANB = string;

export type Max8ANS = string;

export type Max8Num = string;

export type Max90ANS = string;

export type Max954HexString = string;

export type Max95ANS = string;

export type Max998ANS = string;

export type Max999ANS = string;

export type Max999Base64String = string;

export type Max999HexString = string;

export type Max99ANS = string;

export type Max9AN = string;

export type Max9ANB = string;

export type Max9ANS = string;

export type Max9Num = string;

export type MCAuthIndType = "CrdOnFile";

interface MCGrp {
	BanknetData?: string;
	CCVErrorCode?: CCVErrorCodeType;
	CITMITFrameInd?: CITMITFrameIndType;
	CofSchdInd?: CofSchdIndType;
	CrypCrncyPurchInd?: Max3ANYes;
	DevTypeInd?: string;
	FinAuthInd?: FinAuthIndType;
	HighRiskSecrPurchInd?: Max3ANYes;
	MCACI?: string;
	MCAddData?: string;
	MCAuthInd?: MCAuthIndType;
	MCMSDI?: MCMSDIType;
	MCPOSData?: string;
	POSEntryModeChg?: POSEntryModeChgType;
	StoredCredenInd?: StoredCredenIndType;
	TranEditErrCode?: string;
	TranIntgClass?: TranIntgClassType;
}

export type MCMSDIType = ("BillPayment" | "Healthcare" | "Transit" | "EcomAgg" | "B2B" | "Hotel" | "AutoRental");

export type MCSCType = string;

export type MCSNType = string;

export type MembIndType = ("M" | "G");

export type MerchTypeType = string;

interface MEXCardGrp {
	CHIDMethod?: CHIDMethodType;
	DfrdPymtMonths?: number;
	DfrdPymtPlan?: DfrdPymtPlanType;
	NumDfrdPymts?: number;
	PymtPlnCntrtNum?: string;
	RctTxtResp?: string;
}

export type MITAmtTypeType = ("Fixed" | "Variable");

export type MITFreqType = ("01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12");

export type MITPymtTypeType = ("Registration" | "Subsequent" | "Modification" | "Cancellation");

export type MITTotPymtCtType = string;

export type MITValFlagType = ("Validated" | "NotValidated");

interface MnySndGrp {
	FastRefundInd?: Max3ANYes;
	FndRefNum?: string;
	FndSrc?: FndSrcType;
	MTProcessInd?: MTProcessIndType;
	PartID?: string;
	PmntTypeId?: PmntTypeIdType;
	RecvAcctNum?: string;
	RecvAcctNumType?: RecvAcctNumTypeType;
	RecvCity?: string;
	RecvCtryCode?: string;
	RecvFirstNm?: string;
	RecvIDIssCtry?: string;
	RecvIDSubtype?: RecvIDSubtypeType;
	RecvIDType?: RecvIDTypeType;
	RecvIDValue?: string;
	RecvLastNm?: string;
	RecvMidInit?: string;
	RecvMidNm?: string;
	RecvPhoneNumber?: string;
	RecvPostalCode?: string;
	RecvStateCode?: MTStateCodeType;
	RecvStrAddr?: string;
	SendAcctNum?: string;
	SendAcctNumType?: SendAcctNumTypeType;
	SendBusName?: string;
	SendCity?: string;
	SendCtryCode?: string;
	SendDateOfBirth?: string;
	SendFirstNm?: string;
	SendIDIssCtry?: string;
	SendIDSubtype?: SendIDSubtypeType;
	SendIDType?: SendIDTypeType;
	SendIDValue?: string;
	SendLastNm?: string;
	SendMidInit?: string;
	SendMidNm?: string;
	SendPhoneNum?: string;
	SendPostalCode?: string;
	SendStateCode?: MTStateCodeType;
	SendStrAddr?: string;
	TranPurpose?: TranPurposeType;
}

export type MobileIndType = "Mobile";

export type MOTOIndicatorType = ("MailOrder" | "TelPhOrder");

export type MOTOIndType = ("1" | "2");

export type MrktSpecificDataIndType = ("BillPayment" | "Healthcare" | "Transit" | "EcomAgg" | "B2B" | "Hotel" | "AutoRental");

export type MTProcessIndType = ("Funding" | "Payment");

interface MTRequestDetails {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	MCGrp?: MCGrp;
	MnySndGrp?: MnySndGrp;
	OrigAuthGrp?: OrigAuthGrp;
	PFGrp?: PFGrp;
	SecrTxnGrp?: SecrTxnGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	VisaGrp?: VisaGrp;
}

interface MTResponseDetails {
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	MCGrp?: MCGrp;
	MnySndGrp?: MnySndGrp;
	OrigAuthGrp?: OrigAuthGrp;
	RespGrp?: RespGrp;
	SecrTxnGrp?: SecrTxnGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
	VisaGrp?: VisaGrp;
}

export type MTStateCodeType = ("AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "MY" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY" | "NL" | "PE" | "NS" | "NB" | "QC" | "ON" | "MB" | "SK" | "AB" | "BC" | "YT" | "NT" | "NU");

export type NetAccIndType = ("1" | "C");

export type NFTFACHStatType = ("0" | "1" | "2" | "3" | "4");

export type NFTFChkTypeType = ("P" | "C");

export type NFTFPreFlagType = "Y";

export type NFTFPrimIDTypeType = ("1" | "2" | "3" | "4");

export type NFTFRelTypeType = ("D" | "P" | "S" | "X");

export type NFTFSecIDTypeType = ("1" | "2" | "3" | "4");

export type NFTFVIPIndType = "Y";

export type NonUSMerchType = ("Canadian" | "Mexican" | "Jamaica" | "Barbados" | "Bahamas" | "Trinidad" | "StVincent" | "Anguilla" | "StKittsNevis" | "StLucia" | "Europe" | "APAC");

export type NoShowIndType = "NoShow";

export type NumAttemptsType = number;

export type NumDfrdPymtsType = number;

export type NumOfProdsType = ("01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10");

interface OrderGrp {
	BillerRefNum?: string;
	OrderDate?: string;
	OrderTime?: string;
	SKU?: string;
}

interface OrigAuthGrp {
	OrigAthNtwkID?: string;
	OrigAuthID?: string;
	OrigDebitTraceNum?: string;
	OrigLocalDateTime?: string;
	OrigRespCode?: string;
	OrigResponseDate?: string;
	OrigSTAN?: string;
	OrigTranDateTime?: string;
}

interface OTCGrp {
	OTCMrktBsktData?: string;
	OTCTranCode?: OTCTranCodeType;
	OTCUniqueId?: string;
}

export type OTCTranCodeType = ("BalanceLookup" | "ItemQualification" | "LimitedSpend" | "LimitedSpendRefund");

interface OTRFuelLimitGrp {
	OTRFuelAmtLimit?: string;
	OTRFuelProdCode?: string;
}

export type OTRProdCatType = ("ADD" | "ANFR" | "BRAK" | "CADV" | "CLTH" | "DEF" | "DELI" | "ELEC" | "ETAX" | "FAX" | "FLAT" | "GROC" | "HARD" | "IDLE" | "LMPR" | "LUBE" | "MERC" | "OIL" | "OILC" | "PADV" | "PART" | "PHON" | "PNT" | "RECP" | "REPR" | "REST" | "SCAN" | "SCLE" | "SHWR" | "TCHN" | "TIRE" | "TOLL" | "TRAL" | "TRPP" | "UREA" | "WASH" | "WWFL");

interface OTRProdDetGrp {
	OTRProdAmt?: string;
	OTRProdAmtLimit?: string;
	OTRProdCat?: OTRProdCatType;
	OTRProdQty?: string;
}

interface OTRPromptGrp {
	OTRPromptFormat?: string;
	OTRPromptName?: OTRPromptNameType;
	OTRPromptValue?: string;
}

export type OTRPromptNameType = ("BDAY" | "BLID" | "CNTN" | "DLIC" | "DLST" | "DRID" | "DTKT" | "FSTI" | "HBRD" | "HRRD" | "LCST" | "LICN" | "LSTN" | "NAME" | "ODRD" | "PONB" | "PPIN" | "RTMP" | "SSUB" | "TRIP" | "TRLR" | "UNIT" | "VEHN");

export type PartAuthrztnApprvlCapabltType = ("0" | "1");

export type PartShipIndType = "Partial";

interface PFGrp {
	PFInd?: PFIndType;
	PFPhoneNumber?: string;
	SellerID?: string;
	SubMerchID?: string;
}

export type PFIndType = "Y";

interface PINGrp {
	KeyMgtData?: string;
	KeyOffset?: string;
	KeySerialNumData?: string;
	MSKeyID?: string;
	PINData?: string;
}

interface PinlessDebitRequestDetails {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DebitGrp?: DebitGrp;
	EcommGrp?: EcommGrp;
	FraudMitGrp?: FraudMitGrp;
	OrderGrp?: OrderGrp;
	PFGrp?: PFGrp;
	TAGrp?: TAGrp;
}

interface PinlessDebitResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	DebitGrp?: DebitGrp;
	FileDLGrp?: FileDLGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

export type PLPOSDebitFlgType = ("1" | "C" | "D");

export type PmntTypeIdType = ("P2P" | "P2PBankInit" | "P2PCard" | "MerchDisb" | "GovDisb" | "FundsDisb" | "OLGambling" | "WltTrnsfr" | "LoyaltyOfrs" | "GamblingPay" | "B2B" | "PayrollDisb" | "MerchInitMT" | "MerchInstFund" | "A2A" | "TopUp" | "FundsTrnsfr" | "AgentCashOut" | "CCBillPay" | "Cash2ATM" | "Cash2Card" | "CashDeposit" | "Transfer2Card");

export type POSCondCodeType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "08" | "59" | "71");

export type POSEntryModeChgType = "Y";

export type POSEntryModeType = string;

interface PreNetRtGrp {
	PreNetRtID?: string[];
}

interface PrepaidRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	FraudMitGrp?: FraudMitGrp;
	OrigAuthGrp?: OrigAuthGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	ShipGrp?: ShipGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
}

interface PrepaidResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
}

export type PrintIndType = ("Y" | "N");

interface PrivateLabelRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	BillPayGrp?: BillPayGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	FltGrp?: FltGrp;
	LodgingGrp?: LodgingGrp;
	MEXCardGrp?: MEXCardGrp;
	OrigAuthGrp?: OrigAuthGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	PromoGrp?: PromoGrp;
	PrvLblGrp?: PrvLblGrp;
	TAGrp?: TAGrp;
	TknGrp?: TknGrp;
}

interface PrivateLabelResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AmexGrp?: AmexGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	DSGrp?: DSGrp;
	EMVGrp?: EMVGrp;
	FileDLGrp?: FileDLGrp;
	MCGrp?: MCGrp;
	MEXCardGrp?: MEXCardGrp;
	PromoGrp?: PromoGrp;
	PrvLblGrp?: PrvLblGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
	VisaGrp?: VisaGrp;
}

interface ProdCodeDetGrp {
	NACSProdCode?: string;
	ProdAmt?: string;
	Qnty?: string;
	UnitOfMsure?: UnitOfMsureType;
	UnitPrice?: string;
}

interface ProdCodeGrp {
	NumOfProds?: NumOfProdsType;
	ServLvl?: ServLvlType;
}

export type ProgramIDType = ("InComm" | "Solspark" | "Blackhawk" | "NetSpend" | "ConnectPay" | "PayPalVenmoQRC");

export type ProgramIndType = ("1" | "2" | "3" | "4" | "5" | "6");

export type ProgramProtocolType = ("1" | "2");

interface PromoGrp {
	AfterPromoAPR?: string;
	AfterPromoFlag?: string;
	PromoAPR?: string;
	PromoAPRFlag?: string;
	PromoCd?: string;
	PromoDesc?: string;
	PromoDuration?: string;
	PromoPlanCode?: string;
	PromoPlanExpDate?: string;
	SplFinInd?: SplFinIndType;
}

export type PropTknFlgType = "1";

interface PrvLblGrp {
	ActAcctNum?: string;
	ActExpiryDate?: string;
	DSTChlngInpt?: string;
	DSTChlngRsp?: string;
	LgValPrd?: string;
	SpdPssID?: string;
}

interface PurchCardlvl2Grp {
	ComCardType?: ComCardTypeType;
	DestCtryCode?: string;
	DestPostalCode?: string;
	DestStCode?: string;
	DiscntAmt?: string;
	DutyAmt?: string;
	FrghtAmt?: string;
	MerchRefNum?: string;
	MerchTaxID?: string;
	MerchType?: string;
	PC3Add?: string;
	PCOrderNum?: string;
	ProdDesc?: string[];
	PurchIdfr?: string;
	ReqstrAddr?: string;
	ReqstrName?: string;
	ShipFromPostalCode?: string;
	TaxAmt?: string;
	TaxInd?: TaxIndType;
	VATTaxAmt?: string;
	VATTaxRt?: string;
}

interface PurchCardlvl3Grp {
	L3DbCrInd?: L3DbCrIndType;
	L3DiscntAmt?: string;
	L3ExtItemAmt?: string;
	L3ItemCode?: string;
	L3ItemDesc?: string;
	L3ItemQtyExp?: L3ItemQtyExpType;
	L3ItemSeqNum?: string;
	L3ItemTot?: string;
	L3LineItmDtlInd?: L3LineItmDtlIndType;
	L3MerchVATReg?: string;
	L3NatTax?: string;
	L3NatTaxRt?: string;
	L3OtherTaxAmt?: string;
	L3ProdCode?: string;
	L3ProdDesc?: string;
	L3Qty?: string;
	L3SumComCd?: string;
	L3TaxAmount?: string;
	L3TaxAmt?: string;
	L3TaxInd?: L3TaxIndType;
	L3TaxRate?: string;
	L3TaxRt?: string;
	L3TaxRtExp?: L3TaxRtExpType;
	L3TaxTypeApp?: string;
	L3TaxTypeId?: L3TaxTypeIdType;
	L3UnitCost?: string;
	L3UnitCostExp?: string;
	L3UnitOfMsure?: string;
}

export type PymntSvcType = "Incrmnt";

export type PymtTypeType = ("AltCNP" | "Check" | "Credit" | "Debit" | "EBT" | "Fleet" | "PLDebit" | "Prepaid" | "PvtLabl");

export type QCIType = ("Y" | "N");

export type QntyType = string;

interface RctTxtDetGrp {
	RctTxtData?: string;
}

interface RealTimeAcctUpdGrp {
	AcctUpdCardNum?: string;
	AcctUpdCardStat?: string;
	AcctUpdExpDate?: string;
	AcctUpdReqInd?: AcctUpdReqIndType;
	AcctUpdResultCode?: string;
}

export type ReAuthIndType = "Y";

export type RecvAcctNumTypeType = ("Other" | "RTNBAN" | "IBAN" | "CardAcct" | "Email" | "Phone" | "BANBIC" | "WalletID" | "SocialNetID");

export type RecvIDSubtypeType = ("Business" | "Individual");

export type RecvIDTypeType = ("BTHD" | "CUID" | "NTID" | "PASN" | "DRLN" | "TXIN" | "CPNY" | "PRXY" | "SSNB" | "ARNB" | "LAWE" | "MILI" | "TRVL" | "EMAL" | "PHON");

export type RefundTypeType = ("Online" | "AuthOnly");

export type RegUserIndType = ("Y" | "N");

interface RejectResponseDetails {
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
}

export type ReloadTypeType = ("PinOnRecpt" | "TopUp");

export type RentalExtraChrgsType = string;

export type RentalTaxIndType = ("0" | "1");

export type ReqFBMaxSizeType = string;

interface RespGrp {
	AddtlRespData?: string;
	AssocRespCode?: string;
	AthNtwkID?: string;
	AthNtwkNm?: string;
	AthNtwkTrcID?: string;
	AuthID?: string;
	CategoryCode?: string;
	DebitTraceNum?: string;
	ErrorData?: string;
	PrintData?: string;
	RespCode?: string;
	ResponseDate?: string;
	RtInd?: string;
	SettlementTxnType?: string;
	SigInd?: string;
	SttlmDate?: string;
}

interface RestGrp {
	BevgAmt?: string;
	FoodAmt?: string;
	RestTaxAmt?: string;
	ServerID?: string;
	TipAmt?: string;
}

export type ReversalIndType = ("Timeout" | "Void" | "VoidFr" | "TORVoid" | "Partial" | "EditErr" | "MACVeri" | "MACSync" | "EncrErr" | "SystErr");

export type RPSType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");

export type RtFallbackIndType = "No";

export type SAACIType = "I";

export type SafekeyType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "I" | "U");

interface SAGrp {
	SAACI?: SAACIType;
	SACondCode?: string;
	SAEntryMode?: string;
	SAMrktSpecificDataInd?: string;
	SARRN?: string;
	SASysTrace?: string;
	SATranSeq?: string;
}

export type SctyLvlType = ("Tknizatn" | "EncrptTknizatn");

export type SecDataDowngradeType = ("SecDataMissing" | "SecDataInvalid");

interface SecrTxnGrp {
	AmexSecrAD?: string;
	AmexXID?: string;
	AuthOutExInd?: string;
	CAVVResultCode?: string;
	DAFInd?: string;
	DelegAuthInd?: Max3ANYesNo;
	DirServerTransID?: string;
	DiscAuthType?: DiscAuthTypeType;
	DiscSecData?: string;
	ExReasonCode?: string;
	LowValExInd?: Max3ANYesNo;
	MCSecrAD?: string;
	MerchantAuthentID?: string;
	MexVisaSecrTxnAD?: string;
	MexVisaXID?: string;
	ProgramProtocol?: ProgramProtocolType;
	RecPayExInd?: Max3ANYesNo;
	RmtCommAcptrId?: string;
	Safekey?: SafekeyType;
	SecDataDowngrade?: SecDataDowngradeType;
	SecrCorpExInd?: Max3ANYesNo;
	TAVVResultCode?: TAVVResultCodeType;
	TknAVD?: string;
	TranRiskAnaExInd?: Max3ANYesNo;
	TrustMerchExInd?: Max3ANYesNo;
	UCAFCollectInd?: UCAFCollectIndType;
	UnionPaySecData?: string;
	VisaSecrTxnAD?: string;
	VisaXID?: string;
}

export type SendAcctNumTypeType = ("Other" | "RTNBAN" | "IBAN" | "CardAcct" | "Email" | "Phone" | "BANBIC" | "WalletID" | "SocialNetID");

export type SendIDSubtypeType = ("Business" | "Individual");

export type SendIDTypeType = ("BTHD" | "CUID" | "NTID" | "PASN" | "DRLN" | "TXIN" | "CPNY" | "PRXY" | "SSNB" | "ARNB" | "LAWE" | "MILI" | "TRVL" | "EMAL" | "PHON");

export type ServLvlType = ("F" | "S" | "N" | "X" | "O" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");

export type SettleIndType = ("1" | "2" | "3");

export type SettleTxnTypeType = ("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14");

interface ShipGrp {
	DelivType?: DelivTypeType;
	ShippingCarrier?: ShippingCarrierType;
	ShippingMthd?: ShippingMthdType;
	ShipToAddr1?: string;
	ShipToAddr2?: string;
	ShipToCity?: string;
	ShipToCtry?: string;
	ShipToFirstNm?: string;
	ShipToLastNm?: string;
	ShipToPostalCode?: string;
	ShipToState?: string;
	ShipToTelNum?: string;
	ShipToTelType?: ShipToTelTypeType;
}

export type ShippingCarrierType = ("DHL" | "FedEx" | "Greyhound" | "Other" | "Purolator" | "USPS" | "UPS");

export type ShippingMthdType = ("C" | "D" | "E" | "G" | "I" | "M" | "N" | "O" | "P" | "S" | "T" | "W");

export type ShipToTelTypeType = ("D" | "H" | "N" | "W");

export type SiteTypeIndType = ("Commercial" | "Retail");

export type SplFinIndType = ("00" | "01" | "02" | "08");

export type StateCodeType = ("AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "MY" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY");

export type StoredCrdIndType = ("Initial" | "Subsequent");

export type StoredCrdnIndType = ("Initial" | "Subsequent");

export type StoredCredenIndType = ("Initial" | "Subsequent");

export type StoredCredIndType = ("Initial" | "Subsequent");

interface StoredValueGrp {
	CardClass?: string;
	CardCost?: string;
	EAN?: string;
	EschtblTxn?: EschtblTxnType;
	FACode?: string;
	FrstTrnNum?: string;
	PostDate?: string;
	PromoCode?: string;
	SCV?: string;
	SVActType?: SVActTypeType;
	TxnCnt?: string;
	TxnHstDtl?: string;
	TxnRtn?: string;
}

export type SubFileTypeType = ("BIN" | "RULES" | "RESTRCTION" | "SAF" | "PROMPT" | "PRODUCT");

export type SVActTypeType = ("C" | "F" | "P" | "S" | "V");

interface TAGrp {
	AcctUpdTkn?: string;
	CAKeyID?: string;
	DeviceType?: string;
	EncrptBlock?: string;
	EncrptTrgt?: EncrptTrgtType;
	EncrptType?: EncrptTypeType;
	KeyID?: string;
	PublicKey?: string;
	SctyKeyUpdInd?: string;
	SctyLvl?: SctyLvlType;
	TAExpDate?: string;
	TASctyKey?: string;
	Tkn?: string;
	TknType?: string;
}

interface TARequestDetails {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	TAGrp?: TAGrp;
}

interface TAResponseDetails {
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}

export type TAVVResultCodeType = ("1" | "2" | "3" | "4");

export type TaxAmtCapabltType = ("0" | "1" | "VB" | "VC" | "VP" | "TX" | "NA");

export type TaxIndType = ("0" | "1" | "2");

interface TCNFTFGrp {
	NFTFAccNum?: string;
	NFTFACHStat?: NFTFACHStatType;
	NFTFBnkRtNum?: string;
	NFTFChkNum?: string;
	NFTFChkType?: NFTFChkTypeType;
	NFTFDelShpExp?: string;
	NFTFDelShpId?: string;
	NFTFDenRecNum?: string;
	NFTFGftCrdAmt?: string;
	NFTFMICRData?: string;
	NFTFMobDevID?: string;
	NFTFPreFlag?: NFTFPreFlagType;
	NFTFPrimID?: string;
	NFTFPrimIDType?: NFTFPrimIDTypeType;
	NFTFProdCode?: string;
	NFTFRegDate?: string;
	NFTFRegNum?: string;
	NFTFRelType?: NFTFRelTypeType;
	NFTFSecID?: string;
	NFTFSecIDType?: NFTFSecIDTypeType;
	NFTFSesID?: string;
	NFTFTermID?: string;
	NFTFTraceId?: string;
	NFTFVIPInd?: NFTFVIPIndType;
}

interface TeleCheckECAGrp {
	ChkType?: ChkTypeType;
	DnlRecNum?: string;
	ECABCN?: string;
	ECAPhnNum?: string;
	ECAProdCd?: string;
	ECAStatus?: ECAStatusType;
	ECATrcID?: string;
	RespChkNum?: string;
	RetChkFee?: string;
	RetChkNote?: string;
}

export type TermCatCodeType = ("00" | "01" | "05" | "06" | "07" | "08" | "09" | "12" | "13" | "17" | "18");

export type TermClassCodeType = ("mPOSCon" | "mPOSSPoCPIN" | "mPOSCPoCNoPIN" | "mPOSCPoCPIN");

export type TermEntryCapabltType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13");

export type TermLocIndType = ("0" | "1");

interface TknGrp {
	AddTknRespInfo?: AddTknRespInfoType;
	PropTknFlg?: PropTknFlgType;
	PymtTknExpDate?: string;
	PymtTknReqInd?: Max3ANYes;
	PymtTknValue?: string;
	TknAuthInd?: string;
	TknBlkA?: string;
	TknBlkB?: string;
	TknLstFour?: string;
	TknLvl?: string;
	TknReqID?: string;
}

interface TLGrp {
	TLCardType?: string;
}

export type TotReqDateType = ("ShiftRPT" | "CloseBatch" | "CurDayRPT" | "PrevDayRPT" | "3rdDayRPT" | "CloseShift" | "SiteCurDay" | "SitePrvDay" | "Site3rdDay" | "SettleDate");

export type TptModeIndType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22");

export type TraAcsTermFunCodeType = ("190" | "191" | "194" | "196");

export type TranInitType = ("Merchant" | "Terminal" | "Customer");

export type TranIntgClassType = ("Checkout" | "Digital" | "EMV" | "Enhanced" | "Generic" | "Keyed" | "Swiped" | "Token" | "Unknown" | "UnknownCNP" | "Validated");

export type TranPurposeType = ("RefundOrig" | "RefundNew");

interface TransitGrp {
	ATCUpdInd?: Max3ANYes;
	ExPayTranslPAN?: string;
	TptModeInd?: TptModeIndType;
	TraAcsTermFunCode?: TraAcsTermFunCodeType;
	TraAcsTermInd?: Max3ANYes;
	TraTranTypeInd?: TraTranTypeIndType;
}

export type TraTranTypeIndType = ("01" | "02" | "03" | "04" | "05" | "06" | "07");

export type TxnTypeType = ("Activation" | "Authorization" | "BalanceInquiry" | "BalanceLock" | "BatchSettleDetail" | "BatchSettleL3" | "CanadaKeyRequest" | "CancelDeferredAuth" | "CashAdvance" | "Cashout" | "CashoutActiveStatus" | "Change" | "CloseBatch" | "Completion" | "Custom" | "DisableInternetUse" | "EchoTest" | "EncryptionKeyRequest" | "FileDownload" | "FraudScore" | "GenerateKey" | "History" | "HostTotals" | "InternetActivation" | "Load" | "OpenBatch" | "PCL3AddDetail" | "Redemption" | "RedemptionUnlock" | "Refund" | "Reload" | "Sale" | "TACertAuthority" | "TAKeyRequest" | "TATokenRequest" | "Verification" | "VoucherClear");

export type UCAFCollectIndType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8");

interface UnionPayGrp {
	AcctType?: AcctTypeType;
}

export type UnitOfMsureType = ("C" | "G" | "K" | "L" | "P" | "Q" | "U" | "Z" | "O" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");

export type UnitPriceType = string;

export type UPCPLUIndType = ("0" | "1");

export type VisaAuthIndType = ("ReAuth" | "ReSubmit" | "EstAuth" | "CrdOnFile");

interface VisaGrp {
	ACI?: string;
	CardLevelResult?: string;
	CheckoutInd?: CheckoutIndType;
	CofSchedInd?: CofSchedIndType;
	CryptoCrncyPurchInd?: Max3ANYes;
	ExistingDebtInd?: ExistingDebtIndType;
	MrktSpecificDataInd?: MrktSpecificDataIndType;
	QCI?: QCIType;
	SourceReasonCode?: string;
	SpendQInd?: string;
	StoredCredInd?: StoredCredIndType;
	TaxAmtCapablt?: TaxAmtCapabltType;
	TransID?: string;
	VisaAUAR?: string[];
	VisaAuthInd?: VisaAuthIndType;
	VisaBID?: string[];
}

interface VoidTOReversalRequestDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	AmexGrp?: AmexGrp;
	AutoRentalGrp?: AutoRentalGrp;
	BillPayGrp?: BillPayGrp;
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CheckGrp?: CheckGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DCCGrp?: DCCGrp;
	DebitGrp?: DebitGrp;
	DebtRepayGrp?: DebtRepayGrp;
	DSGrp?: DSGrp;
	EbtGrp?: EbtGrp;
	EcommGrp?: EcommGrp;
	EMVGrp?: EMVGrp;
	EWICDetGrp?: EWICDetGrp[];
	FltGrp?: FltGrp;
	InstallPaySvcGrp?: InstallPaySvcGrp;
	LodgingGrp?: LodgingGrp;
	MCGrp?: MCGrp;
	MEXCardGrp?: MEXCardGrp;
	MnySndGrp?: MnySndGrp;
	OrderGrp?: OrderGrp;
	OrigAuthGrp?: OrigAuthGrp;
	OTCGrp?: OTCGrp;
	OTRProdDetGrp?: OTRProdDetGrp[];
	OTRPromptGrp?: OTRPromptGrp[];
	PFGrp?: PFGrp;
	PINGrp?: PINGrp;
	ProdCodeDetGrp?: ProdCodeDetGrp[];
	ProdCodeGrp?: ProdCodeGrp;
	PrvLblGrp?: PrvLblGrp;
	PurchCardlvl2Grp?: PurchCardlvl2Grp;
	PurchCardlvl3Grp?: PurchCardlvl3Grp[];
	RestGrp?: RestGrp;
	SAGrp?: SAGrp;
	SecrTxnGrp?: SecrTxnGrp;
	ShipGrp?: ShipGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
	TCNFTFGrp?: TCNFTFGrp;
	TeleCheckECAGrp?: TeleCheckECAGrp;
	TknGrp?: TknGrp;
	TransitGrp?: TransitGrp;
	UnionPayGrp?: UnionPayGrp;
	VisaGrp?: VisaGrp;
	WexOTRGrp?: WexOTRGrp;
}

interface VoidTOReversalResponseDetails {
	AddtlAmtGrp?: AddtlAmtGrp[];
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	AmexGrp?: AmexGrp;
	CanDebitGrp?: CanDebitGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	DebitGrp?: DebitGrp;
	DSGrp?: DSGrp;
	EbtGrp?: EbtGrp[];
	EMVGrp?: EMVGrp;
	EWICDetGrp?: EWICDetGrp[];
	FileDLGrp?: FileDLGrp;
	FltGrp?: FltGrp;
	LodgingGrp?: LodgingGrp;
	MCGrp?: MCGrp;
	OrderGrp?: OrderGrp;
	OrigAuthGrp?: OrigAuthGrp;
	OTCGrp?: OTCGrp;
	PrvLblGrp?: PrvLblGrp;
	PurchCardlvl2Grp?: PurchCardlvl2Grp;
	RespGrp?: RespGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
	TCNFTFGrp?: TCNFTFGrp;
	TeleCheckECAGrp?: TeleCheckECAGrp;
	TknGrp?: TknGrp;
	VisaGrp?: VisaGrp;
	WexOTRGrp?: WexOTRGrp;
}

interface WexOTRGrp {
	CashAdvLimit?: string;
	CustAcctCode?: string;
	CustCity?: string;
	CustName?: string;
	CustState?: StateCodeType;
	MnyCode?: string;
	MnyCodeChkNum?: string;
	MnyCodePayeeName?: string;
	SiteTypeInd?: SiteTypeIndType;
	WexOTRSetInd?: string;
}
