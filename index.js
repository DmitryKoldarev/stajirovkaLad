//генерация случайного числа нужной разрядности
function generateUniqueRandomNumber(depth) {
  var i, j, numPool = [], numArray = [], randomIndex, randomNum;
  for (i = 0; i < 10; i += 1) {
      numPool.push(i);
  }
  for (i = 0; i < depth; i += 1) {
      j = (i == 0)? 1 : 0;
      while(numArray.length < i + 1) {
          randomIndex = parseInt(Math.random() * (10 - j)) + j;
          randomNum = numPool[randomIndex];
          if (numArray.indexOf(randomNum) == -1) {
              numArray[i] = numPool[randomIndex];
          } else {
              continue;
          }
      }
  }
  return numArray.join('');
}

//загадать число и определиться с количеством попыток угадывания
const readlineSync = require('readline-sync');
const depth = readlineSync.question('Введите разрядность загадываемого числа (от 3 до 6): ');

if (depth > 6 || depth < 3){
  console.log('Вы ввели неправильное число. Разрядность должна быть от 3 до 6.');
  return false;
}

const limitingAttempts = readlineSync.question('Введите количество попыток угадывания (0 - без ограничения): ');

//вывод загаданного компьютером числа (ответ компьютера - временно - для возможности выхода из бесконечного цикла)
var compString = generateUniqueRandomNumber(depth);
console.log('Я загадал ' + depth + '-разрядное число с неповторяющимися числами.');


//запрос ответа пользователя
var countAttempts = limitingAttempts;
      while (true) {

      var userString = readlineSync.question('Попробуйте угадать загаданное мной число: ');

//сравнение строк
        if (userString == compString) {
            console.log('Вы угадали! Поздравляем!');
            break;
        } else {
                  if (userString.length != compString.length){
                      console.log('Вы ввели неправильное количество цифр. Я загадал ' + depth + '-разрядное число.');
                  } else {          
    
                    var countWrongPosition = 0;  //количество цифр НЕ на своих местах
                    var countOnPosition = 0;  //количество цифр на своих местах
                    var strWrongPosition = " "; //перечисление цифр НЕ на позиции
                    var strOnPosition = " "; //перечисление цифр на позиции
                    var pos = compString.indexOf(userString[i]);
                    
                    for (var i = 0; i < userString.length; i += 1)  {
                      var pos = compString.indexOf(userString[i]);
                      if (pos == i) {
                        countOnPosition++;
                        strOnPosition += userString[i] + " ";
                      }
                          else if (pos != -1) {
                          strWrongPosition += userString[i] + " ";
                          countWrongPosition++;
                          }

                  }
                  console.log ('Совпавших цифр не на своих местах - ' + countWrongPosition + ' (' + strWrongPosition + ')');
                  console.log ('Совпавших цифр на своих местах - ' + countOnPosition + ' (' + strOnPosition + ')');
   

                  if (limitingAttempts == 0) {
                  continue;
                  }
                
//количество оставшихся попыток
                      if (--countAttempts > 0){
                      console.log('Осталось попыток: ' + countAttempts);
                      continue;
                      } else {
                      console.log('Попытки закончились.');
                      break;
                      }
                  }   
                }   
      }

