const JAPFLIX_URL = " https://japceibal.github.io/japflix_api/movies-data.json"

    

function showMovies(id){
    let titulo = document.getElementById('offcanvasTopLabel');
    let descripcion = document.getElementById('desc');
    let genero = document.getElementById('genero');
    let year = document.getElementById('year');
    let runtime = document.getElementById('runtime')
    let budget = document.getElementById('budget');
    let revenue = document.getElementById('revenue');
    let pelicula = movielist[id]
    genero.innerText = pelicula.genres[0].name+" - "+pelicula.genres[1].name+" - "+pelicula.genres[2].name
    titulo.innerText = pelicula.tittle
    descripcion.innerText = pelicula.overview
    year.innerText="Year:   "+pelicula.release_date
    runtime.innerText ="Runtime:  "+pelicula.runtime+"mins"
    budget.innerText = "Budget:   "+"$"+pelicula.budget
    revenue.innerText = "Rvenue:   "+"$"+pelicula.revenue 
}

let btnBuscar = document.getElementById('btnBuscar');

btnBuscar.addEventListener("click", function(e){
    let buscar = document.getElementById('inputBuscar').value;
    let pelis = "";

        for(let i=0; i < movielist.length; i++){
            let pelicula = movielist[i];
            if(movielist[i].title.toLowerCase().includes(buscar.toLowerCase()) || movielist[i].genres[0].name.toLowerCase().includes(buscar.toLowerCase()) || movielist[i].overview.toLowerCase().includes(buscar.toLowerCase())){
                pelis+=`<div class="card" style="background-color: #212529;">
                <div class="card-body" onclick="showMovies('${i}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <div class="">
                    <p class="small mb-0 ms-2" style="color: white;"><b>`+pelicula.title + ` &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                    `
        switch(Math.round(pelicula.vote_average)){
            case 5:
                pelis += `<span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `
                document.getElementById('lista').innerHTML = pelis;
                break;
            case 6:
                pelis += `<span class="fa fa-star checked"></span>
                <span class="fa fa-star chacked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `  
                document.getElementById('lista').innerHTML = pelis;
                break;
                case 7:
                pelis += `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `
                document.getElementById('lista').innerHTML = pelis;
                break;
                case 8:
                pelis += `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `
                document.getElementById('lista').innerHTML = pelis;
                break;
                case 9:
                pelis += `<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `
                document.getElementById('lista').innerHTML = pelis;
                break;
                case 0:
                pelis += `<span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </p>
                <p style="color: lightgrey;">` +pelicula.tagline+`</p>
                </div>
                </div> 
                </div>
                `
                document.getElementById('lista').innerHTML = pelis;
                break;
        }      
            };
        };
});


let getJSONData = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(JAPFLIX_URL).then(function(resultobj){
        if(resultobj.status === "ok"){
            movielist = resultobj.data
        }
    });
});