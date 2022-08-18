import Head from 'next/head'
import React, { useState } from 'react'
import styles from './Profile.module.css'
import { useRouter } from 'next/router'
import data from '../../lib/data'
export default function ProfilePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { query } = useRouter();
    let id = query.id?.toLowerCase();

    const found = data.filter(object => id === object.username)[0]
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

                                <div className={styles.details}>
                                    <h3>{found.address_details.length > 1 ? 'Ubicaciones: ' : 'Ubicación: '}</h3>
                                    <ul>
                                        {
                                            found.address_details.map((detail, ind) => (
                                                <li key={ind}>
                                                    <iframe src={`https://maps.google.com/maps?q=${detail.text}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                                        width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                                    </iframe>
                                                    <div className={styles.details}>
                                                        <p>{detail.text}</p>
                                                        <a href={`https://www.google.com/maps/dir//${detail.text}`} target="blank">¿Cómo llegar?</a>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
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
                                                <a className={styles.item} href={`https://api.whatsapp.com/send?phone=51${found.phone_number.replace(" ", "")}&text=Hola%20%F0%9F%98%80:`}>
                                                    <div className={styles.icon}>
                                                        <img src='/images/phone-filled.png' alt="profile pic" />
                                                    </div>
                                                    <div className={styles.item_informartion}>
                                                        <span className={styles.main_text}>
                                                            {found.phone_number}
                                                        </span>
                                                        <small>WhatsApp</small>
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
                                                        <ul>
                                                            {
                                                                found.address_details.map((detail, ind) => (
                                                                    <li key={ind}>
                                                                        <span className={styles.main_text}>
                                                                            {detail.text}
                                                                        </span>
                                                                        {/* <button className={styles.map_button} onClick={() => setModalIsOpen(true)}>
                                                                            <img src="https://imgur.com/USY06YG.png" alt="img" />
                                                                        </button> */}
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                        <button className={styles.map_button} onClick={() => setModalIsOpen(true)}>
                                                            Ver mapas <img src="https://imgur.com/USY06YG.png" alt="img" />
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
    let first = lastname.split(" ")[0].split("").slice(0, 2).join("").toLowerCase()
    let second = lastname.split(" ")[1].split("").slice(0, 2).join("").toLowerCase()
    let third = name.split(" ")[0].split("").slice(0, 2).join("").toLowerCase()
    let fourth = name.split(" ")[1] ? name.split(" ")[1].split("").slice(0, 2).join("").toLowerCase() : '';
    return first + second + third + fourth;
}