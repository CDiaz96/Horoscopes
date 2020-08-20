
function date(){
 var month=document.getElementById('month').value.toLowerCase()
 var day=document.getElementById('day').value
 var signs=document.getElementById('signs')

 day=parseInt(day)
 horoscopes(month,day,signs)

}
function horoscopes(month,day,signs){
  if ((month==='january' && day>=20)||(month==='february' && day<=18)) {
    signs.innerHTML='Aquarius'"Your "
  }
  else if ((month==='february' && day>=19) || (month==='march' && day<=20)) {
      signs.innerHTML='Pisces'
  }
  else if ((month==='march' && day>=21) || (month==='april' && day<=19)) {
      signs.innerHTML='Aries'
  }
  else if ((month==='april' && day>=20) || (month==='may' && day<=20)) {
      signs.innerHTML='Taurus'
  }
  else if ((month==='may' && day>=21) || (month==='june' && day<=20)) {
      signs.innerHTML='Gemini'
  }
  else if ((month==='june' && day>=20) || (month==='july' && day<=22)) {
      signs.innerHTML='Cancer'
  }
  else if ((month==='july' && day>=23) || (month==='august' && day<=22)) {
      signs.innerHTML='Leo'
  }
  else if ((month==='august' && day>=23) || (month==='september' && day<=22)) {
      signs.innerHTML='Virgo'
  }
  else if ((month==='september' && day>=23) || (month==='october' && day<=22)) {
      signs.innerHTML='Libra'
  }
  else if ((month==='october' && day>=23) || (month==='november' && day<=21)) {
      signs.innerHTML='Scorpio'
  }
  else if ((month==='november' && day>=22) || (month==='december' && day<=21)) {
      signs.innerHTML='Sagittarius'
  }
  else if ((month==='december' && day>=22) || (month==='january' && day<=19)) {
      signs.innerHTML='Capricorn'
  }
  else {
   signs.innerHTML=month+' '+day
}
}
  document.getElementById('runButton').onclick=date
