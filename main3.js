let laptop=[
    {
        model:"ASUS Vivobook 16X K3605ZF-RP714",
        processor:"Intel Core i5-12500H",
        graphicsCard:"nVidia GeForce RTX 2050",
        storageСapacity:"16 ГБ",
 		    screenSize:"16"
    },
    {
        model:"Acer Nitro V 15 ANV15-51-55UE (NH.QQEEU.001)",
        processor:"Intel Core i5-13420H",
        graphicsCard:"nVidia GeForce RTX 4060",
        storageСapacity:"16 ГБ",
 		    screenSize:"15.6"
    },
    {
        model:"Samsung Galaxy Book4 (NP750XGK-KS2US)",
        processor:"Intel Core i5-1235U",
        graphicsCard:"Intel Iris Xe Graphics",
        storageСapacity:"8 ГБ",
 		    screenSize:"15.6"
    }
];
let marketProposals = [
    {
        laptopModel:"ASUS Vivobook 16X K3605ZF-RP714",
        manufacturer:"ASUS Inc.",
        batchSize:120,
        date:"2025-04-10",
        price:1300
    },
    {
        laptopModel:"Acer Nitro V 15 ANV15-51-55UE (NH.QQEEU.001)",
        manufacturer:"Acer Inc.",
        batchSize:80,
        date:"2025-04-12",
        price:1400
    },
    {
        laptopModel:"Samsung Galaxy Book4 (NP750XGK-KS2US)",
        manufacturer:"Samsung Electronics",
        batchSize:60,
        date:"2025-04-15",
        price:1100
    }
  ];
let manufacturers=[
	{
		  nameManufacturer:"ASUS Inc.",
		  country:"Taiwan",
      location:"Taipei",
		  class:"Multimedia / Universal",
		  warranty:"2 years"
	},
    {
		    nameManufacturer:"Acer Inc.",
        country:"Taiwan",
        location:"New Taipei City",
		    class:"Gaming",
		    warranty:"3 years"
	},
    {
		    nameManufacturer:"Samsung Electronics",
        country:"South Korea",
        location:"Suwon",
		    class:"Multimedia",
		    warranty:"2 years",
	}
]
const manufacturersTab=document.getElementById('manufacturers');
let manufacturersTabContent=`
	<h3>Фірма виробник ПК</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Назва</th>
				<th>Країна</th>
				<th>Місце розміщення</th>
				<th>Клас ПК</th>
				<th>Гарантія</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<manufacturers.length;i++){
	manufacturersTabContent+=`
			<tr>
				<td>${manufacturers[i].nameManufacturer}</td>
				<td>${manufacturers[i].country}</td>
				<td>${manufacturers[i].location}</td>
				<td>${manufacturers[i].class}</td>
				<td>${manufacturers[i].warranty}</td>
			</tr>
	`;
}
manufacturersTabContent+=`</tbody>
	  </table>`;
manufacturersTab.innerHTML=manufacturersTabContent;	  
const laptopTab=document.getElementById('laptop');
let laptopTabContent=`
	<h3>Ноутбуки</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Модель</th>
				<th>Процесор</th>
				<th>Відеокарта</th>
				<th>Об’єм пам’яті</th>
				<th>Розмір екрану</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<laptop.length;i++){
	laptopTabContent+=`
			<tr>
				<td>${laptop[i].model}</td>
				<td>${laptop[i].processor}</td>
				<td>${laptop[i].graphicsCard}</td>
				<td>${laptop[i].storageСapacity}</td>
				<td>${laptop[i].screenSize}</td>
			</tr>
	`;
}
laptopTabContent+=`</tbody>
	  </table>`;
laptopTab.innerHTML=laptopTabContent;
const marketProposalsTab=document.getElementById('marketProposals');
let marketProposalsTabContent=`
	<h3>Ринкова пропозиція ПК</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Модель ПК</th>
				<th>Фірма виробник</th>
				<th>Об’єм партії</th>
				<th>Дата</th>
				<th>Ціна</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<marketProposals.length;i++){
	marketProposalsTabContent+=`
			<tr>
				<td>${marketProposals[i].laptopModel}</td>
				<td>${marketProposals[i].manufacturer}</td>
				<td>${marketProposals[i].batchSize}</td>
				<td>${marketProposals[i].date}</td>
				<td>${marketProposals[i].price}</td>
			</tr>
	`;
}
marketProposalsTabContent+=`</tbody>
	  </table>`;
marketProposalsTab.innerHTML=marketProposalsTabContent;
