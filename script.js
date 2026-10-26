function shuffle(array) {
    let temp_num = 0,
        temp_rnum = 0;
    for (let index = 0; index < array.length; index++) {
        temp_rnum = Math.floor(Math.random() * 10) % 3;
            temp_num = array[temp_rnum];
            array[temp_rnum] = array[0];
            array[0] = temp_num;
    }
    return array;

}

function Ulozenie_planszy() {
    console.log("wywolanie funkcji");
    let baza = [1,2,3,4,5,6,7,8,9], 
    shuffled_baza = [],
    rnum = 0,
    i = 0,
    sum = 45,
    powtorzenia = 0;
    let bh = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    rnum = Math.round(10 * Math.random());

    while(sum > 0) {
        
        if(rnum % 10 != 0 && baza[rnum - 1] != 0){       
            shuffled_baza.push(rnum);
            baza[rnum - 1] = 0;

            document.getElementById(shuffled_baza.length).value = shuffled_baza[shuffled_baza.length - 1];

        }

        rnum = Math.round(10 * Math.random());

        sum = 0;
        for (let i = 0; i < baza.length; i++) {
            sum += baza[i];      
        }
    }

    bh[0] = [shuffled_baza[0]];
    sum = 45;
    baza = [1,2,3,4,5,6,7,8,9];
    baza[bh[0][0] - 1] = 0;

    while(sum > 0) {
        
        if(rnum % 10 != 0 && baza[rnum - 1] != 0){  // sprawdzenmie czy rnum nie rowna sie 0 badz 10 i czy byl rnum wykorzystany
            if(bh[0].length < 3) {                    // wykonywanie dla pierwszego kwadratu
                if(rnum != shuffled_baza[1] && rnum != shuffled_baza[2]){ // sprawdzenie powtarzalnowsci dla pierwszego kwadratu
                    bh[0].push(rnum);                 // wsadzenie wylosowanego numerka
                    baza[rnum - 1] = 0;             // usuniecie z bazy wykorzystanego numerka
                }
            }else{                                  // jezeli juz jest poza kwadratem
                bh[0].push(rnum);                     // wsadzenie wylosowanego numerka
                baza[rnum - 1] = 0;                 // usuniecie z bazy wykorzystanego numerka
            }
            
        }

        rnum = Math.round(10 * Math.random());      // losowanie liczby

        sum = 0;                                    // sprawdzenie konca petli
        for (let i = 0; i < baza.length; i++) {
            sum += baza[i];      
        }
    }

    let row = 1;

    for (let index = 0; index < 9; index++) {       // wypisanie elementow do miejsc
        document.getElementById(row).value = bh[0][index];
        row += 10;
        
    }

    bh[1] = [shuffled_baza[1]];                   //reset danych do wypelniania drugiego rzedu 
    sum = 45;
    baza = [1,2,3,4,5,6,7,8,9]
    baza[bh[1][0] - 1] = 0;

    while(sum > 0) {

        rnum = Math.round(10 * Math.random());



        if(rnum % 10 != 0 && baza[rnum - 1] != 0){
            if(bh[1].length < 3 &&                    // dla 1 kwadratu
               shuffled_baza[0] != rnum &&
               shuffled_baza[2] != rnum &&
               bh[1][0] != rnum && 
               bh[0][1] != rnum && 
               bh[0][2] != rnum
            ) {              
                bh[1].push(rnum);
                baza[rnum - 1] = 0;
            }else 
            if(bh[1].length < 6 &&                     // dla 2 kwadratu
                bh[1].length >= 3 &&
                bh[0][3] != rnum &&
                bh[0][4] != rnum &&
                bh[0][5] != rnum
            ){
                bh[1].push(rnum);
                baza[rnum - 1] = 0;
            }else 
            if(bh[1].length < 9 &&                     // dla 3 kwadratu                          
                bh[1].length >= 6 &&
                bh[0][6] != rnum &&
                bh[0][7] != rnum &&
                bh[0][8] != rnum
            ){
                bh[1].push(rnum);
                baza[rnum - 1] = 0;
            }                                   

            
        }

        sum = 0;
        for (let i = 0; i < baza.length; i++) {
            sum += baza[i];      
        }
        powtorzenia++;
        if(powtorzenia > 10000) {
            // for (let j = 0; j < 90; j++) {
            //     j % 10 == 0 ? j++ : "";  
            //     document.getElementById(j).value = "";
            // }
            console.log(powtorzenia);
            sum = 0;
        }
    }
    if(powtorzenia > 10000) {
        Ulozenie_planszy();
        return 0;
    }
        row = 2;                                    // dla 2 kolumny

    for (let index = 0; index < 9; index++) {       // wypisanie elementow do miejsc
        document.getElementById(row).value = bh[1][index];
        row += 10;
        
    }

                                                    // dla 3 kolumny
    powtorzenia = 0;

        bh[2] = [shuffled_baza[2]];
    
        let bs0 = [bh[0][0], bh[0][1], bh[0][2], bh[1][0], bh[1][1], bh[1][2], bh[2][0]],
        bs3 = [bh[0][3],bh[0][4],bh[0][5],bh[1][3],bh[1][4],bh[1][5]],
        bs6 = [bh[0][6],bh[0][7],bh[0][8],bh[1][6],bh[1][7],bh[1][8]],
        fbs = [[],[],[],[],[],[],[],[],[]];
        sum = 45;
    baza = [1,2,3,4,5,6,7,8,9];  

    baza[bh[2][0] - 1] = 0;

    for (let index = 1; index < baza.length + 1; index++) {
        if(bs0.indexOf(index) == -1) {
            fbs[0].push(index);
        }
    }
    
    for (let index = 1; index < baza.length + 1; index++) {
        if(bs3.indexOf(index) == -1) {
            fbs[3].push(index);
        }
    }
    

    for (let index = 1; index < baza.length + 1; index++) {
        if(bs6.indexOf(index) == -1) {
            fbs[6].push(index);
        }
    }

    row = 3;
    rnum = (Math.round(Math.random() * 10)) % 2;


    if(rnum == 0) {
        bh[2].push(fbs[0][0]);
        bh[2].push(fbs[0][1]);
    }else{
        bh[2].push(fbs[0][1]);
        bh[2].push(fbs[0][0]);
    }

    // shuffle(fbs[3]);
    // shuffle(fbs[6]);
    bh[2] = bh[2].concat(shuffle(fbs[3]));
    bh[2] = bh[2].concat(shuffle(fbs[6]));
    row = 3;                                        // dla 3 kolumny

    for (let index = 0; index < 9; index++) {       // wypisanie elementow do miejsc
        document.getElementById(row).value = bh[2][index];
        row += 10;
        
    }

    bh[3] = [shuffled_baza[3]];
    let free = 0;
    fbs[1] = [1,2,3,4,5,6,7,8,9]
    for (let index = 3; index < 6; index++) {
        fbs[1].splice(fbs[1].indexOf(shuffled_baza[index]), 1);
    } 
    
    for (let index = 4; index < 9; index++) {
        bh[index] = [shuffled_baza[index]];
    }

    // Zadeklarowanie wolnych dla danej linni;

    let column_check = 0;
    line = [[],[],[],[],[],[],[],[],[]]
    for (let row_check = 0; row_check < 9; row_check++) {
        while(column_check < 9)  {  // ta petla deklaruje pole
            if(bh[column_check][row_check] != undefined ) {
                line[row_check].push(bh[column_check][row_check]);
            } column_check++; 
        } column_check = 0;
    }
    for(let i = 0; i < 20; i++){
        rnum = Math.floor(Math.random() * 100);
        if(document.getElementById(rnum) == null) {
            i--;
        }else{
            document.getElementById(rnum).value = "";
        }
    }

}
    // zakonczenie deklaracji
        
    // baza = [1,2,3,4,5,6,7,8,9];
    // baza.splice(bh[3][0] - 1, 1);

    // deklaracja linii zrobiona teraz bh3

    // losowanie rnum i sprawdzenie czy jest w drugiej bazie

    
    // dla 4 kolumny

