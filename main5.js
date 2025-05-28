class Laptop{
	id=null;
	model=null;
	processor=null;
	graphicsCard=null;
	storageCapacity=null;
	screenSize=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.model=dataObj.model;
		this.processor=dataObj.processor;
		this.graphicsCard=dataObj.graphicsCard;
		this.storageCapacity=dataObj.storageCapacity;
		this.screenSize=dataObj.screenSize;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.model}</td>
					<td>${this.processor}</td>
					<td>${this.graphicsCard}</td>
					<td>${this.storageCapacity}</td>
					<td>${this.screenSize}</td>
					<td>
						<button data-id="${this.id}" class="edit-laptop btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-laptop btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.model}">${this.model}</option>`
	}
	edit(dataObj){
		this.model=dataObj.model;
		this.processor=dataObj.processor;
		this.graphicsCard=dataObj.graphicsCard;
		this.storageCapacity=dataObj.storageCapacity;
		this.screenSize=dataObj.screenSize;
	}
}

class Manufacturer{
	id=null;
	nameManufacturer=null;
	country=null;
	location=null;
	clas=null;
	warranty=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.nameManufacturer=dataObj.nameManufacturer;
		this.country=dataObj.country;
		this.location=dataObj.location;
		this.clas=dataObj.clas;
		this.warranty=dataObj.warranty;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.nameManufacturer}</td>
					<td>${this.country}</td>
					<td>${this.location}</td>
					<td>${this.clas}</td>
					<td>${this.warranty}</td>
					<td>
						<button data-id="${this.id}" class="edit-manufacturer btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-manufacturer btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.nameManufacturer}">${this.nameManufacturer}</option>`
	}
	edit(dataObj){
		this.nameManufacturer=dataObj.nameManufacturer;
		this.country=dataObj.country;
		this.location=dataObj.location;
		this.clas=dataObj.clas;
		this.warranty=dataObj.warranty;
	}
}
class MarketProposal{
	constructor(dataObj){
		this.id=dataObj.id;
		this.laptopModel=dataObj.laptopModel;
		this.manufacturer=dataObj.manufacturer;
		this.batchSize=dataObj.batchSize;
		this.date=dataObj.date;
		this.price=dataObj.price;
		
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.laptopModel}</td>
					<td>${this.manufacturer}</td>
					<td>${this.batchSize}</td>
					<td>${this.date}</td>
					<td>${this.price}</td>
					<td>
						<button data-id="${this.id}" class="edit-marketProposal btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-marketProposal btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	edit(dataObj){
		this.laptopModel=dataObj.laptopModel;
		this.manufacturer=dataObj.manufacturer;
		this.batchSize=dataObj.batchSize;
		this.date=dataObj.date;
		this.price=dataObj.price;
	}
}
class BaseList{
	constructor(){
		//this.id=1;
		this.list=[];
	}
	edit(dataObj){
		for(let i=0;i<this.list.length;i++){
			if(dataObj.id==this.list[i].id){
				this.list[i].edit(dataObj);
				break;
			}
		}
	}
	delete(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				this.list.splice(i,1);
				break;
			}
		}
	}
	displayTableRows(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsTableRow();
		}
		
		return content;
	}
	displaySelectOptions(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsOption();
		}
		return content;
	}
	getById(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				return this.list[i];
			}
		}
	}
}
class LaptopList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let laptop=new Laptop(dataObj);
		this.list.push(laptop);
	}
	
}
class ManufacturerList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let manufacturer=new Manufacturer(dataObj);
		this.list.push(manufacturer);
	}
}
class MarketProposalList extends BaseList{
	add(dataObj){
		dataObj.id=this.id++
		let marketProposal=new MarketProposal(dataObj);
		this.list.push(marketProposal);
	}
}
let laptops=new LaptopList();
fetch('https://68374278664e72d28e4420c5.mockapi.io/api/laptop')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		laptops.add(data[i]);
	}
	displayLaptops();
  });

let manufacturers=new ManufacturerList();
fetch('https://68374278664e72d28e4420c5.mockapi.io/api/manufacturer')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		manufacturers.add(data[i]);
	}
	displayManufacturers();
  });  
