import * as Primitive from '../../../xml-primitives';

// Source files:
// http://127.0.0.1:8080/gmfV12.04.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export type AcctTypeType = ("Debit" | "Credit");
interface _AcctTypeType extends _Max6AN { content: AcctTypeType; }

export type AcctUpdReqIndType = ("Yes" | "Info");
interface _AcctUpdReqIndType extends _Max4AN { content: AcctUpdReqIndType; }

export type AddAmtTypeType = ("Cashback" | "Surchrg" | "Hltcare" | "Transit" | "RX" | "Vision" | "Clinical" | "Dental" | "Copay" | "FirstAuthAmt" | "PreAuthAmt" | "TotalAuthAmt" | "Tax" | "Fee" | "BegBal" | "EndingBal" | "AvailBal" | "LedgerBal" | "HoldBal" | "OrigReqAmt" | "OpenToBuy" | "Fuel" | "Service" | "eWICDiscount" | "TranFee" | "OTCReqAmt" | "FdReqAmt" | "AggDisAmt" | "OtherAmt" | "OTCApvAmt" | "FdApvAmt" | "TipAmt");
interface _AddAmtTypeType extends _Max12AN { content: AddAmtTypeType; }

export type AddChgIndType = "Y";
interface _AddChgIndType extends _Len1AN { content: AddChgIndType; }

export type AddTknRespInfoType = "1";
interface _AddTknRespInfoType extends _Len1AN { content: AddTknRespInfoType; }

interface _AddtlAmtGrp extends BaseType {
	AddAmt?: string;
	AddAmtAcctType?: string;
	AddAmtCrncy?: string;
	AddAmtType?: AddAmtTypeType;
	HoldInfo?: string;
	PartAuthrztnApprvlCapablt?: PartAuthrztnApprvlCapabltType;
}
export interface AddtlAmtGrp extends _AddtlAmtGrp { constructor: { new(): AddtlAmtGrp }; }
export var AddtlAmtGrp: { new(): AddtlAmtGrp };

