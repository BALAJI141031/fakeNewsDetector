var readline=require('readline-sync')

var news=readline.question("what are today's updates? ")
var source=readline.question("what is the source for this news: ")
source=source.toLowerCase()

if(source==="facebook" || source==="whatsapp" || source==="telegram" ||source==="instagram"){
  console.log("Don't believe things on FB and Whatsapp and telegram or instagram")
}else{
  console.log("ok i will note this update")
}