function convertHourToMinutes(time) {
   return time * 60;
}

function reduceTimeIn80Percent(time) {
   const minutes = convertHourToMinutes(time);
   const result = (minutes * 80) / 100;
   return result;

}

document.addEventListener('submit', function (e) {
   e.preventDefault();
   const appName = document.querySelector('#app').value;
   const timeUse = document.querySelector('#timeUse').value;
   const result = document.querySelector('.result');
   const resultMin = parseFloat(reduceTimeIn80Percent(Number(timeUse) / 60).toFixed(2));
   result.innerHTML += `Seu tempo de uso no ${appName} foi reduzido em 80% e agora você tem ${resultMin}h para estudar  e ${(timeUse - resultMin).toFixed(2)}h para ${appName}`;
});