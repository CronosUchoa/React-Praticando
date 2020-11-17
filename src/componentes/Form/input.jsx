import React, {useState} from 'react';

const Tinp = props =>{
    // let nome = 'Gab';

    const [nome,alterarNome] = useState('Praticando useState')
        return(
            <div>
                {/*se eu passa no value null deixa de ser controlado*/}
                {/* <input type="Text" value={null} /> */}

                 {/*componente controlado*/}
                {/* <input type="Text" value={nome} readOnly/> */}

               <h3>{nome}</h3> 
                <input type="Text" value={nome}
                    onChange={e => alterarNome(e.target.value)}
                />
            </div>
        )
}

export default Tinp;