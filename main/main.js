const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var inputItems=loadAllItems();
	var numOfItems=[0,0,0,0,0,0];
	var sum=0;
	for(let i=0;i<inputs.length;i++){
		for(let j=0;j<inputItems.length;j++){
			if(inputItems[j]['barcode']==inputs[i]){
				numOfItems[j]++;
				sum+=inputItems[j]['price'];
			}
		}
	}
	var str='***<没钱赚商店>购物清单***';
	for(let i=0;i<numOfItems.length;i++){
		if(numOfItems[i]!=0){
			str+='\n名称：'+inputItems[i]['name']+'，数量：'+numOfItems[i]+inputItems[i]['unit']+'，单价：'+inputItems[i]['price']+'(元)，小计：'+inputItems[i]['price']*numOfItems[i]+'(元)';
		}
	}
	str+='\n----------------------\n总计：'+sum+'(元)'+'\n**********************';
	return str;
};