let marketProposals=new MarketProposalList();
function displayMarketProposals(){
	const marketProposalTab = document.getElementById('marketProposal');
	let marketProposalTabContent=`
		<h3>Ринкова пропозиція ПК</h3>
		<button id="addMarketProposal" class="btn btn-success" data-toggle="modal" data-target="#marketProposalsModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Назва</th>
					<th>Країна</th>
					<th>Місце розміщення</th>
					<th>Клас ПК</th>
					<th>Гарантія</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	marketProposalTabContent+=marketProposals.displayTableRows();
	marketProposalTabContent+=`</tbody>
		</table>`;
	marketProposalTab.innerHTML=marketProposalTabContent;	
}  
function displayLaptops(){
	const laptopTab=document.getElementById('laptop');
	const laptopSelect=document.getElementById('marketProposalLaptopModelInput');
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
	laptopSelectContent+=laptops.displaySelectOptions()
	laptopTabContent+=laptops.displayTableRows();
	laptopTabContent+=`</tbody>
		</table>`;
	laptopTab.innerHTML=laptopTabContent;
	laptopSelect.innerHTML=laptopSelectContent;
}
function displayManufacturers(){
	const manufacturerTab=document.getElementById('manufacturer');
	const manufacturerSelect=document.getElementById('manufacturerNameManufacturerInput');
	let manufacturerSelectContent=``;
	let manufacturerTabContent=`
		<h3>Фірма виробник ПК</h3>
		<button id="addManufacturer" class="btn btn-success" data-toggle="modal" data-target="#manufacturerModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Виробник</th>
					<th>Країна</th>
					<th>Локація</th>
					<th>Клас</th>
					<th>Гарантія</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	manufacturerSelectContent+=manufacturers.displaySelectOptions()
	manufacturerTabContent+=manufacturers.displayTableRows();
	manufacturerTabContent+=`</tbody>
		</table>`;
	manufacturerTab.innerHTML=manufacturerTabContent;
	manufacturerSelect.innerHTML=manufacturerSelectContent;
}
displayMarketProposals();

