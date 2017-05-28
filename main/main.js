const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var numOfItems=[0,0,0,0,0,0];
	var sum=0;
	for(let i=0;i<input.length;i++){
		for(let j=0;j<loadAllItems.length;j++){
			if(loadAllItems[j][barcode]==input[i]){
				numOfItems[j]++;
				sum+=loadAllItems[j][price];
			}
		}
	}
	var str='***<没钱赚商店>购物清单***';
	for(let i=0;i<numOfItems.length;i++){
		if(numOfItems[i]!=0){
			str+='\n名称：'+loadAllItems[i][name]+',数量：'+numOfItems[i]+loadAllItems[i][unit]+',单价：'+loadAllItems[i][price]+'(元),小计：'+loadAllItems[i][price]*numOfItems[i]+'(元)';
		}
	}
	str+='\n----------------------\n总计：'+sum+'(元)'+'**********************';
	return str;
};
