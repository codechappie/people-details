import Head from 'next/head'
import React, { useState } from 'react'
import styles from './Profile.module.css'
import { useRouter } from 'next/router'
import data from '../../lib/data'
export default function ProfilePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { query } = useRouter();
    let id = query.id?.toLowerCase();

    const found = data.filter(object => id === verifyID(object))[0]
    let tabTitle = "";
    if (found) {
        tabTitle = found?.name + " " + found?.lastname
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{tabTitle}</title>
                <meta name="description" content="Lista de trabajadores Arca de Papel" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                found ? (
                    <main className={styles.main}>
                        <div className={`${styles.map_modal} ${modalIsOpen ? styles.is_open : ''}`}>
                            <div className={styles.overlay} onClick={() => setModalIsOpen(false)}></div>
                            <div className={styles.iframe}>
                                <div className={styles.close} onClick={() => setModalIsOpen(false)}>
                                    <img src="/images/close.png" alt="" />
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9665589643755!2d-77.04023568561693!3d-12.114440646460457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83eab9881b1%3A0xacd2d692acfa92c6!2sColegio%20Inmaculado%20Coraz%C3%B3n!5e0!3m2!1ses-419!2spe!4v1655955387487!5m2!1ses-419!2spe"
                                    width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>

                                <div className={styles.details}>
                                    <h4>Ubicación</h4>
                                    <p>{found.address_details.text}</p>

                                    <a href={`https://www.google.com/maps/dir//${found.address_details.text}`} target="blank">¿Cómo llegar?</a>
                                </div>
                            </div>
                        </div>
                        {
                            !modalIsOpen && (
                                <>
                                    <div className={styles.main_background} style={{ backgroundImage: `url(${found.profile_background})` }}>
                                        <div className={styles.main_content}>
                                            <div className={styles.profile_pic}>
                                                <img src={found.profile_image} alt="profile pic" />
                                            </div>
                                            <div className={styles.name_container}>
                                                <h2 className={styles.name}>{found.name}</h2>
                                                <h2 className={styles.name}>{found.lastname}</h2>
                                                <h5>{found.occupation}</h5>
                                            </div>

                                            <div className={styles.main_action_buttons}>
                                                <a href={`tel:${found.phone_number}`} className={styles.main_action_button}>
                                                    <img src='/images/timbre.png' alt="profile pic" />
                                                    <div className={styles.text}>Llamar</div>
                                                </a>
                                                <a href={`mailto:${found.email}`} className={styles.main_action_button}>
                                                    <img src='/images/mail.png' alt="profile pic" />
                                                    <div className={styles.text}>Correo</div>
                                                </a>
                                                <div className={styles.main_action_button} onClick={() => setModalIsOpen(true)}>
                                                    <img src='/images/map.png' alt="profile pic" />
                                                    <div className={styles.text}>MAPA</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.card_content}>
                                        <div className={styles.main_details}>
                                            <div className={styles.list_details}>
                                                <a className={styles.item} href={`tel:${found.phone_number}`}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/phone-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.phone_number}
                                                        </span>
                                                        <small>Móvil</small>
                                                    </div>
                                                </a>
                                                <hr className={`${styles.separation} ${styles.small}`} />

                                                <a className={styles.item} href={`mailto:${found.email}`}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/mail-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.email}
                                                        </span>
                                                        <small>Correo</small>
                                                    </div>
                                                </a>
                                                <hr className={`${styles.separation} ${styles.small}`} />

                                                <div className={styles.item}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/job-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.occupation}
                                                        </span>
                                                        <small>Ocupación</small>
                                                    </div>
                                                </div>
                                                <hr className={`${styles.separation} ${styles.small}`} />

                                                <div className={styles.item}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/map-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.address_details.text}
                                                        </span>
                                                        <button className={styles.map_button} onClick={() => setModalIsOpen(true)}>
                                                            Mostrar en el mapa
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr className={`${styles.separation} ${styles.small}`} />

                                                <a href={found.website} target="blank" className={styles.item}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/web-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.website}
                                                        </span>
                                                        <small>Página web</small>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </main>
                ) : (
                    <div className={styles.loader}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading" />
                    </div>
                )
            }
        </div>
    )
}

export const verifyID = ({ name, lastname }) => {
    let first = lastname.split(" ")[0].split("").slice(0, 3).join("").toLowerCase()
    let second = lastname.split(" ")[1].split("").slice(0, 3).join("").toLowerCase()
    let third = name.split(" ")[0].split("").slice(0, 2).join("").toLowerCase()
    let fourth = name.split(" ")[1].split("").slice(0, 2).join("").toLowerCase()
    return first + second + third + fourth;
}