//     let sq = 0,
//         baza_length = 8,
//         y = 0;

//     for (let x = 3; x < 9; x++) {

//             baza = [1,2,3,4,5,6,7,8,9];
//             baza.splice(bh[x][0] - 1, 1);
//         while(bh[x].length < 9) {
            
//             rnum = Math.floor(Math.random() * 10) % baza.length;  // do losowanka z wolnych liczb
//             let number_from_base = baza[rnum];


//             switch (x,y) {
//                 case x < 3:
//                     case y < 3:
//                         sq = 0;
//                         break;
//                     case y < 6:
//                         sq = 3
//                         break;
//                     case y < 9:
//                         sq = 6;
//                         break;
//                     break;
//                 case x < 6:
//                     case y < 3:
//                         sq = 1;
//                         break;
//                     case y < 6:
//                         sq = 4;
//                         break;
//                     case y < 9:
//                         sq = 7;
//                         break;
//                     break;
//                 case x < 9:
//                     case y < 3:
//                         sq = 2;
//                         break;
//                     case y < 6:
//                         sq = 5;
//                         break;
//                     case y < 9:
//                         sq = 8;
//                         break;
//                     break;

//                 default:
//                     break;
//             }

//             if(line[y].indexOf(number_from_base) == -1 && fbs[sq].indexOf(number_from_base) == -1) {
//                 console.log(baza);
//                 bh[x].push(number_from_base);
//                 baza.splice(baza.indexOf(baza[number_from_base]), 1)
//                 y++;    
//                 console.log(baza);
//             }
           
            
//         }
        
