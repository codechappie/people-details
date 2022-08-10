import data from '../lib/data'

const trabajadores = () => {

    return (
        <div className='trabajadores'>
            <h1>Trabajadores</h1>
            <div className='grid-t'>
                {
                    data.map(trabajador => (
                        <a href={`/trabajador/${trabajador.username}`} className='card' key={trabajador.username}>
                            <small>{trabajador.username}</small>
                            <h2>{trabajador.name} {trabajador.lastname}</h2>
                            <img src={trabajador.profile_image} alt={trabajador.name} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default trabajadores

