const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your api key',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};
const dictionary=(word)=>{
      fetch(url+word, options)
	.then(response => response.json())
      .then((response)=>{
            title.innerText= response.word;
            definition.innerText = response.definition;
      })
      .catch(err=> console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
      e.preventDefault()
      dictionary(searchinput.value)
})