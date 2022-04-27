const tresHoras = 60 * 60 * 1000;



const data1 = new Date(2018, 3, 20, 12, 15, 60); //Exata hora de agora (Ano, mẽs , dia, hora, minuto, segundo, ms)
const data2 = new Date('2020-04-20 20:20:40')



console.log(data2.toString())
console.log('Dia', data2.getDate())
console.log('Mês', data2.getMonth())
console.log('Ano', data2.getFullYear())
console.log('Hrs', data2.getHours())
console.log('Min', data2.getMinutes())
console.log('Segs', data2.getSeconds())
console.log('Ms', data2.getMilliseconds())