//event processors
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-marketProposal')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	marketProposals.delete(elementId);
	displayMarketProposals();
  } else if(e.target.classList.contains('delete-laptop')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	laptops.delete(elementId);
	fetch('https://68374278664e72d28e4420c5.mockapi.io/api/laptop/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayLaptops();
	});	
  } else if(e.target.classList.contains('delete-manufacturer')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	manufacturers.delete(elementId);
	fetch('https://68374278664e72d28e4420c5.mockapi.io/api/manufacturer/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayManufacturers();
	});
	
  } else if(e.target.classList.contains('edit-manufacturer')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let manufacturer=manufacturers.getById(elementId);
	document.getElementById('manufacturerIdInput').value=manufacturer.id;
	document.getElementById('manufacturerNameManufacturerInput').value=manufacturer.nameManufacturer;
	document.getElementById('manufacturerCountryInput').value=manufacturer.country; 
	document.getElementById('manufacturerLocationInput').value=manufacturer.location;
	document.getElementById('manufacturerClasInput').value=manufacturer.clas;
	document.getElementById('manufacturerWarrantyInput').value=manufacturer.warranty;
	document.getElementById('addManufacturer').click();
	
  } else if(e.target.classList.contains('edit-laptop')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let laptop=laptops.getById(elementId);
	document.getElementById('laptopIdInput').value=laptop.id;
	document.getElementById('laptopModelInput').value=laptop.model;
	document.getElementById('laptopProcessorInput').value=laptop.processor; 
	document.getElementById('laptopGraphicsCardInput').value=laptop.graphicsCard;
	document.getElementById('laptopStorageCapacityInput').value=laptop.storageCapacity;
	document.getElementById('laptopScreenSizeInput').value=laptop.screenSize;
	document.getElementById('addLaptop').click();
  } else if(e.target.classList.contains('edit-marketProposal')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let marketProposal=marketProposals.getById(elementId);
	document.getElementById('marketProposalIdInput').value=marketProposal.id;
	document.getElementById('marketProposalLaptopModelInput').value=marketProposal.laptopModel;
	document.getElementById('marketProposalManufacturerInput').value=marketProposal.manufacturer; 
	document.getElementById('marketProposalBatchSizeInput').value=marketProposal.batchSize;
	document.getElementById('marketProposalDateInput').value=marketProposal.date;
	document.getElementById('marketProposalPriceInput').value=marketProposal.price;
	document.getElementById('addMarketProposal').click();
  }
});
document.addEventListener('submit', function(e){
	if(e.target.id=="manufacturerForm"){
		e.preventDefault();
		let id=document.getElementById('manufacturerIdInput').value;
		let nameManufacturer=document.getElementById('manufacturerNameManufacturerInput').value;
		let country=document.getElementById('manufacturerCountryInput').value; 
		let location=document.getElementById('manufacturerLocationInput').value;
		let clas=document.getElementById('manufacturerClasInput').value;
		let warranty=document.getElementById('manufacturerWarrantyInput').value;
		let newManufacturer={
			id:id,
			nameManufacturer:nameManufacturer,
			country:country,
			location:location,
			clas:clas,
			warranty:warranty
		}
		if(id==""){
			fetch('https://68374278664e72d28e4420c5.mockapi.io/api/manufacturer/',{
				method:"POST",
				body:JSON.stringify(newManufacturer)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					manufacturers.add(data[i]);
				}
				displayManufacturers();
			});		
			manufacturers.add(newManufacturer);
		} else{
			fetch('https://68374278664e72d28e4420c5.mockapi.io/api/manufacturer/'+newManufacturer.id,{
				method:"PUT",
				body:JSON.stringify(newManufacturer)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					manufacturers.add(data[i]);
				}
				displayManufacturers();
			});	
			manufacturers.edit(newManufacturer);
		}
		document.getElementById('manufacturerIdInput').value="";
		document.getElementById('manufacturerForm').reset();
		document.getElementById('closeManufacturerModal').click();
		
	} else if(e.target.id=="laptopForm"){
		e.preventDefault();
		let id=document.getElementById('laptopIdInput').value;
		let model=document.getElementById('laptopModelInput').value;
		let processor=document.getElementById('laptopProcessorInput').value; 
		let graphicsCard=document.getElementById('laptopGraphicsCardInput').value;
		let storageCapacity=document.getElementById('laptopStorageCapacityInput').value;
		let screenSize=document.getElementById('laptopScreenSizeInput').value;
		
			let newLaptop={
				id:id,
				model:model,
				processor:processor,
				graphicsCard:graphicsCard,
				storageCapacity:storageCapacity,
				screenSize:screenSize
				}
		if(id==""){
			fetch('https://68374278664e72d28e4420c5.mockapi.io/api/laptop/',{
				method:"POST",
				body:JSON.stringify(newLaptop)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					laptops.add(data[i]);
				}
				displayLaptops();
			});		
			laptops.add(newLaptop)
			
		} else{
			fetch('https://68374278664e72d28e4420c5.mockapi.io/api/laptop/'+newLaptop.id,{
				method:"PUT",
				body:JSON.stringify(newLaptop)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					laptops.add(data[i]);
				}
				displayLaptops();
			});	
			laptops.edit(newLaptop)
		}
		displayLaptops();
		document.getElementById('laptopIdInput').value="";
		document.getElementById('laptopForm').reset();
		document.getElementById('closeLaptopModal').click();
		
	} else if(e.target.id=="marketProposalForm"){
		e.preventDefault();
		let id=document.getElementById('marketProposalIdInput').value;
		let laptopModel=document.getElementById('marketProposalLaptopModelInput').value;
		let manufacturer=document.getElementById('marketProposalManufacturerInput').value; 
		let batchSize=document.getElementById('marketProposalBatchSizeInput').value;
		let date=document.getElementById('marketProposalDateInput').value;
		let price=document.getElementById('marketProposalPriceInput').value;
		
			let newMarketProposals={
				id:id,
				laptopModel:laptopModel,
				manufacturer:manufacturer,
				batchSize:batchSize,
				date:date,
				price:price
				}
		if(id==""){
			marketProposals.add(newMarketProposals)
		} else{
			marketProposals.edit(newMarketProposals)
		}
		displayMarketProposals();
		document.getElementById('marketProposalIdInput').value="";
		document.getElementById('marketProposalForm').reset();
		document.getElementById('closeMarketProposalModal').click();
		
	} 
  });
