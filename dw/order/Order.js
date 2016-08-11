var _super = require('./LineItemCtnr');

var Order = function() {};

Order.prototype = new _super();

Order.prototype.getStatus = function() {};

Order.prototype.getOrderNo = function() {};

Order.prototype.getExportStatus = function() {};

Order.prototype.getCreatedBy = function() {};

Order.prototype.setStatus = function() {};

Order.prototype.setExportStatus = function() {};

Order.prototype.getConfirmationStatus = function() {};

Order.prototype.setConfirmationStatus = function() {};

Order.prototype.getShippingStatus = function() {};

Order.prototype.setShippingStatus = function() {};

Order.prototype.getPaymentStatus = function() {};

Order.prototype.setPaymentStatus = function() {};

Order.prototype.getPaymentTransaction = function() {};

Order.prototype.getOrderToken = function() {};

Order.prototype.getInvoiceNo = function() {};

Order.prototype.isImported = function() {};

Order.prototype.setInvoiceNo = function() {};

Order.prototype.getSourceCode = function() {};

Order.prototype.getSourceCodeGroupID = function() {};

Order.prototype.getSourceCodeGroup = function() {};

Order.prototype.addNote = function() {};

Order.prototype.getNotes = function() {};

Order.prototype.trackOrderChange = function() {};

Order.prototype.getOriginalOrderNo = function() {};

Order.prototype.getOriginalOrder = function() {};

Order.prototype.getReplaceCode = function() {};

Order.prototype.setReplaceCode = function() {};

Order.prototype.getReplaceDescription = function() {};

Order.prototype.setReplaceDescription = function() {};

Order.prototype.getReplacementOrderNo = function() {};

Order.prototype.getReplacementOrder = function() {};

Order.prototype.getReplacedOrderNo = function() {};

Order.prototype.getReplacedOrder = function() {};

Order.prototype.getCurrentOrderNo = function() {};

Order.prototype.getCurrentOrder = function() {};

Order.prototype.getCancelCode = function() {};

Order.prototype.setCancelCode = function() {};

Order.prototype.getCancelDescription = function() {};

Order.prototype.setCancelDescription = function() {};

Order.prototype.getExternalOrderNo = function() {};

Order.prototype.setExternalOrderNo = function() {};

Order.prototype.getExternalOrderStatus = function() {};

Order.prototype.setExternalOrderStatus = function() {};

Order.prototype.getExternalOrderText = function() {};

Order.prototype.setExternalOrderText = function() {};

Order.prototype.getCustomerLocaleID = function() {};

Order.prototype.getCustomerOrderReference = function() {};

Order.prototype.setCustomerOrderReference = function() {};

Order.prototype.getAffiliatePartnerName = function() {};

Order.prototype.setAffiliatePartnerName = function() {};

Order.prototype.getAffiliatePartnerID = function() {};

Order.prototype.setAffiliatePartnerID = function() {};

Order.prototype.getExportAfter = function() {};

Order.prototype.setExportAfter = function() {};

Order.prototype.setCustomer = function() {};

Order.prototype.getRemoteHost = function() {};

Order.prototype.getDeliveryOrderHeads = function() {};

Order.prototype.getInvoices = function() {};

Order.prototype.getInvoice = function() {};

Order.prototype.getReturnCases = function() {};

Order.prototype.getReturn = function() {};

Order.prototype.getReturnCase = function() {};

Order.prototype.createReturnCase = function() {};

Order.prototype.getCapturedAmount = function() {};

Order.prototype.getRefundedAmount = function() {};

Order.prototype.getBillingAddress = function() {};

Order.prototype.getDeliveryItem = function() {};

Order.prototype.getDeliveryItems = function() {};

Order.prototype.getReturnCaseItem = function() {};

Order.prototype.status = null;
Order.prototype.orderNo = null;
Order.prototype.exportStatus = null;
Order.prototype.createdBy = null;
Order.prototype.confirmationStatus = null;
Order.prototype.shippingStatus = null;
Order.prototype.paymentStatus = null;
Order.prototype.paymentTransaction = null;
Order.prototype.orderToken = null;
Order.prototype.invoiceNo = null;
Order.prototype.sourceCode = null;
Order.prototype.sourceCodeGroupID = null;
Order.prototype.sourceCodeGroup = null;
Order.prototype.notes = null;
Order.prototype.originalOrderNo = null;
Order.prototype.originalOrder = null;
Order.prototype.replaceCode = null;
Order.prototype.replaceDescription = null;
Order.prototype.replacementOrderNo = null;
Order.prototype.replacementOrder = null;
Order.prototype.replacedOrderNo = null;
Order.prototype.replacedOrder = null;
Order.prototype.currentOrderNo = null;
Order.prototype.currentOrder = null;
Order.prototype.cancelCode = null;
Order.prototype.cancelDescription = null;
Order.prototype.externalOrderNo = null;
Order.prototype.externalOrderStatus = null;
Order.prototype.externalOrderText = null;
Order.prototype.customerLocaleID = null;
Order.prototype.customerOrderReference = null;
Order.prototype.affiliatePartnerName = null;
Order.prototype.affiliatePartnerID = null;
Order.prototype.exportAfter = null;
Order.prototype.remoteHost = null;
Order.prototype.deliveryOrderHeads = null;
Order.prototype.invoices = null;
Order.prototype.invoice = null;
Order.prototype.returnCases = null;
Order.prototype.return = null;
Order.prototype.returnCase = null;
Order.prototype.capturedAmount = null;
Order.prototype.refundedAmount = null;
Order.prototype.billingAddress = null;
Order.prototype.deliveryItem = null;
Order.prototype.deliveryItems = null;
Order.prototype.returnCaseItem = null;

Order.ORDER_STATUS_REPLACED = 1;
Order.ORDER_STATUS_FAILED = 2;

module.exports = Order;
