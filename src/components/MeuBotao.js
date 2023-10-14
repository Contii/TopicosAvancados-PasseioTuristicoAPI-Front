import { useState } from "react";

       // Componente botão personalizado
       export default function MeuBotao( {color ='primary'}){
            const [count, setCount] = useState(0);
            // Estado
            function cliqueDoBotao() {
                //alert('Oi tiozao');
                setCount(count + 1);
            }
            return (
                <button className= {'btn btn-'+color} onClick={cliqueDoBotao}>
                    Clicou {count} vezes!
                </button>
            );
        }