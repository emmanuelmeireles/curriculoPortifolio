import React from "react"


const Projects = () =>{
    return(

        <>
            <h2 className="'center p-2">Meus Projetos</h2>
            <div className='flex'>
                <div className="'p-2">
                    <h3> GitHub</h3>
                    <div> <img src="/workspaces/curriculoPortifolio/portifolio-curriculo-emmanuelmeireles/public/logotipo-do-github.png" alt="GitHub" className="img-responsive"/>></div>
                    <p>Pagina de trabalho</p>
                </div>
                <div className="'p-2">
                    <h3> Linkedin</h3>
                    <div> <img src="./public/linkedin.jpeg" alt="Linkedin" className="img-responsive"/></div>
                    <p>Rede Profissional</p>
                </div>
            </div>
        </>

    )
}