//     }
//     console.log(bh);

    // PLAN: losowanie z bazy z modulo zeby bylo mniej oblicznen
    //       sprawdzanie linii 
    //       debugowanie..
//     let sq = 0;
//         y = 0;
//         test = 0;
  
//     for (let x = 3; x < 9; x++) {
        
//         while(baza.length > 1) {
//             rnum = Math.floor(Math.random() * 10) % baza.length;
//             console.log(rnum , "rnum");
//             console.log(baza , "baza");
//             console.log(fbs[sq], "fbs");
//             console.log()
//             // wyliczenie ktory to jest sq

//             switch (x,y) {
//                 case x < 3:
//                     case y < 3:
//                         sq = 0;
//                         break;
//                     case y < 6:
//                         sq = 3
//                         break;
//                     case y < 9:
//                         sq = 6;
//                         break;
//                     break;
//                 case x < 6:
//                     case y < 3:
//                         sq = 1;
//                         break;
//                     case y < 6:
//                         sq = 4;
//                         break;
//                     case y < 9:
//                         sq = 7;
//                         break;
//                     break;
//                 case x < 9:
//                     case y < 3:
//                         sq = 2;
//                         break;
//                     case y < 6:
//                         sq = 5;
//                         break;
//                     case y < 9:
//                         sq = 8;
//                         break;
//                     break;

//                 default:
//                     break;
//             }
//             // console.log(fbs[sq].indexOf(baza[rnum]));
//             if(line[y].indexOf(baza[rnum]) == -1 && fbs[sq].indexOf(baza[rnum]) == -1) { // jezeli nie wystepuje w linii oraz sq
//                 bh[x].push(baza[rnum]);
//                 baza.splice(baza.indexOf(baza[rnum]), 1);
//                 y++;    
//                 console.log("|||||||||||||||||||||")
//             }else{
//                 // problem baza[rnum] is undefined
//                 console.log("-----------------")
//             }
//             // console.log(baza);
            
//         y = 0;
//         baza = [1,2,3,4,5,6,7,8,9];
//         baza.splice(bh[x][0] - 1, 1);
//     }

// }

    // ----------------------------------------



    // let test_sum = 0;

    //     for (let i = 0; i < baza.length; i++) {
    //     test_sum += bh[0][i];      
    // }
    // test_sum == 45 ? console.log("bh[0] poprawne = ", test_sum) : console.log("bh[0] NIEPOPRAWNE = ", test_sum);
    // test_sum = 0;
    
    //     for (let i = 0; i < baza.length; i++) {
    //     test_sum += bh[1][i];      
    // }
    // test_sum == 45 ? console.log("bh[1] poprawne = ", test_sum) : console.log("bh[1] NIEPOPRAWNE = ", test_sum);





    // while(bh[3].length < 2) {// prawdopodobnie do wyjebania i przepisania 
    //         for (let index = 11; index < 14; index++) {
    //             rnum = Math.floor(Math.random() * 10) % fbs[1].length - 1;        
    //             console.log(index, " = index | dcid value = " ,Number(document.getElementById(index).value));
    //         if(rnum == Number(document.getElementById(index).value) || fbs[1].indexOf(rnum) != -1){
    //                 free--;
    //             }else{
    //                 free++;
    //             }
    //         console.log(bh[3]);
    //         }
    //     free > 0 ? (bh[3].push(fbs[1][rnum])) && 
    //                 (fbs[1].splice(fbs[1].indexOf(shuffled_baza[rnum]) -1, 1)): free = 0;
    // }
    // while(bh[3].length != 3) {
    //         for (let index = 21; index < 24; index++) {
    //             rnum = Math.floor(Math.random() * 10) % fbs[1].length - 1;        
    //             console.log(index, " = index | dcid value = " ,Number(document.getElementById(index).value));
    //         if(rnum == Number(document.getElementById(index).value) || fbs[1].indexOf(rnum) != -1){
    //                 free--;
    //             }else{
    //                 free++;
    //             }
    //         console.log(bh[3]);
    //         }
    //     free > 0 ? (bh[3].push(fbs[1][rnum])) && 
    //                 (fbs[1].splice(fbs[1].indexOf(shuffled_baza[rnum]) -1, 1)): free = 0;
    // }

        
    // if(Number(document.getElementById(column_check + (row_check))) != NaN || Number(document.getElementById(column_check + (row_check))) != undefined) {
    //     console.log(Number(document.getElementById(column_check + (row_check))));
    //     line1.push(Number(document.getElementById(column_check + (row_check))))