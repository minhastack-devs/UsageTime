function convertHourToMinutes(time) {
   return time * 60;
}

function reduceTimeIn80Percent(time, percent) {
   const minutes = convertHourToMinutes(time);
   const result = (minutes * percent) / 100;
   return result;

}

document.addEventListener('submit', function (e) {
   e.preventDefault();
   const appName = document.querySelector('#apps').value;
   const percent = document.querySelector('#bar').value;
   const timeUse = document.querySelector('#timeUse').value;

   const result = document.querySelector('.result');

   const resultMin = parseFloat(reduceTimeIn80Percent(timeUse / 60, percent).toFixed(2));

   result.innerHTML += `Seu tempo de uso no ${appName} foi reduzido em ${percent}% e agora você tem ${resultMin}h para estudar e ${(timeUse - resultMin).toFixed(2)}h para usar o ${appName} <br/> <br/>`;
});




