import fleur from '../images/fleur.svg'


export default function FlowerLine() {
    return (
        <div className='flower-line'>
            <img className='flower' src={fleur} alt='fleur' />
            <img className='flower' src={fleur} alt='fleur' />
            <img className='flower' src={fleur} alt='fleur' />
            <img className='flower' src={fleur} alt='fleur' />
            <img className='flower' src={fleur} alt='fleur' />
        </div>

    );
}
