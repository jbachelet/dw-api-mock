var SearchModel = function() {};

SearchModel.prototype.search = function() {};

SearchModel.prototype.url = function() {};

SearchModel.prototype.getCount = function() {};

SearchModel.prototype.addRefinementValues = function() {};

SearchModel.prototype.canRelax = function() {};

SearchModel.prototype.getRefinementValue = function() {};

SearchModel.prototype.getRefinementValues = function() {};

SearchModel.prototype.getSearchPhrase = function() {};

SearchModel.prototype.getSortingCondition = function() {};

SearchModel.prototype.isEmptyQuery = function() {};

SearchModel.prototype.isRefinedByAttribute = function() {};

SearchModel.prototype.isRefinedByAttributeValue = function() {};

SearchModel.prototype.isRefinedSearch = function() {};

SearchModel.prototype.removeRefinementValues = function() {};

SearchModel.prototype.setRefinementValues = function() {};

SearchModel.prototype.setSearchPhrase = function() {};

SearchModel.prototype.setSortingCondition = function() {};

SearchModel.prototype.urlDefaultSort = function() {};

SearchModel.prototype.urlRefineAttribute = function() {};

SearchModel.prototype.urlRefineAttributeValue = function() {};

SearchModel.prototype.urlRelaxAttribute = function() {};

SearchModel.prototype.urlRelaxAttributeValue = function() {};

SearchModel.prototype.urlSort = function() {};

SearchModel.prototype.setRefinementValueRange = function() {};

SearchModel.prototype.getRefinementMinValue = function() {};

SearchModel.prototype.getRefinementMaxValue = function() {};

SearchModel.prototype.isRefinementByValueRange = function() {};

SearchModel.prototype.urlRefineAttributeValueRange = function() {};

SearchModel.prototype.count = null;
SearchModel.prototype.refinementValue = null;
SearchModel.prototype.refinementValues = null;
SearchModel.prototype.searchPhrase = null;
SearchModel.prototype.sortingCondition = null;
SearchModel.prototype.refinementMinValue = null;
SearchModel.prototype.refinementMaxValue = null;

module.exports = SearchModel;
