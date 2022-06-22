import Head from 'next/head'
import React from 'react'
import styles from './Profile.module.css'
import { useRouter } from 'next/router'
import { data } from '../data/data'
export default function ProfilePage() {
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
                        <div className={styles.main_background}>
                            <img src={found.profile_background} alt="profile pic" />
                        </div>
                        <div className={styles.card_content}>
                            <div className={styles.main_details}>
                                <div className={styles.profile_pic}>
                                    <img src={found.profile_image} alt="profile pic" />
                                </div>
                                <div className={styles.name_container}>
                                    <h2 className={styles.name}>{found.name}</h2>
                                    <h2 className={styles.name}>{found.lastname}</h2>
                                    <h5>{found.occupation}</h5>
                                </div>

                                <div className={styles.main_action_buttons}>
                                    <div className={styles.main_action_button}>
                                        <img src='/images/timbre.png' alt="profile pic" />
                                        <div className={styles.text}>Llamar</div>
                                    </div>
                                    <div className={styles.main_action_button}>
                                        <img src='/images/mail.png' alt="profile pic" />
                                        <div className={styles.text}>Correo</div>
                                    </div>
                                    <div className={styles.main_action_button}>
                                        <img src='/images/map.png' alt="profile pic" />
                                        <div className={styles.text}>MAPA</div>
                                    </div>
                                </div>
                                <hr className={styles.separation} />
                                <div className={styles.list_details}>
                                    <div className={styles.item}>
                                        <div className={styles.icon}>
                                            <img src='/images/phone-filled.png' alt="profile pic" />
                                        </div>
                                        <div className={styles.item_informartion}>
                                            <span className={styles.main_text}>
                                                {found.phone_number}
                                            </span>
                                            <small>Móvil</small>
                                        </div>
                                    </div>
                                    <hr className={`${styles.separation} ${styles.small}`} />

                                    <div className={styles.item}>
                                        <div className={styles.icon}>
                                            <img src='/images/mail-filled.png' alt="profile pic" />
                                        </div>
                                        <div className={styles.item_informartion}>
                                            <span className={styles.main_text}>
                                                {found.email}
                                            </span>
                                            <small>Correo</small>
                                        </div>
                                    </div>
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
                                            <button>Mostrar en el mapa</button>
                                        </div>
                                    </div>
                                    <hr className={`${styles.separation} ${styles.small}`} />

                                    <div className={styles.item}>
                                        <div className={styles.icon}>
                                            <img src='/images/web-filled.png' alt="profile pic" />
                                        </div>
                                        <div className={styles.item_informartion}>
                                            <span className={styles.main_text}>
                                                {found.website}
                                            </span>
                                            <small>Página web</small>
                                        </div>
                                    </div>
                                    <hr className={`${styles.separation} ${styles.small}`} />
                                </div>

                            </div>

                        </div>
                    </main>
                ) : (
                    <div>Nada</div>
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