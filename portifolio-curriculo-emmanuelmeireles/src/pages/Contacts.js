import React from "react"
const Contact = () => {
    return(
        <>
            <h2 className= 'center p-2'> Contate-Me</h2>
            <div className='flex flex-center'>
                <form>
                    <div>
                        <input type="text" name="fullname" placeholder="Emmanuel Meireles Silva"/>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="emmanuelmeireles@gmail.com"/>
                    </div>
                    <div>
                        <textarea placeholder="Sua Mensagem"></textarea>
                    </div>
                    <div>
                        <button type="Enviar Mensagem"></button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Contact