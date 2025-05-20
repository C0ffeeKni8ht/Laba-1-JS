let laptop=[
    {
		id:1,
        model:"ASUS Vivobook 16X K3605ZF-RP714",
        processor:"Intel Core i5-12500H",
        graphicsCard:"nVidia GeForce RTX 2050",
 		storageСapacity:"16 ГБ",
 		screenSize:"16"
    },
    {
		id:2,
        model:"Acer Nitro V 15 ANV15-51-55UE (NH.QQEEU.001)",
        processor:"Intel Core i5-13420H",
        graphicsCard:"nVidia GeForce RTX 4060",
        storageСapacity:"16 ГБ",
 		screenSize:"15.6"
    },
    {
		id:3,
        model:"Samsung Galaxy Book4 (NP750XGK-KS2US)",
        processor:"Intel Core i5-1235U",
        graphicsCard:"Intel Iris Xe Graphics",
        storageСapacity:"8 ГБ",
 		screenSize:"15.6"
    }
];
let marketProposals = [
    {
		id:1,
        laptopModel:"ASUS Vivobook 16X K3605ZF-RP714",
        manufacturer:"ASUS Inc.",
        batchSize:120,
        date:"2025-04-10",
        price:1300
    },
    {
		id:2,
        laptopModel:"Acer Nitro V 15 ANV15-51-55UE (NH.QQEEU.001)",
        manufacturer:"Acer Inc.",
        batchSize:80,
        date:"2025-04-12",
        price:1400
    },
    {
		id:3,
        laptopModel:"Samsung Galaxy Book4 (NP750XGK-KS2US)",
        manufacturer:"Samsung Electronics",
        batchSize:60,
        date:"2025-04-15",
        price:1100
    }
  ];
let manufacturers=[
	{
		id:1,
		nameManufacturer:"ASUS Inc.",
		country:"Taiwan",
        location:"Taipei",
		clas:"Multimedia / Universal",
		warranty:"2 years"
	},
    {
		id:2,
		nameManufacturer:"Acer Inc.",
        country:"Taiwan",
        location:"New Taipei City",
		clas:"Gaming",
		warranty:"3 years"
	},
    {
		id:3,
		nameManufacturer:"Samsung Electronics",
        country:"South Korea",
        location:"Suwon",
		clas:"Multimedia",
		warranty:"2 years",
	}
]

laptopLastId=3;
marketProposalsLastId=3;
manufacturersLastId=3;