interface _AdminRequestDetails extends BaseType {
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
export interface AdminRequestDetails extends _AdminRequestDetails { constructor: { new(): AdminRequestDetails }; }
export var AdminRequestDetails: { new(): AdminRequestDetails };

interface _AdminResponseDetails extends BaseType {
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
export interface AdminResponseDetails extends _AdminResponseDetails { constructor: { new(): AdminResponseDetails }; }
export var AdminResponseDetails: { new(): AdminResponseDetails };

interface _AltCNPRequestDetails extends BaseType {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	CustInfoGrp?: CustInfoGrp;
	EcommGrp?: EcommGrp;
	FraudMitGrp?: FraudMitGrp;
	ShipGrp?: ShipGrp;
	TAGrp?: TAGrp;
}
export interface AltCNPRequestDetails extends _AltCNPRequestDetails { constructor: { new(): AltCNPRequestDetails }; }
export var AltCNPRequestDetails: { new(): AltCNPRequestDetails };

interface _AltCNPResponseDetails extends BaseType {
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}
export interface AltCNPResponseDetails extends _AltCNPResponseDetails { constructor: { new(): AltCNPResponseDetails }; }
export var AltCNPResponseDetails: { new(): AltCNPResponseDetails };

interface _AltMerchNameAndAddrGrp extends BaseType {
	MerchAddr?: string;
	MerchCity?: string;
	MerchCnty?: string;
	MerchCtry?: string;
	MerchEmail?: string;
	MerchName?: string;
	MerchPostalCode?: string;
	MerchState?: string;
}
export interface AltMerchNameAndAddrGrp extends _AltMerchNameAndAddrGrp { constructor: { new(): AltMerchNameAndAddrGrp }; }
export var AltMerchNameAndAddrGrp: { new(): AltMerchNameAndAddrGrp };

export type AmexAuthIndType = "CrdOnFile";
interface _AmexAuthIndType extends _Max9AN { content: AmexAuthIndType; }

interface _AmexGrp extends BaseType {
	AmexAuthInd?: AmexAuthIndType;
	AmExPOSData?: string;
	AmExTranID?: string;
	GdSoldCd?: GdSoldCdType;
	ReAuthInd?: ReAuthIndType;
	StoredCrdInd?: StoredCrdIndType;
}
export interface AmexGrp extends _AmexGrp { constructor: { new(): AmexGrp }; }
export var AmexGrp: { new(): AmexGrp };

interface _AuthOptGrp extends BaseType {
	AuthOptReasonCode?: string;
	DfrdAuthTranID?: string;
	MerchInitAcctUpdReqInd?: Max3ANYes;
	OverrideInd?: Max3ANYesNo;
}
export interface AuthOptGrp extends _AuthOptGrp { constructor: { new(): AuthOptGrp }; }
export var AuthOptGrp: { new(): AuthOptGrp };

export type AutoNoShowType = "1";
interface _AutoNoShowType extends _Len1AN { content: AutoNoShowType; }

interface _AutoRentalGrp extends BaseType {
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
export interface AutoRentalGrp extends _AutoRentalGrp { constructor: { new(): AutoRentalGrp }; }
export var AutoRentalGrp: { new(): AutoRentalGrp };

export type BatchCtType = number;
type _BatchCtType = Primitive._number;

interface _BatchGrp extends BaseType {
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
export interface BatchGrp extends _BatchGrp { constructor: { new(): BatchGrp }; }
export var BatchGrp: { new(): BatchGrp };

interface _BatchRequestDetails extends BaseType {
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
export interface BatchRequestDetails extends _BatchRequestDetails { constructor: { new(): BatchRequestDetails }; }
export var BatchRequestDetails: { new(): BatchRequestDetails };

interface _BatchResponseDetails extends BaseType {
	BatchGrp?: BatchGrp;
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}
export interface BatchResponseDetails extends _BatchResponseDetails { constructor: { new(): BatchResponseDetails }; }
export var BatchResponseDetails: { new(): BatchResponseDetails };

export type BatchSeqNumType = number;
type _BatchSeqNumType = Primitive._number;

interface _BillPayGrp extends BaseType {
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
export interface BillPayGrp extends _BillPayGrp { constructor: { new(): BillPayGrp }; }
export var BillPayGrp: { new(): BillPayGrp };

export type BillPymtTxnIndType = ("Single" | "Recurring" | "Installment" | "Deferred");
interface _BillPymtTxnIndType extends _Max12AN { content: BillPymtTxnIndType; }

export type BusPymtTypeType = ("ConsrBillPay" | "InstallRepay");
interface _BusPymtTypeType extends _Max12AN { content: BusPymtTypeType; }

interface _CanDebitGrp extends BaseType {
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
export interface CanDebitGrp extends _CanDebitGrp { constructor: { new(): CanDebitGrp }; }
export var CanDebitGrp: { new(): CanDebitGrp };

export type CanDebitTransCodeType = ("KeyRequest" | "Saving" | "Checking" | "RefundSaving" | "RefundChecking" | "AdjRefundSaving" | "AdjRefundChecking" | "AdjSaving" | "AdjChecking");
interface _CanDebitTransCodeType extends _Max17AN { content: CanDebitTransCodeType; }

export type CardCaptCapType = ("0" | "1");
interface _CardCaptCapType extends _Len1Num { content: CardCaptCapType; }

interface _CardGrp extends BaseType {
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
export interface CardGrp extends _CardGrp { constructor: { new(): CardGrp }; }
export var CardGrp: { new(): CardGrp };

interface _CardInfoRespGrp extends BaseType {
	CardBrnd?: string;
	CardInd?: string;
	DetProdID?: string;
	IssBank?: string;
	IssCtryCode?: string;
}
export interface CardInfoRespGrp extends _CardInfoRespGrp { constructor: { new(): CardInfoRespGrp }; }
export var CardInfoRespGrp: { new(): CardInfoRespGrp };

export type CardSeqNumType = string;
type _CardSeqNumType = _Len3Num;

export type CardTagType = ("CC" | "TE" | "DS" | "AO" | "DB" | "FL" | "CS" | "PR" | "CK" | "EF" | "EC" | "SV1" | "SV2" | "SV3" | "SV4" | "ECA" | "WIC" | "EK" | "MC" | "VS" | "AMX" | "DIS" | "DBC" | "PPD" | "PP1" | "PP3" | "PP4" | "SP" | "HD");
interface _CardTagType extends _Max3AN { content: CardTagType; }

export type CardTypeType = ("Amex" | "Diners" | "Discover" | "JCB" | "MaestroInt" | "MasterCard" | "Visa" | "GiftCard" | "PPayCL" | "CarCareOne" | "CostPlus" | "Dicks" | "Exxon" | "GenProp" | "Gulf" | "Shell" | "Sinclair" | "SpeedPass" | "Sunoco" | "ValeroUCC" | "Mexican" | "BPBusiness" | "EssoFleet" | "ExxonFleet" | "FleetCor" | "FleetOne" | "MCFleet" | "UnionPay" | "ValeroFlt" | "VisaFleet" | "Voyager" | "Wex" | "Paypal" | "NGFC" | "WexOTR" | "Comdata");
interface _CardTypeType extends _Max10AN { content: CardTypeType; }

export type CCVErrorCodeType = "Y";
interface _CCVErrorCodeType extends _Len1AN { content: CCVErrorCodeType; }

export type CCVIndType = ("Ntprvd" | "Prvded" | "Illegible" | "NtOnCrd");
interface _CCVIndType extends _Max12AN { content: CCVIndType; }

export type CCVResultCodeType = ("Match" | "NoMtch" | "NotPrc" | "NotPrv" | "NotPrt" | "Unknwn");
interface _CCVResultCodeType extends _Max6AN { content: CCVResultCodeType; }

interface _CheckGrp extends BaseType {
	ChkEntryMethod?: ChkEntryMethodType;
	ChkSvcPvdr?: ChkSvcPvdrType;
	DLDateOfBirth?: string;
	DrvLic?: string;
	MICR?: string;
	StateCode?: string;
}
export interface CheckGrp extends _CheckGrp { constructor: { new(): CheckGrp }; }
export var CheckGrp: { new(): CheckGrp };

export type CheckoutIndType = "Y";
interface _CheckoutIndType extends _Len1AN { content: CheckoutIndType; }

interface _CheckRequestDetails extends BaseType {
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
export interface CheckRequestDetails extends _CheckRequestDetails { constructor: { new(): CheckRequestDetails }; }
export var CheckRequestDetails: { new(): CheckRequestDetails };

interface _CheckResponseDetails extends BaseType {
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
export interface CheckResponseDetails extends _CheckResponseDetails { constructor: { new(): CheckResponseDetails }; }
export var CheckResponseDetails: { new(): CheckResponseDetails };

export type CHFullNmResType = ("M" | "F" | "L" | "N" | "W" | "U" | "P" | "K" | "B" | "A" | "R" | "O" | "S");
interface _CHFullNmResType extends _Len1AN { content: CHFullNmResType; }

export type CHIDMethodType = ("MOTO" | "PIN" | "QuickServ" | "Signature" | "Unknwn");
interface _CHIDMethodType extends _Max10AN { content: CHIDMethodType; }

export type ChkEntryMethodType = ("1" | "2" | "3" | "4" | "5");
interface _ChkEntryMethodType extends _Len1AN { content: ChkEntryMethodType; }

export type ChkSvcPvdrType = ("TeleCheck" | "TeleCheckECA" | "TeleCheckICA" | "TeleCheckCBP" | "TeleCheckPPD" | "Certegy" | "MoneyCode" | "ExpressCode" | "ComCheck");
interface _ChkSvcPvdrType extends _Max12AN { content: ChkSvcPvdrType; }

export type ChkTypeType = ("P" | "C");
interface _ChkTypeType extends _Len1Alpha { content: ChkTypeType; }

export type CITMITFrameIndType = ("C101" | "C102" | "C103" | "C104" | "M101" | "M102" | "M103" | "M104" | "M205" | "M206" | "M207" | "M208");
interface _CITMITFrameIndType extends _Len4AN { content: CITMITFrameIndType; }

export type CofSchdIndType = ("Scheduled" | "Unscheduled");
interface _CofSchdIndType extends _Max11AN { content: CofSchdIndType; }

export type CofSchedIndType = ("Scheduled" | "Unscheduled");
interface _CofSchedIndType extends _Max11AN { content: CofSchedIndType; }

export type CofSchIndType = ("Scheduled" | "Unscheduled");
interface _CofSchIndType extends _Max11AN { content: CofSchIndType; }

export type ComCardTypeType = ("01" | "02" | "03" | "04");
interface _ComCardTypeType extends _Len2AN { content: ComCardTypeType; }

interface _CommonGrp extends BaseType {
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
export interface CommonGrp extends _CommonGrp { constructor: { new(): CommonGrp }; }
export var CommonGrp: { new(): CommonGrp };

interface _CreditRequestDetails extends BaseType {
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
export interface CreditRequestDetails extends _CreditRequestDetails { constructor: { new(): CreditRequestDetails }; }
export var CreditRequestDetails: { new(): CreditRequestDetails };

interface _CreditResponseDetails extends BaseType {
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
export interface CreditResponseDetails extends _CreditResponseDetails { constructor: { new(): CreditResponseDetails }; }
export var CreditResponseDetails: { new(): CreditResponseDetails };

interface _CustInfoGrp extends BaseType {
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
export interface CustInfoGrp extends _CustInfoGrp { constructor: { new(): CustInfoGrp }; }
export var CustInfoGrp: { new(): CustInfoGrp };

export type CustMatIndType = "Y";
interface _CustMatIndType extends _Len1AN { content: CustMatIndType; }

export type CustTelTypeType = ("D" | "H" | "N" | "W");
interface _CustTelTypeType extends _Len1AN { content: CustTelTypeType; }

export type DbAuthIndType = "CrdOnFile";
interface _DbAuthIndType extends _Max9AN { content: DbAuthIndType; }

export type DbStoredCrdnIndType = ("Initial" | "Subsequent");
interface _DbStoredCrdnIndType extends _Max10AN { content: DbStoredCrdnIndType; }

interface _DCCGrp extends BaseType {
	DCCAmt?: string;
	DCCCrncy?: string;
	DCCInd?: DCCIndType;
	DCCRate?: string;
	DCCTimeZn?: string;
}
export interface DCCGrp extends _DCCGrp { constructor: { new(): DCCGrp }; }
export var DCCGrp: { new(): DCCGrp };

export type DCCIndType = ("1" | "2" | "3");
interface _DCCIndType extends _Len1AN { content: DCCIndType; }

export type DCCTimeZnType = string;
type _DCCTimeZnType = Primitive._string;

interface _DebitGrp extends BaseType {
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
export interface DebitGrp extends _DebitGrp { constructor: { new(): DebitGrp }; }
export var DebitGrp: { new(): DebitGrp };

interface _DebitRequestDetails extends BaseType {
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
export interface DebitRequestDetails extends _DebitRequestDetails { constructor: { new(): DebitRequestDetails }; }
export var DebitRequestDetails: { new(): DebitRequestDetails };

interface _DebitResponseDetails extends BaseType {
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
export interface DebitResponseDetails extends _DebitResponseDetails { constructor: { new(): DebitResponseDetails }; }
export var DebitResponseDetails: { new(): DebitResponseDetails };

interface _DebtRepayGrp extends BaseType {
	RcptAcctNum?: string;
	RcptDateOfBirth?: string;
	RcptLastNm?: string;
	RcptPostalCode?: string;
}
export interface DebtRepayGrp extends _DebtRepayGrp { constructor: { new(): DebtRepayGrp }; }
export var DebtRepayGrp: { new(): DebtRepayGrp };

export type DelChargeIndType = "DelChrg";
interface _DelChargeIndType extends _Len7AN { content: DelChargeIndType; }

export type DelChrgIndType = "DelChrg";
interface _DelChrgIndType extends _Len7AN { content: DelChrgIndType; }

export type DelivTypeType = ("CNC" | "DIG" | "PHY" | "SVC" | "TBD");
interface _DelivTypeType extends _Len3AN { content: DelivTypeType; }

export type DfrdPymtMonthsType = number;
type _DfrdPymtMonthsType = Primitive._number;

export type DfrdPymtPlanType = ("NoInterest" | "Interest" | "PayLater");
interface _DfrdPymtPlanType extends _Max10AN { content: DfrdPymtPlanType; }

export type DigWltIndType = ("Staged" | "Passthru");
interface _DigWltIndType extends _Max8AN { content: DigWltIndType; }

export type DigWltProgTypeType = ("AndroidPay" | "ApplePay" | "MerchToken" | "PayButton" | "SamsungPay" | "ClickToPay");
interface _DigWltProgTypeType extends _Max10AN { content: DigWltProgTypeType; }

export type DiscACIType = "I";
interface _DiscACIType extends _Len1AN { content: DiscACIType; }

export type DiscAuthIndType = ("ReAuth" | "CrdOnFile" | "ReSubmit" | "TraAgg");
interface _DiscAuthIndType extends _Max9AN { content: DiscAuthIndType; }

export type DiscAuthTypeType = ("1" | "2" | "3");
interface _DiscAuthTypeType extends _Max2AN { content: DiscAuthTypeType; }

interface _DSGrp extends BaseType {
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
export interface DSGrp extends _DSGrp { constructor: { new(): DSGrp }; }
export var DSGrp: { new(): DSGrp };

interface _EbtGrp extends BaseType {
	EBTCardSeqNum?: string;
	EBTCaseNum?: string;
	EBTType?: EBTTypeType;
	MerchFNSNum?: string;
	VoucherNum?: string;
}
export interface EbtGrp extends _EbtGrp { constructor: { new(): EbtGrp }; }
export var EbtGrp: { new(): EbtGrp };

interface _EBTRequestDetails extends BaseType {
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
export interface EBTRequestDetails extends _EBTRequestDetails { constructor: { new(): EBTRequestDetails }; }
export var EBTRequestDetails: { new(): EBTRequestDetails };

interface _EBTResponseDetails extends BaseType {
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
export interface EBTResponseDetails extends _EBTResponseDetails { constructor: { new(): EBTResponseDetails }; }
export var EBTResponseDetails: { new(): EBTResponseDetails };

export type EBTTypeType = ("EBTCash" | "SNAP" | "eWIC");
interface _EBTTypeType extends _Max7AN { content: EBTTypeType; }

export type ECAStatusType = ("0" | "1");
interface _ECAStatusType extends _Len1AN { content: ECAStatusType; }

interface _EcommGrp extends BaseType {
	CustSvcPhoneNumber?: string;
	EcommTxnInd?: string;
	EcommURL?: string;
	MCSC?: string;
	MCSN?: string;
	MOTOIndicator?: MOTOIndicatorType;
}
export interface EcommGrp extends _EcommGrp { constructor: { new(): EcommGrp }; }
export var EcommGrp: { new(): EcommGrp };

interface _EMVGrp extends BaseType {
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
export interface EMVGrp extends _EMVGrp { constructor: { new(): EMVGrp }; }
export var EMVGrp: { new(): EMVGrp };

export type EncrptTrgtType = ("Track1" | "Track2" | "BothTracks" | "PAN");
interface _EncrptTrgtType extends _Max10AN { content: EncrptTrgtType; }

export type EncrptTypeType = ("RSA" | "Verifone" | "VSP" | "3DES" | "Onguard" | "AESDUKPT");
interface _EncrptTypeType extends _Max8AN { content: EncrptTypeType; }

interface _EnhdFltGrp extends BaseType {
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
export interface EnhdFltGrp extends _EnhdFltGrp { constructor: { new(): EnhdFltGrp }; }
export var EnhdFltGrp: { new(): EnhdFltGrp };

interface _EnhdFltProdLimitGrp extends BaseType {
	EnhdFltAmtLimit?: string;
	EnhdFltProdCode?: string;
}
export interface EnhdFltProdLimitGrp extends _EnhdFltProdLimitGrp { constructor: { new(): EnhdFltProdLimitGrp }; }
export var EnhdFltProdLimitGrp: { new(): EnhdFltProdLimitGrp };

interface _EnhdFltPromptGrp extends BaseType {
	EnhdFltPromptFormat?: string;
	EnhdFltPromptName?: EnhdFltPromptNameType;
	EnhdFltPromptValue?: string;
}
export interface EnhdFltPromptGrp extends _EnhdFltPromptGrp { constructor: { new(): EnhdFltPromptGrp }; }
export var EnhdFltPromptGrp: { new(): EnhdFltPromptGrp };

export type EnhdFltPromptNameType = ("BDAY" | "BLID" | "DLIC" | "DLST" | "DRID" | "HBRD" | "HRRD" | "INVC" | "PONB" | "TRHB" | "TRIP" | "TRLR" | "UNIT" | "XNID" | "AD1" | "AD2" | "DRI" | "EMP" | "GEN" | "ODM" | "TRL" | "VHI" | "WON");
interface _EnhdFltPromptNameType extends _Max4AN { content: EnhdFltPromptNameType; }

export type EschtblTxnType = ("No" | "Yes");
interface _EschtblTxnType extends _Max3Alpha { content: EschtblTxnType; }

interface _EWICBalInfoGrp extends BaseType {
	PBCatCd?: string;
	PBQty?: string;
	PBSubCatCd?: string;
}
export interface EWICBalInfoGrp extends _EWICBalInfoGrp { constructor: { new(): EWICBalInfoGrp }; }
export var EWICBalInfoGrp: { new(): EWICBalInfoGrp };

interface _EWICDetGrp extends BaseType {
	ActionCd?: string;
	OrigPrice?: string;
	OrigQty?: string;
	UPCPLUData?: string;
	UPCPLUInd?: UPCPLUIndType;
	UPCPrice?: string;
	UPCQty?: string;
}
export interface EWICDetGrp extends _EWICDetGrp { constructor: { new(): EWICDetGrp }; }
export var EWICDetGrp: { new(): EWICDetGrp };

interface _EWICGrp extends BaseType {
	EBenExDt?: string;
}
export interface EWICGrp extends _EWICGrp { constructor: { new(): EWICGrp }; }
export var EWICGrp: { new(): EWICGrp };

export type ExistingDebtIndType = "1";
interface _ExistingDebtIndType extends _Len1AN { content: ExistingDebtIndType; }

export type ExtraChrgsType = string;
type _ExtraChrgsType = Primitive._string;

export type FBSeqType = string;
type _FBSeqType = Primitive._string;

interface _FileDLGrp extends BaseType {
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
export interface FileDLGrp extends _FileDLGrp { constructor: { new(): FileDLGrp }; }
export var FileDLGrp: { new(): FileDLGrp };

export type FileTypeType = ("EMV2KEY" | "MAIL" | "CARDTABLE" | "DYNCRDTBL" | "SITECFG" | "FUELRPT" | "HOSTDISC" | "RECTXT" | "TABLE" | "TERMAIL" | "MEXLOCBIN" | "MEXPVLBIN" | "JAMLOCBIN" | "BHSLOCBIN" | "BRBLOCBIN" | "ECBNLOCBIN" | "FUELPRICE");
interface _FileTypeType extends _Max10AN { content: FileTypeType; }

export type FinAmtIndType = "1";
interface _FinAmtIndType extends _Len1AN { content: FinAmtIndType; }

export type FinAuthIndType = ("0" | "1");
interface _FinAuthIndType extends _Len1Num { content: FinAuthIndType; }

interface _FleetRequestDetails extends BaseType {
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
export interface FleetRequestDetails extends _FleetRequestDetails { constructor: { new(): FleetRequestDetails }; }
export var FleetRequestDetails: { new(): FleetRequestDetails };

interface _FleetResponseDetails extends BaseType {
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
export interface FleetResponseDetails extends _FleetResponseDetails { constructor: { new(): FleetResponseDetails }; }
export var FleetResponseDetails: { new(): FleetResponseDetails };

interface _FltGrp extends BaseType {
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
export interface FltGrp extends _FltGrp { constructor: { new(): FltGrp }; }
export var FltGrp: { new(): FltGrp };

export type FndSrcType = ("Credit" | "Debit" | "Prepaid" | "DepAcct" | "Cash");
interface _FndSrcType extends _Max7AN { content: FndSrcType; }

interface _FraudMitGrp extends BaseType {
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
export interface FraudMitGrp extends _FraudMitGrp { constructor: { new(): FraudMitGrp }; }
export var FraudMitGrp: { new(): FraudMitGrp };

interface _FraudMitRespGrp extends BaseType {
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
export interface FraudMitRespGrp extends _FraudMitRespGrp { constructor: { new(): FraudMitRespGrp }; }
export var FraudMitRespGrp: { new(): FraudMitRespGrp };

export type FrdScoreIndType = "Y";
interface _FrdScoreIndType extends _Len1AN { content: FrdScoreIndType; }

export type FunCodeType = ("R" | "D" | "F" | "U" | "N" | "C" | "L" | "E" | "M" | "P" | "X");
interface _FunCodeType extends _Len1AN { content: FunCodeType; }

export type GdSoldCdType = "1000";
interface _GdSoldCdType extends _Max4AN { content: GdSoldCdType; }

interface _GenPrepaidRequestDetails extends BaseType {
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
export interface GenPrepaidRequestDetails extends _GenPrepaidRequestDetails { constructor: { new(): GenPrepaidRequestDetails }; }
export var GenPrepaidRequestDetails: { new(): GenPrepaidRequestDetails };

interface _GenPrepaidResponseDetails extends BaseType {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	OTCGrp?: OTCGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}
export interface GenPrepaidResponseDetails extends _GenPrepaidResponseDetails { constructor: { new(): GenPrepaidResponseDetails }; }
export var GenPrepaidResponseDetails: { new(): GenPrepaidResponseDetails };

interface _GMFMessageVariants extends BaseType {
	AdminRequest: AdminRequestDetails;
	AdminResponse: AdminResponseDetails;
	AltCNPRequest: AltCNPRequestDetails;
	AltCNPResponse: AltCNPResponseDetails;
	BatchRequest: BatchRequestDetails;
	BatchResponse: BatchResponseDetails;
	CheckRequest: CheckRequestDetails;
	CheckResponse: CheckResponseDetails;
	CreditRequest: CreditRequestDetails;
	CreditResponse: CreditResponseDetails;
	DebitRequest: DebitRequestDetails;
	DebitResponse: DebitResponseDetails;
	EBTRequest: EBTRequestDetails;
	EBTResponse: EBTResponseDetails;
	FleetRequest: FleetRequestDetails;
	FleetResponse: FleetResponseDetails;
	GenPrepaidRequest: GenPrepaidRequestDetails;
	GenPrepaidResponse: GenPrepaidResponseDetails;
	MTRequest: MTRequestDetails;
	MTResponse: MTResponseDetails;
	PinlessDebitRequest: PinlessDebitRequestDetails;
	PinlessDebitResponse: PinlessDebitResponseDetails;
	PrepaidRequest: PrepaidRequestDetails;
	PrepaidResponse: PrepaidResponseDetails;
	PrivateLabelRequest: PrivateLabelRequestDetails;
	PrivateLabelResponse: PrivateLabelResponseDetails;
	RejectResponse: RejectResponseDetails;
	ReversalRequest: VoidTOReversalRequestDetails;
	ReversalResponse: VoidTOReversalResponseDetails;
	TransArmorRequest: TARequestDetails;
	TransArmorResponse: TAResponseDetails;
}
export interface GMFMessageVariants extends _GMFMessageVariants { constructor: { new(): GMFMessageVariants }; }
export var GMFMessageVariants: { new(): GMFMessageVariants };

interface _HostDiscDetGrp extends BaseType {
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
export interface HostDiscDetGrp extends _HostDiscDetGrp { constructor: { new(): HostDiscDetGrp }; }
export var HostDiscDetGrp: { new(): HostDiscDetGrp };

interface _HostTotDetGrp extends BaseType {
	CardTag?: CardTagType;
	CardTxnAmt?: string;
	SumPymtTypeTag?: string;
	TxnCt?: string;
}
export interface HostTotDetGrp extends _HostTotDetGrp { constructor: { new(): HostTotDetGrp }; }
export var HostTotDetGrp: { new(): HostTotDetGrp };

interface _HostTotGrp extends BaseType {
	FeeAmt?: string;
	HTSettleDate?: string;
	NetSettleAmt?: string;
	Password?: string;
	TotReqDate?: TotReqDateType;
}
export interface HostTotGrp extends _HostTotGrp { constructor: { new(): HostTotGrp }; }
export var HostTotGrp: { new(): HostTotGrp };

export type HotelNoShowType = "1";
interface _HotelNoShowType extends _Len1AN { content: HotelNoShowType; }

export type InfoReqIndType = "Y";
interface _InfoReqIndType extends _Len1AN { content: InfoReqIndType; }

export type InstallmentTypeType = ("Merchant" | "ThirdParty" | "Issuer");
interface _InstallmentTypeType extends _Max10AN { content: InstallmentTypeType; }

interface _InstallPaySvcGrp extends BaseType {
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
export interface InstallPaySvcGrp extends _InstallPaySvcGrp { constructor: { new(): InstallPaySvcGrp }; }
export var InstallPaySvcGrp: { new(): InstallPaySvcGrp };

export type InstallPymtOptionsType = ("I" | "F" | "B");
interface _InstallPymtOptionsType extends _Len1AN { content: InstallPymtOptionsType; }

export type InstallTypeType = ("20" | "21" | "22" | "23" | "24");
interface _InstallTypeType extends _Len2Num { content: InstallTypeType; }

export type InstSeqCtType = number;
type _InstSeqCtType = Primitive._number;

export type InstSeqNumType = number;
type _InstSeqNumType = Primitive._number;

export type L3DbCrIndType = ("D" | "C");
interface _L3DbCrIndType extends _Len1AN { content: L3DbCrIndType; }

export type L3ItemQtyExpType = ("0" | "1" | "2" | "3" | "4" | "5");
interface _L3ItemQtyExpType extends _Len1AN { content: L3ItemQtyExpType; }

export type L3LineItmDtlIndType = ("0" | "1");
interface _L3LineItmDtlIndType extends _Len1AN { content: L3LineItmDtlIndType; }

export type L3TaxIndType = ("0" | "1" | "2");
interface _L3TaxIndType extends _Len1AN { content: L3TaxIndType; }

export type L3TaxRtExpType = ("0" | "1" | "2" | "3" | "4" | "5");
interface _L3TaxRtExpType extends _Len1Num { content: L3TaxRtExpType; }

export type L3TaxTypeIdType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13");
interface _L3TaxTypeIdType extends _Len2AN { content: L3TaxTypeIdType; }

export type Len10AN = string;
type _Len10AN = Primitive._string;

export type Len10ANS = string;
type _Len10ANS = Primitive._string;

export type Len10Num = string;
type _Len10Num = Primitive._string;

export type Len11ANS = string;
type _Len11ANS = Primitive._string;

export type Len12AN = string;
type _Len12AN = Primitive._string;

export type Len12HexString = string;
type _Len12HexString = Primitive._string;

export type Len12Num = string;
type _Len12Num = Primitive._string;

export type Len13AN = string;
type _Len13AN = Primitive._string;

export type Len14AN = string;
type _Len14AN = Primitive._string;

export type Len14Num = string;
type _Len14Num = Primitive._string;

export type Len16AN = string;
type _Len16AN = Primitive._string;

export type Len16HexString = string;
type _Len16HexString = Primitive._string;

export type Len19AN = string;
type _Len19AN = Primitive._string;

export type Len1Alpha = string;
type _Len1Alpha = Primitive._string;

export type Len1AN = string;
type _Len1AN = Primitive._string;

export type Len1Num = string;
type _Len1Num = Primitive._string;

export type Len20AN = string;
type _Len20AN = Primitive._string;

export type Len20ANS = string;
type _Len20ANS = Primitive._string;

export type Len20Num = string;
type _Len20Num = Primitive._string;

export type Len28_56Base64String = string;
type _Len28_56Base64String = Primitive._string;

export type Len28Base64String = string;
type _Len28Base64String = Primitive._string;

export type Len2AN = string;
type _Len2AN = Primitive._string;

export type Len2ANS = string;
type _Len2ANS = Primitive._string;

export type Len2Num = string;
type _Len2Num = Primitive._string;

export type Len35AN = string;
type _Len35AN = Primitive._string;

export type Len3Alpha = string;
type _Len3Alpha = Primitive._string;

export type Len3AN = string;
type _Len3AN = Primitive._string;

export type Len3ANS = string;
type _Len3ANS = Primitive._string;

export type Len3Num = string;
type _Len3Num = Primitive._string;

export type Len40HexString = string;
type _Len40HexString = Primitive._string;

export type Len41ANS = string;
type _Len41ANS = Primitive._string;

export type Len4AN = string;
type _Len4AN = Primitive._string;

export type Len4ANS = string;
type _Len4ANS = Primitive._string;

export type Len4HexString = string;
type _Len4HexString = Primitive._string;

export type Len4Num = string;
type _Len4Num = Primitive._string;

export type Len5AN = string;
type _Len5AN = Primitive._string;

export type Len5ANS = string;
type _Len5ANS = Primitive._string;

export type Len5Num = string;
type _Len5Num = Primitive._string;

export type Len60ANS = string;
type _Len60ANS = Primitive._string;

export type Len6AN = string;
type _Len6AN = Primitive._string;

export type Len6Num = string;
type _Len6Num = Primitive._string;

export type Len7AN = string;
type _Len7AN = Primitive._string;

export type Len8AN = string;
type _Len8AN = Primitive._string;

export type Len8ANS = string;
type _Len8ANS = Primitive._string;

export type Len8Num = string;
type _Len8Num = Primitive._string;

export type Len9AN = string;
type _Len9AN = Primitive._string;

export type Len9ANS = string;
type _Len9ANS = Primitive._string;

export type Len9Num = string;
type _Len9Num = Primitive._string;

export type LodChargeTypeType = ("Lodging" | "Restaurant" | "GiftShop");
interface _LodChargeTypeType extends _Max10AN { content: LodChargeTypeType; }

interface _LodgingGrp extends BaseType {
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
export interface LodgingGrp extends _LodgingGrp { constructor: { new(): LodgingGrp }; }
export var LodgingGrp: { new(): LodgingGrp };

export type Max10_20AN = string;
type _Max10_20AN = Primitive._string;

export type Max100ANS = string;
type _Max100ANS = Primitive._string;

export type Max10AN = string;
type _Max10AN = Primitive._string;

export type Max10ANB = string;
type _Max10ANB = Primitive._string;

export type Max10ANS = string;
type _Max10ANS = Primitive._string;

export type Max10Num = string;
type _Max10Num = Primitive._string;

export type Max113ANS = string;
type _Max113ANS = Primitive._string;

export type Max11AN = string;
type _Max11AN = Primitive._string;

export type Max11ANS = string;
type _Max11ANS = Primitive._string;

export type Max128ANS = string;
type _Max128ANS = Primitive._string;

export type Max12AmountType = string;
type _Max12AmountType = Primitive._string;

export type Max12AN = string;
type _Max12AN = Primitive._string;

export type Max12ANS = string;
type _Max12ANS = Primitive._string;

export type Max12Num = string;
type _Max12Num = Primitive._string;

export type Max13AmountSignType = string;
type _Max13AmountSignType = Primitive._string;

export type Max13AN = string;
type _Max13AN = Primitive._string;

export type Max13ANS = string;
type _Max13ANS = Primitive._string;

export type Max14AN = string;
type _Max14AN = Primitive._string;

export type Max14ANS = string;
type _Max14ANS = Primitive._string;

export type Max14Num = string;
type _Max14Num = Primitive._string;

export type Max15AN = string;
type _Max15AN = Primitive._string;

export type Max15ANB = string;
type _Max15ANB = Primitive._string;

export type Max15ANS = string;
type _Max15ANS = Primitive._string;

export type Max15Num = string;
type _Max15Num = Primitive._string;

export type Max16AN = string;
type _Max16AN = Primitive._string;

export type Max16ANS = string;
type _Max16ANS = Primitive._string;

export type Max16Num = string;
type _Max16Num = Primitive._string;

export type Max17AmountSignType = string;
type _Max17AmountSignType = Primitive._string;

export type Max17AN = string;
type _Max17AN = Primitive._string;

export type Max17ANS = string;
type _Max17ANS = Primitive._string;

export type Max18AN = string;
type _Max18AN = Primitive._string;

export type Max18ANS = string;
type _Max18ANS = Primitive._string;

export type Max19AN = string;
type _Max19AN = Primitive._string;

export type Max19ANS = string;
type _Max19ANS = Primitive._string;

export type Max19Num = string;
type _Max19Num = Primitive._string;

export type Max2_9Num = string;
type _Max2_9Num = Primitive._string;

export type Max200ANS = string;
type _Max200ANS = Primitive._string;

export type Max20AN = string;
type _Max20AN = Primitive._string;

export type Max20ANS = string;
type _Max20ANS = Primitive._string;

export type Max20Num = string;
type _Max20Num = Primitive._string;

export type Max21AN = string;
type _Max21AN = Primitive._string;

export type Max22AN = string;
type _Max22AN = Primitive._string;

export type Max22ANS = string;
type _Max22ANS = Primitive._string;

export type Max2300ANS = string;
type _Max2300ANS = Primitive._string;

export type Max23AN = string;
type _Max23AN = Primitive._string;

export type Max23Num = string;
type _Max23Num = Primitive._string;

export type Max24ANS = string;
type _Max24ANS = Primitive._string;

export type Max24Num = string;
type _Max24Num = Primitive._string;

export type Max255ANS = string;
type _Max255ANS = Primitive._string;

export type Max25AN = string;
type _Max25AN = Primitive._string;

export type Max25ANS = string;
type _Max25ANS = Primitive._string;

export type Max25Num = string;
type _Max25Num = Primitive._string;

export type Max260ANS = string;
type _Max260ANS = Primitive._string;

export type Max26ANS = string;
type _Max26ANS = Primitive._string;

export type Max27AN = string;
type _Max27AN = Primitive._string;

export type Max28_32ANS = string;
type _Max28_32ANS = Primitive._string;

export type Max28AN = string;
type _Max28AN = Primitive._string;

export type Max28ANS = string;
type _Max28ANS = Primitive._string;

export type Max28Base64String = string;
type _Max28Base64String = Primitive._string;

export type Max2964AN = string;
type _Max2964AN = Primitive._string;

export type Max29AN = string;
type _Max29AN = Primitive._string;

export type Max2AN = string;
type _Max2AN = Primitive._string;

export type Max2ANS = string;
type _Max2ANS = Primitive._string;

export type Max2Num = string;
type _Max2Num = Primitive._string;

export type Max3_4AN = string;
type _Max3_4AN = Primitive._string;

export type Max3_9Num = string;
type _Max3_9Num = Primitive._string;

export type Max30ANS = string;
type _Max30ANS = Primitive._string;

export type Max32ANS = string;
type _Max32ANS = Primitive._string;

export type Max33ANS = string;
type _Max33ANS = Primitive._string;

export type Max35ANS = string;
type _Max35ANS = Primitive._string;

export type Max3600ANS = string;
type _Max3600ANS = Primitive._string;

export type Max36ANS = string;
type _Max36ANS = Primitive._string;

export type Max36HexString = string;
type _Max36HexString = Primitive._string;

export type Max37ANS = string;
type _Max37ANS = Primitive._string;

export type Max38ANS = string;
type _Max38ANS = Primitive._string;

export type Max3Alpha = string;
type _Max3Alpha = Primitive._string;

export type Max3AmountSignType = string;
type _Max3AmountSignType = Primitive._string;

export type Max3AN = string;
type _Max3AN = Primitive._string;

export type Max3ANS = string;
type _Max3ANS = Primitive._string;

export type Max3ANYes = "Yes";
interface _Max3ANYes extends _Max3AN { content: Max3ANYes; }

export type Max3ANYesNo = ("Yes" | "No");
interface _Max3ANYesNo extends _Max3AN { content: Max3ANYesNo; }

export type Max3Num = string;
type _Max3Num = Primitive._string;

export type Max4_12Num = string;
type _Max4_12Num = Primitive._string;

export type Max4_8AN = string;
type _Max4_8AN = Primitive._string;

export type Max4095Base64String = string;
type _Max4095Base64String = Primitive._string;

export type Max40AN = string;
type _Max40AN = Primitive._string;

export type Max40ANS = string;
type _Max40ANS = Primitive._string;

export type Max45AN = string;
type _Max45AN = Primitive._string;

export type Max45ANS = string;
type _Max45ANS = Primitive._string;

export type Max4AN = string;
type _Max4AN = Primitive._string;

export type Max4ANS = string;
type _Max4ANS = Primitive._string;

export type Max4Num = string;
type _Max4Num = Primitive._string;

export type Max5_13AN = string;
type _Max5_13AN = Primitive._string;

export type Max50AN = string;
type _Max50AN = Primitive._string;

export type Max50ANS = string;
type _Max50ANS = Primitive._string;

export type Max512ANS = string;
type _Max512ANS = Primitive._string;

export type Max5AN = string;
type _Max5AN = Primitive._string;

export type Max5Num = string;
type _Max5Num = Primitive._string;

export type Max6_8Num = string;
type _Max6_8Num = Primitive._string;

export type Max60ANS = string;
type _Max60ANS = Primitive._string;

export type Max65ANS = string;
type _Max65ANS = Primitive._string;

export type Max65Num = string;
type _Max65Num = Primitive._string;

export type Max6AmountSignType = string;
type _Max6AmountSignType = Primitive._string;

export type Max6AN = string;
type _Max6AN = Primitive._string;

export type Max6ANS = string;
type _Max6ANS = Primitive._string;

export type Max6Num = string;
type _Max6Num = Primitive._string;

export type Max70ANS = string;
type _Max70ANS = Primitive._string;

export type Max76ANS = string;
type _Max76ANS = Primitive._string;

export type Max7AN = string;
type _Max7AN = Primitive._string;

export type Max7ANS = string;
type _Max7ANS = Primitive._string;

export type Max7Num = string;
type _Max7Num = Primitive._string;

export type Max80AN = string;
type _Max80AN = Primitive._string;

export type Max80ANS = string;
type _Max80ANS = Primitive._string;

export type Max8AN = string;
type _Max8AN = Primitive._string;

export type Max8ANB = string;
type _Max8ANB = Primitive._string;

export type Max8ANS = string;
type _Max8ANS = Primitive._string;

export type Max8Num = string;
type _Max8Num = Primitive._string;

export type Max90ANS = string;
type _Max90ANS = Primitive._string;

export type Max954HexString = string;
type _Max954HexString = Primitive._string;

export type Max95ANS = string;
type _Max95ANS = Primitive._string;

export type Max998ANS = string;
type _Max998ANS = Primitive._string;

export type Max999ANS = string;
type _Max999ANS = Primitive._string;

export type Max999Base64String = string;
type _Max999Base64String = Primitive._string;

export type Max999HexString = string;
type _Max999HexString = Primitive._string;

export type Max99ANS = string;
type _Max99ANS = Primitive._string;

export type Max9AN = string;
type _Max9AN = Primitive._string;

export type Max9ANB = string;
type _Max9ANB = Primitive._string;

export type Max9ANS = string;
type _Max9ANS = Primitive._string;

export type Max9Num = string;
type _Max9Num = Primitive._string;

export type MCAuthIndType = "CrdOnFile";
interface _MCAuthIndType extends _Max9AN { content: MCAuthIndType; }

interface _MCGrp extends BaseType {
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
export interface MCGrp extends _MCGrp { constructor: { new(): MCGrp }; }
export var MCGrp: { new(): MCGrp };

export type MCMSDIType = ("BillPayment" | "Healthcare" | "Transit" | "EcomAgg" | "B2B" | "Hotel" | "AutoRental");
interface _MCMSDIType extends _Max15AN { content: MCMSDIType; }

export type MCSCType = string;
type _MCSCType = Primitive._string;

export type MCSNType = string;
type _MCSNType = Primitive._string;

export type MembIndType = ("M" | "G");
interface _MembIndType extends _Len1AN { content: MembIndType; }

export type MerchTypeType = string;
type _MerchTypeType = Primitive._string;

interface _MEXCardGrp extends BaseType {
	CHIDMethod?: CHIDMethodType;
	DfrdPymtMonths?: number;
	DfrdPymtPlan?: DfrdPymtPlanType;
	NumDfrdPymts?: number;
	PymtPlnCntrtNum?: string;
	RctTxtResp?: string;
}
export interface MEXCardGrp extends _MEXCardGrp { constructor: { new(): MEXCardGrp }; }
export var MEXCardGrp: { new(): MEXCardGrp };

export type MITAmtTypeType = ("Fixed" | "Variable");
interface _MITAmtTypeType extends _Max8AN { content: MITAmtTypeType; }

export type MITFreqType = ("01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12");
interface _MITFreqType extends _Len2Num { content: MITFreqType; }

export type MITPymtTypeType = ("Registration" | "Subsequent" | "Modification" | "Cancellation");
interface _MITPymtTypeType extends _Max12AN { content: MITPymtTypeType; }

export type MITTotPymtCtType = string;
type _MITTotPymtCtType = Primitive._string;

export type MITValFlagType = ("Validated" | "NotValidated");
interface _MITValFlagType extends _Max12AN { content: MITValFlagType; }

interface _MnySndGrp extends BaseType {
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
export interface MnySndGrp extends _MnySndGrp { constructor: { new(): MnySndGrp }; }
export var MnySndGrp: { new(): MnySndGrp };

export type MobileIndType = "Mobile";
interface _MobileIndType extends _Len6AN { content: MobileIndType; }

export type MOTOIndicatorType = ("MailOrder" | "TelPhOrder");
interface _MOTOIndicatorType extends _Max10AN { content: MOTOIndicatorType; }

export type MOTOIndType = ("1" | "2");
interface _MOTOIndType extends _Len1AN { content: MOTOIndType; }

export type MrktSpecificDataIndType = ("BillPayment" | "Healthcare" | "Transit" | "EcomAgg" | "B2B" | "Hotel" | "AutoRental");
interface _MrktSpecificDataIndType extends _Max15AN { content: MrktSpecificDataIndType; }

export type MTProcessIndType = ("Funding" | "Payment");
interface _MTProcessIndType extends _Len7AN { content: MTProcessIndType; }

interface _MTRequestDetails extends BaseType {
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
export interface MTRequestDetails extends _MTRequestDetails { constructor: { new(): MTRequestDetails }; }
export var MTRequestDetails: { new(): MTRequestDetails };

interface _MTResponseDetails extends BaseType {
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
export interface MTResponseDetails extends _MTResponseDetails { constructor: { new(): MTResponseDetails }; }
export var MTResponseDetails: { new(): MTResponseDetails };

export type MTStateCodeType = ("AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "MY" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY" | "NL" | "PE" | "NS" | "NB" | "QC" | "ON" | "MB" | "SK" | "AB" | "BC" | "YT" | "NT" | "NU");
interface _MTStateCodeType extends _Len2AN { content: MTStateCodeType; }

export type NetAccIndType = ("1" | "C");
interface _NetAccIndType extends _Len1AN { content: NetAccIndType; }

export type NFTFACHStatType = ("0" | "1" | "2" | "3" | "4");
interface _NFTFACHStatType extends _Len1AN { content: NFTFACHStatType; }

export type NFTFChkTypeType = ("P" | "C");
interface _NFTFChkTypeType extends _Len1AN { content: NFTFChkTypeType; }

export type NFTFPreFlagType = "Y";
interface _NFTFPreFlagType extends _Len1AN { content: NFTFPreFlagType; }

export type NFTFPrimIDTypeType = ("1" | "2" | "3" | "4");
interface _NFTFPrimIDTypeType extends _Len1AN { content: NFTFPrimIDTypeType; }

export type NFTFRelTypeType = ("D" | "P" | "S" | "X");
interface _NFTFRelTypeType extends _Len1AN { content: NFTFRelTypeType; }

export type NFTFSecIDTypeType = ("1" | "2" | "3" | "4");
interface _NFTFSecIDTypeType extends _Len1AN { content: NFTFSecIDTypeType; }

export type NFTFVIPIndType = "Y";
interface _NFTFVIPIndType extends _Len1AN { content: NFTFVIPIndType; }

export type NonUSMerchType = ("Canadian" | "Mexican" | "Jamaica" | "Barbados" | "Bahamas" | "Trinidad" | "StVincent" | "Anguilla" | "StKittsNevis" | "StLucia" | "Europe" | "APAC");
interface _NonUSMerchType extends _Max15AN { content: NonUSMerchType; }

export type NoShowIndType = "NoShow";
interface _NoShowIndType extends _Len6AN { content: NoShowIndType; }

export type NumAttemptsType = number;
type _NumAttemptsType = Primitive._number;

export type NumDfrdPymtsType = number;
type _NumDfrdPymtsType = Primitive._number;

export type NumOfProdsType = ("01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10");
interface _NumOfProdsType extends _Len2Num { content: NumOfProdsType; }

interface _OrderGrp extends BaseType {
	BillerRefNum?: string;
	OrderDate?: string;
	OrderTime?: string;
	SKU?: string;
}
export interface OrderGrp extends _OrderGrp { constructor: { new(): OrderGrp }; }
export var OrderGrp: { new(): OrderGrp };

interface _OrigAuthGrp extends BaseType {
	OrigAthNtwkID?: string;
	OrigAuthID?: string;
	OrigDebitTraceNum?: string;
	OrigLocalDateTime?: string;
	OrigRespCode?: string;
	OrigResponseDate?: string;
	OrigSTAN?: string;
	OrigTranDateTime?: string;
}
export interface OrigAuthGrp extends _OrigAuthGrp { constructor: { new(): OrigAuthGrp }; }
export var OrigAuthGrp: { new(): OrigAuthGrp };

interface _OTCGrp extends BaseType {
	OTCMrktBsktData?: string;
	OTCTranCode?: OTCTranCodeType;
	OTCUniqueId?: string;
}
export interface OTCGrp extends _OTCGrp { constructor: { new(): OTCGrp }; }
export var OTCGrp: { new(): OTCGrp };

export type OTCTranCodeType = ("BalanceLookup" | "ItemQualification" | "LimitedSpend" | "LimitedSpendRefund");
interface _OTCTranCodeType extends _Max18AN { content: OTCTranCodeType; }

interface _OTRFuelLimitGrp extends BaseType {
	OTRFuelAmtLimit?: string;
	OTRFuelProdCode?: string;
}
export interface OTRFuelLimitGrp extends _OTRFuelLimitGrp { constructor: { new(): OTRFuelLimitGrp }; }
export var OTRFuelLimitGrp: { new(): OTRFuelLimitGrp };

export type OTRProdCatType = ("ADD" | "ANFR" | "BRAK" | "CADV" | "CLTH" | "DEF" | "DELI" | "ELEC" | "ETAX" | "FAX" | "FLAT" | "GROC" | "HARD" | "IDLE" | "LMPR" | "LUBE" | "MERC" | "OIL" | "OILC" | "PADV" | "PART" | "PHON" | "PNT" | "RECP" | "REPR" | "REST" | "SCAN" | "SCLE" | "SHWR" | "TCHN" | "TIRE" | "TOLL" | "TRAL" | "TRPP" | "UREA" | "WASH" | "WWFL");
interface _OTRProdCatType extends _Max4AN { content: OTRProdCatType; }

interface _OTRProdDetGrp extends BaseType {
	OTRProdAmt?: string;
	OTRProdAmtLimit?: string;
	OTRProdCat?: OTRProdCatType;
	OTRProdQty?: string;
}
export interface OTRProdDetGrp extends _OTRProdDetGrp { constructor: { new(): OTRProdDetGrp }; }
export var OTRProdDetGrp: { new(): OTRProdDetGrp };

interface _OTRPromptGrp extends BaseType {
	OTRPromptFormat?: string;
	OTRPromptName?: OTRPromptNameType;
	OTRPromptValue?: string;
}
export interface OTRPromptGrp extends _OTRPromptGrp { constructor: { new(): OTRPromptGrp }; }
export var OTRPromptGrp: { new(): OTRPromptGrp };

export type OTRPromptNameType = ("BDAY" | "BLID" | "CNTN" | "DLIC" | "DLST" | "DRID" | "DTKT" | "FSTI" | "HBRD" | "HRRD" | "LCST" | "LICN" | "LSTN" | "NAME" | "ODRD" | "PONB" | "PPIN" | "RTMP" | "SSUB" | "TRIP" | "TRLR" | "UNIT" | "VEHN");
interface _OTRPromptNameType extends _Max4AN { content: OTRPromptNameType; }

export type PartAuthrztnApprvlCapabltType = ("0" | "1");
interface _PartAuthrztnApprvlCapabltType extends _Len1Num { content: PartAuthrztnApprvlCapabltType; }

export type PartShipIndType = "Partial";
interface _PartShipIndType extends _Len7AN { content: PartShipIndType; }

interface _PFGrp extends BaseType {
	PFInd?: PFIndType;
	PFPhoneNumber?: string;
	SellerID?: string;
	SubMerchID?: string;
}
export interface PFGrp extends _PFGrp { constructor: { new(): PFGrp }; }
export var PFGrp: { new(): PFGrp };

export type PFIndType = "Y";
interface _PFIndType extends _Len1AN { content: PFIndType; }

interface _PINGrp extends BaseType {
	KeyMgtData?: string;
	KeyOffset?: string;
	KeySerialNumData?: string;
	MSKeyID?: string;
	PINData?: string;
}
export interface PINGrp extends _PINGrp { constructor: { new(): PINGrp }; }
export var PINGrp: { new(): PINGrp };

interface _PinlessDebitRequestDetails extends BaseType {
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
export interface PinlessDebitRequestDetails extends _PinlessDebitRequestDetails { constructor: { new(): PinlessDebitRequestDetails }; }
export var PinlessDebitRequestDetails: { new(): PinlessDebitRequestDetails };

interface _PinlessDebitResponseDetails extends BaseType {
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
export interface PinlessDebitResponseDetails extends _PinlessDebitResponseDetails { constructor: { new(): PinlessDebitResponseDetails }; }
export var PinlessDebitResponseDetails: { new(): PinlessDebitResponseDetails };

export type PLPOSDebitFlgType = ("1" | "C" | "D");
interface _PLPOSDebitFlgType extends _Len1AN { content: PLPOSDebitFlgType; }

export type PmntTypeIdType = ("P2P" | "P2PBankInit" | "P2PCard" | "MerchDisb" | "GovDisb" | "FundsDisb" | "OLGambling" | "WltTrnsfr" | "LoyaltyOfrs" | "GamblingPay" | "B2B" | "PayrollDisb" | "MerchInitMT" | "MerchInstFund" | "A2A" | "TopUp" | "FundsTrnsfr" | "AgentCashOut" | "CCBillPay" | "Cash2ATM" | "Cash2Card" | "CashDeposit" | "Transfer2Card");
interface _PmntTypeIdType extends _Max13AN { content: PmntTypeIdType; }

export type POSCondCodeType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "08" | "59" | "71");
interface _POSCondCodeType extends _Len2Num { content: POSCondCodeType; }

export type POSEntryModeChgType = "Y";
interface _POSEntryModeChgType extends _Len1AN { content: POSEntryModeChgType; }

export type POSEntryModeType = string;
type _POSEntryModeType = _Len3Num;

interface _PreNetRtGrp extends BaseType {
	PreNetRtID?: string[];
}
export interface PreNetRtGrp extends _PreNetRtGrp { constructor: { new(): PreNetRtGrp }; }
export var PreNetRtGrp: { new(): PreNetRtGrp };

interface _PrepaidRequestDetails extends BaseType {
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
export interface PrepaidRequestDetails extends _PrepaidRequestDetails { constructor: { new(): PrepaidRequestDetails }; }
export var PrepaidRequestDetails: { new(): PrepaidRequestDetails };

interface _PrepaidResponseDetails extends BaseType {
	AddtlAmtGrp?: AddtlAmtGrp[];
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	FileDLGrp?: FileDLGrp;
	FraudMitRespGrp?: FraudMitRespGrp;
	RespGrp?: RespGrp;
	StoredValueGrp?: StoredValueGrp;
	TAGrp?: TAGrp;
}
export interface PrepaidResponseDetails extends _PrepaidResponseDetails { constructor: { new(): PrepaidResponseDetails }; }
export var PrepaidResponseDetails: { new(): PrepaidResponseDetails };

export type PrintIndType = ("Y" | "N");
interface _PrintIndType extends _Len1AN { content: PrintIndType; }

interface _PrivateLabelRequestDetails extends BaseType {
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
export interface PrivateLabelRequestDetails extends _PrivateLabelRequestDetails { constructor: { new(): PrivateLabelRequestDetails }; }
export var PrivateLabelRequestDetails: { new(): PrivateLabelRequestDetails };

interface _PrivateLabelResponseDetails extends BaseType {
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
export interface PrivateLabelResponseDetails extends _PrivateLabelResponseDetails { constructor: { new(): PrivateLabelResponseDetails }; }
export var PrivateLabelResponseDetails: { new(): PrivateLabelResponseDetails };

interface _ProdCodeDetGrp extends BaseType {
	NACSProdCode?: string;
	ProdAmt?: string;
	Qnty?: string;
	UnitOfMsure?: UnitOfMsureType;
	UnitPrice?: string;
}
export interface ProdCodeDetGrp extends _ProdCodeDetGrp { constructor: { new(): ProdCodeDetGrp }; }
export var ProdCodeDetGrp: { new(): ProdCodeDetGrp };

interface _ProdCodeGrp extends BaseType {
	NumOfProds?: NumOfProdsType;
	ServLvl?: ServLvlType;
}
export interface ProdCodeGrp extends _ProdCodeGrp { constructor: { new(): ProdCodeGrp }; }
export var ProdCodeGrp: { new(): ProdCodeGrp };

export type ProgramIDType = ("InComm" | "Solspark" | "Blackhawk" | "NetSpend" | "ConnectPay" | "PayPalVenmoQRC");
interface _ProgramIDType extends _Max20AN { content: ProgramIDType; }

export type ProgramIndType = ("1" | "2" | "3" | "4" | "5" | "6");
interface _ProgramIndType extends _Len1Num { content: ProgramIndType; }

export type ProgramProtocolType = ("1" | "2");
interface _ProgramProtocolType extends _Len1Num { content: ProgramProtocolType; }

interface _PromoGrp extends BaseType {
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
export interface PromoGrp extends _PromoGrp { constructor: { new(): PromoGrp }; }
export var PromoGrp: { new(): PromoGrp };

export type PropTknFlgType = "1";
interface _PropTknFlgType extends _Len1Num { content: PropTknFlgType; }

interface _PrvLblGrp extends BaseType {
	ActAcctNum?: string;
	ActExpiryDate?: string;
	DSTChlngInpt?: string;
	DSTChlngRsp?: string;
	LgValPrd?: string;
	SpdPssID?: string;
}
export interface PrvLblGrp extends _PrvLblGrp { constructor: { new(): PrvLblGrp }; }
export var PrvLblGrp: { new(): PrvLblGrp };

interface _PurchCardlvl2Grp extends BaseType {
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
export interface PurchCardlvl2Grp extends _PurchCardlvl2Grp { constructor: { new(): PurchCardlvl2Grp }; }
export var PurchCardlvl2Grp: { new(): PurchCardlvl2Grp };

interface _PurchCardlvl3Grp extends BaseType {
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
export interface PurchCardlvl3Grp extends _PurchCardlvl3Grp { constructor: { new(): PurchCardlvl3Grp }; }
export var PurchCardlvl3Grp: { new(): PurchCardlvl3Grp };

export type PymntSvcType = "Incrmnt";
interface _PymntSvcType extends _Len7AN { content: PymntSvcType; }

export type PymtTypeType = ("AltCNP" | "Check" | "Credit" | "Debit" | "EBT" | "Fleet" | "PLDebit" | "Prepaid" | "PvtLabl");
interface _PymtTypeType extends _Max10AN { content: PymtTypeType; }

export type QCIType = ("Y" | "N");
interface _QCIType extends _Len1AN { content: QCIType; }

export type QntyType = string;
type _QntyType = Primitive._string;

interface _RctTxtDetGrp extends BaseType {
	RctTxtData?: string;
}
export interface RctTxtDetGrp extends _RctTxtDetGrp { constructor: { new(): RctTxtDetGrp }; }
export var RctTxtDetGrp: { new(): RctTxtDetGrp };

interface _RealTimeAcctUpdGrp extends BaseType {
	AcctUpdCardNum?: string;
	AcctUpdCardStat?: string;
	AcctUpdExpDate?: string;
	AcctUpdReqInd?: AcctUpdReqIndType;
	AcctUpdResultCode?: string;
}
export interface RealTimeAcctUpdGrp extends _RealTimeAcctUpdGrp { constructor: { new(): RealTimeAcctUpdGrp }; }
export var RealTimeAcctUpdGrp: { new(): RealTimeAcctUpdGrp };

export type ReAuthIndType = "Y";
interface _ReAuthIndType extends _Len1AN { content: ReAuthIndType; }

export type RecvAcctNumTypeType = ("Other" | "RTNBAN" | "IBAN" | "CardAcct" | "Email" | "Phone" | "BANBIC" | "WalletID" | "SocialNetID");
interface _RecvAcctNumTypeType extends _Max11AN { content: RecvAcctNumTypeType; }

export type RecvIDSubtypeType = ("Business" | "Individual");
interface _RecvIDSubtypeType extends _Max10AN { content: RecvIDSubtypeType; }

export type RecvIDTypeType = ("BTHD" | "CUID" | "NTID" | "PASN" | "DRLN" | "TXIN" | "CPNY" | "PRXY" | "SSNB" | "ARNB" | "LAWE" | "MILI" | "TRVL" | "EMAL" | "PHON");
interface _RecvIDTypeType extends _Len4AN { content: RecvIDTypeType; }

export type RefundTypeType = ("Online" | "AuthOnly");
interface _RefundTypeType extends _Max8AN { content: RefundTypeType; }

export type RegUserIndType = ("Y" | "N");
interface _RegUserIndType extends _Len1AN { content: RegUserIndType; }

interface _RejectResponseDetails extends BaseType {
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
}
export interface RejectResponseDetails extends _RejectResponseDetails { constructor: { new(): RejectResponseDetails }; }
export var RejectResponseDetails: { new(): RejectResponseDetails };

export type ReloadTypeType = ("PinOnRecpt" | "TopUp");
interface _ReloadTypeType extends _Max10AN { content: ReloadTypeType; }

export type RentalExtraChrgsType = string;
type _RentalExtraChrgsType = Primitive._string;

export type RentalTaxIndType = ("0" | "1");
interface _RentalTaxIndType extends _Len1AN { content: RentalTaxIndType; }

export type ReqFBMaxSizeType = string;
type _ReqFBMaxSizeType = _Len3Num;

interface _RespGrp extends BaseType {
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
export interface RespGrp extends _RespGrp { constructor: { new(): RespGrp }; }
export var RespGrp: { new(): RespGrp };

interface _RestGrp extends BaseType {
	BevgAmt?: string;
	FoodAmt?: string;
	RestTaxAmt?: string;
	ServerID?: string;
	TipAmt?: string;
}
export interface RestGrp extends _RestGrp { constructor: { new(): RestGrp }; }
export var RestGrp: { new(): RestGrp };

export type ReversalIndType = ("Timeout" | "Void" | "VoidFr" | "TORVoid" | "Partial" | "EditErr" | "MACVeri" | "MACSync" | "EncrErr" | "SystErr");
interface _ReversalIndType extends _Max7AN { content: ReversalIndType; }

export type RPSType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");
interface _RPSType extends _Len1AN { content: RPSType; }

export type RtFallbackIndType = "No";
interface _RtFallbackIndType extends _Max2AN { content: RtFallbackIndType; }

export type SAACIType = "I";
interface _SAACIType extends _Len1AN { content: SAACIType; }

export type SafekeyType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "I" | "U");
interface _SafekeyType extends _Len1AN { content: SafekeyType; }

interface _SAGrp extends BaseType {
	SAACI?: SAACIType;
	SACondCode?: string;
	SAEntryMode?: string;
	SAMrktSpecificDataInd?: string;
	SARRN?: string;
	SASysTrace?: string;
	SATranSeq?: string;
}
export interface SAGrp extends _SAGrp { constructor: { new(): SAGrp }; }
export var SAGrp: { new(): SAGrp };

export type SctyLvlType = ("Tknizatn" | "EncrptTknizatn");
interface _SctyLvlType extends _Max15AN { content: SctyLvlType; }

export type SecDataDowngradeType = ("SecDataMissing" | "SecDataInvalid");
interface _SecDataDowngradeType extends _Max14AN { content: SecDataDowngradeType; }

interface _SecrTxnGrp extends BaseType {
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
export interface SecrTxnGrp extends _SecrTxnGrp { constructor: { new(): SecrTxnGrp }; }
export var SecrTxnGrp: { new(): SecrTxnGrp };

export type SendAcctNumTypeType = ("Other" | "RTNBAN" | "IBAN" | "CardAcct" | "Email" | "Phone" | "BANBIC" | "WalletID" | "SocialNetID");
interface _SendAcctNumTypeType extends _Max11AN { content: SendAcctNumTypeType; }

export type SendIDSubtypeType = ("Business" | "Individual");
interface _SendIDSubtypeType extends _Max10AN { content: SendIDSubtypeType; }

export type SendIDTypeType = ("BTHD" | "CUID" | "NTID" | "PASN" | "DRLN" | "TXIN" | "CPNY" | "PRXY" | "SSNB" | "ARNB" | "LAWE" | "MILI" | "TRVL" | "EMAL" | "PHON");
interface _SendIDTypeType extends _Len4AN { content: SendIDTypeType; }

export type ServLvlType = ("F" | "S" | "N" | "X" | "O" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");
interface _ServLvlType extends _Len1AN { content: ServLvlType; }

export type SettleIndType = ("1" | "2" | "3");
interface _SettleIndType extends _Len1Num { content: SettleIndType; }

export type SettleTxnTypeType = ("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14");
interface _SettleTxnTypeType extends _Max2AN { content: SettleTxnTypeType; }

interface _ShipGrp extends BaseType {
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
export interface ShipGrp extends _ShipGrp { constructor: { new(): ShipGrp }; }
export var ShipGrp: { new(): ShipGrp };

export type ShippingCarrierType = ("DHL" | "FedEx" | "Greyhound" | "Other" | "Purolator" | "USPS" | "UPS");
interface _ShippingCarrierType extends _Max9AN { content: ShippingCarrierType; }

export type ShippingMthdType = ("C" | "D" | "E" | "G" | "I" | "M" | "N" | "O" | "P" | "S" | "T" | "W");
interface _ShippingMthdType extends _Len1AN { content: ShippingMthdType; }

export type ShipToTelTypeType = ("D" | "H" | "N" | "W");
interface _ShipToTelTypeType extends _Len1AN { content: ShipToTelTypeType; }

export type SiteTypeIndType = ("Commercial" | "Retail");
interface _SiteTypeIndType extends _Max10AN { content: SiteTypeIndType; }

export type SplFinIndType = ("00" | "01" | "02" | "08");
interface _SplFinIndType extends _Len2Num { content: SplFinIndType; }

export type StateCodeType = ("AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "MY" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY");
interface _StateCodeType extends _Len2AN { content: StateCodeType; }

export type StoredCrdIndType = ("Initial" | "Subsequent");
interface _StoredCrdIndType extends _Max10AN { content: StoredCrdIndType; }

export type StoredCrdnIndType = ("Initial" | "Subsequent");
interface _StoredCrdnIndType extends _Max10AN { content: StoredCrdnIndType; }

export type StoredCredenIndType = ("Initial" | "Subsequent");
interface _StoredCredenIndType extends _Max10AN { content: StoredCredenIndType; }

export type StoredCredIndType = ("Initial" | "Subsequent");
interface _StoredCredIndType extends _Max10AN { content: StoredCredIndType; }

interface _StoredValueGrp extends BaseType {
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
export interface StoredValueGrp extends _StoredValueGrp { constructor: { new(): StoredValueGrp }; }
export var StoredValueGrp: { new(): StoredValueGrp };

export type SubFileTypeType = ("BIN" | "RULES" | "RESTRCTION" | "SAF" | "PROMPT" | "PRODUCT");
interface _SubFileTypeType extends _Max10AN { content: SubFileTypeType; }

export type SVActTypeType = ("C" | "F" | "P" | "S" | "V");
interface _SVActTypeType extends _Len1AN { content: SVActTypeType; }

interface _TAGrp extends BaseType {
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
export interface TAGrp extends _TAGrp { constructor: { new(): TAGrp }; }
export var TAGrp: { new(): TAGrp };

interface _TARequestDetails extends BaseType {
	AltMerchNameAndAddrGrp?: AltMerchNameAndAddrGrp;
	CardGrp?: CardGrp;
	CommonGrp?: CommonGrp;
	TAGrp?: TAGrp;
}
export interface TARequestDetails extends _TARequestDetails { constructor: { new(): TARequestDetails }; }
export var TARequestDetails: { new(): TARequestDetails };

interface _TAResponseDetails extends BaseType {
	CommonGrp?: CommonGrp;
	RespGrp?: RespGrp;
	TAGrp?: TAGrp;
}
export interface TAResponseDetails extends _TAResponseDetails { constructor: { new(): TAResponseDetails }; }
export var TAResponseDetails: { new(): TAResponseDetails };

export type TAVVResultCodeType = ("1" | "2" | "3" | "4");
interface _TAVVResultCodeType extends _Len1Num { content: TAVVResultCodeType; }

export type TaxAmtCapabltType = ("0" | "1" | "VB" | "VC" | "VP" | "TX" | "NA");
interface _TaxAmtCapabltType extends _Max2AN { content: TaxAmtCapabltType; }

export type TaxIndType = ("0" | "1" | "2");
interface _TaxIndType extends _Len1Num { content: TaxIndType; }

interface _TCNFTFGrp extends BaseType {
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
export interface TCNFTFGrp extends _TCNFTFGrp { constructor: { new(): TCNFTFGrp }; }
export var TCNFTFGrp: { new(): TCNFTFGrp };

interface _TeleCheckECAGrp extends BaseType {
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
export interface TeleCheckECAGrp extends _TeleCheckECAGrp { constructor: { new(): TeleCheckECAGrp }; }
export var TeleCheckECAGrp: { new(): TeleCheckECAGrp };

export type TermCatCodeType = ("00" | "01" | "05" | "06" | "07" | "08" | "09" | "12" | "13" | "17" | "18");
interface _TermCatCodeType extends _Len2Num { content: TermCatCodeType; }

export type TermClassCodeType = ("mPOSCon" | "mPOSSPoCPIN" | "mPOSCPoCNoPIN" | "mPOSCPoCPIN");
interface _TermClassCodeType extends _Max13AN { content: TermClassCodeType; }

export type TermEntryCapabltType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13");
interface _TermEntryCapabltType extends _Len2Num { content: TermEntryCapabltType; }

export type TermLocIndType = ("0" | "1");
interface _TermLocIndType extends _Len1AN { content: TermLocIndType; }

interface _TknGrp extends BaseType {
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
export interface TknGrp extends _TknGrp { constructor: { new(): TknGrp }; }
export var TknGrp: { new(): TknGrp };

interface _TLGrp extends BaseType {
	TLCardType?: string;
}
export interface TLGrp extends _TLGrp { constructor: { new(): TLGrp }; }
export var TLGrp: { new(): TLGrp };

export type TotReqDateType = ("ShiftRPT" | "CloseBatch" | "CurDayRPT" | "PrevDayRPT" | "3rdDayRPT" | "CloseShift" | "SiteCurDay" | "SitePrvDay" | "Site3rdDay" | "SettleDate");
interface _TotReqDateType extends _Max10AN { content: TotReqDateType; }

export type TptModeIndType = ("00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22");
interface _TptModeIndType extends _Len2Num { content: TptModeIndType; }

export type TraAcsTermFunCodeType = ("190" | "191" | "194" | "196");
interface _TraAcsTermFunCodeType extends _Len3Num { content: TraAcsTermFunCodeType; }

export type TranInitType = ("Merchant" | "Terminal" | "Customer");
interface _TranInitType extends _Len8AN { content: TranInitType; }

export type TranIntgClassType = ("Checkout" | "Digital" | "EMV" | "Enhanced" | "Generic" | "Keyed" | "Swiped" | "Token" | "Unknown" | "UnknownCNP" | "Validated");
interface _TranIntgClassType extends _Max10AN { content: TranIntgClassType; }

export type TranPurposeType = ("RefundOrig" | "RefundNew");
interface _TranPurposeType extends _Max10AN { content: TranPurposeType; }

interface _TransitGrp extends BaseType {
	ATCUpdInd?: Max3ANYes;
	ExPayTranslPAN?: string;
	TptModeInd?: TptModeIndType;
	TraAcsTermFunCode?: TraAcsTermFunCodeType;
	TraAcsTermInd?: Max3ANYes;
	TraTranTypeInd?: TraTranTypeIndType;
}
export interface TransitGrp extends _TransitGrp { constructor: { new(): TransitGrp }; }
export var TransitGrp: { new(): TransitGrp };

export type TraTranTypeIndType = ("01" | "02" | "03" | "04" | "05" | "06" | "07");
interface _TraTranTypeIndType extends _Len2Num { content: TraTranTypeIndType; }

export type TxnTypeType = ("Activation" | "Authorization" | "BalanceInquiry" | "BalanceLock" | "BatchSettleDetail" | "BatchSettleL3" | "CanadaKeyRequest" | "CancelDeferredAuth" | "CashAdvance" | "Cashout" | "CashoutActiveStatus" | "Change" | "CloseBatch" | "Completion" | "Custom" | "DisableInternetUse" | "EchoTest" | "EncryptionKeyRequest" | "FileDownload" | "FraudScore" | "GenerateKey" | "History" | "HostTotals" | "InternetActivation" | "Load" | "OpenBatch" | "PCL3AddDetail" | "Redemption" | "RedemptionUnlock" | "Refund" | "Reload" | "Sale" | "TACertAuthority" | "TAKeyRequest" | "TATokenRequest" | "Verification" | "VoucherClear");
interface _TxnTypeType extends _Max20AN { content: TxnTypeType; }

export type UCAFCollectIndType = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8");
interface _UCAFCollectIndType extends _Len1AN { content: UCAFCollectIndType; }

interface _UnionPayGrp extends BaseType {
	AcctType?: AcctTypeType;
}
export interface UnionPayGrp extends _UnionPayGrp { constructor: { new(): UnionPayGrp }; }
export var UnionPayGrp: { new(): UnionPayGrp };

export type UnitOfMsureType = ("C" | "G" | "K" | "L" | "P" | "Q" | "U" | "Z" | "O" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");
interface _UnitOfMsureType extends _Len1AN { content: UnitOfMsureType; }

export type UnitPriceType = string;
type _UnitPriceType = Primitive._string;

export type UPCPLUIndType = ("0" | "1");
interface _UPCPLUIndType extends _Len1Num { content: UPCPLUIndType; }

export type VisaAuthIndType = ("ReAuth" | "ReSubmit" | "EstAuth" | "CrdOnFile");
interface _VisaAuthIndType extends _Max9AN { content: VisaAuthIndType; }

interface _VisaGrp extends BaseType {
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
export interface VisaGrp extends _VisaGrp { constructor: { new(): VisaGrp }; }
export var VisaGrp: { new(): VisaGrp };

interface _VoidTOReversalRequestDetails extends BaseType {
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
export interface VoidTOReversalRequestDetails extends _VoidTOReversalRequestDetails { constructor: { new(): VoidTOReversalRequestDetails }; }
export var VoidTOReversalRequestDetails: { new(): VoidTOReversalRequestDetails };

interface _VoidTOReversalResponseDetails extends BaseType {
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
export interface VoidTOReversalResponseDetails extends _VoidTOReversalResponseDetails { constructor: { new(): VoidTOReversalResponseDetails }; }
export var VoidTOReversalResponseDetails: { new(): VoidTOReversalResponseDetails };

interface _WexOTRGrp extends BaseType {
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
export interface WexOTRGrp extends _WexOTRGrp { constructor: { new(): WexOTRGrp }; }
export var WexOTRGrp: { new(): WexOTRGrp };

export interface document extends BaseType {
	AcctNum: string;
	AcctType: AcctTypeType;
	AcctUpdCardNum: string;
	AcctUpdCardStat: string;
	AcctUpdExpDate: string;
	AcctUpdReqInd: AcctUpdReqIndType;
	AcctUpdResultCode: string;
	AcctUpdTkn: string;
	ACI: string;
	ActAcctNum: string;
	ActExpiryDate: string;
	ActionCd: string;
	AddAmt: string;
	AddAmtAcctType: string;
	AddAmtCrncy: string;
	AddAmtType: AddAmtTypeType;
	AddChgInd: AddChgIndType;
	AddrChg: string;
	AddTknRespInfo: AddTknRespInfoType;
	AddtlRespData: string;
	AfterPromoAPR: string;
	AfterPromoFlag: string;
	AgreementID: string;
	ALMProdClass: string;
	ALMProdCode: string;
	ALMRateType: string;
	ALMSvcCode: string;
	AltMerchID: string;
	AmexAuthInd: AmexAuthIndType;
	AmExPOSData: string;
	AmexSecrAD: string;
	AmExTranID: string;
	AmexXID: string;
	AmtExtraChrgs: string;
	AppExpDate: string;
	ArvDate: string;
	ArvTime: string;
	AssocRespCode: string;
	ATCUpdInd: Max3ANYes;
	AthNtwkID: string;
	AthNtwkNm: string;
	AthNtwkTrcID: string;
	AuthID: string;
	AuthOptReasonCode: string;
	AuthOutExInd: string;
	AutoAgreeNum: string;
	AutoNoShow: AutoNoShowType;
	AvailProdFleetInfo: string;
	AvailProdsInd: Max3ANYes;
	AVSBillingAddr: string;
	AVSBillingPostalCode: string;
	AVSResultCode: string;
	BanknetData: string;
	BatchAmt: string;
	BatchCt: number;
	BatchID: string;
	BatchL3Cnt: string;
	BatchProdCd: string;
	BatchSeqNum: number;
	BatchTktNum: string;
	BevgAmt: string;
	BillerRefNum: string;
	BillingAddr2: string;
	BillingCity: string;
	BillingCtry: string;
	BillingInd: string;
	BillingState: string;
	BillPymtTxnInd: BillPymtTxnIndType;
	BusPymtType: BusPymtTypeType;
	CAKeyID: string;
	CanDebitTransCode: CanDebitTransCodeType;
	CANKeySerialNumData: string;
	CanNetRespCode: string;
	CARC: string;
	CardActivDate: string;
	CardBrnd: string;
	CardCaptCap: CardCaptCapType;
	CardClass: string;
	CardCost: string;
	CardExpiryDate: string;
	CardInd: string;
	CardLevelResult: string;
	CardSeqNum: string;
	CardTag: CardTagType;
	CardTxnAmt: string;
	CardType: CardTypeType;
	CashAdvLimit: string;
	CashAdvSerNum: string;
	CategoryCode: string;
	CAVVResultCode: string;
	CCVData: string;
	CCVErrorCode: CCVErrorCodeType;
	CCVInd: CCVIndType;
	CCVResultCode: CCVResultCodeType;
	CheckoutInd: CheckoutIndType;
	CHFirstNm: string;
	CHFullNmRes: CHFullNmResType;
	CHIDMethod: CHIDMethodType;
	ChkEntryMethod: ChkEntryMethodType;
	ChkSvcPvdr: ChkSvcPvdrType;
	ChkType: ChkTypeType;
	CHLastNm: string;
	CHMidNm: string;
	CHName: string;
	CITMITFrameInd: CITMITFrameIndType;
	ClerkID: string;
	CofSchdInd: CofSchdIndType;
	CofSchedInd: CofSchedIndType;
	CofSchInd: CofSchIndType;
	ComCardType: ComCardTypeType;
	CrypCrncyPurchInd: Max3ANYes;
	CryptoCrncyPurchInd: Max3ANYes;
	CurrFileCreationDt: string;
	CustAcctCode: string;
	CustANI: string;
	CustANIII: string;
	CustBrwsrName: string;
	CustCity: string;
	CustData: string;
	CustEmailAddr: string;
	CustHostName: string;
	CustID: string;
	CustIPAddr: string;
	CustMatInd: CustMatIndType;
	CustName: string;
	CustomerId: string;
	CustStartDate: string;
	CustState: StateCodeType;
	CustSvcPhoneNumber: string;
	CustTelNum: string;
	CustTelType: CustTelTypeType;
	DAFInd: string;
	DateOfBirth: string;
	DbAuthInd: DbAuthIndType;
	DBINTblVer: string;
	DbProdCd: string;
	DbStoredCrdnInd: DbStoredCrdnIndType;
	DCCAmt: string;
	DCCCrncy: string;
	DCCInd: DCCIndType;
	DCCRate: string;
	DCCTimeZn: string;
	DebitTraceNum: string;
	DelChargeInd: DelChargeIndType;
	DelChrgInd: DelChrgIndType;
	DelegAuthInd: Max3ANYesNo;
	DelivType: DelivTypeType;
	DepDate: string;
	DepTime: string;
	DeptNum: string;
	DestCtryCode: string;
	DestPostalCode: string;
	DestStCode: string;
	DetProdID: string;
	DevBatchID: string;
	DeviceType: string;
	DevTypeInd: string;
	DfrdAuthInd: Max3ANYes;
	DfrdAuthTranID: string;
	DfrdPymtMonths: number;
	DfrdPymtPlan: DfrdPymtPlanType;
	DigWltInd: DigWltIndType;
	DigWltProgType: DigWltProgTypeType;
	DirServerTransID: string;
	DiscACI: DiscACIType;
	DiscAuthInd: DiscAuthIndType;
	DiscAuthType: DiscAuthTypeType;
	DiscNRID: string;
	DiscntAmt: string;
	DiscPOSData: string;
	DiscPOSEntry: string;
	DiscProcCode: string;
	DiscRespCode: string;
	DiscSecData: string;
	DiscSTAN: string;
	DiscTransQualifier: string;
	DLDateOfBirth: string;
	DMTblVer: string;
	DnlRecNum: string;
	DPdTblVer: string;
	DPrTblVer: string;
	DReTblVer: string;
	DRuTblVer: string;
	DrvLic: string;
	DrvLicState: StateCodeType;
	DrvNum: string;
	DSAFTblVer: string;
	DSTChlngInpt: string;
	DSTChlngRsp: string;
	DupATCInd: Max3ANYes;
	Duration: string;
	DutyAmt: string;
	EAN: string;
	EBenExDt: string;
	EBTCardSeqNum: string;
	EBTCaseNum: string;
	EBTType: EBTTypeType;
	ECABCN: string;
	ECAPhnNum: string;
	ECAProdCd: string;
	ECAStatus: ECAStatusType;
	ECATrcID: string;
	EcommTxnInd: string;
	EcommURL: string;
	EmailMtch: string;
	EMVData: string;
	EncrptBlock: string;
	EncrptTrgt: EncrptTrgtType;
	EncrptType: EncrptTypeType;
	EnhdFltAmtLimit: string;
	EnhdFltAuthNum: string;
	EnhdFltChkCode: string;
	EnhdFltChkNum: string;
	EnhdFltCustAcctCode: string;
	EnhdFltCustCity: string;
	EnhdFltCustName: string;
	EnhdFltCustState: string;
	EnhdFltDrivMsg: string;
	EnhdFltPayeeName: string;
	EnhdFltProdCode: string;
	EnhdFltPromptFormat: string;
	EnhdFltPromptName: EnhdFltPromptNameType;
	EnhdFltPromptValue: string;
	EnhdFltSetInd: string;
	ErrorData: string;
	EschtblTxn: EschtblTxnType;
	ExistingDebtInd: ExistingDebtIndType;
	ExPayTranslPAN: string;
	ExReasonCode: string;
	ExtDrvID: string;
	ExtraChrgs: string;
	FACode: string;
	FastRefundInd: Max3ANYes;
	FBData: string;
	FBSeq: string;
	FeeAmt: string;
	FileCRC16: string;
	FileSize: string;
	FileType: FileTypeType;
	FinAmtInd: FinAmtIndType;
	FinAuthInd: FinAuthIndType;
	FirstInstallAmt: string;
	FleetID: string;
	FltEmpNum: string;
	FndAcctNum: string;
	FndRefNum: string;
	FndSrc: FndSrcType;
	FolioNum: string;
	FoodAmt: string;
	FPI: string;
	FrdPacket: string;
	FrdScoreInd: FrdScoreIndType;
	FrdTxt: string;
	FrghtAmt: string;
	FrstTrnNum: string;
	FunCode: FunCodeType;
	Future: string;
	FWVer: string;
	GdSoldCd: GdSoldCdType;
	GiftEmailAddr: string;
	GMF: GMFMessageVariants;
	GroupID: string;
	HBINTblVer: string;
	HDBINBeg: string;
	HDBINEnd: string;
	HDCardType: string;
	HDDiscType: string;
	HDEndDt: string;
	HDProdCd: string;
	HDProdDiscAmt: string;
	HDProgDesc: string;
	HDQtyLt: string;
	HDStrDt: string;
	HighRiskSecrPurchInd: Max3ANYes;
	HMTblVer: string;
	HoldInfo: string;
	HotelNoShow: HotelNoShowType;
	HPdTblVer: string;
	HPrTblVer: string;
	HReTblVer: string;
	HRuTblVer: string;
	HSAFTblVer: string;
	HTSettleDate: string;
	Hubometer: string;
	HWVer: string;
	InfoReqInd: InfoReqIndType;
	InstallAPR: string;
	InstallFee: string;
	InstallIntRate: string;
	InstallInvNum: string;
	InstallmentType: InstallmentTypeType;
	InstallPymntDesc: string;
	InstallPymtOptions: InstallPymtOptionsType;
	InstallType: InstallTypeType;
	InstSeqCt: number;
	InstSeqNum: number;
	IssBank: string;
	IssCtryCode: string;
	JobID: string;
	JobNum: string;
	KeyID: string;
	KeyMgtData: string;
	KeyOffset: string;
	KeySerialNumData: string;
	L3DbCrInd: L3DbCrIndType;
	L3DiscntAmt: string;
	L3ExtItemAmt: string;
	L3ItemCode: string;
	L3ItemDesc: string;
	L3ItemQtyExp: L3ItemQtyExpType;
	L3ItemSeqNum: string;
	L3ItemTot: string;
	L3LineItmDtlInd: L3LineItmDtlIndType;
	L3MerchVATReg: string;
	L3NatTax: string;
	L3NatTaxRt: string;
	L3OtherTaxAmt: string;
	L3ProdCode: string;
	L3ProdDesc: string;
	L3Qty: string;
	L3SumComCd: string;
	L3TaxAmount: string;
	L3TaxAmt: string;
	L3TaxInd: L3TaxIndType;
	L3TaxRate: string;
	L3TaxRt: string;
	L3TaxRtExp: L3TaxRtExpType;
	L3TaxTypeApp: string;
	L3TaxTypeId: L3TaxTypeIdType;
	L3UnitCost: string;
	L3UnitCostExp: string;
	L3UnitOfMsure: string;
	LdCtrlKey: string;
	LdSeqNum: string;
	LgValPrd: string;
	LicNum: string;
	LocalDateTime: string;
	LodChargeType: LodChargeTypeType;
	LodPhnNum: string;
	LodRefNum: string;
	LowValExInd: Max3ANYesNo;
	LoyID: string;
	LoyStartDate: string;
	MAC: string;
	MACWrkKey: string;
	MaintenanceID: string;
	MARespCode: string;
	MAWrkKeyChkDgts: string;
	MCACI: string;
	MCAddData: string;
	MCAuthInd: MCAuthIndType;
	MCMSDI: MCMSDIType;
	MCPOSData: string;
	MCSC: string;
	MCSecrAD: string;
	MCSN: string;
	MembInd: MembIndType;
	MerchAddr: string;
	MerchAdviceCode: string;
	MerchantAuthentID: string;
	MerchCatCode: string;
	MerchCity: string;
	MerchCnty: string;
	MerchCtry: string;
	MerchCtryOfOrigin: string;
	MerchCustom1: string;
	MerchEcho: string;
	MerchEmail: string;
	MerchFNSNum: string;
	MerchID: string;
	MerchInitAcctUpdReqInd: Max3ANYes;
	MerchName: string;
	MerchPostalCode: string;
	MerchRefNum: string;
	MerchState: string;
	MerchTaxID: string;
	MerchType: string;
	MexVisaSecrTxnAD: string;
	MexVisaXID: string;
	MICR: string;
	MITAmt: string;
	MITAmtType: MITAmtTypeType;
	MITFreq: MITFreqType;
	MITPymtCrncy: string;
	MITPymtType: MITPymtTypeType;
	MITRegRefNum: string;
	MITSeqInd: string;
	MITTotPymtAmt: string;
	MITTotPymtCt: string;
	MITUniqueID: string;
	MITValFlag: MITValFlagType;
	MITValRef: string;
	MnyCode: string;
	MnyCodeChkNum: string;
	MnyCodePayeeName: string;
	MobileInd: MobileIndType;
	MOTOInd: MOTOIndType;
	MOTOIndicator: MOTOIndicatorType;
	MrktSpecificDataInd: MrktSpecificDataIndType;
	MsgEncrptWrkKey: string;
	MSKeyID: string;
	MTProcessInd: MTProcessIndType;
	MVVMAID: string;
	NACSProdCode: string;
	NetAccInd: NetAccIndType;
	NetSettleAmt: string;
	NextFileDLOffset: string;
	NFTFAccNum: string;
	NFTFACHStat: NFTFACHStatType;
	NFTFBnkRtNum: string;
	NFTFChkNum: string;
	NFTFChkType: NFTFChkTypeType;
	NFTFDelShpExp: string;
	NFTFDelShpId: string;
	NFTFDenRecNum: string;
	NFTFGftCrdAmt: string;
	NFTFMICRData: string;
	NFTFMobDevID: string;
	NFTFPreFlag: NFTFPreFlagType;
	NFTFPrimID: string;
	NFTFPrimIDType: NFTFPrimIDTypeType;
	NFTFProdCode: string;
	NFTFRegDate: string;
	NFTFRegNum: string;
	NFTFRelType: NFTFRelTypeType;
	NFTFSecID: string;
	NFTFSecIDType: NFTFSecIDTypeType;
	NFTFSesID: string;
	NFTFTermID: string;
	NFTFTraceId: string;
	NFTFVIPInd: NFTFVIPIndType;
	NmMtch: string;
	NonUSMerch: NonUSMerchType;
	NoOfInstall: string;
	NoShowInd: NoShowIndType;
	NRIDReqInd: Max3ANYes;
	NumAttempts: number;
	NumDfrdPymts: number;
	NumOfProds: NumOfProdsType;
	Odo: string;
	OrderDate: string;
	OrderNum: string;
	OrderTime: string;
	OrigAthNtwkID: string;
	OrigAuthID: string;
	OrigDebitTraceNum: string;
	OrigLocalDateTime: string;
	OrigPrice: string;
	OrigQty: string;
	OrigRespCode: string;
	OrigResponseDate: string;
	OrigSTAN: string;
	OrigTranDateTime: string;
	OTCMrktBsktData: string;
	OTCTranCode: OTCTranCodeType;
	OTCUniqueId: string;
	OTRFuelAmtLimit: string;
	OTRFuelProdCode: string;
	OTRProdAmt: string;
	OTRProdAmtLimit: string;
	OTRProdCat: OTRProdCatType;
	OTRProdQty: string;
	OTRPromptFormat: string;
	OTRPromptName: OTRPromptNameType;
	OTRPromptValue: string;
	OverrideInd: Max3ANYesNo;
	PartAuthrztnApprvlCapablt: PartAuthrztnApprvlCapabltType;
	PartID: string;
	PartRefundInd: Max3ANYes;
	PartShipInd: PartShipIndType;
	Password: string;
	PayeeAcctNum: string;
	PayeeID: string;
	PayeePhoneNum: string;
	PBCatCd: string;
	PBQty: string;
	PBSubCatCd: string;
	PC3Add: string;
	PCOrderNum: string;
	PenFileType: string;
	PFInd: PFIndType;
	PFPhoneNumber: string;
	PINData: string;
	PINEncrptWrkKey: string;
	PlanRegSysId: string;
	PLPOSDebitFlg: PLPOSDebitFlgType;
	PmntTypeId: PmntTypeIdType;
	POSCondCode: POSCondCodeType;
	POSEntryMode: string;
	POSEntryModeChg: POSEntryModeChgType;
	POSID: string;
	PostDate: string;
	PreNetRtID: string;
	PrintData: string;
	PrintInd: PrintIndType;
	ProcInd: string;
	ProcInfo: string;
	ProdAmt: string;
	ProdDesc: string;
	ProgramID: ProgramIDType;
	ProgramInd: ProgramIndType;
	ProgramProtocol: ProgramProtocolType;
	PromoAPR: string;
	PromoAPRFlag: string;
	PromoCd: string;
	PromoCode: string;
	PromoDesc: string;
	PromoDuration: string;
	PromoPlanCode: string;
	PromoPlanExpDate: string;
	PropTknFlg: PropTknFlgType;
	PublicKey: string;
	PurchaseOrder: string;
	PurchIdfr: string;
	PymntSvc: PymntSvcType;
	PymtAcctRef: string;
	PymtAcctRefReqInd: Max3ANYes;
	PymtPlnCntrtNum: string;
	PymtTknExpDate: string;
	PymtTknReqInd: Max3ANYes;
	PymtTknValue: string;
	PymtTranID: string;
	PymtType: PymtTypeType;
	QCI: QCIType;
	Qnty: string;
	RcptAcctNum: string;
	RcptDateOfBirth: string;
	RcptLastNm: string;
	RcptPostalCode: string;
	RctTxtData: string;
	RctTxtEndDt: string;
	RctTxtResp: string;
	RctTxtStrDt: string;
	ReAuthInd: ReAuthIndType;
	RecPayExInd: Max3ANYesNo;
	RecvAcctNum: string;
	RecvAcctNumType: RecvAcctNumTypeType;
	RecvCity: string;
	RecvCtryCode: string;
	RecvFirstNm: string;
	RecvIDIssCtry: string;
	RecvIDSubtype: RecvIDSubtypeType;
	RecvIDType: RecvIDTypeType;
	RecvIDValue: string;
	RecvLastNm: string;
	RecvMidInit: string;
	RecvMidNm: string;
	RecvPhoneNumber: string;
	RecvPostalCode: string;
	RecvStateCode: MTStateCodeType;
	RecvStrAddr: string;
	ReeferHr: string;
	RefNum: string;
	RefundType: RefundTypeType;
	RegUserDate: string;
	RegUserInd: RegUserIndType;
	ReloadType: ReloadTypeType;
	RentalCity: string;
	RentalClsID: string;
	RentalCtry: string;
	RentalDate: string;
	RentalDuration: string;
	RentalExtraChrgs: string;
	RentalState: string;
	RentalTaxInd: RentalTaxIndType;
	RentalTime: string;
	RenterName: string;
	ReqFBMaxSize: string;
	ReqFileOffset: string;
	ReqstrAddr: string;
	ReqstrName: string;
	RespChkNum: string;
	RespCode: string;
	ResponseDate: string;
	RestTaxAmt: string;
	RetChkFee: string;
	RetChkNote: string;
	ReturnCity: string;
	ReturnCtry: string;
	ReturnDate: string;
	ReturnState: string;
	ReturnTime: string;
	RevAt: string;
	ReversalInd: ReversalIndType;
	RmTax: string;
	RmtCommAcptrId: string;
	RoomNum: string;
	RoomRt: string;
	RPS: RPSType;
	RtFallbackInd: RtFallbackIndType;
	RtInd: string;
	SAACI: SAACIType;
	SACondCode: string;
	SAEntryMode: string;
	Safekey: SafekeyType;
	SAMrktSpecificDataInd: string;
	SARRN: string;
	SASysTrace: string;
	SATranSeq: string;
	Score: string;
	ScoreRes: string;
	SctyKeyUpdInd: string;
	SctyLvl: SctyLvlType;
	SCV: string;
	SecDataDowngrade: SecDataDowngradeType;
	SecrCorpExInd: Max3ANYesNo;
	SecSubIntegratorID: string;
	SellerID: string;
	SendAcctNum: string;
	SendAcctNumType: SendAcctNumTypeType;
	SendBusName: string;
	SendCity: string;
	SendCtryCode: string;
	SendDateOfBirth: string;
	SendFirstNm: string;
	SendIDIssCtry: string;
	SendIDSubtype: SendIDSubtypeType;
	SendIDType: SendIDTypeType;
	SendIDValue: string;
	SendLastNm: string;
	SendMidInit: string;
	SendMidNm: string;
	SendPhoneNum: string;
	SendPostalCode: string;
	SendStateCode: MTStateCodeType;
	SendStrAddr: string;
	SENum: string;
	ServCode: string;
	ServerID: string;
	ServLvl: ServLvlType;
	ServResCd: string;
	SettleInd: SettleIndType;
	SettlementTxnType: string;
	SettleTxnType: SettleTxnTypeType;
	ShipFromPostalCode: string;
	ShippingCarrier: ShippingCarrierType;
	ShippingMthd: ShippingMthdType;
	ShipToAddr1: string;
	ShipToAddr2: string;
	ShipToCity: string;
	ShipToCtry: string;
	ShipToFirstNm: string;
	ShipToLastNm: string;
	ShipToPostalCode: string;
	ShipToState: string;
	ShipToTelNum: string;
	ShipToTelType: ShipToTelTypeType;
	SigInd: string;
	SingleTapInd: Max3ANYes;
	SiteTypeInd: SiteTypeIndType;
	SKU: string;
	SourceReasonCode: string;
	SpdPssID: string;
	SpendQInd: string;
	SplFinInd: SplFinIndType;
	SSC: string;
	STAN: string;
	StateCode: string;
	StoredCrdInd: StoredCrdIndType;
	StoredCrdnInd: StoredCrdnIndType;
	StoredCredenInd: StoredCredenIndType;
	StoredCredInd: StoredCredIndType;
	StrMtch: string;
	SttlmDate: string;
	SubFileType: SubFileTypeType;
	SubInstallAmt: string;
	SubIntegratorID: string;
	SubMerchID: string;
	SumPymtTypeTag: string;
	SupID: string;
	SVActType: SVActTypeType;
	SWVer: string;
	TAExpDate: string;
	TASctyKey: string;
	TAVVResultCode: TAVVResultCodeType;
	TaxAmt: string;
	TaxAmtCapablt: TaxAmtCapabltType;
	TaxInd: TaxIndType;
	TeleMtch: string;
	TermCatCode: TermCatCodeType;
	TermClassCode: TermClassCodeType;
	TermEntryCapablt: TermEntryCapabltType;
	TermID: string;
	TermLocInd: TermLocIndType;
	TipAmt: string;
	TipPercent: string;
	Tkn: string;
	TknAuthInd: string;
	TknAVD: string;
	TknBlkA: string;
	TknBlkB: string;
	TknLstFour: string;
	TknLvl: string;
	TknReqID: string;
	TknType: string;
	TLCardType: string;
	TLMerchAddr: string;
	TLMerchCity: string;
	TLMerchName: string;
	TLMerchPostalCode: string;
	TLMerchState: string;
	TLSAFBlk: string;
	TLStNum: string;
	TLTermType: string;
	TotInstallAmtDue: string;
	TotReqDate: TotReqDateType;
	TPPID: string;
	TptModeInd: TptModeIndType;
	TraAcsTermFunCode: TraAcsTermFunCodeType;
	TraAcsTermInd: Max3ANYes;
	Track1Data: string;
	Track2Data: string;
	TrailerID: string;
	TrailerLic: string;
	TrailerLicState: StateCodeType;
	TranEditErrCode: string;
	TranInit: TranInitType;
	TranIntgClass: TranIntgClassType;
	TranPurpose: TranPurposeType;
	TranRiskAnaExInd: Max3ANYesNo;
	TransID: string;
	TraTranTypeInd: TraTranTypeIndType;
	TripNumber: string;
	TrnmsnDateTime: string;
	TrustMerchExInd: Max3ANYesNo;
	TTCutTime: string;
	TTDateTime: string;
	TTDay: string;
	TTPassword: string;
	TxnAmt: string;
	TxnCnt: string;
	TxnCrncy: string;
	TxnCt: string;
	TxnHstDtl: string;
	TxnRtn: string;
	TxnType: TxnTypeType;
	UCAFCollectInd: UCAFCollectIndType;
	UnionPaySecData: string;
	UnitID: string;
	UnitOfMsure: UnitOfMsureType;
	UnitPrice: string;
	UPC: string;
	UPCPLUData: string;
	UPCPLUInd: UPCPLUIndType;
	UPCPrice: string;
	UPCQty: string;
	UserID: string;
	UUID: string;
	VATTaxAmt: string;
	VATTaxRt: string;
	VehIDNum: string;
	VehLicState: StateCodeType;
	VehNum: string;
	VisaAUAR: string;
	VisaAuthInd: VisaAuthIndType;
	VisaBID: string;
	VisaSecrTxnAD: string;
	VisaXID: string;
	VoucherNum: string;
	VoyagerData: string;
	WexOTRSetInd: string;
	WltID: string;
	XCodeResp: string;
	ZipMtch: string;
}
export var document: document;
