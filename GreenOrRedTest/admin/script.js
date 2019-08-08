var mainContainer = document.querySelector('#main-container');
var tableColumns = document.querySelector('#table-columns');

$.ajax({
    url: 'php/data.json',
    type: 'GET',
    dataType: 'text',
    success: function (data) {
    		console.log(JSON.parse(data));
        main(JSON.parse(data))
    } 
  });




let daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
function main(data){
  generateInputs(data.GreenRaspis2Group,data.RedRaspis2Group);
  function generateInputs(tableG,tableR){
    mainContainer.innerHTML = '';
    for(let i = 0;i<7;i++){
    mainContainer.innerHTML += `<div class="row" >
                                  <div class="col-lg-6 col-sm-12" id="table-columns${i+1}">
                                    <div class="d-flex justify-content-between">
                                      <h3 class="text-left">${daysOfWeek[i]}</h3>
                                      <h5 class="text-success align-self-end">Зеленая</h5>
                                    </div><hr />
                                  </div>
                                  <div class="col-lg-6 col-sm-12" id="table-columns${i+8}">
                                    <h5 style="margin-top:43px" class="text-danger text-right">Красная</h5>
                                    <hr /></div>
                                  </div>`
    // tableColumns = document.querySelector('#main-columns'+(i+1));
      for(let j = 0;j<6;j++){
        let str = '#table-columns'+(i+1);
        document.querySelector(str).innerHTML += `<input class="form-control" type="text" value="${tableG[i][j] === undefined ? '' : tableG[i][j]}">`;
      }
      for(let j = 0;j<6;j++){
        let str = '#table-columns'+(i+8);
        document.querySelector(str).innerHTML += `<input class="form-control" type="text" value="${tableR[i][j] === undefined ? '' : tableR[i][j]}">`;
      }
    }
  }
   
  



    
    
  


  
  //Кнопка Сохранить. Считываю данные из input'ов и сохраняю их в data.json 
let datak = [[]];
  var saveme = document.querySelector('#saveme');



let raspisG = [data.GreenRaspis1Group,data.GreenRaspis2Group,data.GreenRaspis3Group,data.GreenRaspis4Group];
let raspisR = [data.RedRaspis1Group,data.RedRaspis2Group,data.RedRaspis3Group,data.RedRaspis4Group,]
let GTable;
let RTable;
for(let i = 0;i<4;i++){
  if(document.querySelectorAll('.nav-link')[i].attributes[6].value === 'true'){
    console.log(raspisG[i]);
    GTable = raspisG[i];
    RTable = raspisR[i];

  }
}

  console.log(document.querySelectorAll('.nav-link')[0].attributes[6].value);
  document.onclick = function(e){
    if(e.target.id === 'G171(1)'){
      GTable = data.GreenRaspis1Group;
      RTable = data.RedRaspis1Group;
      generateInputs(GTable,RTable);
    }else if(e.target.id === 'G171(2)'){
      GTable = data.GreenRaspis2Group;
      RTable = data.RedRaspis2Group;
      generateInputs(GTable,RTable);
    }else if(e.target.id === 'G172(1)'){
      GTable = data.GreenRaspis3Group;
      RTable = data.RedRaspis3Group;
      generateInputs(GTable,RTable);
    }else if(e.target.id === 'G172(2)'){
      GTable = data.GreenRaspis4Group;
      RTable = data.RedRaspis4Group;
      generateInputs(GTable,RTable);
    }else if(e.target.id === 'saveme'){
      save(GTable,RTable);
    }
    console.log(e.target.id);
  }

  function save(tableG,tableR){

        console.log(document.querySelectorAll('#table-columns1 .form-control'));
        for(let i = 0;i<=5;i++){
          for(let j = 0;j<=5;j++){
            let str = '#table-columns'+(i+1)+' .form-control';
             tableG[i][j] = document.querySelectorAll(str)[j].value;
          }
          for(let j = 0;j<=5;j++){
            let str = '#table-columns'+(i+8)+' .form-control';
             tableR[i][j] = document.querySelectorAll(str)[j].value;
          }
           
        }
        // console.log(table);

        $.ajax({
        url: 'php/write.php',
        type: 'POST',
        dataType: 'json',
        data: {key: JSON.stringify(data)},
        success: function (data) {
            console.log(data);
        } 
      });
    }

}

  