function displayMarketProposals(){
	const marketProposalsTab=document.getElementById('marketProposals');
	let marketProposalsTabContent=`
		<h3>Ринкова пропозиція ПК</h3>
		<button id="addMarketProposals" class="btn btn-success" data-toggle="modal" data-target="#marketProposalsModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Модель ноутбука</th>
					<th>Фірма виробник</th>
					<th>Об’єм партії</th>
					<th>Дата</th>
					<th>Ціна</th>
					<th>Дії</th>
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
					<td>
						<button data-id="${marketProposals[i].id}" class="edit-marketProposals btn btn-warning">Редагувати</button>
						<button data-id="${marketProposals[i].id}" class="delete-marketProposals btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}
	marketProposalsTabContent+=`</tbody>
		</table>`;
	marketProposalsTab.innerHTML=marketProposalsTabContent;	
}  
function displayLaptop(){
	const laptopTab=document.getElementById('laptop');
	const laptopSelect=document.getElementById('laptopModelInput');
	let laptopSelectContent=``;
	let laptopTabContent=`
		<h3>Ноутбуки</h3>
		<button id="addLaptop" class="btn btn-success" data-toggle="modal" data-target="#laptopModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Модель</th>
					<th>Процесор</th>
					<th>Відеокарта</th>
					<th>Об’єм пам’яті</th>
					<th>Розмір екрану</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	for(let i=0;i<laptop.length;i++){
		laptopSelectContent+=`<option value="${laptop[i].model}">${laptop[i].model}</option>`
		
		laptopTabContent+=`
				<tr>
					<td>${laptop[i].model}</td>
					<td>${laptop[i].processor}</td>
					<td>${laptop[i].graphicsCard}</td>
					<td>${laptop[i].storageСapacity}</td>
					<td>${laptop[i].screenSize}</td>
					<td>
						<button data-id="${laptop[i].id}" class="edit-laptop btn btn-warning">Редагувати</button>
						<button data-id="${laptop[i].id}" class="delete-laptop btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}

	laptopTabContent+=`</tbody>
		</table>`;
	laptopTab.innerHTML=laptopTabContent;
	laptopSelect.innerHTML=laptopSelectContent;
}
function displayManufacturers(){
	const manufacturersTab=document.getElementById('manufacturers');
	const manufacturersSelect=document.getElementById('manufacturersNameManufacturerInput');
	let manufacturersSelectContent=``;
	let manufacturersTabContent=`
		<h3>Фірма виробник ПК</h3>
		<button id="addManufacturers" class="btn btn-success" data-toggle="modal" data-target="#manufacturersModal">Додати</button>
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
		manufacturersSelectContent+=`<option value="${manufacturers[i].nameManufacturer}">${manufacturers[i].nameManufacturer}</option>`
		manufacturersTabContent+=`
				<tr>
					<td>${manufacturers[i].nameManufacturer}</td>
					<td>${manufacturers[i].country}</td>
					<td>${manufacturers[i].location}</td>
					<td>${manufacturers[i].clas}</td>
					<td>${manufacturers[i].warranty}</td>
					<td>
						<button data-id="${manufacturers[i].id}" class="edit-manufacturers btn btn-warning">Редагувати</button>
						<button data-id="${manufacturers[i].id}" class="delete-manufacturers btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}
	    manufacturersTabContent+=`</tbody>
		</table>`;
	    manufacturersTab.innerHTML=manufacturersTabContent;
        manufacturersSelect.innerHTML=manufacturersSelectContent;
}
displayMarketProposals();
displayLaptop();
displayManufacturers();
//event processors
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-marketProposals')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<marketProposals.length;i++){
		if(elementId==marketProposals[i].id){
			marketProposals.splice(i,1);
			break;
		}
	}
	displayMarketProposals();
  } else if(e.target.classList.contains('delete-laptop')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<laptop.length;i++){
		if(elementId==laptop[i].id){
			laptop.splice(i,1);
			break;
		}
	}
	displayLaptop();
  } else if(e.target.classList.contains('delete-manufacturers')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<manufacturers.length;i++){
		if(elementId==manufacturers[i].id){
			manufacturers.splice(i,1);
			break;
		}
	}
	displayManufacturers();
  } else if(e.target.classList.contains('edit-manufacturers')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<manufacturers.length;i++){
		if(elementId==manufacturers[i].id){
			document.getElementById('manufacturersIdInput').value=manufacturers[i].id;
			document.getElementById('manufacturersNameManufacturerInput').value=manufacturers[i].nameManufacturer;
			document.getElementById('manufacturersCountryInput').value=manufacturers[i].country; 
			document.getElementById('manufacturersLocationInput').value=manufacturers[i].location;
			document.getElementById('manufacturersClassInput').value=manufacturers[i].clas;
			document.getElementById('manufacturersWarrantyInput').value=manufacturers[i].warranty;
			document.getElementById('addManufacturers').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-laptop')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<laptop.length;i++){
		if(elementId==laptop[i].id){
			document.getElementById('laptopIdInput').value=laptop[i].id;
			document.getElementById('laptopModelInput').value=laptop[i].model;
			document.getElementById('laptopProcessorInput').value=laptop[i].processor; 
			document.getElementById('laptopGraphicsCardInput').value=laptop[i].graphicsCard;
			document.getElementById('laptopStorageСapacityInput').value=laptop[i].storageСapacity;
			document.getElementById('laptopScreenSizeInput').value=laptop[i].screenSize;
			document.getElementById('addLaptop').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-marketProposals')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<marketProposals.length;i++){
		if(elementId==marketProposals[i].id){
			document.getElementById('marketProposalsIdInput').value=marketProposals[i].id;
			document.getElementById('marketProposalsLaptopModelInput').value=marketProposals[i].laptopModel;
			document.getElementById('marketProposalsManufacturerInput').value=marketProposals[i].manufacturer; 
			document.getElementById('marketProposalsBatchSizeInput').value=marketProposals[i].batchSize;
			document.getElementById('marketProposalsDateInput').value=marketProposals[i].date;
			document.getElementById('marketProposalsPriceInput').value=marketProposals[i].price;
			document.getElementById('addMarketProposals').click();
			break;
		}
	}
  }
});
document.addEventListener('submit', function(e){
	if(e.target.id=="manufacturersForm"){
		e.preventDefault();
		let id=document.getElementById('manufacturersIdInput').value;
		let nameManufacturer=document.getElementById('manufacturersNameManufacturerInput').value;
		let country=document.getElementById('manufacturersCountryInput').value; 
		let location=document.getElementById('manufacturersLocationInput').value;
		let clas=document.getElementById('manufacturersClassInput').value;
		let warranty=document.getElementById('manufacturersWarrantyInput').value;
		if(id==""){
			let newManufacturers={
				id:++manufacturersLastId,
				nameManufacturer:nameManufacturer,
				country:country,
				location:location,
				clas:clas,
				warranty:warranty
				}
			manufacturers.push(newManufacturers);
		} else{
			for(let i=0;i<manufacturers.length;i++){
				if(id==manufacturers[i].id){
					manufacturers[i].id=document.getElementById('manufacturersIdInput').value;
					manufacturers[i].nameManufacturer=document.getElementById('manufacturersNameManufacturerInput').value;
					manufacturers[i].country=document.getElementById('manufacturersCountryInput').value; 
					manufacturers[i].location=document.getElementById('manufacturersLocationInput').value;
					manufacturers[i].clas=document.getElementById('manufacturersClassInput').value;
					manufacturers[i].warranty=document.getElementById('manufacturersWarrantyInput').value;
					break;
				}
			}
		}
		displayManufacturers();
		document.getElementById('manufacturersIdInput').value="";
		document.getElementById('manufacturersForm').reset();
		document.getElementById('closeManufacturersModal').click();
		
	} else if(e.target.id=="laptopForm"){
		e.preventDefault();
		let id=document.getElementById('laptopIdInput').value;
		let model=document.getElementById('laptopModelInput').value;
		let processor=document.getElementById('laptopProcessorInput').value; 
		let graphicsCard=document.getElementById('laptopGraphicsCardInput').value;
		let storageCapacity=document.getElementById('laptopStorageСapacityInput').value;
		let screenSize=document.getElementById('laptopScreenSizeInput').value;
		if(id==""){
			let newLaptop={
				id:++laptopLastId,
				model:model,
				processor:processor,
				graphicsCard:graphicsCard,
				storageCapacity:storageCapacity,
				screenSize:screenSize
				}
            laptop.push(newLaptop)
		} else{
			for(let i=0;i<laptop.length;i++){
				if(id==laptop[i].id){
					laptop[i].id=document.getElementById('laptopIdInput').value
					laptop[i].model=document.getElementById('laptopModelInput').value
					laptop[i].processor=document.getElementById('laptopProcessorInput').value
					laptop[i].graphicsCard=document.getElementById('laptopGraphicsCardInput').value
					laptop[i].storageСapacity=document.getElementById('laptopStorageСapacityInput').value
					laptop[i].screenSize=document.getElementById('laptopScreenSizeInput').value
					break;
				}
			}
		}
		displayLaptop();
		document.getElementById('laptopIdInput').value="";
		document.getElementById('laptopForm').reset();
		document.getElementById('closelaptopModal').click();
		
	} else if(e.target.id=="marketProposalsForm"){
		e.preventDefault();
		let id=document.getElementById('marketProposalsIdInput').value;
		let laptopModel=document.getElementById('marketProposalsLaptopModelInput').value;
		let manufacturer=document.getElementById('marketProposalsManufacturerInput').value; 
		let batchSize=document.getElementById('marketProposalsBatchSizeInput').value;
		let date=document.getElementById('marketProposalsDateInput').value;
		let price=document.getElementById('marketProposalsPriceInput').value;
		if(id==""){
			let newMarketProposals={
				id:++marketProposalsLastId,
				laptopModel:laptopModel,
				manufacturer:manufacturer,
				batchSize:batchSize,
				date:date,
				price:price
				}
            marketProposals.push(newMarketProposals)
		} else{
			for(let i=0;i<marketProposals.length;i++){
				if(id==marketProposals[i].id){
					marketProposals[i].id=document.getElementById('marketProposalsIdInput').value
					marketProposals[i].laptopModel=document.getElementById('marketProposalsLaptopModelInput').value
					marketProposals[i].manufacturer=document.getElementById('marketProposalsManufacturerInput').value
					marketProposals[i].batchSize=document.getElementById('marketProposalsBatchSizeInput').value
					marketProposals[i].date=document.getElementById('marketProposalsDateInput').value
					marketProposals[i].price=document.getElementById('marketProposalsPriceInput').value
					break;
				}
			}
		}
		displayMarketProposals();
		document.getElementById('marketProposalsIdInput').value="";
		document.getElementById('marketProposalsForm').reset();
		document.getElementById('closeMarketProposalsModal').click();
		
	}
  });
