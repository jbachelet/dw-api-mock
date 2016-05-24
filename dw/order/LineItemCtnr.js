var _super = require('../object/ExtensibleObject');
var Shipment = require('./Shipment');
var LineItemCtnr = function() {};

LineItemCtnr.prototype = new _super();

LineItemCtnr.prototype.createBillingAddress = function() {};

LineItemCtnr.prototype.getCurrencyCode = function() {};

LineItemCtnr.prototype.getProductLineItems = function() {};

LineItemCtnr.prototype.getCustomerEmail = function() {};

LineItemCtnr.prototype.getCustomer = function() {};

LineItemCtnr.prototype.getCustomerNo = function() {};

LineItemCtnr.prototype.createProductLineItem = function() {};

LineItemCtnr.prototype.createBonusProductLineItem = function() {};

LineItemCtnr.prototype.getDefaultShipment = function() {
    return this.defaultShipment;
};

LineItemCtnr.prototype.getAllProductLineItems = function() {};

LineItemCtnr.prototype.getAllGiftCertificateLineItems = function() {};

LineItemCtnr.prototype.getGiftCertificateLineItems = function() {};

LineItemCtnr.prototype.getProductQuantityTotal = function() {};

LineItemCtnr.prototype.createGiftCertificatePaymentInstrument = function() {};

LineItemCtnr.prototype.createPaymentInstrument = function() {};

LineItemCtnr.prototype.createCouponLineItem = function() {};

LineItemCtnr.prototype.getCouponLineItem = function() {};

LineItemCtnr.prototype.removeCouponLineItem = function() {};

LineItemCtnr.prototype.removePaymentInstrument = function() {};

LineItemCtnr.prototype.removeAllPaymentInstruments = function() {};

LineItemCtnr.prototype.getAllLineItems = function() {};

LineItemCtnr.prototype.getCouponLineItems = function() {};

LineItemCtnr.prototype.getBonusDiscountLineItems = function() {};

LineItemCtnr.prototype.removeBonusDiscountLineItem = function() {};

LineItemCtnr.prototype.createPriceAdjustment = function() {};

LineItemCtnr.prototype.getPriceAdjustmentByPromotionID = function() {};

LineItemCtnr.prototype.getPriceAdjustments = function() {};

LineItemCtnr.prototype.removePriceAdjustment = function() {};

LineItemCtnr.prototype.removeProductLineItem = function() {};

LineItemCtnr.prototype.createShippingPriceAdjustment = function() {};

LineItemCtnr.prototype.getShippingPriceAdjustmentByPromotionID = function() {};

LineItemCtnr.prototype.createShipment = function() {};

LineItemCtnr.prototype.getShipment = function() {};

LineItemCtnr.prototype.removeShipment = function() {};

LineItemCtnr.prototype.getShippingPriceAdjustments = function() {};

LineItemCtnr.prototype.getAllShippingPriceAdjustments = function() {};

LineItemCtnr.prototype.removeShippingPriceAdjustment = function() {};

LineItemCtnr.prototype.getShipments = function() {};

LineItemCtnr.prototype.getBillingAddress = function() {};

LineItemCtnr.prototype.setCustomerNo = function() {};

LineItemCtnr.prototype.getCustomerName = function() {};

LineItemCtnr.prototype.setCustomerName = function() {};

LineItemCtnr.prototype.setCustomerEmail = function() {};

LineItemCtnr.prototype.getMerchandizeTotalGrossPrice = function() {};

LineItemCtnr.prototype.getAdjustedMerchandizeTotalGrossPrice = function() {};

LineItemCtnr.prototype.getMerchandizeTotalNetPrice = function() {};

LineItemCtnr.prototype.getAdjustedMerchandizeTotalNetPrice = function() {};

LineItemCtnr.prototype.getMerchandizeTotalTax = function() {};

LineItemCtnr.prototype.getAdjustedMerchandizeTotalTax = function() {};

LineItemCtnr.prototype.getGiftCertificateTotalNetPrice = function() {};

LineItemCtnr.prototype.getGiftCertificateTotalGrossPrice = function() {};

LineItemCtnr.prototype.getGiftCertificateTotalTax = function() {};

LineItemCtnr.prototype.getTotalNetPrice = function() {};

LineItemCtnr.prototype.getTotalTax = function() {};

LineItemCtnr.prototype.getTotalGrossPrice = function() {};

LineItemCtnr.prototype.getShippingTotalNetPrice = function() {};

LineItemCtnr.prototype.getAdjustedShippingTotalNetPrice = function() {};

LineItemCtnr.prototype.getShippingTotalTax = function() {};

