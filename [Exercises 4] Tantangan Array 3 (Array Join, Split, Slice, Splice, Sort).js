var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 
var arrInput;
var dateOfBirthSort;
var month;
var dateSort;
var date;
var name;

function dataHandling2(arrInput) {
    arrInput.splice(1,1, 'Roman Alamsyah Elsharawy')
    arrInput.splice(2, 1, 'Provinsi Bandar Lampung')
    arrInput.splice(4,1)
    arrInput.splice(4, 2, 'Pria', 'SMA Internasional Metro')
    console.log(input)
    
    dateOfBirthSort = arrInput[3].split('/')
    console.log(changeMonth(dateOfBirthSort))

    var newDateSort = dateOfBirthSort
    console.log(sortDate(newDateSort))
    console.log(dateOfBirthSort.join(' - '))
    
    name = arrInput[1]
    console.log(name.slice(0,15))
    
}

function changeMonth(month) {
  switch(month[1]) {
    
    case '01': {return 'Januari';}
    case '02': {return 'Februari';}
    case '03': {return 'Maret';}
    case '04': {return 'April';}
    case '05': {return 'Mei';}
    case '06': {return 'Juni';}
    case '07': {return 'Juli';}
    case '08': {return 'Agustus';}
    case '09': {return 'September';}
    case '10': {return 'Oktober';}
    case '11': {return 'November';}
    case '12': {return 'Desember';}
  }
  console.log(month[1])
}

function sortDate(date) {
    var result = date.sort(function(value1, value2) { return Number(value1)<Number(value2)});
    return result
    
}

dataHandling2(input);