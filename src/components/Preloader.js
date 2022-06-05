import style from './Preloader.module.css'

function Preloader () {
    return (
        <div className={style.lds_container}>
            <div className={style.lds_default}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader