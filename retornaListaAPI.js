import { usuarioGitHub } from './settings.js'

export function retornaListaAPI(valueAtributo,valueOrdenar,buscaRepositorio) {
    
let ul = document.querySelector('ul')

while (ul.firstChild) {
ul.removeChild(ul.firstChild);
}

fetch(`https://api.github.com/users/${usuarioGitHub}/repos`)
   .then( async res =>{
        if(!res.ok){
            throw new Error(res.status)
        }
        
        var data = await res.json()
        
        if (valueAtributo=="arquivado"){
            data = data.filter(d => d.archived == true)
        }
        
        if (valueAtributo=="tem_issues"){
            data = data.filter(d => d.has_issues == true)
        }
        if (valueAtributo=="tem_downloads"){
            data = data.filter(d => d.has_downloads == true)
        }
        if(buscaRepositorio){
            data = data.filter(d => d.name.indexOf(buscaRepositorio) != -1)
        }

        if(valueOrdenar == "nome")
        data = data.sort(function (obj1, obj2) {
            return obj1.name < obj2.name ? -1 :
            (obj1.name > obj2.name ? 1 : 0);
        })
        if(valueOrdenar == "commit")
        data = data.sort(function (obj1, obj2) {
            return obj1.pushed_at > obj2.pushed_at ? -1 :
            (obj1.pushed_at < obj2.pushed_at ? 1 : 0);
        })

        data.map(item => {
                let li = document.createElement('li')

                li.innerHTML = `
                <strong>${item.name.toUpperCase()}</strong><br/>
                <span>URL ${item.url}</span><br/>
                <span>Data de criação:
                ${Intl.DateTimeFormat('pt-BR')
                    .format(new Date(item.created_at))}
                </span>
                <hr>
                `

            ul.appendChild(li)
        })
    })
   .catch(e => console.log(e))
}