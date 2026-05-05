function timeTableGrid(size){
     for (let i = 1; i <= size; i++){
        let row="";
        
        for (let j = 1; j <= size; j++){
        row += (i *j) + "\t";
     }
   console.log(row);
}}
timeTableGrid(9);

