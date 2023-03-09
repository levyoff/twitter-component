import {useState} from 'react'

// - Si le damos valor a un parámetro como en el caso de abajo ⇣ userName='unknowm', si usamos un componente,
// al que no se le pase ese parámetro, usara el valor por defecto.
export const TwitterFollowCard = ({userName='unknowm', name, children, initialIsFollowing}) =>{
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // =
    /* const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1]; */

    const formatedName = () => userName = `@${userName}`

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Un avatar de ejemplo"/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatedName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}