//Caso queira mudar as informações do cachá basta alterar os seguites valores do objeto "linksSocialMedia" abaixo
const linksSocialMedia = {
    //O nome pesente no github deve ser aquele presente na propriedade JSON "login"
    github: "HelenaOliveira366",
    youtube: "",
    facebook: "",
    instagram: "", 
    twitter: ""
}

//Função que irá usar um loop For para percorrer as tags <li></li> da <ul></ul>
function changeSocialMediaLinks(){
	for (let li of socialLinks.children){
		//Variável que a cada iteração busca o valor do atributo "class" de <li></li>
		const social = li.getAttribute("class")
		//A cada loop, o valor da variável "social" será passado para o link, compondo então informações sobre o perfil do usuário em cada rede social 
		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
	}
}

//Chamda da função
changeSocialMediaLinks()

function getGitHubProfileInfos(){
    //A variável "url" vai acessar o nome de usário do github do participante através do objeto linksSocialMedia
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    //Dentro do "then" foi criada uma Arrow Function para guardar no argumento "response" a resposta da função fetch e em seguida ela é transformada em um arquivo JSON
    fetch(url).then(response => response.json())
    /*Como o then pega a resposta do then anterior, a variável "data" armazena a respota do arquivo JSON recém-criado por "response", vai procurar 
    dentro dele a propriedade especificada e vai devolver o valor dela. Para alterar as informações de cada caixa HTML de acordo com o
    usuário precisamos especificar um id para cada um desses elementos a serem modificados e usamos o método ".texContent" para alterar 
    as informações da acordo com o usuário*/
    .then(data => {
        //idTag.funçãoOuAtributo = varDoFetch.propridadeJSON
        //Nome do participante
        userName.textContent = data.name
        //Biografia do participante
        userBio.textContent = data.bio
        //Link do perfil público
        userLink.href = data.html_url
        //Imagem de perfil do participante 
        userImage.src = data.avatar_url
        //Nome de usuário do participante
        userLogin.textContent = data.login
    })
}

//Chamada da função
getGitHubProfileInfos()