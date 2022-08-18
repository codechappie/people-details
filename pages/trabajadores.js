import data from '../lib/data'

const trabajadores = () => {

    // const changeInSimpleText = (strs) => {
    //     return strs.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // }
    // let newdata = data.map(el => {
    //     return {
    //         ...el,
    //         username: changeInSimpleText(el.name).split(" ").join("-").toLowerCase() + "-" + changeInSimpleText(el.lastname).split(" ").join("-").toLowerCase(),
    //         address_details: [
    //             el.address_details
    //         ]
    //     }
    // })
    return (
        <div className='trabajadores'>
            <h1>Trabajadores</h1>
            {/* style={{ display: "none" }} */}
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

            {/* for modify */}
            {/* <pre>
                {JSON.stringify(newdata, null, 2)}
            </pre> */}
        </div>
    )
}

export default trabajadores

