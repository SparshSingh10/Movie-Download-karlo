let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');
start();
btn.addEventListener('click' , function(){
    let searchText = input.value;
    fetchData(searchText);
    input.value = "";
})

const fetchData = async (searchText) => {

    
    await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
     .then(function(response){
        console.log(response.data)
        manipulateDom(response.data);
    })
}
    
 function manipulateDom(datas) {
    while(list.firstChild){
        list.firstChild.remove();
    }

    
    for(let data of datas){
        let figure = document.createElement('figure');
        figure.innerHTML = `<img src=${data.show.image.medium}  />
            <h2> Name: ${data.show.name} </h2>
            <h5> Language: ${data.show.language} </h5>`
        list.appendChild(figure);
    }
    
}

function start() {


 axios.get(`https://api.tvmaze.com/search/shows?q=spiderman`)
     .then(function(response){
        for(let data of response.data){
            let figure = document.createElement('figure');
            figure.innerHTML = `<img src=${data.show.image.medium}  />
                <h2> Name: ${data.show.name} </h2>
                <h5> Language: ${data.show.language} </h5>`
            list.appendChild(figure);
        }
    })
   
 axios.get(`https://api.tvmaze.com/search/shows?q=barbie`)
     .then(function(response){
        for(let data of response.data){
            let figure = document.createElement('figure');
            figure.innerHTML = `<img src=${data.show.image.medium}  />
                <h2> Name: ${data.show.name} </h2>
                <h5> Language: ${data.show.language} </h5>`
            list.appendChild(figure);
        }
    })
   

   
  
   
}