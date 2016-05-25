var _super = require('./LineItem');

var ProductLineItem = function() {
    this.custom = {};
};

ProductLineItem.prototype = new _super();

ProductLineItem.prototype.getParent = function() {};

ProductLineItem.prototype.getStatus = function() {};

ProductLineItem.prototype.getQuantity = function() {};

ProductLineItem.prototype.isBonusProductLineItem = function() {};

ProductLineItem.prototype.getCategory = function() {};

ProductLineItem.prototype.getProduct = function() {};

ProductLineItem.prototype.getOptionModel = function() {};

ProductLineItem.prototype.getMinOrderQuantity = function() {};

ProductLineItem.prototype.getStepQuantity = function() {};

ProductLineItem.prototype.getManufacturerName = function() {};

ProductLineItem.prototype.getManufacturerSKU = function() {};

ProductLineItem.prototype.getCategoryID = function() {};

ProductLineItem.prototype.getProductID = function() {};

ProductLineItem.prototype.setCategoryID = function() {};

ProductLineItem.prototype.setQuantityValue = function() {};

ProductLineItem.prototype.getQuantityValue = function() {};

ProductLineItem.prototype.getPosition = function() {};

ProductLineItem.prototype.setPosition = function() {};

ProductLineItem.prototype.setShipment = function() {};

ProductLineItem.prototype.getProductListItem = function() {};

ProductLineItem.prototype.updatePrice = function() {};

ProductLineItem.prototype.setPriceValue = function() {};

ProductLineItem.prototype.getCapturedAmount = function() {};

ProductLineItem.prototype.getRefundedAmount = function() {};

ProductLineItem.prototype.updateQuantity = function() {};

ProductLineItem.prototype.isBundledProductLineItem = function() {};

ProductLineItem.prototype.isOptionProductLineItem = function() {};

ProductLineItem.prototype.createPriceAdjustment = function() {};

ProductLineItem.prototype.getPriceAdjustmentByPromotionID = function() {};

ProductLineItem.prototype.getPriceAdjustments = function() {};

ProductLineItem.prototype.removePriceAdjustment = function() {};

ProductLineItem.prototype.getShipment = function() {};

ProductLineItem.prototype.getProductName = function() {};

ProductLineItem.prototype.setProductName = function() {};

ProductLineItem.prototype.getMinOrderQuantityValue = function() {};

ProductLineItem.prototype.setMinOrderQuantityValue = function() {};

ProductLineItem.prototype.getStepQuantityValue = function() {};

ProductLineItem.prototype.setStepQuantityValue = function() {};

ProductLineItem.prototype.getAdjustedGrossPrice = function() {};

ProductLineItem.prototype.getAdjustedNetPrice = function() {};

ProductLineItem.prototype.getAdjustedTax = function() {};

ProductLineItem.prototype.getBundledProductLineItems = function() {};

ProductLineItem.prototype.getOptionProductLineItems = function() {};

ProductLineItem.prototype.getOptionID = function() {};

ProductLineItem.prototype.getOptionValueID = function() {};

ProductLineItem.prototype.updateOptionValue = function() {};

ProductLineItem.prototype.setManufacturerName = function() {};

ProductLineItem.prototype.setManufacturerSKU = function() {};

ProductLineItem.prototype.getBonusDiscountLineItem = function() {};

ProductLineItem.prototype.isCatalogProduct = function() {};

ProductLineItem.prototype.updateOptionPrice = function() {};

ProductLineItem.prototype.setCategory = function() {};

ProductLineItem.prototype.getProductInventoryList = function() {};

ProductLineItem.prototype.getProductInventoryListID = function() {};

ProductLineItem.prototype.setProductInventoryList = function() {};

ProductLineItem.prototype.setProductInventoryListID = function() {};

ProductLineItem.prototype.getAdjustedPrice = function() {};

ProductLineItem.prototype.getProratedPrice = function() {};

ProductLineItem.prototype.getProratedPriceAdjustmentPrices = function() {};

ProductLineItem.prototype.getShippingLineItem = function() {};

ProductLineItem.prototype.createShippingLineItem = function() {};

ProductLineItem.prototype.removeShippingLineItem = function() {};

ProductLineItem.prototype.isGift = function() {};

ProductLineItem.prototype.setGift = function() {};

ProductLineItem.prototype.getGiftMessage = function() {};

ProductLineItem.prototype.setGiftMessage = function() {};

ProductLineItem.prototype.getExternalLineItemStatus = function() {};

ProductLineItem.prototype.setExternalLineItemStatus = function() {};

ProductLineItem.prototype.getExternalLineItemText = function() {};

ProductLineItem.prototype.setExternalLineItemText = function() {};

ProductLineItem.prototype.getQualifyingProductLineItemForBonusProduct = function() {};

ProductLineItem.prototype.getRelatedBonusProductLineItems = function() {};

ProductLineItem.prototype.replaceProduct = function() {};

ProductLineItem.prototype.getAllocatedQuantity = function() {};

ProductLineItem.prototype.getSplitSourceItemId = function() {};

ProductLineItem.prototype.getDeliveryItems = function() {};

ProductLineItem.prototype.parent = null;
ProductLineItem.prototype.status = null;
ProductLineItem.prototype.quantity = null;
ProductLineItem.prototype.category = null;
ProductLineItem.prototype.product = null;
ProductLineItem.prototype.optionModel = null;
ProductLineItem.prototype.minOrderQuantity = null;
ProductLineItem.prototype.stepQuantity = null;
ProductLineItem.prototype.manufacturerName = null;
ProductLineItem.prototype.manufacturerSKU = null;
ProductLineItem.prototype.categoryID = null;
ProductLineItem.prototype.productID = null;
ProductLineItem.prototype.quantityValue = null;
ProductLineItem.prototype.position = null;
ProductLineItem.prototype.productListItem = null;
ProductLineItem.prototype.capturedAmount = null;
ProductLineItem.prototype.refundedAmount = null;
ProductLineItem.prototype.priceAdjustmentByPromotionID = null;
ProductLineItem.prototype.priceAdjustments = null;
ProductLineItem.prototype.shipment = null;
ProductLineItem.prototype.productName = null;
ProductLineItem.prototype.minOrderQuantityValue = null;
ProductLineItem.prototype.stepQuantityValue = null;
ProductLineItem.prototype.adjustedGrossPrice = null;
ProductLineItem.prototype.adjustedNetPrice = null;
ProductLineItem.prototype.adjustedTax = null;
ProductLineItem.prototype.bundledProductLineItems = null;
ProductLineItem.prototype.optionProductLineItems = null;
ProductLineItem.prototype.optionID = null;
ProductLineItem.prototype.optionValueID = null;
ProductLineItem.prototype.bonusDiscountLineItem = null;
ProductLineItem.prototype.productInventoryList = null;
ProductLineItem.prototype.productInventoryListID = null;
ProductLineItem.prototype.adjustedPrice = null;
ProductLineItem.prototype.proratedPrice = null;
ProductLineItem.prototype.proratedPriceAdjustmentPrices = null;
ProductLineItem.prototype.shippingLineItem = null;
ProductLineItem.prototype.giftMessage = null;
ProductLineItem.prototype.externalLineItemStatus = null;
ProductLineItem.prototype.externalLineItemText = null;
ProductLineItem.prototype.qualifyingProductLineItemForBonusProduct = null;
ProductLineItem.prototype.relatedBonusProductLineItems = null;
ProductLineItem.prototype.allocatedQuantity = null;
ProductLineItem.prototype.splitSourceItemId = null;
ProductLineItem.prototype.deliveryItems = null;

module.exports = ProductLineItem;