LineItemCtnr.prototype.getAdjustedShippingTotalTax = function() {};

LineItemCtnr.prototype.getShippingTotalGrossPrice = function() {};

LineItemCtnr.prototype.getAdjustedShippingTotalGrossPrice = function() {};

LineItemCtnr.prototype.getPaymentInstrument = function() {};

LineItemCtnr.prototype.getPaymentInstruments = function() {};

LineItemCtnr.prototype.getGiftCertificatePaymentInstruments = function() {};

LineItemCtnr.prototype.getProductQuantities = function() {};

LineItemCtnr.prototype.getAllProductQuantities = function() {};

LineItemCtnr.prototype.updateTotals = function() {};

LineItemCtnr.prototype.getAdjustedMerchandizeTotalPrice = function() {};

LineItemCtnr.prototype.getAdjustedShippingTotalPrice = function() {};

LineItemCtnr.prototype.getGiftCertificateTotalPrice = function() {};

LineItemCtnr.prototype.getMerchandizeTotalPrice = function() {};

LineItemCtnr.prototype.getShippingTotalPrice = function() {};

LineItemCtnr.prototype.getEtag = function() {};

LineItemCtnr.prototype.currencyCode = null;
LineItemCtnr.prototype.productLineItems = null;
LineItemCtnr.prototype.customerEmail = null;
LineItemCtnr.prototype.customer = null;
LineItemCtnr.prototype.customerNo = null;
LineItemCtnr.prototype.defaultShipment = new Shipment();
LineItemCtnr.prototype.allProductLineItems = null;
LineItemCtnr.prototype.allGiftCertificateLineItems = null;
LineItemCtnr.prototype.giftCertificateLineItems = null;
LineItemCtnr.prototype.productQuantityTotal = null;
LineItemCtnr.prototype.couponLineItem = null;
LineItemCtnr.prototype.allLineItems = null;
LineItemCtnr.prototype.couponLineItems = null;
LineItemCtnr.prototype.bonusDiscountLineItems = null;
LineItemCtnr.prototype.priceAdjustmentByPromotionID = null;
LineItemCtnr.prototype.priceAdjustments = null;
LineItemCtnr.prototype.shippingPriceAdjustmentByPromotionID = null;
LineItemCtnr.prototype.shipment = null;
LineItemCtnr.prototype.shippingPriceAdjustments = null;
LineItemCtnr.prototype.allShippingPriceAdjustments = null;
LineItemCtnr.prototype.shipments = null;
LineItemCtnr.prototype.billingAddress = null;
LineItemCtnr.prototype.customerName = null;
LineItemCtnr.prototype.merchandizeTotalGrossPrice = null;
LineItemCtnr.prototype.adjustedMerchandizeTotalGrossPrice = null;
LineItemCtnr.prototype.merchandizeTotalNetPrice = null;
LineItemCtnr.prototype.adjustedMerchandizeTotalNetPrice = null;
LineItemCtnr.prototype.merchandizeTotalTax = null;
LineItemCtnr.prototype.adjustedMerchandizeTotalTax = null;
LineItemCtnr.prototype.giftCertificateTotalNetPrice = null;
LineItemCtnr.prototype.giftCertificateTotalGrossPrice = null;
LineItemCtnr.prototype.giftCertificateTotalTax = null;
LineItemCtnr.prototype.totalNetPrice = null;
LineItemCtnr.prototype.totalTax = null;
LineItemCtnr.prototype.totalGrossPrice = null;
LineItemCtnr.prototype.shippingTotalNetPrice = null;
LineItemCtnr.prototype.adjustedShippingTotalNetPrice = null;
LineItemCtnr.prototype.shippingTotalTax = null;
LineItemCtnr.prototype.adjustedShippingTotalTax = null;
LineItemCtnr.prototype.shippingTotalGrossPrice = null;
LineItemCtnr.prototype.adjustedShippingTotalGrossPrice = null;
LineItemCtnr.prototype.paymentInstrument = null;
LineItemCtnr.prototype.paymentInstruments = null;
LineItemCtnr.prototype.giftCertificatePaymentInstruments = null;
LineItemCtnr.prototype.productQuantities = null;
LineItemCtnr.prototype.allProductQuantities = null;
LineItemCtnr.prototype.adjustedMerchandizeTotalPrice = null;
LineItemCtnr.prototype.adjustedShippingTotalPrice = null;
LineItemCtnr.prototype.giftCertificateTotalPrice = null;
LineItemCtnr.prototype.merchandizeTotalPrice = null;
LineItemCtnr.prototype.shippingTotalPrice = null;
LineItemCtnr.prototype.etag = null;

module.exports = LineItemCtnr;
