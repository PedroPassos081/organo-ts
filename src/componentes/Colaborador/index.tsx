import { IColaborador } from '../shared/interfaces/IColaborador'
import './Colaborador.css'

interface ColaboradorProps {
    colaborador: IColaborador;
    corDeFundo: string;
}

const Colaborador = ({ colaborador, corDeFundo }: ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador